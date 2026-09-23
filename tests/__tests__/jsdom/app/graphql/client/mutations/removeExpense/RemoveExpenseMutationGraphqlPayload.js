import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import RemoveExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlPayload'

describe('RemoveExpenseMutationGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = RemoveExpenseMutationGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('RemoveExpenseMutationGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * `removeExpense` names only the entry, and answers with its identifier. The document is
     * asserted whole so neither the input nor the result grows a field the contract omits.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      mutation RemoveExpenseMutation ($input: RemoveExpenseInput!) {
        removeExpense (input: $input) {
          expenseId
        }
      }
    `

      const actual = RemoveExpenseMutationGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('RemoveExpenseMutationGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of RemoveExpenseMutationGraphqlPayload', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                expenseId: 503,
              },
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                expenseId: 504,
              },
            },
          },
        },
      ]

      test.each(cases)('expenseId: $params.variables.input.expenseId', ({
        params,
      }) => {
        const actual = RemoveExpenseMutationGraphqlPayload.create(params)

        expect(actual)
          .toBeInstanceOf(RemoveExpenseMutationGraphqlPayload)
      })
    })
  })
})

describe('RemoveExpenseMutationGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * The identifier travels inside `input`, which is what the contract declares — not as a bare
     * top-level variable.
     */
    describe('to keep the variables under the input the contract declares', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                expenseId: 503,
              },
            },
          },
          expected: {
            input: {
              expenseId: 503,
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                expenseId: 504,
              },
            },
          },
          expected: {
            input: {
              expenseId: 504,
            },
          },
        },
      ]

      test.each(cases)('expenseId: $params.variables.input.expenseId', ({
        params,
        expected,
      }) => {
        const payload = RemoveExpenseMutationGraphqlPayload.create(params)

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
