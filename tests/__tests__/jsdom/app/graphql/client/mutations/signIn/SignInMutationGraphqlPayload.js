import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import SignInMutationGraphqlPayload from '~/app/graphql/client/mutations/signIn/SignInMutationGraphqlPayload'

describe('SignInMutationGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = SignInMutationGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('SignInMutationGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * The document is asserted whole, character for character. It is the one place this repository
     * states the contract's mutation, its argument and its two result fields, so a silent edit to
     * any of them is what this assertion exists to catch.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      mutation SignInMutation ($input: SignInInput!) {
        signIn (input: $input) {
          staffMemberId
          accessToken
        }
      }
    `

      const actual = SignInMutationGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('SignInMutationGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of SignInMutationGraphqlPayload', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                email: 'first.staff.member@example.com',
                password: 'first-password-0001',
              },
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                email: 'second.staff.member@example.com',
                password: 'second-password-0002',
              },
            },
          },
        },
      ]

      test.each(cases)('email: $params.variables.input.email', ({
        params,
      }) => {
        const actual = SignInMutationGraphqlPayload.create(params)

        expect(actual)
          .toBeInstanceOf(SignInMutationGraphqlPayload)
      })
    })
  })
})

describe('SignInMutationGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * `signIn` is the one operation of this feature that declares an argument, and the contract
     * nests both credentials under `input`. The payload must carry that shape through untouched.
     */
    describe('to keep the variables under the input the contract declares', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                email: 'first.staff.member@example.com',
                password: 'first-password-0001',
              },
            },
          },
          expected: {
            input: {
              email: 'first.staff.member@example.com',
              password: 'first-password-0001',
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                email: 'second.staff.member@example.com',
                password: 'second-password-0002',
              },
            },
          },
          expected: {
            input: {
              email: 'second.staff.member@example.com',
              password: 'second-password-0002',
            },
          },
        },
      ]

      test.each(cases)('email: $params.variables.input.email', ({
        params,
        expected,
      }) => {
        const payload = SignInMutationGraphqlPayload.create(params)

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
