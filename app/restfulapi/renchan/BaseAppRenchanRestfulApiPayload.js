import {
  BaseRenchanRestfulApiPayload,
  StorageClerk,
} from '@openreachtech/furo'

import {
  HEADER_KEY,
  STORAGE_KEY,
} from '../../constants.js'

import MemoryStorage from '../../tools/storage/MemoryStorage.js'

/**
 * Base app for Renchan RESTful API payloads.
 *
 * @template {Record<string, *>} [QP = {}] - Query parameters.
 * @template {Record<string, *>} [BP = {}] - Body parameters.
 * @template {Record<string, *>} [PP = {}] - Path parameters.
 * @abstract
 * @extends {BaseRenchanRestfulApiPayload<QP, BP, PP>}
 */
export default class BaseAppRenchanRestfulApiPayload extends BaseRenchanRestfulApiPayload {
  /** @override */
  static get ACCESS_TOKEN_HEADER_KEY () {
    return HEADER_KEY.ACCESS_TOKEN
  }

  /** @override */
  static get ACCESS_TOKEN_STORAGE_KEY () {
    return STORAGE_KEY.ACCESS_TOKEN
  }

  /** @override */
  static get prefixPathname () {
    return '/v1'
  }

  /**
   * Load the access token a request header is built from.
   *
   * Spec section 6 holds the access token **in memory**. The furo base reads
   * `StorageClerk.createAsSession()` and offers no `createStorageClerk()` seam to redirect, so the
   * whole method is overridden rather than a factory. `sessionStorage` is browser storage that
   * outlives a reload within a tab, which is exactly what section 6 excludes.
   *
   * Nothing in this repository uses a RESTful client today, so this override is unexercised. It is
   * here so that the first thing which does use one inherits the section 6 behaviour rather than
   * silently reintroducing browser storage.
   *
   * @override
   * @returns {string | null} The access token, or `null` when none is held.
   */
  static loadAccessToken () {
    const storageClerk = StorageClerk.create({
      storage: MemoryStorage.create(),
    })

    return storageClerk.get(this.ACCESS_TOKEN_STORAGE_KEY)
  }
}
