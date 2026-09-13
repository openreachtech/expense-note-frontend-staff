/*
 * The backend answers a refused operation with a dotted error code and nothing else, so the text a
 * member of staff reads is decided here.
 *
 * This application takes the static-string dictionary rather than the locale-path one: it is
 * English, single language, with no localization layer (`ai/contexts/uiux-context.md` section 7),
 * so a locale path would need an i18n layer to render text that never varies.
 *
 * Every code is its own entry. Two codes that should read alike repeat the text; they are never
 * collapsed into one entry, because the backend can add a code to either without touching the
 * other.
 */

/**
 * Identifier of each backend error code this application handles.
 *
 * The identifier is the semantic name the backend resolver gives the code, followed by the code
 * with its dots removed, so a code read from a response finds exactly one entry here.
 */
export const ERROR_CODE_HASH = /** @type {const} */ ({
  // Invalid input — sign in (203.M001)
  MissingEmail203M001001: '203.M001.001',
  MissingPassword203M001002: '203.M001.002',
  MalformedEmail203M001003: '203.M001.003',
  TooLongPassword203M001004: '203.M001.004',

  // Database and state — sign in (204.M001)
  InvalidCredentials204M001001: '204.M001.001',
  TooFrequentSignIn204M001002: '204.M001.002',
  FailedToStartSession204M001003: '204.M001.003',

  // Database and state — sign out (204.M002)
  SessionNotFound204M002001: '204.M002.001',
  FailedToRevokeSession204M002002: '204.M002.002',

  // Database and state — renew access token (204.M003)
  RefreshTokenUnavailable204M003001: '204.M003.001',
  TooFrequentRenewal204M003002: '204.M003.002',

  // Database and state — signed-in staff member (204.Q001)
  StaffMemberNotFound204Q001001: '204.Q001.001',
  StaffMemberSecretNotFound204Q001002: '204.Q001.002',
})

/**
 * Message shown for each backend error code, keyed by the code itself.
 *
 * `204.M001.001` is one code for two outcomes — an address with no account, and a correct address
 * with the wrong password — and section 10 of the specification requires the two to be refused
 * identically. Its message must therefore never name which of the two happened.
 */
export const ERROR_MESSAGE_HASH = /** @type {const} */ ({
  // Invalid input — sign in (203.M001)
  [ERROR_CODE_HASH.MissingEmail203M001001]: 'Enter your email address.',
  [ERROR_CODE_HASH.MissingPassword203M001002]: 'Enter your password.',
  [ERROR_CODE_HASH.MalformedEmail203M001003]: 'Enter a valid email address.',
  [ERROR_CODE_HASH.TooLongPassword203M001004]: 'That password is too long. Use a shorter one.',

  // Database and state — sign in (204.M001)
  [ERROR_CODE_HASH.InvalidCredentials204M001001]: 'That email address and password do not match.',
  [ERROR_CODE_HASH.TooFrequentSignIn204M001002]: 'Too many sign-in attempts. Wait a few minutes and try again.',
  [ERROR_CODE_HASH.FailedToStartSession204M001003]: 'The session could not be started. Try again.',

  // Database and state — sign out (204.M002)
  [ERROR_CODE_HASH.SessionNotFound204M002001]: 'You are already signed out.',
  [ERROR_CODE_HASH.FailedToRevokeSession204M002002]: 'Signing out could not be completed. Try again.',

  // Database and state — renew access token (204.M003)
  [ERROR_CODE_HASH.RefreshTokenUnavailable204M003001]: 'Your session has ended. Sign in again.',
  [ERROR_CODE_HASH.TooFrequentRenewal204M003002]: 'Too many session renewals. Wait a few minutes and try again.',

  // Database and state — signed-in staff member (204.Q001)
  [ERROR_CODE_HASH.StaffMemberNotFound204Q001001]: 'Your session is no longer valid. Sign in again.',
  [ERROR_CODE_HASH.StaffMemberSecretNotFound204Q001002]: 'Your account could not be loaded. Ask whoever set up your account.',
})

/**
 * Message shown when a response carries no error code, or one this application does not map.
 */
export const UNKNOWN_ERROR_MESSAGE = 'Something went wrong. Try again.'
