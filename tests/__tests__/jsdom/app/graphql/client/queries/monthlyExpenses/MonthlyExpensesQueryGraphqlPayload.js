import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import MonthlyExpensesQueryGraphqlPayload from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlPayload'

describe('MonthlyExpensesQueryGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = MonthlyExpensesQueryGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('MonthlyExpensesQueryGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * The contract gives `monthlyExpenses` a required `MonthlyExpensesInput!`, and the result
     * carries the month's entries and the total taken over them side by side — one operation, so
     * the two can never disagree. The document is asserted whole, character for character, so that
     * a field quietly added to or dropped from either half fails here.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      query MonthlyExpensesQuery ($input: MonthlyExpensesInput!) {
        monthlyExpenses (input: $input) {
          expenses {
            id
            spentOn
            amount
            memo
            status
            expenseCategory {
              id
              name
              displayOrder
            }
            createdAt
            updatedAt
          }
          totalAmount
        }
      }
    `

      const actual = MonthlyExpensesQueryGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('MonthlyExpensesQueryGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of MonthlyExpensesQueryGraphqlPayload', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                year: 2026,
                month: 9,
              },
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                year: 2025,
                month: 12,
              },
            },
          },
        },
      ]

      test.each(cases)('year: $params.variables.input.year', ({
        params,
      }) => {
        const actual = MonthlyExpensesQueryGraphqlPayload.create(params)

        expect(actual)
          .toBeInstanceOf(MonthlyExpensesQueryGraphqlPayload)
      })
    })
  })
})

describe('MonthlyExpensesQueryGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * The contract nests the month under `input`, and makes `year` and `month` both required
     * integers. The payload must carry that nesting through untouched — and `month` in particular
     * unchanged, because the contract counts months from 1 while JavaScript's own Date counts them
     * from 0, and a payload that silently adjusted either way would send a neighbouring month.
     * January and December are given for that reason.
     */
    describe('to keep the variables under the input the contract declares', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                year: 2026,
                month: 9,
              },
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
          params: {
            variables: {
              input: {
                year: 2026,
                month: 1,
              },
            },
          },
          expected: {
            input: {
              year: 2026,
              month: 1,
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                year: 2025,
                month: 12,
              },
            },
          },
          expected: {
            input: {
              year: 2025,
              month: 12,
            },
          },
        },
      ]

      test.each(cases)('month: $params.variables.input.month', ({
        params,
        expected,
      }) => {
        const payload = MonthlyExpensesQueryGraphqlPayload.create(params)

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
