import {
  BaseGraphqlCapsule,
} from '@openreachtech/furo'

import {
  ERROR_MESSAGE_HASH,
  UNKNOWN_ERROR_MESSAGE,
} from '../../constants-error.js'

/**
 * Base capsule for this application's GraphQL operations.
 *
 * @template D - Type of content (data).
 * @extends {BaseGraphqlCapsule<D>}
 */
export default class BaseAppGraphqlCapsule extends BaseGraphqlCapsule {
  /**
   * Extract the message a member of staff reads for this capsule's error.
   *
   * **This is the single resolution point.** A context must never map a code to a message itself:
   * spec section 10 requires an unknown address and a wrong password to be refused identically, and
   * a second mapping site is the way that guarantee quietly stops holding.
   *
   * `getErrorMessage()` is inherited from furo and its name is misleading — **it returns an error
   * CODE**, not a message. It answers `null` while pending or when there is no error, one of the
   * library's own transport codes (`190.X000.001` unknown, `191.X000.001` invalid variables,
   * `192.X000.001` network, `192.X000.002` JSON parse), or the code the backend sent. The name
   * cannot be changed; it belongs to the base class.
   *
   * **Every code this feature's resolvers raise is mapped. The four transport codes above are
   * deliberately not**, and neither is `null`: all of them fall to `UNKNOWN_ERROR_MESSAGE`, whose
   * text — "Something went wrong. Try again." — is the right advice for a network or parse failure
   * anyway. That is a decision rather than an omission.
   *
   * **The fallback is a message, never the raw code.** The equipped skill's static variant returns
   * the dotted code itself for an unmapped one; putting `204.M003.002` on screen is neither plain
   * nor neutral, which the project's UI/UX context requires of every string a member of staff reads.
   *
   * @returns {string | null} The message, or `null` when there is no error to report.
   */
  extractResolvedErrorMessage () {
    const errorCode = this.getErrorMessage()

    if (errorCode === null) {
      return null
    }

    return ERROR_MESSAGE_HASH[/** @type {keyof typeof ERROR_MESSAGE_HASH} */ (errorCode)]
      ?? UNKNOWN_ERROR_MESSAGE
  }
}
