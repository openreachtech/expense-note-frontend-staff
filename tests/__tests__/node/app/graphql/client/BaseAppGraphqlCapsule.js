import {
  BaseGraphqlCapsule,
} from '@openreachtech/furo'

import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import {
  UNKNOWN_ERROR_MESSAGE,
} from '~/app/constants-error'

describe('BaseAppGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseGraphqlCapsule', () => {
      const actual = BaseAppGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseGraphqlCapsule)
    })
  })
})

describe('BaseAppGraphqlCapsule', () => {
  describe('#extractResolvedErrorMessage()', () => {
    /*
     * `getErrorMessage()` is inherited from furo and returns an error CODE despite its name, so it
     * is stubbed here to steer the branch. It is the one dependency of this method, and no seeded
     * response can produce a chosen code on demand.
     */
    describe('should answer the message mapped to a code this feature raises', () => {
      const cases = [
        {
          params: {
            errorCode: '203.M001.001',
          },
          expected: 'Enter your email address.',
        },
        {
          params: {
            errorCode: '203.M001.003',
          },
          expected: 'Enter a valid email address.',
        },
        {
          params: {
            errorCode: '204.M001.002',
          },
          expected: 'Too many sign-in attempts. Wait a few minutes and try again.',
        },
        {
          params: {
            errorCode: '204.M003.001',
          },
          expected: 'Your session has ended. Sign in again.',
        },
      ]

      test.each(cases)('errorCode: $params.errorCode', ({
        params,
        expected,
      }) => {
        const capsule = BaseAppGraphqlCapsule.create({})

        jest.spyOn(capsule, 'getErrorMessage')
          .mockReturnValue(params.errorCode)

        const actual = capsule.extractResolvedErrorMessage()

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('BaseAppGraphqlCapsule', () => {
  describe('#extractResolvedErrorMessage()', () => {
    /*
     * Section 10 requires an address with no account and a correct address with the wrong password
     * to be refused identically. The backend gives both one code; this reading is what stops the
     * frontend reintroducing the distinction the backend removed.
     */
    describe('should tell nobody which half of a credential refusal failed', () => {
      const cases = [
        {
          params: {
            errorCode: '204.M001.001',
          },
          expected: 'That email address and password do not match.',
        },
      ]

      test.each(cases)('errorCode: $params.errorCode', ({
        params,
        expected,
      }) => {
        const capsule = BaseAppGraphqlCapsule.create({})

        jest.spyOn(capsule, 'getErrorMessage')
          .mockReturnValue(params.errorCode)

        const actual = capsule.extractResolvedErrorMessage()

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('BaseAppGraphqlCapsule', () => {
  describe('#extractResolvedErrorMessage()', () => {
    /*
     * The four codes furo itself raises, plus a code no resolver declares. None is mapped, on
     * purpose: the fallback text is the right advice for a transport failure, and the raw dotted
     * code must never reach a screen.
     */
    describe('should answer the fallback for a code nothing maps', () => {
      const cases = [
        {
          params: {
            errorCode: '190.X000.001', // furo: unknown
          },
        },
        {
          params: {
            errorCode: '191.X000.001', // furo: invalid variables
          },
        },
        {
          params: {
            errorCode: '192.X000.001', // furo: network
          },
        },
        {
          params: {
            errorCode: '192.X000.002', // furo: JSON parse
          },
        },
        {
          params: {
            errorCode: '204.M999.999', // no resolver declares this
          },
        },
      ]

      test.each(cases)('errorCode: $params.errorCode', ({
        params,
      }) => {
        const expected = UNKNOWN_ERROR_MESSAGE

        const capsule = BaseAppGraphqlCapsule.create({})

        jest.spyOn(capsule, 'getErrorMessage')
          .mockReturnValue(params.errorCode)

        const actual = capsule.extractResolvedErrorMessage()

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('BaseAppGraphqlCapsule', () => {
  describe('#extractResolvedErrorMessage()', () => {
    describe('should answer null when there is no error to report', () => {
      const cases = [
        {
          params: {
            errorCode: /** @type {*} */ (null),
          },
        },
      ]

      test.each(cases)('errorCode: $params.errorCode', ({
        params,
      }) => {
        const capsule = BaseAppGraphqlCapsule.create({})

        jest.spyOn(capsule, 'getErrorMessage')
          .mockReturnValue(params.errorCode)

        const actual = capsule.extractResolvedErrorMessage()

        expect(actual)
          .toBeNull()
      })
    })
  })
})
