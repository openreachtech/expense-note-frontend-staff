import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import ExpensesQueryGraphqlPayload from '~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlPayload'

describe('ExpensesQueryGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = ExpensesQueryGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('ExpensesQueryGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * The contract gives `expenses` a required `ExpensesInput!`, and the result nests both the rows
     * and the pagination the screen pages with. The document is asserted whole, character for
     * character, so that a field quietly added to or dropped from either half fails here.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      query ExpensesQuery ($input: ExpensesInput!) {
        expenses (input: $input) {
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
          pagination {
            limit
            offset
            sort {
              key
              direction
            }
            totalRecords
          }
        }
      }
    `

      const actual = ExpensesQueryGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpensesQueryGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of ExpensesQueryGraphqlPayload', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 0,
                },
              },
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                pagination: {
                  limit: 50,
                  offset: 100,
                },
              },
            },
          },
        },
      ]

      test.each(cases)('offset: $params.variables.input.pagination.offset', ({
        params,
      }) => {
        const actual = ExpensesQueryGraphqlPayload.create(params)

        expect(actual)
          .toBeInstanceOf(ExpensesQueryGraphqlPayload)
      })
    })
  })
})

describe('ExpensesQueryGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * The contract nests the page under `input.pagination`, and `PaginationInput` makes `limit` and
     * `offset` required. The payload must carry that nesting through untouched.
     */
    describe('to keep the variables under the input the contract declares', () => {
      const cases = [
        {
          params: {
            variables: {
              input: {
                pagination: {
                  limit: 20,
                  offset: 0,
                },
              },
            },
          },
          expected: {
            input: {
              pagination: {
                limit: 20,
                offset: 0,
              },
            },
          },
        },
        {
          params: {
            variables: {
              input: {
                pagination: {
                  limit: 50,
                  offset: 100,
                },
              },
            },
          },
          expected: {
            input: {
              pagination: {
                limit: 50,
                offset: 100,
              },
            },
          },
        },
      ]

      test.each(cases)('offset: $params.variables.input.pagination.offset', ({
        params,
        expected,
      }) => {
        const payload = ExpensesQueryGraphqlPayload.create(params)

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
