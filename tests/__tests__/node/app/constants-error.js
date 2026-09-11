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
