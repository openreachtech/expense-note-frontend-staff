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
  /*
   * Authentication — the engine, before any operation (102.X000)
   *
   * `StaffGraphqlServerEngine.standardErrorCodeHash` raises this one before a resolver is chosen,
   * and it is mapped because it genuinely reaches a screen: `middleware/000.gateway.global.js`
   * only asks whether an access token is *held*, never whether it is still good, so a token that
   * expired or was revoked while a screen sat open is refused on the next operation and the
   * refusal lands in that screen's own message region. The advice a member of staff needs there is
   * to sign in again, which is not what the unmapped fallback says.
   *
   * The engine's other standard codes are deliberately absent. `102.X000.002` (unauthorized) and
   * `102.X000.003` (denied schema permission) have no path to them: this product has one actor and
   * every staff operation is open to any authenticated member of staff. `203.X000.001` — the
   * document-shape refusal added at the backend's checkpoint 8 — is likewise absent: it refuses a
   * document wider or deeper than the product will run, and every document this application sends
   * names one operation of a fixed shape, so a caller reaching it is not this interface. Should a
   * screen ever batch operations into one document, the entry is added then. None of the three can
   * surface as a raw dotted code meanwhile: `BaseAppGraphqlCapsule` answers `UNKNOWN_ERROR_MESSAGE`
   * for anything unmapped.
   */
  Unauthenticated102X000001: '102.X000.001',

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

  // Invalid input — record an expense (203.M004)
  MissingSpentOn203M004001: '203.M004.001',
  MissingAmount203M004002: '203.M004.002',
  MissingExpenseCategoryId203M004003: '203.M004.003',
  MalformedSpentOn203M004004: '203.M004.004',
  InvalidAmount203M004005: '203.M004.005',
  InvalidExpenseCategoryId203M004006: '203.M004.006',
  FutureSpentOn203M004007: '203.M004.007',
  TooLongMemo203M004008: '203.M004.008',

  // Database and state — record an expense (204.M004)
  StaffMemberNotFound204M004001: '204.M004.001',
  ExpenseCategoryNotFound204M004002: '204.M004.002',

  // Invalid input — correct an expense (203.M005)
  MissingExpenseId203M005001: '203.M005.001',
  MissingSpentOn203M005002: '203.M005.002',
  MissingAmount203M005003: '203.M005.003',
  MissingExpenseCategoryId203M005004: '203.M005.004',
  InvalidExpenseId203M005005: '203.M005.005',
  MalformedSpentOn203M005006: '203.M005.006',
  InvalidAmount203M005007: '203.M005.007',
  InvalidExpenseCategoryId203M005008: '203.M005.008',
  FutureSpentOn203M005009: '203.M005.009',
  TooLongMemo203M005010: '203.M005.010',

  // Database and state — correct an expense (204.M005)
  StaffMemberNotFound204M005001: '204.M005.001',
  ExpenseNotFound204M005002: '204.M005.002',
  ExpenseCategoryNotFound204M005003: '204.M005.003',

  // Invalid input — remove an expense (203.M006)
  MissingExpenseId203M006001: '203.M006.001',
  InvalidExpenseId203M006002: '203.M006.002',

  // Database and state — remove an expense (204.M006)
  StaffMemberNotFound204M006001: '204.M006.001',
  ExpenseNotFound204M006002: '204.M006.002',

  // Invalid input — read the entries (203.Q002)
  InvalidLimit203Q002001: '203.Q002.001',
  InvalidOffset203Q002002: '203.Q002.002',
  ExcessiveLimit203Q002003: '203.Q002.003',

  /*
   * Database and state — read the entries (204.Q002)
   *
   * `expenseCategories` (Q003) has no block of its own anywhere in this file, and that is checked
   * rather than forgotten: its `errorCodeHash` spreads the engine's standard codes and adds
   * nothing. It takes no input and reads the whole category master, so the only refusal it can
   * carry is the `102.X000.001` above.
   */
  StaffMemberNotFound204Q002001: '204.Q002.001',
})

/**
 * Message shown for each backend error code, keyed by the code itself.
 *
 * Two of the texts below are requirements rather than wording preferences.
 *
 * `204.M001.001` is one code for two outcomes — an address with no account, and a correct address
 * with the wrong password — and section 10 of the specification requires the two to be refused
 * identically. Its message must therefore never name which of the two happened.
 *
 * `204.M005.002` and `204.M006.002` are one code apiece for three outcomes — an entry another
 * member of staff owns, an entry already removed, and an id that never existed — and sections 7
 * and 11 require all three to be indistinguishable (`ai/contexts/uiux-context.md` section 8
 * rule 21). The two codes carry the same sentence, repeated rather than shared, and that sentence
 * says nothing about whether the entry exists and nothing about who may read it. "This entry no
 * longer exists" and "you do not have permission" are each the disclosure the rule exists to
 * prevent.
 *
 * `ExpenseCategoryNotFound` is deliberately not given that same sentence. Rule 21's three outcomes
 * are about an entry, which one member of staff owns; the category master is shared by everybody
 * and discloses nothing, and answering "that entry is not available" when the stale value is the
 * category would send somebody looking at the wrong field.
 *
 * No message names a person, an email address or a memo (section 7, and section 8 rule 18), and
 * none of them prints the dotted code.
 */
