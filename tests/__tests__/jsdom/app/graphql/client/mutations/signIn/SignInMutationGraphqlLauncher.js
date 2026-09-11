import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import SignInMutationGraphqlLauncher from '~/app/graphql/client/mutations/signIn/SignInMutationGraphqlLauncher'
import SignInMutationGraphqlPayload from '~/app/graphql/client/mutations/signIn/SignInMutationGraphqlPayload'
import SignInMutationGraphqlCapsule from '~/app/graphql/client/mutations/signIn/SignInMutationGraphqlCapsule'

describe('SignInMutationGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = SignInMutationGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('SignInMutationGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be SignInMutationGraphqlPayload', () => {
      const actual = SignInMutationGraphqlLauncher.Payload

      expect(actual)
        .toBe(SignInMutationGraphqlPayload) // same reference
    })
  })
})

describe('SignInMutationGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be SignInMutationGraphqlCapsule', () => {
      const actual = SignInMutationGraphqlLauncher.Capsule

      expect(actual)
        .toBe(SignInMutationGraphqlCapsule) // same reference
    })
  })
})
