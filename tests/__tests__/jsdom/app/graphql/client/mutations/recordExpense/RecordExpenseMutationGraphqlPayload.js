import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import RecordExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlPayload'

describe('RecordExpenseMutationGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = RecordExpenseMutationGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('RecordExpenseMutationGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * The contract has this mutation answer with the identifier of what it wrote and nothing more —
     * the screen re-reads through `expenses`. The document is asserted whole so that the day
     * somebody is tempted to have it return the row as well, this fails rather than the split
     * between the write and the read eroding unnoticed.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      mutation RecordExpenseMutation ($input: RecordExpenseInput!) {
        recordExpense (input: $input) {
          expenseId
        }
      }
    `

      const actual = RecordExpenseMutationGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('RecordExpenseMutationGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of RecordExpenseMutationGraphqlPayload', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                spentOn: '2026-09-14',
                amount: 1200,
                expenseCategoryId: 1,
                memo: 'Train fare to the client',
              },
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                spentOn: '2026-09-15',
                amount: 3400,
                expenseCategoryId: 2,
              },
            },
          },
        },
      ]

      test.each(cases)('amount: $params.variables.input.amount', ({
        params,
      }) => {
        const actual = RecordExpenseMutationGraphqlPayload.create(params)

        expect(actual)
          .toBeInstanceOf(RecordExpenseMutationGraphqlPayload)
      })
    })
  })
})

describe('RecordExpenseMutationGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * `memo` is the one genuinely optional field of the input, so one case carries it and one leaves
     * it out entirely. A payload that invented an empty string for the absent one would fail here.
     */
    describe('to keep the variables under the input the contract declares', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                spentOn: '2026-09-14',
                amount: 1200,
                expenseCategoryId: 1,
                memo: 'Train fare to the client',
              },
            },
          },
          expected: {
            input: {
              spentOn: '2026-09-14',
              amount: 1200,
              expenseCategoryId: 1,
              memo: 'Train fare to the client',
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                spentOn: '2026-09-15',
                amount: 3400,
                expenseCategoryId: 2,
              },
            },
          },
          expected: {
            input: {
              spentOn: '2026-09-15',
              amount: 3400,
              expenseCategoryId: 2,
            },
          },
        },
      ]

      test.each(cases)('amount: $params.variables.input.amount', ({
        params,
        expected,
      }) => {
        const payload = RecordExpenseMutationGraphqlPayload.create(params)

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
