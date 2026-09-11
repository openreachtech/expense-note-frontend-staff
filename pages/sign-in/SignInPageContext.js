import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

const PAGE_TITLE = 'Sign in'

/**
 * Context of the sign-in page.
 *
 * The sign-in screen is the only one reachable without a session, and every other
 * screen sends a member of staff here when theirs has gone.
 */
export default class SignInPageContext extends BaseAppContext {
  /**
   * get: Page title.
   *
   * @returns {string} Title of the sign-in page.
   */
  get pageTitle () {
    return PAGE_TITLE
  }
}
