import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import ExpensesQueryGraphqlCapsule from '~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('ExpensesQueryGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = ExpensesQueryGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('ExpensesQueryGraphqlCapsule', () => {
  describe('#get:expensesValueHash', () => {
    /*
     * The result carries the rows and the page side by side, and the wrapper shares its name with
     * the rows inside it. The value hash is the wrapper; `#expenses` is the array. Reading one where
     * the other was meant is the mistake this shape invites, so both are asserted separately.
     *
     * A row is asserted whole rather than field by field, the nested category included, so a field
     * the capsule quietly drops on the way through fails here.
     */
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenses: {
                  expenses: [
                    {
                      id: 70011,
                      spentOn: '2026-09-14',
                      amount: 1200,
                      memo: 'Train fare to the client',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71001,
                        name: 'Travel',
                        displayOrder: 1,
                      },
                      createdAt: '2026-09-14T20:11:00.000Z',
                      updatedAt: '2026-09-14T20:11:00.000Z',
                    },
                  ],
                  pagination: {
                    limit: 20,
                    offset: 0,
                    sort: null,
                    totalRecords: 1,
                  },
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
                  name: 'Travel',
                  displayOrder: 1,
                },
                createdAt: '2026-09-14T20:11:00.000Z',
                updatedAt: '2026-09-14T20:11:00.000Z',
              },
            ],
            pagination: {
              limit: 20,
              offset: 0,
              sort: null,
              totalRecords: 1,
            },
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenses: {
                  expenses: [
                    {
                      id: 70012,
                      spentOn: '2026-09-15',
                      amount: 3400,
                      memo: null,
                      status: 'recorded',
                      expenseCategory: {
                        id: 71002,
                        name: 'Entertainment',
                        displayOrder: 2,
                      },
                      createdAt: '2026-09-15T12:45:00.000Z',
                      updatedAt: '2026-09-15T12:45:00.000Z',
                    },
                  ],
                  pagination: {
                    limit: 50,
                    offset: 100,
                    sort: null,
                    totalRecords: 137,
                  },
                },
              },
            },
          },
          expected: {
            expenses: [
              {
                id: 70012,
                spentOn: '2026-09-15',
                amount: 3400,
                memo: null,
                status: 'recorded',
                expenseCategory: {
                  id: 71002,
                  name: 'Entertainment',
                  displayOrder: 2,
                },
                createdAt: '2026-09-15T12:45:00.000Z',
                updatedAt: '2026-09-15T12:45:00.000Z',
              },
            ],
            pagination: {
              limit: 50,
              offset: 100,
              sort: null,
              totalRecords: 137,
            },
          },
        },
      ]

      test.each(cases)('id: $factoryParams.result.data.expenses.expenses.0.id', ({
        factoryParams,
        expected,
      }) => {
        const capsule = ExpensesQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.expensesValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpensesQueryGraphqlCapsule', () => {
  describe('#get:expensesValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = ExpensesQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.expensesValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('ExpensesQueryGraphqlCapsule', () => {
  describe('#get:expenses', () => {
    /*
     * The second case carries an entry recorded without a memo. The contract makes `memo` the one
     * nullable field of the row, and the criterion is that such an entry reads back rather than
     * failing — so a null memo is carried through as null, not turned into a string on the way.
     */
    describe('to be the entries the screen lists', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenses: {
                  expenses: [
                    {
                      id: 70011,
                      spentOn: '2026-09-14',
                      amount: 1200,
                      memo: 'Train fare to the client',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71001,
                        name: 'Travel',
                        displayOrder: 1,
                      },
                      createdAt: '2026-09-14T20:11:00.000Z',
                      updatedAt: '2026-09-14T20:11:00.000Z',
                    },
                    {
                      id: 70013,
                      spentOn: '2026-09-13',
                      amount: 880,
                      memo: 'Coffee with the supplier',
                      status: 'recorded',
                      expenseCategory: {
                        id: 71003,
                        name: 'Supplies',
                        displayOrder: 3,
                      },
                      createdAt: '2026-09-13T09:02:00.000Z',
                      updatedAt: '2026-09-13T09:02:00.000Z',
                    },
                  ],
                  pagination: {
                    limit: 20,
                    offset: 0,
                    sort: null,
                    totalRecords: 2,
                  },
                },
              },
            },
          },
          expected: [
            {
              id: 70011,
              spentOn: '2026-09-14',
              amount: 1200,
              memo: 'Train fare to the client',
              status: 'recorded',
              expenseCategory: {
                id: 71001,
                name: 'Travel',
                displayOrder: 1,
              },
              createdAt: '2026-09-14T20:11:00.000Z',
              updatedAt: '2026-09-14T20:11:00.000Z',
            },
            {
              id: 70013,
              spentOn: '2026-09-13',
              amount: 880,
              memo: 'Coffee with the supplier',
              status: 'recorded',
              expenseCategory: {
                id: 71003,
                name: 'Supplies',
                displayOrder: 3,
              },
              createdAt: '2026-09-13T09:02:00.000Z',
              updatedAt: '2026-09-13T09:02:00.000Z',
            },
          ],
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenses: {
                  expenses: [
                    {
                      id: 70012,
                      spentOn: '2026-09-15',
                      amount: 3400,
                      memo: null,
                      status: 'recorded',
                      expenseCategory: {
                        id: 71002,
                        name: 'Entertainment',
                        displayOrder: 2,
                      },
                      createdAt: '2026-09-15T12:45:00.000Z',
                      updatedAt: '2026-09-15T12:45:00.000Z',
                    },
                  ],
                  pagination: {
                    limit: 20,
                    offset: 0,
                    sort: null,
                    totalRecords: 1,
                  },
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
                id: 71002,
                name: 'Entertainment',
                displayOrder: 2,
              },
              createdAt: '2026-09-15T12:45:00.000Z',
              updatedAt: '2026-09-15T12:45:00.000Z',
            },
          ],
        },
      ]

      test.each(cases)('id: $factoryParams.result.data.expenses.expenses.0.id', ({
        factoryParams,
        expected,
      }) => {
        const capsule = ExpensesQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.expenses

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpensesQueryGraphqlCapsule', () => {
  describe('#get:expenses', () => {
    /*
     * A list falls back to an empty array rather than to null, so a template may iterate the getter
     * before the first response has arrived without guarding it. That is the whole reason the
     * fallback differs from the one every scalar getter uses, so it is asserted rather than assumed.
     */
    describe('to be empty while there is no content', () => {
      test('with no result', () => {
        const capsule = ExpensesQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.expenses

        expect(actual)
          .toHaveLength(0)
      })
    })
  })
})

