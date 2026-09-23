import {
  ERROR_CODE_HASH,
  ERROR_MESSAGE_HASH,
  UNKNOWN_ERROR_MESSAGE,
} from '~/app/constants-error.js'

describe('error dictionaries', () => {
  describe('named export', () => {
    describe('as ERROR_CODE_HASH', () => {
      describe('should hold the code of every entry', () => {
        const cases = [
          {
            params: {
              identifier: 'Unauthenticated102X000001',
            },
            expected: '102.X000.001',
          },
          {
            params: {
              identifier: 'MissingEmail203M001001',
            },
            expected: '203.M001.001',
          },
          {
            params: {
              identifier: 'MissingPassword203M001002',
            },
            expected: '203.M001.002',
          },
          {
            params: {
              identifier: 'MalformedEmail203M001003',
            },
            expected: '203.M001.003',
          },
          {
            params: {
              identifier: 'TooLongPassword203M001004',
            },
            expected: '203.M001.004',
          },
          {
            params: {
              identifier: 'InvalidCredentials204M001001',
            },
            expected: '204.M001.001',
          },
          {
            params: {
              identifier: 'TooFrequentSignIn204M001002',
            },
            expected: '204.M001.002',
          },
          {
            params: {
              identifier: 'FailedToStartSession204M001003',
            },
            expected: '204.M001.003',
          },
          {
            params: {
              identifier: 'SessionNotFound204M002001',
            },
            expected: '204.M002.001',
          },
          {
            params: {
              identifier: 'FailedToRevokeSession204M002002',
            },
            expected: '204.M002.002',
          },
          {
            params: {
              identifier: 'RefreshTokenUnavailable204M003001',
            },
            expected: '204.M003.001',
          },
          {
            params: {
              identifier: 'TooFrequentRenewal204M003002',
            },
            expected: '204.M003.002',
          },
          {
            params: {
              identifier: 'StaffMemberNotFound204Q001001',
            },
            expected: '204.Q001.001',
          },
          {
            params: {
              identifier: 'StaffMemberSecretNotFound204Q001002',
            },
            expected: '204.Q001.002',
          },
          {
            params: {
              identifier: 'MissingSpentOn203M004001',
            },
            expected: '203.M004.001',
          },
          {
            params: {
              identifier: 'MissingAmount203M004002',
            },
            expected: '203.M004.002',
          },
          {
            params: {
              identifier: 'MissingExpenseCategoryId203M004003',
            },
            expected: '203.M004.003',
          },
          {
            params: {
              identifier: 'MalformedSpentOn203M004004',
            },
            expected: '203.M004.004',
          },
          {
            params: {
              identifier: 'InvalidAmount203M004005',
            },
            expected: '203.M004.005',
          },
          {
            params: {
              identifier: 'InvalidExpenseCategoryId203M004006',
            },
            expected: '203.M004.006',
          },
          {
            params: {
              identifier: 'FutureSpentOn203M004007',
            },
            expected: '203.M004.007',
          },
          {
            params: {
              identifier: 'TooLongMemo203M004008',
            },
            expected: '203.M004.008',
          },
          {
            params: {
              identifier: 'StaffMemberNotFound204M004001',
            },
            expected: '204.M004.001',
          },
          {
            params: {
              identifier: 'ExpenseCategoryNotFound204M004002',
            },
            expected: '204.M004.002',
          },
          {
            params: {
              identifier: 'MissingExpenseId203M005001',
            },
            expected: '203.M005.001',
          },
          {
            params: {
              identifier: 'MissingSpentOn203M005002',
            },
            expected: '203.M005.002',
          },
          {
            params: {
              identifier: 'MissingAmount203M005003',
            },
            expected: '203.M005.003',
          },
          {
            params: {
              identifier: 'MissingExpenseCategoryId203M005004',
            },
            expected: '203.M005.004',
          },
          {
            params: {
              identifier: 'InvalidExpenseId203M005005',
            },
            expected: '203.M005.005',
          },
          {
            params: {
              identifier: 'MalformedSpentOn203M005006',
            },
            expected: '203.M005.006',
          },
          {
            params: {
              identifier: 'InvalidAmount203M005007',
            },
            expected: '203.M005.007',
          },
          {
            params: {
              identifier: 'InvalidExpenseCategoryId203M005008',
            },
            expected: '203.M005.008',
          },
          {
            params: {
              identifier: 'FutureSpentOn203M005009',
            },
            expected: '203.M005.009',
          },
          {
            params: {
              identifier: 'TooLongMemo203M005010',
            },
            expected: '203.M005.010',
          },
          {
            params: {
              identifier: 'StaffMemberNotFound204M005001',
            },
            expected: '204.M005.001',
          },
          {
            params: {
              identifier: 'ExpenseNotFound204M005002',
            },
            expected: '204.M005.002',
          },
          {
            params: {
              identifier: 'ExpenseCategoryNotFound204M005003',
            },
            expected: '204.M005.003',
          },
          {
            params: {
              identifier: 'MissingExpenseId203M006001',
            },
            expected: '203.M006.001',
          },
          {
            params: {
              identifier: 'InvalidExpenseId203M006002',
            },
            expected: '203.M006.002',
          },
          {
            params: {
              identifier: 'StaffMemberNotFound204M006001',
            },
            expected: '204.M006.001',
          },
          {
            params: {
              identifier: 'ExpenseNotFound204M006002',
            },
            expected: '204.M006.002',
          },
          {
            params: {
              identifier: 'InvalidLimit203Q002001',
            },
            expected: '203.Q002.001',
          },
          {
            params: {
              identifier: 'InvalidOffset203Q002002',
            },
            expected: '203.Q002.002',
          },
          {
            params: {
              identifier: 'ExcessiveLimit203Q002003',
            },
            expected: '203.Q002.003',
          },
          {
            params: {
              identifier: 'StaffMemberNotFound204Q002001',
            },
            expected: '204.Q002.001',
          },
        ]

        test.each(cases)('identifier: $params.identifier', ({
          params,
          expected,
        }) => {
          const actual = ERROR_CODE_HASH[params.identifier]

          expect(actual)
            .toBe(expected)
        })
      })
    })
  })
})

