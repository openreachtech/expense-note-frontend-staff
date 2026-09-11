import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import SignedInStaffMemberQueryGraphqlPayload from '~/app/graphql/client/queries/signedInStaffMember/SignedInStaffMemberQueryGraphqlPayload'

describe('SignedInStaffMemberQueryGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = SignedInStaffMemberQueryGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * The operation answers about the caller and nobody else, so the contract gives it no argument.
     * The document is asserted whole, its three result fields included, because those three names
     * are what the screen reads back.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      query SignedInStaffMemberQuery {
        signedInStaffMember {
          staffMemberId
          name
          email
        }
      }
    `

      const actual = SignedInStaffMemberQueryGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of SignedInStaffMemberQueryGraphqlPayload', () => {
      test('with no params', () => {
        const actual = SignedInStaffMemberQueryGraphqlPayload.create()

        expect(actual)
          .toBeInstanceOf(SignedInStaffMemberQueryGraphqlPayload)
      })
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * An operation the document declares no variable for must send none. Sending an `input`
     * variable the document never declares is how furo's form-value-hash factory breaks this
     * operation, so the empty hash is asserted rather than assumed.
     */
    describe('to send no variables, the document declaring none', () => {
      test('with no params', () => {
        const expected = {}

        const payload = SignedInStaffMemberQueryGraphqlPayload.create()

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