describe('ExpensesQueryGraphqlCapsule', () => {
  describe('#get:expenses', () => {
    /*
     * A member of staff who has recorded nothing is the ordinary first-run case, not an error. The
     * capsule answers an empty array, which is what lets the screen show its own empty state.
     */
    describe('to be empty when the member of staff has recorded nothing', () => {
      test('with an empty array', () => {
        const capsule = ExpensesQueryGraphqlCapsule.create({
          result: {
            [RESPONSE_CONTENT_FIELD]: {
              expenses: {
                expenses: [],
                pagination: {
                  limit: 20,
                  offset: 0,
                  sort: null,
                  totalRecords: 0,
                },
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

describe('ExpensesQueryGraphqlCapsule', () => {
  describe('#get:pagination', () => {
    /*
     * `totalRecords` is what the screen pages with, and it counts the whole set rather than the page
     * just returned — so a case is given where the two differ.
     */
    describe('to be the page the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenses: {
                  expenses: [],
                  pagination: {
                    limit: 20,
                    offset: 0,
                    sort: null,
                    totalRecords: 137,
                  },
                },
              },
            },
          },
          expected: {
            limit: 20,
            offset: 0,
            sort: null,
            totalRecords: 137,
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenses: {
                  expenses: [],
                  pagination: {
                    limit: 50,
                    offset: 100,
                    sort: null,
                    totalRecords: 242,
                  },
                },
              },
            },
          },
          expected: {
            limit: 50,
            offset: 100,
            sort: null,
            totalRecords: 242,
          },
        },
      ]

      test.each(cases)('offset: $factoryParams.result.data.expenses.pagination.offset', ({
        factoryParams,
        expected,
      }) => {
        const capsule = ExpensesQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.pagination

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpensesQueryGraphqlCapsule', () => {
  describe('#get:pagination', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = ExpensesQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.pagination

        expect(actual)
          .toBeNull()
      })
    })
  })
})
