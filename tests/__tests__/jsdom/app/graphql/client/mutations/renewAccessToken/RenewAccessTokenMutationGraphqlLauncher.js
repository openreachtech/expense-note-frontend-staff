import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import RenewAccessTokenMutationGraphqlLauncher from '~/app/graphql/client/mutations/renewAccessToken/RenewAccessTokenMutationGraphqlLauncher'
import RenewAccessTokenMutationGraphqlPayload from '~/app/graphql/client/mutations/renewAccessToken/RenewAccessTokenMutationGraphqlPayload'
import RenewAccessTokenMutationGraphqlCapsule from '~/app/graphql/client/mutations/renewAccessToken/RenewAccessTokenMutationGraphqlCapsule'

describe('RenewAccessTokenMutationGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = RenewAccessTokenMutationGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('RenewAccessTokenMutationGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be RenewAccessTokenMutationGraphqlPayload', () => {
      const actual = RenewAccessTokenMutationGraphqlLauncher.Payload

      expect(actual)
        .toBe(RenewAccessTokenMutationGraphqlPayload) // same reference
    })
  })
})

describe('RenewAccessTokenMutationGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be RenewAccessTokenMutationGraphqlCapsule', () => {
      const actual = RenewAccessTokenMutationGraphqlLauncher.Capsule

      expect(actual)
        .toBe(RenewAccessTokenMutationGraphqlCapsule) // same reference
    })
  })
})
