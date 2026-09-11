import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import SignedInStaffMemberQueryGraphqlLauncher from '~/app/graphql/client/queries/signedInStaffMember/SignedInStaffMemberQueryGraphqlLauncher'
import SignedInStaffMemberQueryGraphqlPayload from '~/app/graphql/client/queries/signedInStaffMember/SignedInStaffMemberQueryGraphqlPayload'
import SignedInStaffMemberQueryGraphqlCapsule from '~/app/graphql/client/queries/signedInStaffMember/SignedInStaffMemberQueryGraphqlCapsule'

describe('SignedInStaffMemberQueryGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = SignedInStaffMemberQueryGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be SignedInStaffMemberQueryGraphqlPayload', () => {
      const actual = SignedInStaffMemberQueryGraphqlLauncher.Payload

      expect(actual)
        .toBe(SignedInStaffMemberQueryGraphqlPayload) // same reference
    })
  })
})

describe('SignedInStaffMemberQueryGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be SignedInStaffMemberQueryGraphqlCapsule', () => {
      const actual = SignedInStaffMemberQueryGraphqlLauncher.Capsule

      expect(actual)
        .toBe(SignedInStaffMemberQueryGraphqlCapsule) // same reference
    })
  })
})
