import fs from 'node:fs'
import path from 'node:path'

import {
  buildSchema,
} from 'graphql'

import DocumentFieldCoverageInspector from '~/tests/contract/DocumentFieldCoverageInspector.js'

/*
 * This class is the oracle behind the coverage half of `documents-against-the-contract.js`, and an
 * oracle that always answered "nothing is missing" would make that half pass while proving nothing.
 * So the cases below hand it documents with KNOWN omissions and assert it names them — a scalar, a
 * whole nested object, and a scalar nested two levels down — as well as asserting it stays quiet on
 * a complete one.
 */

const CONTRACT_FILE_PATH = path.resolve('tests/contract/staff-graphql.graphql')

describe('DocumentFieldCoverageInspector', () => {
  describe('.create()', () => {
    describe('to be instance of DocumentFieldCoverageInspector', () => {
      const cases = [
        {
          label: 'the pinned contract',
        },
      ]

      test.each(cases)('label: $label', () => {
        const schema = buildSchema(
          fs.readFileSync(CONTRACT_FILE_PATH, 'utf8')
        )

        const actual = DocumentFieldCoverageInspector.create({
          schema,
        })

        expect(actual)
          .toBeInstanceOf(DocumentFieldCoverageInspector)
      })
    })
  })
})

describe('DocumentFieldCoverageInspector', () => {
  describe('constructor', () => {
    describe('to keep properties', () => {
      describe('#schema', () => {
        test('to be the schema it was handed', () => {
          const schema = buildSchema(
            fs.readFileSync(CONTRACT_FILE_PATH, 'utf8')
          )

          const actual = DocumentFieldCoverageInspector.create({
            schema,
          })

          expect(actual)
            .toHaveProperty('schema', schema)
        })
      })
    })
  })
})

describe('DocumentFieldCoverageInspector', () => {
  describe('#extractUnselectedFieldPaths()', () => {
    describe('to report every field a document leaves out', () => {
      const cases = [
        {
          label: 'a scalar left out of a list element',
          params: {
            document: `
              query ExpensesQuery ($input: ExpensesInput!) {
                expenses (input: $input) {
                  expenses {
                    id
                    spentOn
                    amount
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
            `,
          },
          expected: [
            'expenses.expenses.memo',
          ],
        },
        {
          label: 'a whole nested object left out',
          params: {
            document: `
              query ExpensesQuery ($input: ExpensesInput!) {
                expenses (input: $input) {
                  expenses {
                    id
                    spentOn
                    amount
                    memo
                    status
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
            `,
          },
          expected: [
            'expenses.expenses.expenseCategory',
          ],
        },
        {
          label: 'a scalar two levels down left out',
          params: {
            document: `
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
                    }
                    totalRecords
                  }
                }
              }
            `,
          },
          expected: [
            'expenses.pagination.sort.direction',
          ],
        },
        {
          label: 'the only field of a mutation result left out',
          params: {
            document: `
              mutation RecordExpenseMutation ($input: RecordExpenseInput!) {
                recordExpense (input: $input) {
                  __typename
                }
              }
            `,
          },
          expected: [
            'recordExpense.expenseId',
          ],
        },
      ]

      test.each(cases)('label: $label', ({
        params,
        expected,
      }) => {
        const schema = buildSchema(
          fs.readFileSync(CONTRACT_FILE_PATH, 'utf8')
        )
        const inspector = DocumentFieldCoverageInspector.create({
          schema,
        })

        const actual = inspector.extractUnselectedFieldPaths({
          graphqlDocument: params.document,
        })

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('DocumentFieldCoverageInspector', () => {
  describe('#extractUnselectedFieldPaths()', () => {
    describe('to report nothing for a document that selects everything', () => {
      const cases = [
        {
          label: 'ExpenseCategoriesQuery',
          params: {
            document: `
              query ExpenseCategoriesQuery {
                expenseCategories {
                  expenseCategories {
                    id
                    name
                    displayOrder
                  }
                }
              }
            `,
          },
        },
        {
          label: 'RemoveExpenseMutation',
          params: {
            document: `
              mutation RemoveExpenseMutation ($input: RemoveExpenseInput!) {
                removeExpense (input: $input) {
                  expenseId
                }
              }
            `,
          },
        },
      ]

      test.each(cases)('label: $label', ({
        params,
      }) => {
        const schema = buildSchema(
          fs.readFileSync(CONTRACT_FILE_PATH, 'utf8')
        )
        const inspector = DocumentFieldCoverageInspector.create({
          schema,
        })

        const actual = inspector.extractUnselectedFieldPaths({
          graphqlDocument: params.document,
        })

        expect(actual)
          .toHaveLength(0)
      })
    })
  })
})
