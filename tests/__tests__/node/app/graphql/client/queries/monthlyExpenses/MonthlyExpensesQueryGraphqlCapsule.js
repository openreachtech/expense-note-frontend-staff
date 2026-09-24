import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import MonthlyExpensesQueryGraphqlCapsule from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = MonthlyExpensesQueryGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('#get:monthlyExpensesValueHash', () => {
    /*
     * The result carries the month's entries and the total side by side, and the wrapper shares its
     * name with nothing inside it — `#expenses` is the array, `#totalAmount` the sum. Each is
     * asserted separately below; the wrapper is asserted whole here, a row's nested category
     * included, so a field the capsule quietly drops on the way through fails.
     */
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                monthlyExpenses: {
                  expenses: [
                    {
                      id: 70011,
                      spentOn: '2026-09-14',
                      amount: 1200,
                      memo: 'Train fare to the client',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71001,
                        name: 'transport',
                        displayOrder: 1,
                      },
                      createdAt: '2026-09-14T20:11:00.000Z',
                      updatedAt: '2026-09-14T20:11:00.000Z',
                    },
                  ],
                  totalAmount: 1200,
                },
              },
            },
          },
          expected: {
            expenses: [
              {
                id: 70011,
                spentOn: '2026-09-14',
                amount: 1200,
                memo: 'Train fare to the client',
                status: 'recorded',
                expenseCategory: {
                  id: 71001,
                  name: 'transport',
                  displayOrder: 1,
                },
                createdAt: '2026-09-14T20:11:00.000Z',
                updatedAt: '2026-09-14T20:11:00.000Z',
              },
            ],
            totalAmount: 1200,
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                monthlyExpenses: {
                  expenses: [
                    {
                      id: 70012,
                      spentOn: '2026-08-15',
                      amount: 3400,
                      memo: null,
                      status: 'recorded',
                      expenseCategory: {
                        id: 71002,
                        name: 'meals',
                        displayOrder: 2,
                      },
                      createdAt: '2026-08-15T12:45:00.000Z',
                      updatedAt: '2026-08-15T12:45:00.000Z',
                    },
                    {
                      id: 70013,
                      spentOn: '2026-08-13',
                      amount: 880,
                      memo: 'Coffee with the supplier',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71003,
                        name: 'supplies',
                        displayOrder: 3,
                      },
                      createdAt: '2026-08-13T09:02:00.000Z',
                      updatedAt: '2026-08-13T09:02:00.000Z',
                    },
                  ],
                  totalAmount: 4280,
                },
              },
            },
          },
          expected: {
            expenses: [
              {
                id: 70012,
                spentOn: '2026-08-15',
                amount: 3400,
                memo: null,
                status: 'recorded',
                expenseCategory: {
                  id: 71002,
                  name: 'meals',
                  displayOrder: 2,
                },
                createdAt: '2026-08-15T12:45:00.000Z',
                updatedAt: '2026-08-15T12:45:00.000Z',
              },
              {
                id: 70013,
                spentOn: '2026-08-13',
                amount: 880,
                memo: 'Coffee with the supplier',
                status: 'recorded',
                expenseCategory: {
                  id: 71003,
                  name: 'supplies',
                  displayOrder: 3,
                },
                createdAt: '2026-08-13T09:02:00.000Z',
                updatedAt: '2026-08-13T09:02:00.000Z',
              },
            ],
            totalAmount: 4280,
          },
        },
      ]

      test.each(cases)('id: $factoryParams.result.data.monthlyExpenses.expenses.0.id', ({
        factoryParams,
        expected,
      }) => {
        const capsule = MonthlyExpensesQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.monthlyExpensesValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('#get:monthlyExpensesValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = MonthlyExpensesQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.monthlyExpensesValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('#get:expenses', () => {
    /*
     * The second case carries an entry recorded without a memo. The contract makes `memo` the one
     * nullable field of the row, and the criterion is that such an entry reads back rather than
     * failing — so a null memo is carried through as null, not turned into a string on the way.
     *
     * The order the entries arrive in is the order they read back in. Spec section 6 puts the
     * newest `spentOn` first and breaks a tie on the more recently recorded, and the first case
     * carries such a tie — two entries dated `2026-09-18`. The capsule sorts nothing and must not
     * start to: the operation answers in that order, and reordering here would give the screen a
     * second opinion about it.
     */
    describe('to be the entries the screen lists', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                monthlyExpenses: {
                  expenses: [
                    {
                      id: 70011,
                      spentOn: '2026-09-18',
                      amount: 1650,
                      memo: 'Dinner with the visiting audit team',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71002,
                        name: 'meals',
                        displayOrder: 2,
                      },
                      createdAt: '2026-09-18T11:20:00.000Z',
                      updatedAt: '2026-09-18T11:20:00.000Z',
                    },
                    {
                      id: 70013,
                      spentOn: '2026-09-18',
                      amount: 880,
                      memo: 'Coffee with the supplier',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71003,
                        name: 'supplies',
                        displayOrder: 3,
                      },
                      createdAt: '2026-09-18T02:05:00.000Z',
                      updatedAt: '2026-09-18T02:05:00.000Z',
                    },
                  ],
                  totalAmount: 2530,
                },
              },
            },
          },
          expected: [
            {
              id: 70011,
              spentOn: '2026-09-18',
              amount: 1650,
              memo: 'Dinner with the visiting audit team',
              status: 'recorded',
              expenseCategory: {
                id: 71002,
                name: 'meals',
                displayOrder: 2,
              },
              createdAt: '2026-09-18T11:20:00.000Z',
              updatedAt: '2026-09-18T11:20:00.000Z',
            },
            {
              id: 70013,
              spentOn: '2026-09-18',
              amount: 880,
              memo: 'Coffee with the supplier',
              status: 'recorded',
              expenseCategory: {
                id: 71003,
                name: 'supplies',
                displayOrder: 3,
              },
              createdAt: '2026-09-18T02:05:00.000Z',
              updatedAt: '2026-09-18T02:05:00.000Z',
            },
          ],
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                monthlyExpenses: {
                  expenses: [
                    {
                      id: 70012,
                      spentOn: '2026-09-15',
                      amount: 3400,
                      memo: null,
                      status: 'recorded',
                      expenseCategory: {
                        id: 71004,
                        name: 'other',
                        displayOrder: 4,
                      },
                      createdAt: '2026-09-15T12:45:00.000Z',
                      updatedAt: '2026-09-15T12:45:00.000Z',
                    },
                  ],
                  totalAmount: 3400,
                },
              },
            },
          },
          expected: [
            {
              id: 70012,
              spentOn: '2026-09-15',
              amount: 3400,
              memo: null,
              status: 'recorded',
              expenseCategory: {
                id: 71004,
                name: 'other',
                displayOrder: 4,
              },
              createdAt: '2026-09-15T12:45:00.000Z',
              updatedAt: '2026-09-15T12:45:00.000Z',
            },
          ],
        },
      ]

      test.each(cases)('id: $factoryParams.result.data.monthlyExpenses.expenses.0.id', ({
        factoryParams,
        expected,
      }) => {
        const capsule = MonthlyExpensesQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.expenses

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('#get:expenses', () => {
    /*
     * A list falls back to an empty array rather than to null, so a template may iterate the getter
     * before the first response has arrived without guarding it. That is the whole reason the
     * fallback differs from the one every scalar getter uses, so it is asserted rather than assumed.
     */
    describe('to be empty while there is no content', () => {
      test('with no result', () => {
        const capsule = MonthlyExpensesQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.expenses

        expect(actual)
          .toHaveLength(0)
      })
    })
  })
})

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('#get:expenses', () => {
    /*
     * A month in which the member of staff recorded nothing is an ordinary month, not an error. The
     * capsule answers an empty array, which is what lets the screen show its own empty state.
     */
    describe('to be empty for a month in which nothing was recorded', () => {
      test('with an empty month', () => {
        const capsule = MonthlyExpensesQueryGraphqlCapsule.create({
          result: {
            [RESPONSE_CONTENT_FIELD]: {
              monthlyExpenses: {
                expenses: [],
                totalAmount: 0,
              },
            },
          },
        })

        const actual = capsule.expenses

        expect(actual)
          .toHaveLength(0)
      })
    })
  })
})

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('#get:totalAmount', () => {
    /*
     * The total is the operation's own, taken over the very entries it returned, and the capsule
     * reads it rather than summing the rows again — which is the reason section 12.1 gives for one
     * operation returning both.
     */
    describe('to be the total the operation took over the month', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                monthlyExpenses: {
                  expenses: [
                    {
                      id: 70011,
                      spentOn: '2026-09-14',
                      amount: 1200,
                      memo: 'Train fare to the client',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71001,
                        name: 'transport',
                        displayOrder: 1,
                      },
                      createdAt: '2026-09-14T20:11:00.000Z',
                      updatedAt: '2026-09-14T20:11:00.000Z',
                    },
                  ],
                  totalAmount: 1200,
                },
              },
            },
          },
          expected: 1200,
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                monthlyExpenses: {
                  expenses: [
                    {
                      id: 70012,
                      spentOn: '2026-08-15',
                      amount: 3400,
                      memo: null,
                      status: 'recorded',
                      expenseCategory: {
                        id: 71002,
                        name: 'meals',
                        displayOrder: 2,
                      },
                      createdAt: '2026-08-15T12:45:00.000Z',
                      updatedAt: '2026-08-15T12:45:00.000Z',
                    },
                    {
                      id: 70013,
                      spentOn: '2026-08-13',
                      amount: 880,
                      memo: 'Coffee with the supplier',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71003,
                        name: 'supplies',
                        displayOrder: 3,
                      },
                      createdAt: '2026-08-13T09:02:00.000Z',
                      updatedAt: '2026-08-13T09:02:00.000Z',
                    },
                  ],
                  totalAmount: 4280,
                },
              },
            },
          },
          expected: 4280,
        },
      ]

      test.each(cases)('totalAmount: $factoryParams.result.data.monthlyExpenses.totalAmount', ({
        factoryParams,
        expected,
      }) => {
        const capsule = MonthlyExpensesQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.totalAmount

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('#get:totalAmount', () => {
    /*
     * Spec section 12's criterion is that a month in which nothing was recorded reports a total of
     * zero. Zero is therefore a real answer this operation gives, and it must read back as the
     * number zero — not as the null the next describe asserts for a capsule with no content at all.
     * The two are asserted side by side because that distinction is the whole reason the fallback
     * is null rather than nought.
     */
    describe('to be zero for a month in which nothing was recorded', () => {
      test('with an empty month', () => {
        const capsule = MonthlyExpensesQueryGraphqlCapsule.create({
          result: {
            [RESPONSE_CONTENT_FIELD]: {
              monthlyExpenses: {
                expenses: [],
                totalAmount: 0,
              },
            },
          },
        })

        const actual = capsule.totalAmount

        expect(actual)
          .toBe(0)
      })
    })
  })
})

describe('MonthlyExpensesQueryGraphqlCapsule', () => {
  describe('#get:totalAmount', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = MonthlyExpensesQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.totalAmount

        expect(actual)
          .toBeNull()
      })
    })
  })
})
