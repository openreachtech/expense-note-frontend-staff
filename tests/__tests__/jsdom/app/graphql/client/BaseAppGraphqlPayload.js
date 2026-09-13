import {
  BaseGraphqlPayload,
  StorageClerk,
} from '@openreachtech/furo'

import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import MemoryStorage from '~/app/tools/storage/MemoryStorage'

import AppAccessTokenClerk from '~/app/tools/storage/AppAccessTokenClerk'

/*
 * These readings changed at `#sign-in`'s checkpoint 16, when spec section 6 -- "held in memory,
 * never in a cookie" -- was applied to the access token.
 *
 * They used to arrange through `localStorage` directly and to assert that `createStorageClerk()`
 * called `StorageClerk.createAsLocal()`. Both pinned the behaviour section 6 excludes, so keeping
 * them would have meant the suite defending the defect.
 *
 * The arrangement now goes through `AppAccessTokenClerk`, which is the one named place that decides
 * where the token lives -- so these readings exercise the real join between what holds a token and
 * what builds the request header, rather than reaching past it into a browser API.
 *
 * The `beforeEach` that cleared `localStorage` is gone too: `testing.md` keeps arrangement inside
 * the test body, and it only existed because the store was global browser state.
 */

describe('BaseAppGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseGraphqlPayload', () => {
      const actual = BaseAppGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseGraphqlPayload)
    })
  })
})

describe('BaseAppGraphqlPayload', () => {
  describe('.createStorageClerk()', () => {
    describe('to return instance of StorageClerk', () => {
      test('with no params', () => {
        const storageClerk = BaseAppGraphqlPayload.createStorageClerk()

        expect(storageClerk)
          .toBeInstanceOf(StorageClerk)
      })
    })

    describe('to be backed by storage that lives in memory', () => {
      /*
       * This is the reading that fails if the seam is ever handed back to `localStorage` or
       * `sessionStorage`. Spec section 6 is the reason, and nothing else in the suite would notice.
       */
      test('with no params', () => {
        const storageClerk = BaseAppGraphqlPayload.createStorageClerk()

        const actual = storageClerk.storage

        expect(actual)
          .toBeInstanceOf(MemoryStorage)
      })
    })
  })
})

describe('BaseAppGraphqlPayload', () => {
  describe('.loadAccessToken()', () => {
    describe('with a token held', () => {
      const cases = [
        {
          args: {
            accessToken: 'fc3ff98e8c6a0d308700000000000001',
          },
        },
        {
          args: {
            accessToken: 'fc3ff98e8c6a0d308700000000000002',
          },
        },
      ]

      test.each(cases)('accessToken: $args.accessToken', ({ args }) => {
        const accessTokenClerk = AppAccessTokenClerk.create()

        accessTokenClerk.saveToken({
          token: args.accessToken,
        })

        const actual = BaseAppGraphqlPayload.loadAccessToken()

        expect(actual)
          .toBe(args.accessToken)
      })
    })
  })
})

describe('BaseAppGraphqlPayload', () => {
  describe('.collectBasedHeadersOptions()', () => {
    describe('to add `x-renchan-access-token`', () => {
      const cases = [
        {
          args: {
            accessToken: 'fc3ff98e8c6a0d308700000000000001',
          },
          expected: [
            {
              'x-renchan-access-token': 'fc3ff98e8c6a0d308700000000000001',
            },
          ],
        },
        {
          args: {
            accessToken: 'fc3ff98e8c6a0d308700000000000002',
          },
          expected: [
            {
              'x-renchan-access-token': 'fc3ff98e8c6a0d308700000000000002',
            },
          ],
        },
      ]

      test.each(cases)('accessToken: $args.accessToken', ({ args, expected }) => {
        const accessTokenClerk = AppAccessTokenClerk.create()

        accessTokenClerk.saveToken({
          token: args.accessToken,
        })

        const actual = BaseAppGraphqlPayload.collectBasedHeadersOptions()

        expect(actual)
          .toEqual(expected)
      })
    })

    describe('to not add `x-renchan-access-token`', () => {
      test('with no token held', () => {
        const accessTokenClerk = AppAccessTokenClerk.create()

        accessTokenClerk.clearToken()

        /** @type {Array<Record<string, string>>} */
        const expected = []

        const actual = BaseAppGraphqlPayload.collectBasedHeadersOptions()

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
