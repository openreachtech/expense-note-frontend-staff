import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import SignOutMutationGraphqlPayload from '~/app/graphql/client/mutations/signOut/SignOutMutationGraphqlPayload'

describe('SignOutMutationGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = SignOutMutationGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('SignOutMutationGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * The contract gives `signOut` no argument, so the operation carries no parentheses and the
     * field carries no argument list. The document is asserted whole so neither can creep back in.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      mutation SignOutMutation {
        signOut {
          signedOut
        }
      }
    `

      const actual = SignOutMutationGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('SignOutMutationGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of SignOutMutationGraphqlPayload', () => {
      test('with no params', () => {
        const actual = SignOutMutationGraphqlPayload.create()

        expect(actual)
          .toBeInstanceOf(SignOutMutationGraphqlPayload)
      })
    })
  })
})

describe('SignOutMutationGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * An operation the document declares no variable for must send none. Sending an `input`
     * variable the document never declares is how furo's form-value-hash factory breaks this
     * operation, so the empty hash is asserted rather than assumed.
     */
    describe('to send no variables, the document declaring none', () => {
      test('with no params', () => {
        const expected = {}

        const payload = SignOutMutationGraphqlPayload.create()

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