describe('error dictionaries', () => {
  describe('named export', () => {
    describe('as ERROR_MESSAGE_HASH', () => {
      describe('should hold the message of every code', () => {
        const cases = [
          {
            params: {
              code: '102.X000.001',
            },
            expected: 'Your session has ended. Sign in again.',
          },
          {
            params: {
              code: '203.M001.001',
            },
            expected: 'Enter your email address.',
          },
          {
            params: {
              code: '203.M001.002',
            },
            expected: 'Enter your password.',
          },
          {
            params: {
              code: '203.M001.003',
            },
            expected: 'Enter a valid email address.',
          },
          {
            params: {
              code: '203.M001.004',
            },
            expected: 'That password is too long. Use a shorter one.',
          },
          {
            params: {
              code: '204.M001.001',
            },
            expected: 'That email address and password do not match.',
          },
          {
            params: {
              code: '204.M001.002',
            },
            expected: 'Too many sign-in attempts. Wait a few minutes and try again.',
          },
          {
            params: {
              code: '204.M001.003',
            },
            expected: 'The session could not be started. Try again.',
          },
          {
            params: {
              code: '204.M002.001',
            },
            expected: 'You are already signed out.',
          },
          {
            params: {
              code: '204.M002.002',
            },
            expected: 'Signing out could not be completed. Try again.',
          },
          {
            params: {
              code: '204.M003.001',
            },
            expected: 'Your session has ended. Sign in again.',
          },
          {
            params: {
              code: '204.M003.002',
            },
            expected: 'Too many session renewals. Wait a few minutes and try again.',
          },
          {
            params: {
              code: '204.Q001.001',
            },
            expected: 'Your session is no longer valid. Sign in again.',
          },
          {
            params: {
              code: '204.Q001.002',
            },
            expected: 'Your account could not be loaded. Ask whoever set up your account.',
          },
          {
            params: {
              code: '203.M004.001',
            },
            expected: 'Enter the date the money was paid.',
          },
          {
            params: {
              code: '203.M004.002',
            },
            expected: 'Enter the amount.',
          },
          {
            params: {
              code: '203.M004.003',
            },
            expected: 'Choose a category.',
          },
          {
            params: {
              code: '203.M004.004',
            },
            expected: 'That date could not be read. Pick the date from the calendar.',
          },
          {
            params: {
              code: '203.M004.005',
            },
            expected: 'Enter the amount as a whole number of yen, greater than zero.',
          },
          {
            params: {
              code: '203.M004.006',
            },
            expected: 'Choose one of the categories offered.',
          },
          {
            params: {
              code: '203.M004.007',
            },
            expected: 'The date the money was paid cannot be later than today.',
          },
          {
            params: {
              code: '203.M004.008',
            },
            expected: 'The memo is too long. Use 191 characters or fewer.',
          },
          {
            params: {
              code: '204.M004.001',
            },
            expected: 'Your session is no longer valid. Sign in again.',
          },
          {
            params: {
              code: '204.M004.002',
            },
            expected: 'That category is not available. Reload the page and choose again.',
          },
          {
            params: {
              code: '203.M005.001',
            },
            expected: 'No entry was chosen to correct. Reload the page and try again.',
          },
          {
            params: {
              code: '203.M005.002',
            },
            expected: 'Enter the date the money was paid.',
          },
          {
            params: {
              code: '203.M005.003',
            },
            expected: 'Enter the amount.',
          },
          {
            params: {
              code: '203.M005.004',
            },
            expected: 'Choose a category.',
          },
          {
            params: {
              code: '203.M005.005',
            },
            expected: 'That entry could not be read. Reload the page and try again.',
          },
          {
            params: {
              code: '203.M005.006',
            },
            expected: 'That date could not be read. Pick the date from the calendar.',
          },
          {
            params: {
              code: '203.M005.007',
            },
            expected: 'Enter the amount as a whole number of yen, greater than zero.',
          },
          {
            params: {
              code: '203.M005.008',
            },
            expected: 'Choose one of the categories offered.',
          },
          {
            params: {
              code: '203.M005.009',
            },
            expected: 'The date the money was paid cannot be later than today.',
          },
          {
            params: {
              code: '203.M005.010',
            },
            expected: 'The memo is too long. Use 191 characters or fewer.',
          },
          {
            params: {
              code: '204.M005.001',
            },
            expected: 'Your session is no longer valid. Sign in again.',
          },
          {
            params: {
              code: '204.M005.002',
            },
            expected: 'That entry is not available. Reload the page and try again.',
          },
          {
            params: {
              code: '204.M005.003',
            },
            expected: 'That category is not available. Reload the page and choose again.',
          },
          {
            params: {
              code: '203.M006.001',
            },
            expected: 'No entry was chosen to remove. Reload the page and try again.',
          },
          {
            params: {
              code: '203.M006.002',
            },
            expected: 'That entry could not be read. Reload the page and try again.',
          },
          {
            params: {
              code: '204.M006.001',
            },
            expected: 'Your session is no longer valid. Sign in again.',
          },
          {
            params: {
              code: '204.M006.002',
            },
            expected: 'That entry is not available. Reload the page and try again.',
          },
          {
            params: {
              code: '203.Q002.001',
            },
            expected: 'The entries could not be loaded. Reload the page and try again.',
          },
          {
            params: {
              code: '203.Q002.002',
            },
            expected: 'The entries could not be loaded. Reload the page and try again.',
          },
          {
            params: {
              code: '203.Q002.003',
            },
            expected: 'The entries could not be loaded. Reload the page and try again.',
          },
          {
            params: {
              code: '204.Q002.001',
            },
            expected: 'Your session is no longer valid. Sign in again.',
          },
        ]

        test.each(cases)('code: $params.code', ({
          params,
          expected,
        }) => {
          const actual = ERROR_MESSAGE_HASH[params.code]

          expect(actual)
            .toBe(expected)
        })
      })
    })
  })
})