export const ERROR_MESSAGE_HASH = /** @type {const} */ ({
  // Authentication — the engine, before any operation (102.X000)
  [ERROR_CODE_HASH.Unauthenticated102X000001]: 'Your session has ended. Sign in again.',

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

  // Invalid input — record an expense (203.M004)
  [ERROR_CODE_HASH.MissingSpentOn203M004001]: 'Enter the date the money was paid.',
  [ERROR_CODE_HASH.MissingAmount203M004002]: 'Enter the amount.',
  [ERROR_CODE_HASH.MissingExpenseCategoryId203M004003]: 'Choose a category.',
  [ERROR_CODE_HASH.MalformedSpentOn203M004004]: 'That date could not be read. Pick the date from the calendar.',
  [ERROR_CODE_HASH.InvalidAmount203M004005]: 'Enter the amount as a whole number of yen, greater than zero.',
  [ERROR_CODE_HASH.InvalidExpenseCategoryId203M004006]: 'Choose one of the categories offered.',
  [ERROR_CODE_HASH.FutureSpentOn203M004007]: 'The date the money was paid cannot be later than today.',
  [ERROR_CODE_HASH.TooLongMemo203M004008]: 'The memo is too long. Use 191 characters or fewer.',

  // Database and state — record an expense (204.M004)
  [ERROR_CODE_HASH.StaffMemberNotFound204M004001]: 'Your session is no longer valid. Sign in again.',
  [ERROR_CODE_HASH.ExpenseCategoryNotFound204M004002]: 'That category is not available. Reload the page and choose again.',

  // Invalid input — correct an expense (203.M005)
  [ERROR_CODE_HASH.MissingExpenseId203M005001]: 'No entry was chosen to correct. Reload the page and try again.',
  [ERROR_CODE_HASH.MissingSpentOn203M005002]: 'Enter the date the money was paid.',
  [ERROR_CODE_HASH.MissingAmount203M005003]: 'Enter the amount.',
  [ERROR_CODE_HASH.MissingExpenseCategoryId203M005004]: 'Choose a category.',
  [ERROR_CODE_HASH.InvalidExpenseId203M005005]: 'That entry could not be read. Reload the page and try again.',
  [ERROR_CODE_HASH.MalformedSpentOn203M005006]: 'That date could not be read. Pick the date from the calendar.',
  [ERROR_CODE_HASH.InvalidAmount203M005007]: 'Enter the amount as a whole number of yen, greater than zero.',
  [ERROR_CODE_HASH.InvalidExpenseCategoryId203M005008]: 'Choose one of the categories offered.',
  [ERROR_CODE_HASH.FutureSpentOn203M005009]: 'The date the money was paid cannot be later than today.',
  [ERROR_CODE_HASH.TooLongMemo203M005010]: 'The memo is too long. Use 191 characters or fewer.',

  // Database and state — correct an expense (204.M005)
  [ERROR_CODE_HASH.StaffMemberNotFound204M005001]: 'Your session is no longer valid. Sign in again.',
  [ERROR_CODE_HASH.ExpenseNotFound204M005002]: 'That entry is not available. Reload the page and try again.',
  [ERROR_CODE_HASH.ExpenseCategoryNotFound204M005003]: 'That category is not available. Reload the page and choose again.',

  // Invalid input — remove an expense (203.M006)
  [ERROR_CODE_HASH.MissingExpenseId203M006001]: 'No entry was chosen to remove. Reload the page and try again.',
  [ERROR_CODE_HASH.InvalidExpenseId203M006002]: 'That entry could not be read. Reload the page and try again.',

  // Database and state — remove an expense (204.M006)
  [ERROR_CODE_HASH.StaffMemberNotFound204M006001]: 'Your session is no longer valid. Sign in again.',
  [ERROR_CODE_HASH.ExpenseNotFound204M006002]: 'That entry is not available. Reload the page and try again.',

  // Invalid input — read the entries (203.Q002)
  [ERROR_CODE_HASH.InvalidLimit203Q002001]: 'The entries could not be loaded. Reload the page and try again.',
  [ERROR_CODE_HASH.InvalidOffset203Q002002]: 'The entries could not be loaded. Reload the page and try again.',
  [ERROR_CODE_HASH.ExcessiveLimit203Q002003]: 'The entries could not be loaded. Reload the page and try again.',

  // Database and state — read the entries (204.Q002)
  [ERROR_CODE_HASH.StaffMemberNotFound204Q002001]: 'Your session is no longer valid. Sign in again.',
})

/**
 * Message shown when a response carries no error code, or one this application does not map.
 */
export const UNKNOWN_ERROR_MESSAGE = 'Something went wrong. Try again.'
