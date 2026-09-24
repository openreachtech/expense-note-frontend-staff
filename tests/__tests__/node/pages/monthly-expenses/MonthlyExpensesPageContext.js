import {
  nextTick,
  reactive,
} from 'vue'

import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import MonthlyExpensesQueryGraphqlCapsule from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlCapsule.js'

import YenAmountFormatter from '~/app/modules/YenAmountFormatter.js'

import MonthlyExpensesPageContext from '~/pages/monthly-expenses/MonthlyExpensesPageContext.js'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'monthly-expenses-capsule-001',
                },
                invokeRequestOnEvent: async () => {},
              },
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'monthly-expenses-capsule-002',
                },
                invokeRequestOnEvent: async () => {},
              },
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'monthly-expenses-capsule-003',
                },
                invokeRequestOnEvent: async () => {},
              },
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'monthly-expenses-capsule-004',
                },
                invokeRequestOnEvent: async () => {},
              },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-005',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-006',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-007',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-008',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-009',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-010',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-011',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-012',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-013',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-014',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-015',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'monthly-expenses-capsule-016',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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

      describe('#graphqlClientHash', () => {
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'kept-graphql-client-hash-first-capsule',
                  },
                  invokeRequestOnEvent: async () => {},
                },
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
              graphqlClientHash: {
                monthlyExpenses: {
                  capsuleRef: {
                    value: 'kept-graphql-client-hash-second-capsule',
                  },
                  invokeRequestOnEvent: async () => {},
                },
              },
            },
          },
        ]

        test.each(cases)('capsuleRef.value: $params.graphqlClientHash.monthlyExpenses.capsuleRef.value', ({
          params,
        }) => {
          const actual = new MonthlyExpensesPageContext(params)

          expect(actual)
            .toHaveProperty('graphqlClientHash', params.graphqlClientHash)
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: MonthlyExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      monthlyExpenses: {
                        expenses: [
                          {
                            id: 10200011,
                            spentOn: '2026-09-20',
                            amount: 1200,
                            memo: 'Train fare to the client',
                            status: 'recorded',
                            expenseCategory: {
                              id: 10000001,
                              name: 'transport',
                              displayOrder: 1,
                            },
                            createdAt: '2026-09-20T11:30:00.000Z',
                            updatedAt: '2026-09-20T11:30:00.000Z',
                          },
                        ],
                        totalAmount: 1200,
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: MonthlyExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      monthlyExpenses: {
                        expenses: [],
                        totalAmount: 0,
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-019',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-020',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-021',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-022',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-023',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-024',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-025',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-026',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-027',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-028',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-029',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-030',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-031',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-032',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-033',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-034',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-035',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-036',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-037',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-038',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-039',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-040',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-041',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-042',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-043',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-044',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-045',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-046',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-047',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-048',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-049',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-050',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-051',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-052',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-053',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-054',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-055',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-056',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-057',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-058',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-059',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-060',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-061',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-062',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-063',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-064',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-065',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-066',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-067',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-068',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-069',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-070',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-071',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-072',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-073',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-074',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-075',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-076',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-077',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-078',
              },
              invokeRequestOnEvent: async () => {},
            },
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
        graphqlClientHash: {
          monthlyExpenses: {
            capsuleRef: {
              value: 'monthly-expenses-capsule-079',
            },
            invokeRequestOnEvent: async () => {},
          },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-080',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-081',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-082',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-083',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-084',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-085',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-086',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-087',
              },
              invokeRequestOnEvent: async () => {},
            },
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
        graphqlClientHash: {
          monthlyExpenses: {
            capsuleRef: {
              value: 'monthly-expenses-capsule-088',
            },
            invokeRequestOnEvent: async () => {},
          },
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
        graphqlClientHash: {
          monthlyExpenses: {
            capsuleRef: {
              value: 'monthly-expenses-capsule-089',
            },
            invokeRequestOnEvent: async () => {},
          },
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
        graphqlClientHash: {
          monthlyExpenses: {
            capsuleRef: {
              value: 'monthly-expenses-capsule-090',
            },
            invokeRequestOnEvent: async () => {},
          },
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
        graphqlClientHash: {
          monthlyExpenses: {
            capsuleRef: {
              value: 'monthly-expenses-capsule-091',
            },
            invokeRequestOnEvent: async () => {},
          },
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
        graphqlClientHash: {
          monthlyExpenses: {
            capsuleRef: {
              value: 'monthly-expenses-capsule-092',
            },
            invokeRequestOnEvent: async () => {},
          },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-093',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-094',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-095',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-096',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-097',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-098',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-099',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-100',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-101',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-102',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-103',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-104',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-105',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-106',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-107',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-108',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-109',
              },
              invokeRequestOnEvent: async () => {},
            },
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
        graphqlClientHash: {
          monthlyExpenses: {
            capsuleRef: {
              value: 'monthly-expenses-capsule-110',
            },
            invokeRequestOnEvent: async () => {},
          },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-111',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-112',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-113',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-114',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-115',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-116',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-117',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-118',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-119',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-120',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-121',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-122',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-123',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: MonthlyExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      monthlyExpenses: {
                        expenses: [],
                        totalAmount: 0,
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: MonthlyExpensesQueryGraphqlCapsule.create({
                  result: {
                    [RESPONSE_CONTENT_FIELD]: {
                      monthlyExpenses: {
                        expenses: [],
                        totalAmount: 0,
                      },
                    },
                  },
                }),
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          readingMonthlyExpenses: null,
        },
      },
    ]

    test.each(cases)('readingMonthlyExpenses: $factoryParams.errorMessageHashReactive.readingMonthlyExpenses', async ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      await context.onClickRetry()

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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-126',
              },
              invokeRequestOnEvent: async () => {},
            },
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'monthly-expenses-capsule-127',
              },
              invokeRequestOnEvent: async () => {},
            },
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

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthlyExpensesCapsule', () => {
    describe('should answer the capsule the injected client is holding', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'capsule-getter-first-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: 'capsule-getter-first-capsule',
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'capsule-getter-second-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: 'capsule-getter-second-capsule',
        },
      ]

      test.each(cases)('capsuleRef.value: $factoryParams.graphqlClientHash.monthlyExpenses.capsuleRef.value', ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)

        const actual = context.monthlyExpensesCapsule

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthlyExpensesLauncherHooks', () => {
    describe('should answer the two hooks the launcher calls', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'hooks-shape-first-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            beforeRequest: expect.any(Function),
            afterRequest: expect.any(Function),
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'hooks-shape-second-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            beforeRequest: expect.any(Function),
            afterRequest: expect.any(Function),
          },
        },
      ]

      test.each(cases)('capsuleRef.value: $factoryParams.graphqlClientHash.monthlyExpenses.capsuleRef.value', ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)

        const actual = context.monthlyExpensesLauncherHooks

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The waiting state is the request's own, and this is where that is checked: the flag is raised
   * by the hook the launcher calls on its way out and lowered by the one it calls on the way back,
   * rather than by this class around the call. `beforeRequest` answering false is what lets the
   * request proceed at all -- true aborts it.
   */
  describe('#get:monthlyExpensesLauncherHooks', () => {
    describe('should raise the waiting flag before the request, and let it proceed', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'hooks-before-first-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            isLoadingMonthlyExpenses: true,
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'hooks-before-second-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            isLoadingMonthlyExpenses: true,
          },
        },
      ]

      test.each(cases)('capsuleRef.value: $factoryParams.graphqlClientHash.monthlyExpenses.capsuleRef.value', async ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)
        const hooks = context.monthlyExpensesLauncherHooks

        const actual = await hooks.beforeRequest()

        expect(actual)
          .toBeFalsy()
        expect(factoryParams.statusReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#get:monthlyExpensesLauncherHooks', () => {
    describe('should lower the waiting flag after the request', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'hooks-after-first-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            isLoadingMonthlyExpenses: false,
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
              isLoadingMonthlyExpenses: false,
            },
            errorMessageHashReactive: {
              readingMonthlyExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              totalAmount: null,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'hooks-after-second-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            isLoadingMonthlyExpenses: false,
          },
        },
      ]

      test.each(cases)('capsuleRef.value: $factoryParams.graphqlClientHash.monthlyExpenses.capsuleRef.value', async ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)
        const hooks = context.monthlyExpensesLauncherHooks

        await hooks.afterRequest()

        expect(factoryParams.statusReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#startLoadingMonthlyExpenses()', () => {
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'start-loading-first-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          isLoadingMonthlyExpenses: true,
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'start-loading-second-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          isLoadingMonthlyExpenses: true,
        },
      },
    ]

    test.each(cases)('isLoadingMonthlyExpenses: $factoryParams.statusReactive.isLoadingMonthlyExpenses', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.startLoadingMonthlyExpenses()

      expect(factoryParams.statusReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#finishLoadingMonthlyExpenses()', () => {
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'finish-loading-first-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          isLoadingMonthlyExpenses: false,
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
            isLoadingMonthlyExpenses: false,
          },
          errorMessageHashReactive: {
            readingMonthlyExpenses: null,
          },
          responseHashReactive: {
            expenses: [],
            totalAmount: null,
          },
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'finish-loading-second-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          isLoadingMonthlyExpenses: false,
        },
      },
    ]

    test.each(cases)('isLoadingMonthlyExpenses: $factoryParams.statusReactive.isLoadingMonthlyExpenses', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.finishLoadingMonthlyExpenses()

      expect(factoryParams.statusReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#buildChosenMonth()', () => {
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'build-chosen-month-first-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          year: 2026,
          month: 9,
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'build-chosen-month-second-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        expected: {
          year: 1999,
          month: 12,
        },
      },
    ]

    test.each(cases)('year: $factoryParams.monthValueHashReactive.year', ({
      factoryParams,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.buildChosenMonth()

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 12's second acceptance criterion -- the first and the last day of the month are in, the
   * days either side of them are out -- has no frontend surface beyond this: the screen names a
   * month and never a date range, so the boundary is the backend's to draw and there is nothing
   * here that could draw it differently. What is checked is that the variables carry the pair and
   * nothing else.
   */
  describe('#buildMonthlyExpensesVariables()', () => {
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'build-variables-first-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          monthValueHash: {
            year: 2026,
            month: 9,
          },
        },
        expected: {
          input: {
            year: 2026,
            month: 9,
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'build-variables-second-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          monthValueHash: {
            year: 2025,
            month: 2,
          },
        },
        expected: {
          input: {
            year: 2025,
            month: 2,
          },
        },
      },
    ]

    test.each(cases)('monthValueHash.month: $params.monthValueHash.month', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.buildMonthlyExpensesVariables(params)

      expect(actual)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#clearMonthlyExpenses()', () => {
    describe('should take the previous month off the screen, total included', () => {
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
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'transport',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
              ],
              totalAmount: 1200,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'clear-monthly-expenses-first-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            expenses: [],
            totalAmount: null,
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
              isLoadingMonthlyExpenses: false,
            },
            errorMessageHashReactive: {
              readingMonthlyExpenses: null,
            },
            responseHashReactive: {
              expenses: [],
              totalAmount: 0,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'clear-monthly-expenses-second-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            expenses: [],
            totalAmount: null,
          },
        },
      ]

      test.each(cases)('totalAmount: $factoryParams.responseHashReactive.totalAmount', ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)

        context.clearMonthlyExpenses()

        expect(factoryParams.responseHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The stale-response guard of `ai/contexts/uiux-context-monthly-summary.md` section 4.2, at its
   * own seam. The month control is never disabled while a read is in flight, so three quick presses
   * of "Previous" put three requests in flight; this is what decides which of their answers is
   * allowed on screen.
   */
  describe('#isStaleResponse()', () => {
    const cases = [
      {
        label: 'the month still chosen',
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'is-stale-same-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          monthValueHash: {
            year: 2026,
            month: 9,
          },
        },
        expected: false,
      },
      {
        label: 'another month of the same year',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2026,
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'is-stale-other-month-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          monthValueHash: {
            year: 2026,
            month: 9,
          },
        },
        expected: true,
      },
      {
        label: 'the same month of another year',
        factoryParams: {
          props: {},
          componentContext: {
            attrs: {
              class: 'unit-page',
            },
          },
          monthValueHashReactive: {
            year: 2024,
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'is-stale-other-year-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          monthValueHash: {
            year: 2026,
            month: 9,
          },
        },
        expected: true,
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      const actual = context.isStaleResponse(params)

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 12's first acceptance criterion, on the side the frontend owns: the total the screen
   * shows is the one the answer carried, and never a figure this class computes from the rows it
   * happens to be holding. A frontend sum would be a second opinion, and the two could disagree.
   *
   * Section 12's fourth criterion is here too: an entry recorded, corrected or removed on the other
   * screen reaches this one by the next read landing, and what that costs here is that the previous
   * answer is replaced outright rather than merged into.
   */
  describe('#holdMonthlyExpenses()', () => {
    describe('should hold the entries and the total the answer carried', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'hold-monthly-expenses-first-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          params: {
            capsule: MonthlyExpensesQueryGraphqlCapsule.create({
              result: {
                [RESPONSE_CONTENT_FIELD]: {
                  monthlyExpenses: {
                    expenses: [
                      {
                        id: 10200011,
                        spentOn: '2026-09-20',
                        amount: 1200,
                        memo: 'Train fare to the client',
                        status: 'recorded',
                        expenseCategory: {
                          id: 10000001,
                          name: 'transport',
                          displayOrder: 1,
                        },
                        createdAt: '2026-09-20T11:30:00.000Z',
                        updatedAt: '2026-09-20T11:30:00.000Z',
                      },
                      {
                        id: 10200012,
                        spentOn: '2026-09-04',
                        amount: 3400,
                        memo: 'Lunch with the supplier',
                        status: 'recorded',
                        expenseCategory: {
                          id: 10000002,
                          name: 'meals',
                          displayOrder: 2,
                        },
                        createdAt: '2026-09-04T09:15:00.000Z',
                        updatedAt: '2026-09-04T09:15:00.000Z',
                      },
                    ],
                    totalAmount: 4600,
                  },
                },
              },
            }),
          },
          expected: {
            expenses: [
              {
                id: 10200011,
                spentOn: '2026-09-20',
                amount: 1200,
                memo: 'Train fare to the client',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'transport',
                  displayOrder: 1,
                },
                createdAt: '2026-09-20T11:30:00.000Z',
                updatedAt: '2026-09-20T11:30:00.000Z',
              },
              {
                id: 10200012,
                spentOn: '2026-09-04',
                amount: 3400,
                memo: 'Lunch with the supplier',
                status: 'recorded',
                expenseCategory: {
                  id: 10000002,
                  name: 'meals',
                  displayOrder: 2,
                },
                createdAt: '2026-09-04T09:15:00.000Z',
                updatedAt: '2026-09-04T09:15:00.000Z',
              },
            ],
            totalAmount: 4600,
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
              expenses: [
                {
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'transport',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
              ],
              totalAmount: 1200,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: 'hold-monthly-expenses-second-capsule',
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          params: {
            capsule: MonthlyExpensesQueryGraphqlCapsule.create({
              result: {
                [RESPONSE_CONTENT_FIELD]: {
                  monthlyExpenses: {
                    expenses: [
                      {
                        id: 10200013,
                        spentOn: '2026-10-02',
                        amount: 780,
                        memo: null,
                        status: 'recorded',
                        expenseCategory: {
                          id: 10000003,
                          name: 'supplies',
                          displayOrder: 3,
                        },
                        createdAt: '2026-10-02T02:05:00.000Z',
                        updatedAt: '2026-10-02T02:05:00.000Z',
                      },
                    ],
                    totalAmount: 780,
                  },
                },
              },
            }),
          },
          expected: {
            expenses: [
              {
                id: 10200013,
                spentOn: '2026-10-02',
                amount: 780,
                memo: null,
                status: 'recorded',
                expenseCategory: {
                  id: 10000003,
                  name: 'supplies',
                  displayOrder: 3,
                },
                createdAt: '2026-10-02T02:05:00.000Z',
                updatedAt: '2026-10-02T02:05:00.000Z',
              },
            ],
            totalAmount: 780,
          },
        },
      ]

      test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)

        context.holdMonthlyExpenses(params)

        expect(factoryParams.responseHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 12's sixth acceptance criterion, on the side the frontend owns. The backend refuses a
   * read with no session before it looks at the month and before it reads a row; what has to be
   * true here is that a member of staff is told in the sentence checkpoint 13 mapped, and never in
   * the dotted code the response actually carried.
   *
   * The two input refusals are mapped as well, and the reason they are is that a code with no
   * sentence would reach the screen as itself.
   */
  describe('#surfaceMonthlyExpensesFailure()', () => {
    const cases = [
      {
        label: 'refused for want of a session',
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'surface-failure-session-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          capsule: MonthlyExpensesQueryGraphqlCapsule.create({
            result: {
              errors: [
                {
                  message: '204.Q004.001',
                },
              ],
            },
          }),
        },
        expected: {
          readingMonthlyExpenses: 'Your session is no longer valid. Sign in again.',
        },
      },
      {
        label: 'refused for an unreadable year',
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'surface-failure-year-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          capsule: MonthlyExpensesQueryGraphqlCapsule.create({
            result: {
              errors: [
                {
                  message: '203.Q004.001',
                },
              ],
            },
          }),
        },
        expected: {
          readingMonthlyExpenses: 'The month could not be loaded. Reload the page and try again.',
        },
      },
      {
        label: 'failed on the way there, with no code of the backend at all',
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
          graphqlClientHash: {
            monthlyExpenses: {
              capsuleRef: {
                value: 'surface-failure-network-capsule',
              },
              invokeRequestOnEvent: async () => {},
            },
          },
        },
        params: {
          capsule: MonthlyExpensesQueryGraphqlCapsule.create({
            result: {
              errors: [
                {
                  message: '192.X000.001',
                },
              ],
            },
          }),
        },
        expected: {
          readingMonthlyExpenses: 'Something went wrong. Try again.',
        },
      },
    ]

    test.each(cases)('label: $label', ({
      factoryParams,
      params,
      expected,
    }) => {
      const context = MonthlyExpensesPageContext.create(factoryParams)

      context.surfaceMonthlyExpensesFailure(params)

      expect(factoryParams.errorMessageHashReactive)
        .toEqual(expected)
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#readMonthlyExpenses()', () => {
    describe('should ask the API for the month the screen is showing, with its own hooks', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            variables: {
              input: {
                year: 2026,
                month: 9,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            variables: {
              input: {
                year: 2025,
                month: 2,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('month: $factoryParams.monthValueHashReactive.month', async ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.monthlyExpenses, 'invokeRequestOnEvent')

        await context.readMonthlyExpenses()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * `ai/contexts/uiux-context-monthly-summary.md` section 4.4 -- the rows and the total go before
   * the request goes out, and not once its answer lands. What is asserted is the state at the
   * moment the request is made, which is why the stubbed invocation is the thing that reads it:
   * after the read has finished the answer is already back and there would be nothing left to see.
   */
  describe('#readMonthlyExpenses()', () => {
    describe('should take the previous month off the screen before the request goes out', () => {
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
              month: 10,
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
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'transport',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
              ],
              totalAmount: 1200,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            expenses: [],
            totalAmount: null,
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
              month: 3,
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
                  id: 10200013,
                  spentOn: '2025-02-11',
                  amount: 780,
                  memo: null,
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000003,
                    name: 'supplies',
                    displayOrder: 3,
                  },
                  createdAt: '2025-02-11T02:05:00.000Z',
                  updatedAt: '2025-02-11T02:05:00.000Z',
                },
              ],
              totalAmount: 780,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            expenses: [],
            totalAmount: null,
          },
        },
      ]

      test.each(cases)('month: $factoryParams.monthValueHashReactive.month', async ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)
        const { responseHashReactive } = factoryParams
        const screenAtRequest = {}

        jest.spyOn(factoryParams.graphqlClientHash.monthlyExpenses, 'invokeRequestOnEvent')
          .mockImplementation(async () => {
            screenAtRequest.expenses = responseHashReactive.expenses
            screenAtRequest.totalAmount = responseHashReactive.totalAmount
          })

        await context.readMonthlyExpenses()

        expect(screenAtRequest)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 12's first, third and fourth acceptance criteria meet here, because all three are about
   * what a landed answer puts on screen. The total is the answer's own figure; a month holding
   * nothing lands a real zero rather than the placeholder, which is what tells an empty month apart
   * from an unread one; and the entries a previous read left are replaced outright, which is how a
   * recording, a correction or a removal made on the other screen shows up on the next read.
   */
  describe('#readMonthlyExpenses()', () => {
    describe('should hold the answer the read landed', () => {
      const cases = [
        {
          label: 'a month holding two entries',
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'transport',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                            {
                              id: 10200012,
                              spentOn: '2026-09-04',
                              amount: 3400,
                              memo: 'Lunch with the supplier',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000002,
                                name: 'meals',
                                displayOrder: 2,
                              },
                              createdAt: '2026-09-04T09:15:00.000Z',
                              updatedAt: '2026-09-04T09:15:00.000Z',
                            },
                          ],
                          totalAmount: 4600,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            expenses: [
              {
                id: 10200011,
                spentOn: '2026-09-20',
                amount: 1200,
                memo: 'Train fare to the client',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'transport',
                  displayOrder: 1,
                },
                createdAt: '2026-09-20T11:30:00.000Z',
                updatedAt: '2026-09-20T11:30:00.000Z',
              },
              {
                id: 10200012,
                spentOn: '2026-09-04',
                amount: 3400,
                memo: 'Lunch with the supplier',
                status: 'recorded',
                expenseCategory: {
                  id: 10000002,
                  name: 'meals',
                  displayOrder: 2,
                },
                createdAt: '2026-09-04T09:15:00.000Z',
                updatedAt: '2026-09-04T09:15:00.000Z',
              },
            ],
            totalAmount: 4600,
          },
        },
        {
          label: 'a month holding nothing, which lands a real zero',
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            expenses: [],
            totalAmount: 0,
          },
        },
        {
          label: 'a month whose entries replace the ones a previous read left',
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
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'transport',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
              ],
              totalAmount: 1200,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1500,
                              memo: 'Train fare to the client, corrected',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'transport',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-21T08:00:00.000Z',
                            },
                          ],
                          totalAmount: 1500,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            expenses: [
              {
                id: 10200011,
                spentOn: '2026-09-20',
                amount: 1500,
                memo: 'Train fare to the client, corrected',
                status: 'recorded',
                expenseCategory: {
                  id: 10000001,
                  name: 'transport',
                  displayOrder: 1,
                },
                createdAt: '2026-09-20T11:30:00.000Z',
                updatedAt: '2026-09-21T08:00:00.000Z',
              },
            ],
            totalAmount: 1500,
          },
        },
      ]

      test.each(cases)('label: $label', async ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)

        await context.readMonthlyExpenses()

        expect(factoryParams.responseHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * Section 12's sixth acceptance criterion, end to end on this side: a read refused for want of a
   * session reaches a member of staff as a sentence, the screen holds no figures for a month that
   * was never read, and `204.Q004.001` itself never appears.
   */
  describe('#readMonthlyExpenses()', () => {
    describe('should show a refused read as its sentence, and hold no figures', () => {
      const cases = [
        {
          label: 'refused for want of a session',
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
                  id: 10200011,
                  spentOn: '2026-09-20',
                  amount: 1200,
                  memo: 'Train fare to the client',
                  status: 'recorded',
                  expenseCategory: {
                    id: 10000001,
                    name: 'transport',
                    displayOrder: 1,
                  },
                  createdAt: '2026-09-20T11:30:00.000Z',
                  updatedAt: '2026-09-20T11:30:00.000Z',
                },
              ],
              totalAmount: 1200,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '204.Q004.001',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            errorMessageHash: {
              readingMonthlyExpenses: 'Your session is no longer valid. Sign in again.',
            },
            responseHash: {
              expenses: [],
              totalAmount: null,
            },
          },
        },
        {
          label: 'refused for an unreadable month',
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page monthly-expenses',
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      errors: [
                        {
                          message: '203.Q004.002',
                        },
                      ],
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            errorMessageHash: {
              readingMonthlyExpenses: 'The month could not be loaded. Reload the page and try again.',
            },
            responseHash: {
              expenses: [],
              totalAmount: null,
            },
          },
        },
      ]

      test.each(cases)('label: $label', async ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)

        await context.readMonthlyExpenses()

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected.errorMessageHash)
        expect(factoryParams.responseHashReactive)
          .toEqual(expected.responseHash)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The stale-response guard, exercised through the read itself. The month is written while the
   * request is in flight -- which is what a second press of "Previous" does, the button never being
   * disabled -- and the answer that comes back is for the month left behind. It is discarded: the
   * screen keeps waiting for the month now chosen rather than filling with another one's figures.
   */
  describe('#readMonthlyExpenses()', () => {
    describe('should discard an answer for a month the screen is no longer showing', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [
                            {
                              id: 10200011,
                              spentOn: '2026-09-20',
                              amount: 1200,
                              memo: 'Train fare to the client',
                              status: 'recorded',
                              expenseCategory: {
                                id: 10000001,
                                name: 'transport',
                                displayOrder: 1,
                              },
                              createdAt: '2026-09-20T11:30:00.000Z',
                              updatedAt: '2026-09-20T11:30:00.000Z',
                            },
                          ],
                          totalAmount: 1200,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          params: {
            month: 7,
          },
          expected: {
            expenses: [],
            totalAmount: null,
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          params: {
            month: 11,
          },
          expected: {
            expenses: [],
            totalAmount: null,
          },
        },
      ]

      test.each(cases)('month written while in flight: $params.month', async ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)
        const { monthValueHashReactive } = factoryParams

        jest.spyOn(factoryParams.graphqlClientHash.monthlyExpenses, 'invokeRequestOnEvent')
          .mockImplementation(async () => {
            monthValueHashReactive.month = params.month
          })

        await context.readMonthlyExpenses()

        expect(factoryParams.responseHashReactive)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#onChangeChosenMonth()', () => {
    describe('should take the previous month failure off the screen, and read', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            errorMessageHash: {
              readingMonthlyExpenses: null,
            },
            request: {
              variables: {
                input: {
                  year: 2026,
                  month: 10,
                },
              },
              hooks: expect.objectContaining({
                beforeRequest: expect.any(Function),
                afterRequest: expect.any(Function),
              }),
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
              month: 4,
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            errorMessageHash: {
              readingMonthlyExpenses: null,
            },
            request: {
              variables: {
                input: {
                  year: 2025,
                  month: 4,
                },
              },
              hooks: expect.objectContaining({
                beforeRequest: expect.any(Function),
                afterRequest: expect.any(Function),
              }),
            },
          },
        },
      ]

      test.each(cases)('month: $factoryParams.monthValueHashReactive.month', async ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.monthlyExpenses, 'invokeRequestOnEvent')

        await context.onChangeChosenMonth()

        expect(factoryParams.errorMessageHashReactive)
          .toEqual(expected.errorMessageHash)
        expect(invokeSpy)
          .toHaveBeenCalledWith(expected.request)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The opening read. The watcher this method registers is `immediate`, so the month the screen
   * opens on is read without a second call beside it -- and section 12.2's "opens on the current
   * month" is the pair `.buildCurrentMonth()` seeded, not anything read from the response.
   */
  describe('#setupComponent()', () => {
    describe('should read the month the screen opens on', () => {
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            variables: {
              input: {
                year: 2026,
                month: 9,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            variables: {
              input: {
                year: 1999,
                month: 12,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('month: $factoryParams.monthValueHashReactive.month', ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.monthlyExpenses, 'invokeRequestOnEvent')

        context.setupComponent()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  /*
   * The other half of the one watcher: a month change re-reads, with no page load and no route
   * change (`ai/contexts/uiux-context.md` section 8 rule 27). This is the one describe in this file
   * whose month is a real `reactive()` rather than the plain object every other case injects --
   * reactivity is precisely what is under test, and a plain object could not carry it.
   *
   * The request the opening `immediate` run makes is deliberately left outside the spy, which is
   * installed after `#setupComponent()`: what is asserted is that the CHANGE alone reaches the API.
   */
  describe('#setupComponent()', () => {
    describe('should read again when the month changes', () => {
      const cases = [
        {
          label: 'a step to the next month',
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page',
              },
            },
            monthValueHashReactive: reactive({
              year: 2026,
              month: 9,
            }),
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          params: {
            year: 2026,
            month: 10,
          },
          expected: {
            variables: {
              input: {
                year: 2026,
                month: 10,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
        {
          label: 'a step back across January, which moves the year as well',
          factoryParams: {
            props: {},
            componentContext: {
              attrs: {
                class: 'unit-page monthly-expenses',
              },
            },
            monthValueHashReactive: reactive({
              year: 2026,
              month: 1,
            }),
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          params: {
            year: 2025,
            month: 12,
          },
          expected: {
            variables: {
              input: {
                year: 2025,
                month: 12,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('label: $label', async ({
        factoryParams,
        params,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)

        context.setupComponent()

        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.monthlyExpenses, 'invokeRequestOnEvent')

        context.applyMonth({
          monthValueHash: params,
        })
        await nextTick()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})

describe('MonthlyExpensesPageContext', () => {
  describe('#onClickRetry()', () => {
    describe('should read the month the screen is showing again', () => {
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
              readingMonthlyExpenses: 'Your session is no longer valid. Sign in again.',
            },
            responseHashReactive: {
              expenses: [],
              totalAmount: null,
            },
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            variables: {
              input: {
                year: 2026,
                month: 9,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
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
              month: 6,
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
            graphqlClientHash: {
              monthlyExpenses: {
                capsuleRef: {
                  value: MonthlyExpensesQueryGraphqlCapsule.create({
                    result: {
                      [RESPONSE_CONTENT_FIELD]: {
                        monthlyExpenses: {
                          expenses: [],
                          totalAmount: 0,
                        },
                      },
                    },
                  }),
                },
                invokeRequestOnEvent: async () => {},
              },
            },
          },
          expected: {
            variables: {
              input: {
                year: 2025,
                month: 6,
              },
            },
            hooks: expect.objectContaining({
              beforeRequest: expect.any(Function),
              afterRequest: expect.any(Function),
            }),
          },
        },
      ]

      test.each(cases)('month: $factoryParams.monthValueHashReactive.month', async ({
        factoryParams,
        expected,
      }) => {
        const context = MonthlyExpensesPageContext.create(factoryParams)
        const invokeSpy = jest.spyOn(factoryParams.graphqlClientHash.monthlyExpenses, 'invokeRequestOnEvent')

        await context.onClickRetry()

        expect(invokeSpy)
          .toHaveBeenCalledWith(expected)
      })
    })
  })
})
