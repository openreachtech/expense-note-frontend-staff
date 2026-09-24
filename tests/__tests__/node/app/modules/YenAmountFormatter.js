import YenAmountFormatter from '~/app/modules/YenAmountFormatter.js'

describe('YenAmountFormatter', () => {
  describe('.create()', () => {
    describe('to be instance of YenAmountFormatter', () => {
      const cases = [
        {
          label: 'JPY',
          params: {
            numberFormat: new Intl.NumberFormat('en-US', {
              currency: 'JPY',
              style: 'currency',
            }),
          },
        },
        {
          label: 'USD',
          params: {
            numberFormat: new Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
            }),
          },
        },
      ]

      test.each(cases)('label: $label', ({
        params,
      }) => {
        const actual = YenAmountFormatter.create(params)

        expect(actual)
          .toBeInstanceOf(YenAmountFormatter)
      })
    })

    describe('to be call by constructor', () => {
      const cases = [
        {
          label: 'JPY',
          params: {
            numberFormat: new Intl.NumberFormat('en-US', {
              currency: 'JPY',
              style: 'currency',
            }),
          },
        },
        {
          label: 'USD',
          params: {
            numberFormat: new Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
            }),
          },
        },
      ]

      test.each(cases)('label: $label', ({
        params,
      }) => {
        const SpyClass = globalThis.constructorSpy.spyOn(YenAmountFormatter)

        SpyClass.create(params)

        expect(SpyClass.__spy__)
          .toHaveBeenCalledWith(params)
      })
    })

    describe('should use default numberFormat value', () => {
      test('to be the application-wide yen number format', () => {
        const expected = YenAmountFormatter.numberFormat

        const actual = YenAmountFormatter.create()

        expect(actual)
          .toHaveProperty('numberFormat', expected)
      })
    })
  })
})

describe('YenAmountFormatter', () => {
  describe('constructor', () => {
    describe('to keep properties', () => {
      describe('#numberFormat', () => {
        const cases = [
          {
            label: 'JPY',
            params: {
              numberFormat: new Intl.NumberFormat('en-US', {
                currency: 'JPY',
                style: 'currency',
              }),
            },
          },
          {
            label: 'USD',
            params: {
              numberFormat: new Intl.NumberFormat('en-US', {
                currency: 'USD',
                style: 'currency',
              }),
            },
          },
        ]

        test.each(cases)('label: $label', ({
          params,
        }) => {
          const actual = new YenAmountFormatter(params)

          expect(actual)
            .toHaveProperty('numberFormat', params.numberFormat)
        })
      })
    })
  })
})

describe('YenAmountFormatter', () => {
  describe('.get:numberFormat', () => {
    test('should be a yen currency format with no minor unit', () => {
      const expected = {
        currency: 'JPY',
        style: 'currency',
        maximumFractionDigits: 0,
      }

      const actual = YenAmountFormatter.numberFormat
        .resolvedOptions()

      expect(actual)
        .toEqual(expect.objectContaining(expected))
    })
  })
})

describe('YenAmountFormatter', () => {
  describe('#formatYenAmount()', () => {
    /*
     * The zero case is the one that must never be dropped. Specification section 12's third
     * acceptance criterion requires a month with nothing in it to SHOW a total of zero, so the
     * formatter has to be able to write one.
     */
    const cases = [
      {
        params: {
          amount: 0,
        },
        expected: '¥0',
      },
      {
        params: {
          amount: 1,
        },
        expected: '¥1',
      },
      {
        params: {
          amount: 999,
        },
        expected: '¥999',
      },
      {
        params: {
          amount: 1000,
        },
        expected: '¥1,000',
      },
      {
        params: {
          amount: 12345,
        },
        expected: '¥12,345',
      },
      {
        params: {
          amount: 1234567,
        },
        expected: '¥1,234,567',
      },
      {
        params: {
          amount: -500,
        },
        expected: '-¥500',
      },
    ]

    test.each(cases)('amount: $params.amount', ({
      params,
      expected,
    }) => {
      const yenAmountFormatter = YenAmountFormatter.create()

      const actual = yenAmountFormatter.formatYenAmount(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('YenAmountFormatter', () => {
  describe('#formatYenAmount()', () => {
    describe('should read the injected number format', () => {
      const cases = [
        {
          factoryParams: {
            numberFormat: new Intl.NumberFormat('en-US', {
              currency: 'USD',
              style: 'currency',
            }),
          },
          params: {
            amount: 1500,
          },
          expected: '$1,500.00',
        },
        {
          factoryParams: {
            numberFormat: new Intl.NumberFormat('en-US', {
              currency: 'EUR',
              style: 'currency',
            }),
          },
          params: {
            amount: 2500,
          },
          expected: '€2,500.00',
        },
      ]

      test.each(cases)('amount: $params.amount', ({
        factoryParams,
        params,
        expected,
      }) => {
        const yenAmountFormatter = YenAmountFormatter.create(factoryParams)

        const actual = yenAmountFormatter.formatYenAmount(params)

        expect(actual)
          .toBe(expected)
      })
    })
  })
})
