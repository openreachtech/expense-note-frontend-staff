import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import YenAmountFormatter from '~/app/modules/YenAmountFormatter.js'

import MonthlyExpensesPageContext from '~/pages/monthly-expenses/MonthlyExpensesPageContext.js'

describe('MonthlyExpensesPageContext', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppContext', () => {
      const actual = MonthlyExpensesPageContext.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppContext)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('.create()', () => {
    describe('to be instance of MonthlyExpensesPageContext', () => {
      const cases = [
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            monthValueHashReactive: {
              year: 2026,
              month: 9,
            },
            statusReactive: {
              isLoadingMonthlyExpenses: false,
            },
            errorMessageHashReactive: {
              readingMonthlyExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              totalAmount: null,
            },
          },
        },
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page monthly-expenses',
              },
            },
            monthValueHashReactive: {
              year: 2025,
              month: 1,
            },
            statusReactive: {
              isLoadingMonthlyExpenses: true,
            },
            errorMessageHashReactive: {
              readingMonthlyExpenses: 'This month could not be read.',
            },
            responseHashReactive: {
              expenses: [],
              totalAmount: 0,
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
        params,
      }) => {
        const actual = MonthlyExpensesPageContext.create(params)

        expect(actual)
          .toBeInstanceOf(MonthlyExpensesPageContext)
      })
    })

    describe('to be call by constructor', () => {
      const cases = [
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            monthValueHashReactive: {
              year: 2026,
              month: 9,
            },
            statusReactive: {
              isLoadingMonthlyExpenses: false,
            },
            errorMessageHashReactive: {
              readingMonthlyExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              totalAmount: null,
            },
          },
        },
        {
          params: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page monthly-expenses',
              },
            },
            monthValueHashReactive: {
              year: 2025,
              month: 1,
            },
            statusReactive: {
              isLoadingMonthlyExpenses: true,
            },
            errorMessageHashReactive: {
              readingMonthlyExpenses: 'This month could not be read.',
            },
            responseHashReactive: {
              expenses: [],
              totalAmount: 0,
            },
          },
        },
      ]

      test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
        params,
      }) => {
        const SpyClass = globalThis.constructorSpy.spyOn(MonthlyExpensesPageContext)

        SpyClass.create(params)

        expect(SpyClass.__spy__)
          .toHaveBeenCalledWith(params)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('constructor', () => {
    describe('to keep properties', () => {
      describe('#props', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              monthValueHashReactive: {
                year: 2026,
                month: 9,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: false,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page monthly-expenses',
                },
              },
              monthValueHashReactive: {
                year: 2025,
                month: 1,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: true,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: 'This month could not be read.',
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: 0,
              },
            },
          },
        ]

        test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('props', params.props)
        })
      })

      describe('#componentContext', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              monthValueHashReactive: {
                year: 2026,
                month: 9,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: false,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page monthly-expenses',
                },
              },
              monthValueHashReactive: {
                year: 2025,
                month: 1,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: true,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: 'This month could not be read.',
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: 0,
              },
            },
          },
        ]

        test.each(cases)('attrs.class: $params.componentContext.attrs.class', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('componentContext', params.componentContext)
        })
      })

      describe('#monthValueHashReactive', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              monthValueHashReactive: {
                year: 2026,
                month: 9,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: false,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page monthly-expenses',
                },
              },
              monthValueHashReactive: {
                year: 2025,
                month: 1,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: true,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: 'This month could not be read.',
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: 0,
              },
            },
          },
        ]

        test.each(cases)('year: $params.monthValueHashReactive.year', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('monthValueHashReactive', params.monthValueHashReactive)
        })
      })

      describe('#statusReactive', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              monthValueHashReactive: {
                year: 2026,
                month: 9,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: false,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page monthly-expenses',
                },
              },
              monthValueHashReactive: {
                year: 2025,
                month: 1,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: true,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: 'This month could not be read.',
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: 0,
              },
            },
          },
        ]

        test.each(cases)('isLoadingMonthlyExpenses: $params.statusReactive.isLoadingMonthlyExpenses', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('statusReactive', params.statusReactive)
        })
      })

      describe('#errorMessageHashReactive', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              monthValueHashReactive: {
                year: 2026,
                month: 9,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: false,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page monthly-expenses',
                },
              },
              monthValueHashReactive: {
                year: 2025,
                month: 1,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: true,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: 'This month could not be read.',
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: 0,
              },
            },
          },
        ]

        test.each(cases)('readingMonthlyExpenses: $params.errorMessageHashReactive.readingMonthlyExpenses', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('errorMessageHashReactive', params.errorMessageHashReactive)
        })
      })

      describe('#responseHashReactive', () => {
        const cases = [
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page',
                },
              },
              monthValueHashReactive: {
                year: 2026,
                month: 9,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: false,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: null,
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: null,
              },
            },
          },
          {
            params: {
              props: {},
              componentContext: {
                attrs: {
                  class: 'unit-page monthly-expenses',
                },
              },
              monthValueHashReactive: {
                year: 2025,
                month: 1,
              },
              statusReactive: {
                isLoadingMonthlyExpenses: true,
              },
              errorMessageHashReactive: {
                readingMonthlyExpenses: 'This month could not be read.',
              },
              responseHashReactive: {
                expenses: [],
                totalAmount: 0,
              },
            },
          },
        ]

        test.each(cases)('totalAmount: $params.responseHashReactive.totalAmount', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('responseHashReactive', params.responseHashReactive)
        })
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Specification section 6 reads every date in this product in `Asia/Tokyo`, and section 12.2 opens
   * this screen on "the current" month. Nothing downstream corrects a wrong opening month --
   * `monthlyExpenses` answers whatever month it is handed, truthfully -- so the zone this reads is
   * the whole of the guarantee.
   */
  describe('.get:currentMonthDateTimeFormat', () => {
    test('should read the calendar of Asia/Tokyo', () => {
      const expected = 'Asia/Tokyo'

      const actual = MonthlyExpensesPageContext.currentMonthDateTimeFormat
        .resolvedOptions()
        .timeZone

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('.get:currentMonthDateTimeFormat', () => {
    /*
     * The instant chosen is 2026-01-01T00:30:00Z, which is 09:30 on 1 January in Tokyo and 19:30 on
     * 31 December in New York. A formatter reading the browser's own zone would answer December for
     * a member of staff filing from either American coast.
     */
    const cases = [
      {
        params: {
          instant: new Date('2026-01-01T00:30:00.000Z'),
        },
        expected: '01/2026',
      },
      {
        params: {
          instant: new Date('2026-09-30T20:00:00.000Z'),
        },
        expected: '10/2026',
      },
      {
        params: {
          instant: new Date('2026-07-15T12:00:00.000Z'),
        },
        expected: '07/2026',
      },
    ]

    test.each(cases)('instant: $params.instant', ({
      params,
      expected,
    }) => {
      const dateTimeFormat = MonthlyExpensesPageContext.currentMonthDateTimeFormat

      const actual = dateTimeFormat.format(params.instant)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('.buildCurrentMonth()', () => {
    const cases = [
      {
        label: 'September 2026',
        mockDateTimeParts: [
          {
            type: 'month',
            value: '09',
          },
          {
            type: 'literal',
            value: '/',
          },
          {
            type: 'year',
            value: '2026',
          },
        ],
        expected: {
          year: 2026,
          month: 9,
        },
      },
      {
        label: 'January 2025',
        mockDateTimeParts: [
          {
            type: 'month',
            value: '01',
          },
          {
            type: 'literal',
            value: '/',
          },
          {
            type: 'year',
            value: '2025',
          },
        ],
        expected: {
          year: 2025,
          month: 1,
        },
      },
      {
        label: 'December 1999',
        mockDateTimeParts: [
          {
            type: 'month',
            value: '12',
          },
          {
            type: 'literal',
            value: '/',
          },
          {
            type: 'year',
            value: '1999',
          },
        ],
        expected: {
          year: 1999,
          month: 12,
        },
      },
    ]

    test.each(cases)('label: $label', ({
      mockDateTimeParts,
      expected,
    }) => {
      jest.spyOn(MonthlyExpensesPageContext, 'currentMonthDateTimeFormat', 'get')
        .mockReturnValue({
          formatToParts: () => mockDateTimeParts,
        })

      const actual = MonthlyExpensesPageContext.buildCurrentMonth()

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('.extractDateTimePartNumber()', () => {
    const cases = [
      {
        params: {
          dateTimeParts: [
            {
              type: 'month',
              value: '09',
            },
            {
              type: 'year',
              value: '2026',
            },
          ],
          partType: 'year',
        },
        expected: 2026,
      },
      {
        params: {
          dateTimeParts: [
            {
              type: 'month',
              value: '09',
            },
            {
              type: 'year',
              value: '2026',
            },
          ],
          partType: 'month',
        },
        expected: 9,
      },
      {
        params: {
          dateTimeParts: [
            {
              type: 'month',
              value: '11',
            },
            {
              type: 'year',
              value: '2031',
            },
          ],
          partType: 'day',
        },
        expected: 0,
      },
    ]

    test.each(cases)('partType: $params.partType', ({
      params,
      expected,
    }) => {
      const actual = MonthlyExpensesPageContext.extractDateTimePartNumber(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#setupComponent()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page monthly-expenses',
            },
          },
          monthValueHashReactive: {
            year: 2025,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
      },
    ]

    test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
      factoryParams,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.setupComponent()

      expect(actual)
        .toBe(context) // same reference
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:pageTitle', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Monthly expenses',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page monthly-expenses',
            },
          },
          monthValueHashReactive: {
            year: 2025,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Monthly expenses',
      },
    ]

    test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.pageTitle

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The one link out of this screen. Checkpoint 11 put a link in each signed-in screen's own header
   * rather than in the shared layout, and section 8 rule 17 requires the target to exist: `/expenses`
   * does.
   */
  describe('#get:expensesLinkPath', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: '/expenses',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page monthly-expenses',
            },
          },
          monthValueHashReactive: {
            year: 2025,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: '/expenses',
      },
    ]

    test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.expensesLinkPath

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:expensesLinkLabel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Expenses',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page monthly-expenses',
            },
          },
          monthValueHashReactive: {
            year: 2025,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Expenses',
      },
    ]

    test.each(cases)('attrs.class: $factoryParams.componentContext.attrs.class', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.expensesLinkLabel

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:selectedYear', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 2026,
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 1999,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 1999,
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.selectedYear

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:selectedMonth', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 9,
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 1,
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.selectedMonth

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 8 rule 28 -- never disable or refuse a future month. The window is recomputed around the
   * CHOSEN year rather than today's, which is what keeps the rule absolute: whichever year is being
   * read is always present in its own list, and walking past the window simply re-centres it.
   */
  describe('#get:yearOptions', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: [
          {
            label: '2021',
            value: 2021,
          },
          {
            label: '2022',
            value: 2022,
          },
          {
            label: '2023',
            value: 2023,
          },
          {
            label: '2024',
            value: 2024,
          },
          {
            label: '2025',
            value: 2025,
          },
          {
            label: '2026',
            value: 2026,
          },
          {
            label: '2027',
            value: 2027,
          },
          {
            label: '2028',
            value: 2028,
          },
          {
            label: '2029',
            value: 2029,
          },
          {
            label: '2030',
            value: 2030,
          },
          {
            label: '2031',
            value: 2031,
          },
        ],
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2040,
            month: 3,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: [
          {
            label: '2035',
            value: 2035,
          },
          {
            label: '2036',
            value: 2036,
          },
          {
            label: '2037',
            value: 2037,
          },
          {
            label: '2038',
            value: 2038,
          },
          {
            label: '2039',
            value: 2039,
          },
          {
            label: '2040',
            value: 2040,
          },
          {
            label: '2041',
            value: 2041,
          },
          {
            label: '2042',
            value: 2042,
          },
          {
            label: '2043',
            value: 2043,
          },
          {
            label: '2044',
            value: 2044,
          },
          {
            label: '2045',
            value: 2045,
          },
        ],
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 3,
            month: 6,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: [
          {
            label: '1',
            value: 1,
          },
          {
            label: '2',
            value: 2,
          },
          {
            label: '3',
            value: 3,
          },
          {
            label: '4',
            value: 4,
          },
          {
            label: '5',
            value: 5,
          },
          {
            label: '6',
            value: 6,
          },
          {
            label: '7',
            value: 7,
          },
          {
            label: '8',
            value: 8,
          },
        ],
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 9997,
            month: 11,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: [
          {
            label: '9992',
            value: 9992,
          },
          {
            label: '9993',
            value: 9993,
          },
          {
            label: '9994',
            value: 9994,
          },
          {
            label: '9995',
            value: 9995,
          },
          {
            label: '9996',
            value: 9996,
          },
          {
            label: '9997',
            value: 9997,
          },
          {
            label: '9998',
            value: 9998,
          },
          {
            label: '9999',
            value: 9999,
          },
        ],
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.yearOptions

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthOptions', () => {
    /*
     * All twelve, always, and not one of them disabled -- section 8 rule 28. A future month is read
     * truthfully as empty with a total of zero, so there is nothing here to grey out.
     */
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: [
          {
            label: 'January',
            value: 1,
          },
          {
            label: 'February',
            value: 2,
          },
          {
            label: 'March',
            value: 3,
          },
          {
            label: 'April',
            value: 4,
          },
          {
            label: 'May',
            value: 5,
          },
          {
            label: 'June',
            value: 6,
          },
          {
            label: 'July',
            value: 7,
          },
          {
            label: 'August',
            value: 8,
          },
          {
            label: 'September',
            value: 9,
          },
          {
            label: 'October',
            value: 10,
          },
          {
            label: 'November',
            value: 11,
          },
          {
            label: 'December',
            value: 12,
          },
        ],
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2099,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: [
          {
            label: 'January',
            value: 1,
          },
          {
            label: 'February',
            value: 2,
          },
          {
            label: 'March',
            value: 3,
          },
          {
            label: 'April',
            value: 4,
          },
          {
            label: 'May',
            value: 5,
          },
          {
            label: 'June',
            value: 6,
          },
          {
            label: 'July',
            value: 7,
          },
          {
            label: 'August',
            value: 8,
          },
          {
            label: 'September',
            value: 9,
          },
          {
            label: 'October',
            value: 10,
          },
          {
            label: 'November',
            value: 11,
          },
          {
            label: 'December',
            value: 12,
          },
        ],
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthOptions

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:yearControlBlockParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          label: 'Year',
          controlId: 'monthly-expenses-year',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2030,
            month: 4,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          label: 'Year',
          controlId: 'monthly-expenses-year',
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.yearControlBlockParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthControlBlockParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          label: 'Month',
          controlId: 'monthly-expenses-month',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2030,
            month: 4,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          label: 'Month',
          controlId: 'monthly-expenses-month',
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthControlBlockParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The id goes on the trigger and never on the component. A fallthrough `id` on `<FuroSelect>`
   * lands on no DOM element, so the block's `<label for>` would resolve to nothing -- silently. The
   * trigger is the real button, and it is also the element that otherwise has no accessible name.
   */
  describe('#get:yearFieldTriggerParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          id: 'monthly-expenses-year',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2011,
            month: 2,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          id: 'monthly-expenses-year',
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.yearFieldTriggerParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthFieldTriggerParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          id: 'monthly-expenses-month',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2011,
            month: 2,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          id: 'monthly-expenses-month',
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthFieldTriggerParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:yearFieldParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 5,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          value: 5,
          options: [
            {
              label: '1',
              value: 1,
            },
            {
              label: '2',
              value: 2,
            },
            {
              label: '3',
              value: 3,
            },
            {
              label: '4',
              value: 4,
            },
            {
              label: '5',
              value: 5,
            },
            {
              label: '6',
              value: 6,
            },
            {
              label: '7',
              value: 7,
            },
            {
              label: '8',
              value: 8,
            },
            {
              label: '9',
              value: 9,
            },
            {
              label: '10',
              value: 10,
            },
          ],
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 9999,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          value: 9999,
          options: [
            {
              label: '9994',
              value: 9994,
            },
            {
              label: '9995',
              value: 9995,
            },
            {
              label: '9996',
              value: 9996,
            },
            {
              label: '9997',
              value: 9997,
            },
            {
              label: '9998',
              value: 9998,
            },
            {
              label: '9999',
              value: 9999,
            },
          ],
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.yearFieldParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthFieldParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          value: 9,
          options: expect.arrayContaining([
            {
              label: 'January',
              value: 1,
            },
            {
              label: 'September',
              value: 9,
            },
            {
              label: 'December',
              value: 12,
            },
          ]),
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 2,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          value: 2,
          options: expect.arrayContaining([
            {
              label: 'January',
              value: 1,
            },
            {
              label: 'February',
              value: 2,
            },
            {
              label: 'December',
              value: 12,
            },
          ]),
        },
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthFieldParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 8 rule 28: the step buttons are never disabled, at any month, including the calendar's
   * own boundary -- a press there is a no-op instead. They never carry a loading state either, so
   * three quick presses land on the month three back.
   */
  describe('#get:previousMonthButtonParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          variant: 'outline',
          type: 'button',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 1,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          variant: 'outline',
          type: 'button',
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.previousMonthButtonParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:nextMonthButtonParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          variant: 'outline',
          type: 'button',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 9999,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          variant: 'outline',
          type: 'button',
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.nextMonthButtonParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:previousMonthButtonText', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Previous',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2025,
            month: 3,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Previous',
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.previousMonthButtonText

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * "Previous" alone does not say previous WHAT, and a loading `FuroButton`'s label leaves the
   * accessibility tree entirely -- so the durable name says the whole thing.
   */
  describe('#get:previousMonthButtonLabel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Previous month',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2025,
            month: 3,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Previous month',
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.previousMonthButtonLabel

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:nextMonthButtonText', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Next',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2025,
            month: 3,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Next',
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.nextMonthButtonText

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:nextMonthButtonLabel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Next month',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2025,
            month: 3,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Next month',
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.nextMonthButtonLabel

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:retryButtonParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'This month could not be read.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          variant: 'default',
          type: 'button',
          loading: false,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 10,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'This month could not be read.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          variant: 'default',
          type: 'button',
          loading: true,
        },
      },
    ]

    test.each(cases)('isLoadingMonthlyExpenses: $factoryParams.statusReactive.isLoadingMonthlyExpenses', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.retryButtonParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:retryButtonLabel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'This month could not be read.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Try again',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 10,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'This month could not be read.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'Try again',
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.retryButtonLabel

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:totalAmountLabel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: 'Total',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 10,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 1200,
          },
        },
        expected: 'Total',
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.totalAmountLabel

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 8 rule 29 -- never sort the entries. Section 6 fixes one order for both screens and the
   * backend already returns it, so a sortable header would emit into a query with no sort input.
   */
  describe('#get:monthlyExpenseColumns', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: [
          {
            field: 'spentOnText',
            label: 'Date paid',
            sortable: false,
          },
          {
            field: 'amountText',
            label: 'Amount',
            sortable: false,
            align: 'end',
          },
          {
            field: 'expenseCategoryName',
            label: 'Category',
            sortable: false,
          },
          {
            field: 'memoText',
            label: 'Memo',
            sortable: false,
          },
        ],
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2024,
            month: 2,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: [
          {
            field: 'spentOnText',
            label: 'Date paid',
            sortable: false,
          },
          {
            field: 'amountText',
            label: 'Amount',
            sortable: false,
            align: 'end',
          },
          {
            field: 'expenseCategoryName',
            label: 'Category',
            sortable: false,
          },
          {
            field: 'memoText',
            label: 'Memo',
            sortable: false,
          },
        ],
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthlyExpenseColumns

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthlyExpenseRows', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [
              {
                id: 741,
                spentOn: '2026-09-28',
                amount: 12345,
                memo: 'Taxi to the Kyoto office',
                status: 'recorded',
                expenseCategory: {
                  id: 3,
                  name: 'Transport',
                  displayOrder: 1,
                },
              },
              {
                id: 742,
                spentOn: '2026-09-02',
                amount: 800,
                memo: null,
                status: 'recorded',
                expenseCategory: {
                  id: 5,
                  name: 'Meals',
                  displayOrder: 2,
                },
              },
            ],
            totalAmount: 13145,
          },
        },
        expected: [
          {
            id: 741,
            spentOn: '2026-09-28',
            spentOnText: '2026-09-28',
            amountText: '¥12,345',
            expenseCategoryName: 'Transport',
            memoText: 'Taxi to the Kyoto office',
          },
          {
            id: 742,
            spentOn: '2026-09-02',
            spentOnText: '2026-09-02',
            amountText: '¥800',
            expenseCategoryName: 'Meals',
            memoText: '',
          },
        ],
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 8,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [
              {
                id: 611,
                spentOn: '2026-08-31',
                amount: 1000000,
                memo: 'Annual supplies order',
                status: 'recorded',
                expenseCategory: {
                  id: 7,
                  name: 'Supplies',
                  displayOrder: 3,
                },
              },
            ],
            totalAmount: 1000000,
          },
        },
        expected: [
          {
            id: 611,
            spentOn: '2026-08-31',
            spentOnText: '2026-08-31',
            amountText: '¥1,000,000',
            expenseCategoryName: 'Supplies',
            memoText: 'Annual supplies order',
          },
        ],
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthlyExpenseRows

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthlyExpenseTableParcel', () => {
    const cases = [
      {
        label: 'filled',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [
              {
                id: 741,
                spentOn: '2026-09-28',
                amount: 12345,
                memo: 'Taxi to the Kyoto office',
                status: 'recorded',
                expenseCategory: {
                  id: 3,
                  name: 'Transport',
                  displayOrder: 1,
                },
              },
            ],
            totalAmount: 12345,
          },
        },
        expected: {
          columns: expect.any(Array),
          rows: [
            {
              id: 741,
              spentOn: '2026-09-28',
              spentOnText: '2026-09-28',
              amountText: '¥12,345',
              expenseCategoryName: 'Transport',
              memoText: 'Taxi to the Kyoto office',
            },
          ],
          rowKey: 'id',
          loading: false,
          errorMessage: null,
          emptyText: 'No expenses in September 2026',
        },
      },
      {
        label: 'loading',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 10,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          columns: expect.any(Array),
          rows: [],
          rowKey: 'id',
          loading: true,
          errorMessage: null,
          emptyText: 'No expenses in October 2026',
        },
      },
      {
        label: 'failed',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 11,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'The month could not be loaded. Reload the page and try again.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          columns: expect.any(Array),
          rows: [],
          rowKey: 'id',
          loading: false,
          errorMessage: 'The month could not be loaded. Reload the page and try again.',
          emptyText: 'No expenses in November 2026',
        },
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthlyExpenseTableParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 12's third acceptance criterion, and section 8 rule 30: an empty month SAYS it is empty,
   * and the sentence names the month -- a sentence that does not name it is not the criterion being
   * met.
   */
  describe('#get:monthEmptyStateParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: {
          title: 'No expenses in September 2026',
          description: 'Nothing was recorded for this month.',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2031,
            month: 2,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: {
          title: 'No expenses in February 2031',
          description: 'Nothing was recorded for this month.',
        },
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthEmptyStateParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthlyExpensesErrorStateParcel', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'The month could not be loaded. Reload the page and try again.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          title: 'This month could not be read.',
          description: 'The month could not be loaded. Reload the page and try again.',
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'Your session is no longer valid. Sign in again.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          title: 'This month could not be read.',
          description: 'Your session is no longer valid. Sign in again.',
        },
      },
    ]

    test.each(cases)('readingMonthlyExpenses: $factoryParams.errorMessageHashReactive.readingMonthlyExpenses', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.monthlyExpensesErrorStateParcel

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#buildChosenMonthHeading()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'September 2026',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 1999,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'January 1999',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2100,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: 'December 2100',
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.buildChosenMonthHeading()

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#extractMonthName()', () => {
    const cases = [
      {
        params: {
          month: 1,
        },
        expected: 'January',
      },
      {
        params: {
          month: 6,
        },
        expected: 'June',
      },
      {
        params: {
          month: 12,
        },
        expected: 'December',
      },
      {
        params: {
          month: 13,
        },
        expected: '',
      },
      {
        params: {
          month: 0,
        },
        expected: '',
      },
    ]

    test.each(cases)('month: $params.month', ({
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create({
        props: {},
        componentContext: {
          attrs: {
            class: 'unit-page',
          },
        },
        monthValueHashReactive: {
          year: 2026,
          month: 9,
        },
        statusReactive: {
          isLoadingMonthlyExpenses: false,
        },
        errorMessageHashReactive: {
          readingMonthlyExpenses: null,
        },
        responseHashReactive: {
          expenses: [],
          totalAmount: null,
        },
      })

      const actual = context.extractMonthName(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#buildEmptyMonthTitle()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: 'No expenses in September 2026',
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2027,
            month: 4,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: 'No expenses in April 2027',
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.buildEmptyMonthTitle()

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The total is the backend's figure, rendered unchanged -- section 12's first acceptance criterion
   * holds only if this screen never recomputes or rounds it. The zero case is the third criterion's
   * other half: a month that holds nothing shows a zero, RENDERED and not hidden. Before an answer
   * lands, and after one fails, the placeholder shows instead -- never a zero, which would state a
   * total for a month whose entries were never read.
   */
  describe('#extractTotalAmountText()', () => {
    const cases = [
      {
        label: 'landed with a zero total',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: '¥0',
      },
      {
        label: 'landed with a total',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 1234567,
          },
        },
        expected: '¥1,234,567',
      },
      {
        label: 'still being read',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: '—',
      },
      {
        label: 'the read failed',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'This month could not be read.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: '—',
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.extractTotalAmountText()

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#createYenAmountFormatter()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2030,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.createYenAmountFormatter()

      expect(actual)
        .toBeInstanceOf(YenAmountFormatter)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#extractSpentOnText()', () => {
    const cases = [
      {
        params: {
          expense: {
            id: 741,
            spentOn: '2026-09-28',
            amount: 12345,
            memo: null,
            expenseCategory: {
              id: 3,
              name: 'Transport',
            },
          },
        },
        expected: '2026-09-28',
      },
      {
        params: {
          expense: {
            id: 742,
            spentOn: '2026-02-29',
            amount: 500,
            memo: null,
            expenseCategory: {
              id: 5,
              name: 'Meals',
            },
          },
        },
        expected: '2026-02-29',
      },
    ]

    test.each(cases)('spentOn: $params.expense.spentOn', ({
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create({
        props: {},
        componentContext: {
          attrs: {
            class: 'unit-page',
          },
        },
        monthValueHashReactive: {
          year: 2026,
          month: 9,
        },
        statusReactive: {
          isLoadingMonthlyExpenses: false,
        },
        errorMessageHashReactive: {
          readingMonthlyExpenses: null,
        },
        responseHashReactive: {
          expenses: [],
          totalAmount: null,
        },
      })

      const actual = context.extractSpentOnText(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#extractAmountText()', () => {
    const cases = [
      {
        params: {
          expense: {
            id: 741,
            spentOn: '2026-09-28',
            amount: 0,
            memo: null,
            expenseCategory: {
              id: 3,
              name: 'Transport',
            },
          },
        },
        expected: '¥0',
      },
      {
        params: {
          expense: {
            id: 742,
            spentOn: '2026-09-27',
            amount: 980,
            memo: null,
            expenseCategory: {
              id: 5,
              name: 'Meals',
            },
          },
        },
        expected: '¥980',
      },
      {
        params: {
          expense: {
            id: 743,
            spentOn: '2026-09-26',
            amount: 1234567,
            memo: null,
            expenseCategory: {
              id: 7,
              name: 'Supplies',
            },
          },
        },
        expected: '¥1,234,567',
      },
    ]

    test.each(cases)('amount: $params.expense.amount', ({
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create({
        props: {},
        componentContext: {
          attrs: {
            class: 'unit-page',
          },
        },
        monthValueHashReactive: {
          year: 2026,
          month: 9,
        },
        statusReactive: {
          isLoadingMonthlyExpenses: false,
        },
        errorMessageHashReactive: {
          readingMonthlyExpenses: null,
        },
        responseHashReactive: {
          expenses: [],
          totalAmount: null,
        },
      })

      const actual = context.extractAmountText(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#extractExpenseCategoryName()', () => {
    const cases = [
      {
        params: {
          expense: {
            id: 741,
            spentOn: '2026-09-28',
            amount: 100,
            memo: null,
            expenseCategory: {
              id: 3,
              name: 'Transport',
            },
          },
        },
        expected: 'Transport',
      },
      {
        params: {
          expense: {
            id: 742,
            spentOn: '2026-09-27',
            amount: 200,
            memo: null,
            expenseCategory: {
              id: 9,
              name: 'Other',
            },
          },
        },
        expected: 'Other',
      },
    ]

    test.each(cases)('name: $params.expense.expenseCategory.name', ({
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create({
        props: {},
        componentContext: {
          attrs: {
            class: 'unit-page',
          },
        },
        monthValueHashReactive: {
          year: 2026,
          month: 9,
        },
        statusReactive: {
          isLoadingMonthlyExpenses: false,
        },
        errorMessageHashReactive: {
          readingMonthlyExpenses: null,
        },
        responseHashReactive: {
          expenses: [],
          totalAmount: null,
        },
      })

      const actual = context.extractExpenseCategoryName(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 8 rule 24 -- the memo is genuinely optional, and an entry recorded without one reads
   * back as null. It renders as nothing, never as the word "null".
   */
  describe('#extractMemoText()', () => {
    const cases = [
      {
        params: {
          expense: {
            id: 741,
            spentOn: '2026-09-28',
            amount: 100,
            memo: 'Taxi to the Kyoto office',
            expenseCategory: {
              id: 3,
              name: 'Transport',
            },
          },
        },
        expected: 'Taxi to the Kyoto office',
      },
      {
        params: {
          expense: {
            id: 742,
            spentOn: '2026-09-27',
            amount: 200,
            memo: null,
            expenseCategory: {
              id: 5,
              name: 'Meals',
            },
          },
        },
        expected: '',
      },
      {
        params: {
          expense: {
            id: 743,
            spentOn: '2026-09-26',
            amount: 300,
            memo: '',
            expenseCategory: {
              id: 7,
              name: 'Supplies',
            },
          },
        },
        expected: '',
      },
    ]

    test.each(cases)('memo: $params.expense.memo', ({
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create({
        props: {},
        componentContext: {
          attrs: {
            class: 'unit-page',
          },
        },
        monthValueHashReactive: {
          year: 2026,
          month: 9,
        },
        statusReactive: {
          isLoadingMonthlyExpenses: false,
        },
        errorMessageHashReactive: {
          readingMonthlyExpenses: null,
        },
        responseHashReactive: {
          expenses: [],
          totalAmount: null,
        },
      })

      const actual = context.extractMemoText(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#isSpentOnColumn()', () => {
    const cases = [
      {
        params: {
          column: {
            field: 'spentOnText',
            label: 'Date paid',
          },
        },
        expected: true,
      },
      {
        params: {
          column: {
            field: 'amountText',
            label: 'Amount',
          },
        },
        expected: false,
      },
      {
        params: {
          column: {
            field: 'expenseCategoryName',
            label: 'Category',
          },
        },
        expected: false,
      },
      {
        params: {
          column: {
            field: 'memoText',
            label: 'Memo',
          },
        },
        expected: false,
      },
    ]

    test.each(cases)('field: $params.column.field', ({
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create({
        props: {},
        componentContext: {
          attrs: {
            class: 'unit-page',
          },
        },
        monthValueHashReactive: {
          year: 2026,
          month: 9,
        },
        statusReactive: {
          isLoadingMonthlyExpenses: false,
        },
        errorMessageHashReactive: {
          readingMonthlyExpenses: null,
        },
        responseHashReactive: {
          expenses: [],
          totalAmount: null,
        },
      })

      const actual = context.isSpentOnColumn(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The four states, told apart. Section 12's third acceptance criterion depends on the empty one
   * being reachable ONLY when an answer landed with nothing in it -- a read in flight, a failed read
   * and a screen that has asked for nothing at all all have no entries too, and none of them is an
   * empty month.
   */
  describe('#isMonthEmpty()', () => {
    const cases = [
      {
        label: 'landed with nothing',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: true,
      },
      {
        label: 'landed with entries',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [
              {
                id: 741,
                spentOn: '2026-09-28',
                amount: 12345,
                memo: null,
                expenseCategory: {
                  id: 3,
                  name: 'Transport',
                },
              },
            ],
            totalAmount: 12345,
          },
        },
        expected: false,
      },
      {
        label: 'still being read',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: false,
      },
      {
        label: 'the read failed',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'This month could not be read.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: false,
      },
      {
        label: 'nothing asked for yet',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: false,
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.isMonthEmpty()

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#hasMonthlyExpensesLanded()', () => {
    const cases = [
      {
        label: 'a zero total is a real answer',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 0,
          },
        },
        expected: true,
      },
      {
        label: 'a total is a real answer',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: 800,
          },
        },
        expected: true,
      },
      {
        label: 'no answer yet',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: false,
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.hasMonthlyExpensesLanded()

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#isLoadingMonthlyExpenses()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: true,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: true,
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: false,
      },
    ]

    test.each(cases)('isLoadingMonthlyExpenses: $factoryParams.statusReactive.isLoadingMonthlyExpenses', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.isLoadingMonthlyExpenses()

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#hasMonthlyExpensesFailed()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'This month could not be read.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: true,
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: false,
      },
    ]

    test.each(cases)('readingMonthlyExpenses: $factoryParams.errorMessageHashReactive.readingMonthlyExpenses', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.hasMonthlyExpensesFailed()

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#buildSteppedMonth()', () => {
    const cases = [
      {
        label: 'step back inside one year',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          monthOffset: -1,
        },
        expected: {
          year: 2026,
          month: 8,
        },
      },
      {
        label: 'step back across January',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          monthOffset: -1,
        },
        expected: {
          year: 2025,
          month: 12,
        },
      },
      {
        label: 'step forward across December',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          monthOffset: 1,
        },
        expected: {
          year: 2027,
          month: 1,
        },
      },
      {
        label: 'step back past the calendar start',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 1,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          monthOffset: -1,
        },
        expected: {
          year: 0,
          month: 12,
        },
      },
      {
        label: 'step forward past the calendar end',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 9999,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          monthOffset: 1,
        },
        expected: {
          year: 10000,
          month: 1,
        },
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.buildSteppedMonth(params)

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#isWithinCalendar()', () => {
    const cases = [
      {
        params: {
          monthValueHash: {
            year: 2026,
            month: 9,
          },
        },
        expected: true,
      },
      {
        params: {
          monthValueHash: {
            year: 1,
            month: 1,
          },
        },
        expected: true,
      },
      {
        params: {
          monthValueHash: {
            year: 9999,
            month: 12,
          },
        },
        expected: true,
      },
      {
        params: {
          monthValueHash: {
            year: 0,
            month: 12,
          },
        },
        expected: false,
      },
      {
        params: {
          monthValueHash: {
            year: 10000,
            month: 1,
          },
        },
        expected: false,
      },
    ]

    test.each(cases)('year: $params.monthValueHash.year', ({
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create({
        props: {},
        componentContext: {
          attrs: {
            class: 'unit-page',
          },
        },
        monthValueHashReactive: {
          year: 2026,
          month: 9,
        },
        statusReactive: {
          isLoadingMonthlyExpenses: false,
        },
        errorMessageHashReactive: {
          readingMonthlyExpenses: null,
        },
        responseHashReactive: {
          expenses: [],
          totalAmount: null,
        },
      })

      const actual = context.isWithinCalendar(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 8 rule 27: the month is screen state. It is written to the reactive object this screen
   * owns, and nothing pushes a route or a query parameter.
   */
  describe('#applyMonth()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          monthValueHash: {
            year: 2031,
            month: 4,
          },
        },
        expected: {
          year: 2031,
          month: 4,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 1,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          monthValueHash: {
            year: 0,
            month: 12,
          },
        },
        expected: {
          year: 1,
          month: 1,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 9999,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          monthValueHash: {
            year: 10000,
            month: 1,
          },
        },
        expected: {
          year: 9999,
          month: 12,
        },
      },
    ]

    test.each(cases)('year: $params.monthValueHash.year', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.applyMonth(params)

      expect(factoryParams.monthValueHashReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#onClickPreviousMonth()', () => {
    const cases = [
      {
        label: 'inside one year',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          year: 2026,
          month: 8,
        },
      },
      {
        label: 'across January',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          year: 2025,
          month: 12,
        },
      },
      {
        label: 'at the calendar start',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 1,
            month: 1,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          year: 1,
          month: 1,
        },
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.onClickPreviousMonth()

      expect(factoryParams.monthValueHashReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#onClickNextMonth()', () => {
    const cases = [
      {
        label: 'inside one year',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          year: 2026,
          month: 10,
        },
      },
      {
        label: 'across December',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          year: 2027,
          month: 1,
        },
      },
      {
        label: 'at the calendar end',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 9999,
            month: 12,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          year: 9999,
          month: 12,
        },
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.onClickNextMonth()

      expect(factoryParams.monthValueHashReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#onChangeYear()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          payload: {
            value: 2024,
          },
        },
        expected: {
          year: 2024,
          month: 9,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 2,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          payload: {
            value: 2099,
          },
        },
        expected: {
          year: 2099,
          month: 2,
        },
      },
    ]

    test.each(cases)('value: $params.payload.value', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.onChangeYear(params)

      expect(factoryParams.monthValueHashReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#onChangeMonth()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          payload: {
            value: 1,
          },
        },
        expected: {
          year: 2026,
          month: 1,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        params: {
          payload: {
            value: 12,
          },
        },
        expected: {
          year: 2026,
          month: 12,
        },
      },
    ]

    test.each(cases)('value: $params.payload.value', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.onChangeMonth(params)

      expect(factoryParams.monthValueHashReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#onClickRetry()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'The month could not be loaded. Reload the page and try again.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          readingMonthlyExpenses: null,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 10,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'Your session is no longer valid. Sign in again.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          readingMonthlyExpenses: null,
        },
      },
    ]

    test.each(cases)('readingMonthlyExpenses: $factoryParams.errorMessageHashReactive.readingMonthlyExpenses', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.onClickRetry()

      expect(factoryParams.errorMessageHashReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#clearMonthlyExpensesFailure()', () => {
    const cases = [
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 9,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: 'The month could not be loaded. Reload the page and try again.',
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          readingMonthlyExpenses: null,
        },
      },
      {
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
            month: 10,
          },
          statusReactive: {
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
        },
        expected: {
          readingMonthlyExpenses: null,
        },
      },
    ]

    test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.clearMonthlyExpensesFailure()

      expect(factoryParams.errorMessageHashReactive)
        .toEqual(expected)
    })
  })
})
