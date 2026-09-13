import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import SignInMutationGraphqlCapsule from '~/app/graphql/client/mutations/signIn/SignInMutationGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('SignInMutationGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = SignInMutationGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('SignInMutationGraphqlCapsule', () => {
  describe('#get:signInValueHash', () => {
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signIn: {
                  staffMemberId: 10001,
                  accessToken: 'first-access-token-0001',
                },
              },
            },
          },
          expected: {
            staffMemberId: 10001,
            accessToken: 'first-access-token-0001',
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signIn: {
                  staffMemberId: 10002,
                  accessToken: 'second-access-token-0002',
                },
              },
            },
          },
          expected: {
            staffMemberId: 10002,
            accessToken: 'second-access-token-0002',
          },
        },
      ]

      test.each(cases)('staffMemberId: $factoryParams.result.data.signIn.staffMemberId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = SignInMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.signInValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('SignInMutationGraphqlCapsule', () => {
  describe('#get:signInValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignInMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.signInValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignInMutationGraphqlCapsule', () => {
  describe('#get:staffMemberId', () => {
    describe('to be the staff member the credentials belong to', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signIn: {
                  staffMemberId: 10001,
                  accessToken: 'first-access-token-0001',
                },
              },
            },
          },
          expected: 10001,
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signIn: {
                  staffMemberId: 10002,
                  accessToken: 'second-access-token-0002',
                },
              },
            },
          },
          expected: 10002,
        },
      ]

      test.each(cases)('staffMemberId: $factoryParams.result.data.signIn.staffMemberId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = SignInMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.staffMemberId

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignInMutationGraphqlCapsule', () => {
  describe('#get:staffMemberId', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignInMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.staffMemberId

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('SignInMutationGraphqlCapsule', () => {
  describe('#get:accessToken', () => {
    describe('to be the access token the body carries', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signIn: {
                  staffMemberId: 10001,
                  accessToken: 'first-access-token-0001',
                },
              },
            },
          },
          expected: 'first-access-token-0001',
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                signIn: {
                  staffMemberId: 10002,
                  accessToken: 'second-access-token-0002',
                },
              },
            },
          },
          expected: 'second-access-token-0002',
        },
      ]

      test.each(cases)('accessToken: $factoryParams.result.data.signIn.accessToken', ({
        factoryParams,
        expected,
      }) => {
        const capsule = SignInMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.accessToken

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('SignInMutationGraphqlCapsule', () => {
  describe('#get:accessToken', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = SignInMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.accessToken

        expect(actual)
          .toBeNull()
      })
    })
  })
})
