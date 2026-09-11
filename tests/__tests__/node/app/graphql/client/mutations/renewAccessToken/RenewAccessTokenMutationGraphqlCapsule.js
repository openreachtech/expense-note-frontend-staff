import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import RenewAccessTokenMutationGraphqlCapsule from '~/app/graphql/client/mutations/renewAccessToken/RenewAccessTokenMutationGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('RenewAccessTokenMutationGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = RenewAccessTokenMutationGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('RenewAccessTokenMutationGraphqlCapsule', () => {
  describe('#get:renewAccessTokenValueHash', () => {
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                renewAccessToken: {
                  accessToken: 'first-renewed-token-0001',
                },
              },
            },
          },
          expected: {
            accessToken: 'first-renewed-token-0001',
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                renewAccessToken: {
                  accessToken: 'second-renewed-token-0002',
                },
              },
            },
          },
          expected: {
            accessToken: 'second-renewed-token-0002',
          },
        },
      ]

      test.each(cases)('accessToken: $factoryParams.result.data.renewAccessToken.accessToken', ({
        factoryParams,
        expected,
      }) => {
        const capsule = RenewAccessTokenMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.renewAccessTokenValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('RenewAccessTokenMutationGraphqlCapsule', () => {
  describe('#get:renewAccessTokenValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = RenewAccessTokenMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.renewAccessTokenValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('RenewAccessTokenMutationGraphqlCapsule', () => {
  describe('#get:accessToken', () => {
    describe('to be the renewed access token', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                renewAccessToken: {
                  accessToken: 'first-renewed-token-0001',
                },
              },
            },
          },
          expected: 'first-renewed-token-0001',
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                renewAccessToken: {
                  accessToken: 'second-renewed-token-0002',
                },
              },
            },
          },
          expected: 'second-renewed-token-0002',
        },
      ]

      test.each(cases)('accessToken: $factoryParams.result.data.renewAccessToken.accessToken', ({
        factoryParams,
        expected,
      }) => {
        const capsule = RenewAccessTokenMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.accessToken

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('RenewAccessTokenMutationGraphqlCapsule', () => {
  describe('#get:accessToken', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = RenewAccessTokenMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.accessToken

        expect(actual)
          .toBeNull()
      })
    })
  })
})
