import {
  navigateTo,
} from 'nuxt/app'

import {
  defineNuxtRouteMiddleware,
} from '#app'

import {
  FuroMeta,
} from '@openreachtech/furo-nuxt'

import AppAccessTokenClerk from '~/app/tools/storage/AppAccessTokenClerk.js'

// TODO: should be moved to configuration
const SIGN_IN_PATH = '/sign-in'

/**
 * Gateway middleware (global)
 *
 * **The clerk is this application's, not furo's.** Specification section 6 holds the access token
 * in memory, and `AppAccessTokenClerk` is where that was settled (Q43); furo's own clerk defaults
 * its storage to `window.localStorage`, which nothing in this application writes to. Reading the
 * wrong store made this gate answer "no session" on every navigation, so a signed-in member of
 * staff was sent to `/sign-in`, sent straight back by the session already in memory, and sent here
 * again -- a redirect loop between two files that each behaved correctly on their own.
 *
 * A fresh page load still answers "no session" here, and that is the design rather than the defect:
 * memory is empty after a reload, the sign-in screen renews from the refresh-token cookie, and the
 * `?redirect=` query brings the member of staff back to where they were.
 *
 * @param {import('nuxt/app').RouteMiddleware} context - The context
 * @returns {Promise<import('nuxt/app').RouteMiddleware>}
 */
export default defineNuxtRouteMiddleware(async (to, from) => {
  const accessTokenClerk = AppAccessTokenClerk.create()

  if (accessTokenClerk.existsToken()) {
    return goNextAsIs()
  }

  // should skip if sign-in page -----------------------------------------------
  if (to.path === SIGN_IN_PATH) {
    return goNextAsIs()
  }

  // should skip to confirm authentication -------------------------------------
  const furoMeta = FuroMeta.create({
    routeTo: to,
  })

  if (furoMeta.skipFilter) {
    return goNextAsIs()
  }

  return navigateTo(`${SIGN_IN_PATH}?redirect=${to.fullPath}`)
})

/**
 * Go next as is.
 *
 * @returns {Promise<void>}
 */
async function goNextAsIs () {
  return Promise.resolve()
}
