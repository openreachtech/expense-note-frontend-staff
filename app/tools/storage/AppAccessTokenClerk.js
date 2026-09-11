import {
  StorageClerk,
} from '@openreachtech/furo'

import {
  AccessTokenClerk,
} from '@openreachtech/furo-nuxt'

import MemoryStorage from './MemoryStorage.js'

/**
 * Clerk of the access token this application holds.
 *
 * furo's own clerk defaults its storage to `window.localStorage`. Section 6 of the specification
 * says the access token is "held in memory, never in a cookie", so this application overrides the
 * one static seam that decides where it goes, and nothing else changes: saving, reading and
 * clearing are the base class's.
 *
 * Every clerk created this way reaches the same record — `MemoryStorage` shares it — so a token
 * saved by the sign-in screen is the token the next request's header reads.
 *
 * @extends {AccessTokenClerk}
 */
export default class AppAccessTokenClerk extends AccessTokenClerk {
  /**
   * Create the storage clerk this clerk keeps its token in.
   *
   * @override
   * @returns {StorageClerk} Instance of StorageClerk.
   */
  static createStorageClerk () {
    return StorageClerk.create({
      storage: MemoryStorage.create(),
    })
  }
}