describe('error dictionaries', () => {
  describe('named export', () => {
    describe('as ERROR_MESSAGE_HASH', () => {
      /*
       * Section 8 rule 21 of `ai/contexts/uiux-context.md`: an entry another member of staff owns,
       * an entry already removed, and an id that never existed must be indistinguishable. The
       * backend answers one code per operation for all three, so the only way this application can
       * break the rule is by letting the two operations read differently — which is what this
       * asserts against. The two texts are compared to each other rather than to a literal, because
       * the literal is already asserted above and what matters here is that they agree.
       */
      describe('when a correction and a removal both find nothing', () => {
        test('should refuse in the same words', () => {
          const expected = ERROR_MESSAGE_HASH['204.M006.002']

          const actual = ERROR_MESSAGE_HASH['204.M005.002']

          expect(actual)
            .toBe(expected)
        })
      })
    })
  })
})

describe('error dictionaries', () => {
  describe('named export', () => {
    describe('as ERROR_MESSAGE_HASH', () => {
      describe('when read against ERROR_CODE_HASH', () => {
        test('should hold one message per declared code, in the same order', () => {
          const expected = Object.values(ERROR_CODE_HASH)

          const actual = Object.keys(ERROR_MESSAGE_HASH)

          expect(actual)
            .toEqual(expected)
        })
      })
    })
  })
})

describe('error dictionaries', () => {
  describe('named export', () => {
    describe('as UNKNOWN_ERROR_MESSAGE', () => {
      describe('when read as is', () => {
        test('should be the message shown for an unmapped code', () => {
          const expected = 'Something went wrong. Try again.'

          const actual = UNKNOWN_ERROR_MESSAGE

          expect(actual)
            .toBe(expected)
        })
      })
    })
  })
})
