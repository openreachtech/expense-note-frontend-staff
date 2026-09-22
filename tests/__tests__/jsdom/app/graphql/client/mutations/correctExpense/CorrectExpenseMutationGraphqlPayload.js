import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import CorrectExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlPayload'

describe('CorrectExpenseMutationGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = CorrectExpenseMutationGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('CorrectExpenseMutationGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * `correctExpense` takes the whole entry again alongside the identifier, so a correction
     * replaces every field rather than patching one. The document is asserted whole to keep it so.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      mutation CorrectExpenseMutation ($input: CorrectExpenseInput!) {
        correctExpense (input: $input) {
          expenseId
        }
      }
    `

      const actual = CorrectExpenseMutationGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('CorrectExpenseMutationGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of CorrectExpenseMutationGraphqlPayload', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                expenseId: 501,
                spentOn: '2026-09-14',
                amount: 1200,
                expenseCategoryId: 1,
                memo: 'Corrected from 12,000',
              },
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                expenseId: 502,
                spentOn: '2026-09-16',
                amount: 780,
                expenseCategoryId: 3,
              },
            },
          },
        },
      ]

      test.each(cases)('expenseId: $params.variables.input.expenseId', ({
        params,
      }) => {
        const actual = CorrectExpenseMutationGraphqlPayload.create(params)

        expect(actual)
          .toBeInstanceOf(CorrectExpenseMutationGraphqlPayload)
      })
    })
  })
})

describe('CorrectExpenseMutationGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * The identifier travels inside `input` with the rest of the entry, not beside it. One case
     * carries the optional `memo` and one leaves it out entirely.
     */
    describe('to keep the variables under the input the contract declares', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                expenseId: 501,
                spentOn: '2026-09-14',
                amount: 1200,
                expenseCategoryId: 1,
                memo: 'Corrected from 12,000',
              },
            },
          },
          expected: {
            input: {
              expenseId: 501,
              spentOn: '2026-09-14',
              amount: 1200,
              expenseCategoryId: 1,
              memo: 'Corrected from 12,000',
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                expenseId: 502,
                spentOn: '2026-09-16',
                amount: 780,
                expenseCategoryId: 3,
              },
            },
          },
          expected: {
            input: {
              expenseId: 502,
              spentOn: '2026-09-16',
              amount: 780,
              expenseCategoryId: 3,
            },
          },
        },
      ]

      test.each(cases)('expenseId: $params.variables.input.expenseId', ({
        params,
        expected,
      }) => {
        const payload = CorrectExpenseMutationGraphqlPayload.create(params)

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
