import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import RenewAccessTokenMutationGraphqlPayload from '~/app/graphql/client/mutations/renewAccessToken/RenewAccessTokenMutationGraphqlPayload'

describe('RenewAccessTokenMutationGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = RenewAccessTokenMutationGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('RenewAccessTokenMutationGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * The refresh-token cookie carries everything this operation needs, which is why the contract
     * gives it no argument. The document is asserted whole so no argument creeps in and no second
     * result field is invented beside the access token.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      mutation RenewAccessTokenMutation {
        renewAccessToken {
          accessToken
        }
      }
    `

      const actual = RenewAccessTokenMutationGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('RenewAccessTokenMutationGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of RenewAccessTokenMutationGraphqlPayload', () => {
      test('with no params', () => {
        const actual = RenewAccessTokenMutationGraphqlPayload.create()

        expect(actual)
          .toBeInstanceOf(RenewAccessTokenMutationGraphqlPayload)
      })
    })
  })
})

describe('RenewAccessTokenMutationGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * An operation the document declares no variable for must send none. Sending an `input`
     * variable the document never declares is how furo's form-value-hash factory breaks this
     * operation, so the empty hash is asserted rather than assumed.
     */
    describe('to send no variables, the document declaring none', () => {
      test('with no params', () => {
        const expected = {}

        const payload = RenewAccessTokenMutationGraphqlPayload.create()

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
