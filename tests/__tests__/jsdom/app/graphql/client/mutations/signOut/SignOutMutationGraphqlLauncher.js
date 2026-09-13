import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import SignOutMutationGraphqlLauncher from '~/app/graphql/client/mutations/signOut/SignOutMutationGraphqlLauncher'
import SignOutMutationGraphqlPayload from '~/app/graphql/client/mutations/signOut/SignOutMutationGraphqlPayload'
import SignOutMutationGraphqlCapsule from '~/app/graphql/client/mutations/signOut/SignOutMutationGraphqlCapsule'

describe('SignOutMutationGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = SignOutMutationGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('SignOutMutationGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be SignOutMutationGraphqlPayload', () => {
      const actual = SignOutMutationGraphqlLauncher.Payload

      expect(actual)
        .toBe(SignOutMutationGraphqlPayload) // same reference
    })
  })
})

describe('SignOutMutationGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be SignOutMutationGraphqlCapsule', () => {
      const actual = SignOutMutationGraphqlLauncher.Capsule

      expect(actual)
        .toBe(SignOutMutationGraphqlCapsule) // same reference
    })
  })
})
