/*
 * The one record every instance created without a record of its own reads and writes.
 *
 * Section 6 of the specification holds the access token "in memory, never in a cookie". The request
 * header that carries it is built by a *static* method on a payload base class — a place no instance
 * can be handed to — so the sharing is done by the record rather than by the instance: two instances
 * created at two unrelated call sites still see each other's writes. That is what makes a token
 * written on submit reach the next request's header.
 *
 * A page reload empties it, which is exactly the lifetime section 6 asks for: the session is
 * re-established from the refresh-token cookie instead.
 */
const SHARED_VALUE_HASH = {}

/**
 * Storage that keeps its values in memory for the lifetime of the page.
 *
 * Shaped like the Web Storage API on purpose: furo's `StorageClerk.create({ storage })` accepts any
 * object exposing `getItem` / `setItem` / `removeItem`, so this drops into every seam that used to
 * take `window.localStorage`.
 *
 * The three method names are the Web Storage API's rather than this project's choice. `naming.md`
 * would otherwise refuse the `get~` prefix; the names belong to the interface furo's `StorageClerk`
 * calls by name, and `@openreachtech/eslint-config` whitelists exactly these three against its
 * `Item`-suffix denial, which is the same convention read from the other side.
 */
export default class MemoryStorage {
  /**
   * Constructor.
   *
   * @param {MemoryStorageParams} params - Parameters of this constructor.
   */
  constructor ({
    valueHash,
  }) {
    this.valueHash = valueHash
  }

  /**
   * Factory method.
   *
   * @template {X extends typeof MemoryStorage ? X : never} T, X
   * @param {MemoryStorageFactoryParams} [params] - Parameters of this factory method.
   * @returns {InstanceType<T>} An instance of this class.
   * @this {T}
   */
  static create ({
    valueHash = this.sharedValueHash,
  } = {}) {
    return /** @type {InstanceType<T>} */ (
      new this({
        valueHash,
      })
    )
  }

  /**
   * get: The record shared by every instance created with none of its own.
   *
   * @returns {Record<string, string>} The shared record.
   */
  static get sharedValueHash () {
    return SHARED_VALUE_HASH
  }

  /**
   * Read the value stored under a key.
   *
   * Answers null rather than undefined for a key that was never written, because furo's
   * `AccessTokenClerk` decides whether a session exists with `retrieveToken() !== null`, and an
   * undefined would read to it as a token.
   *
   * @param {string} key - Key of the value.
   * @returns {string | null} The value, or null when nothing is stored under the key.
   */
  getItem (key) {
    return this.valueHash[key]
      ?? null
  }

  /**
   * Write a value under a key.
   *
   * @param {string} key - Key of the value.
   * @param {string} value - Value to store.
   * @returns {void}
   */
  setItem (
    key,
    value
  ) {
    this.valueHash[key] = value
  }

  /**
   * Remove the value stored under a key.
   *
   * @param {string} key - Key of the value.
   * @returns {void}
   */
  removeItem (key) {
    delete this.valueHash[key]
  }
}

/**
 * @typedef {{
 *   valueHash: Record<string, string>
 * }} MemoryStorageParams
 */

/**
 * @typedef {{
 *   valueHash?: Record<string, string>
 * }} MemoryStorageFactoryParams
 */
