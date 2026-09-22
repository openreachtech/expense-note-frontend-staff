import {
  HEADER_KEY,
  PAGINATION,
  STORAGE_KEY,
} from '~/app/constants.js'

describe('application constants', () => {
  describe('named export', () => {
    describe('as HEADER_KEY', () => {
      describe('should hold the name of every request header', () => {
        const cases = [
          {
            params: {
              key: 'ACCESS_TOKEN',
            },
            expected: 'x-renchan-access-token',
          },
        ]

        test.each(cases)('key: $params.key', ({
          params,
          expected,
        }) => {
          const actual = HEADER_KEY[params.key]

          expect(actual)
            .toBe(expected)
        })
      })
    })
  })
})

describe('application constants', () => {
  describe('named export', () => {
    describe('as STORAGE_KEY', () => {
      describe('should hold the name of every stored value', () => {
        const cases = [
          {
            params: {
              key: 'FURO_ENV',
            },
            expected: 'furoEnv',
          },
          {
            params: {
              key: 'ACCESS_TOKEN',
            },
            expected: 'access_token',
          },
        ]

        test.each(cases)('key: $params.key', ({
          params,
          expected,
        }) => {
          const actual = STORAGE_KEY[params.key]

          expect(actual)
            .toBe(expected)
        })
      })
    })
  })
})

describe('application constants', () => {
  describe('named export', () => {
    /*
     * The page size is asserted against a literal rather than against the backend's own cap,
     * because section 8 rule 26 of `ai/contexts/uiux-context.md` forbids a second copy of that cap
     * in this repository. What this guards is that the number the `expenses` query sends and the
     * number `FuroPagination` reports stay one declaration, and that it does not drift upward by
     * accident.
     */
    describe('as PAGINATION', () => {
      describe('should hold the page size of every paginated read', () => {
        const cases = [
          {
            params: {
              key: 'EXPENSES_LIMIT',
            },
            expected: 20,
          },
        ]

        test.each(cases)('key: $params.key', ({
          params,
          expected,
        }) => {
          const actual = PAGINATION[params.key]

          expect(actual)
            .toBe(expected)
        })
      })
    })
  })
})
