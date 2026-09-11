import {
  StorageClerk,
} from '@openreachtech/furo'

import {
  AccessTokenClerk,
} from '@openreachtech/furo-nuxt'

import AppAccessTokenClerk from '~/app/tools/storage/AppAccessTokenClerk.js'

import MemoryStorage from '~/app/tools/storage/MemoryStorage.js'

import {
  STORAGE_KEY,
} from '~/app/constants.js'

describe('AppAccessTokenClerk', () => {
  describe('super class', () => {
    test('to be derived class of AccessTokenClerk', () => {
      const actual = AppAccessTokenClerk.prototype

      expect(actual)
        .toBeInstanceOf(AccessTokenClerk)
    })
  })
})

describe('AppAccessTokenClerk', () => {
  describe('.createStorageClerk()', () => {
    describe('when called as is', () => {
      test('to be an instance of StorageClerk', () => {
        const actual = AppAccessTokenClerk.createStorageClerk()

        expect(actual)
          .toBeInstanceOf(StorageClerk)
      })
    })
  })
})

describe('AppAccessTokenClerk', () => {
  describe('.createStorageClerk()', () => {
    /*
     * Section 6 of the specification holds the access token "in memory, never in a cookie". furo's
     * own clerk defaults to `window.localStorage`, so this is the reading that fails if the seam is
     * ever handed back to the browser's storage.
     */
    describe('when called as is', () => {
      test('to be backed by storage that lives in memory', () => {
        const storageClerk = AppAccessTokenClerk.createStorageClerk()

        const actual = storageClerk.storage

        expect(actual)
          .toBeInstanceOf(MemoryStorage)
      })
    })
  })
})

describe('AppAccessTokenClerk', () => {
  describe('#saveToken()', () => {
    /*
     * Two clerks are created independently, as the sign-in screen and a later request header would
     * create them. The token written through one has to be the token the other reads, or a member
     * of staff signs in and the next request goes out unauthenticated.
     */
    describe('should be read back by a separately created clerk', () => {
      const cases = [
        {
          params: {
            token: 'held-access-token-0001',
          },
          expected: 'held-access-token-0001',
        },
        {
          params: {
            token: 'held-access-token-0002',
          },
          expected: 'held-access-token-0002',
        },
      ]

      test.each(cases)('token: $params.token', ({
        params,
        expected,
      }) => {
        const writingClerk = AppAccessTokenClerk.create()
        const readingClerk = AppAccessTokenClerk.create()

        writingClerk.saveToken(params)

        const actual = readingClerk.retrieveToken()

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('AppAccessTokenClerk', () => {
  describe('#saveToken()', () => {
    /*
     * The three `Base*Payload` classes read the token as `storageClerk.get(STORAGE_KEY.ACCESS_TOKEN)`
     * off a clerk of their own. This pins both halves of that join at once — the shared record, and
     * the key the clerk writes under — so a header built from the same pair finds the token.
     */
    describe('should write under the key the request header is built from', () => {
      const cases = [
        {
          params: {
            token: 'header-access-token-0003',
          },
          expected: 'header-access-token-0003',
        },
        {
          params: {
            token: 'header-access-token-0004',
          },
          expected: 'header-access-token-0004',
        },
      ]

      test.each(cases)('token: $params.token', ({
        params,
        expected,
      }) => {
        const clerk = AppAccessTokenClerk.create()

        clerk.saveToken(params)

        const actual = MemoryStorage.sharedValueHash[STORAGE_KEY.ACCESS_TOKEN]

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('AppAccessTokenClerk', () => {
  describe('#clearToken()', () => {
    describe('should leave no token for a separately created clerk to read', () => {
      const cases = [
        {
          params: {
            token: 'cleared-access-token-0005',
          },
        },
        {
          params: {
            token: 'cleared-access-token-0006',
          },
        },
      ]

      test.each(cases)('token: $params.token', ({
        params,
      }) => {
        const writingClerk = AppAccessTokenClerk.create()
        const readingClerk = AppAccessTokenClerk.create()

        writingClerk.saveToken(params)
        writingClerk.clearToken()

        const actual = readingClerk.retrieveToken()

        expect(actual)
          .toBeNull()
      })
    })
  })
})
