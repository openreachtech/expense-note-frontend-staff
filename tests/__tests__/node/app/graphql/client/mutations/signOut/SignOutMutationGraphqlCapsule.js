import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import SignOutMutationGraphqlCapsule from '~/app/graphql/client/mutations/signOut/SignOutMutationGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('SignOutMutationGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = SignOutMutationGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('SignOutMutationGraphqlCapsule', () => {
  describe('#get:signOutValueHash', () => {
    /*
     * `false` is a value the contract allows and `??` passes through, so it is asserted inside a
     * whole expected object. That is what keeps a refused sign-out distinguishable from no answer
     * at all.
     */
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signOut: {
                  signedOut: true,
                },
              },
            },
          },
          expected: {
            signedOut: true,
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signOut: {
                  signedOut: false,
                },
              },
            },
          },
          expected: {
            signedOut: false,
          },
        },
      ]

      test.each(cases)('signedOut: $factoryParams.result.data.signOut.signedOut', ({
        factoryParams,
        expected,
      }) => {
        const capsule = SignOutMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.signOutValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignOutMutationGraphqlCapsule', () => {
  describe('#get:signOutValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignOutMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.signOutValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignOutMutationGraphqlCapsule', () => {
  describe('#get:signedOut', () => {
    describe('to be true when the session ended', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signOut: {
                  signedOut: true,
                },
              },
            },
          },
        },
      ]

      test.each(cases)('signedOut: $factoryParams.result.data.signOut.signedOut', ({
        factoryParams,
      }) => {
        const capsule = SignOutMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.signedOut

        expect(actual)
          .toBeTruthy()
      })
    })
  })
})

describe('SignOutMutationGraphqlCapsule', () => {
  describe('#get:signedOut', () => {
    describe('to be false when the session did not end', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signOut: {
                  signedOut: false,
                },
              },
            },
          },
        },
      ]

      test.each(cases)('signedOut: $factoryParams.result.data.signOut.signedOut', ({
        factoryParams,
      }) => {
        const capsule = SignOutMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.signedOut

        expect(actual)
          .toBeFalsy()
      })
    })
  })
})

describe('SignOutMutationGraphqlCapsule', () => {
  describe('#get:signedOut', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignOutMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.signedOut

        expect(actual)
          .toBeNull()
      })
    })
  })
})
