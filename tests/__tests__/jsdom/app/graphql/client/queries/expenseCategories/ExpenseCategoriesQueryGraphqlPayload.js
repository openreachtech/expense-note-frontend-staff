import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload'

import ExpenseCategoriesQueryGraphqlPayload from '~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlPayload'

describe('ExpenseCategoriesQueryGraphqlPayload', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlPayload', () => {
      const actual = ExpenseCategoriesQueryGraphqlPayload.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlPayload)
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlPayload', () => {
  describe('.get:document', () => {
    /*
     * The contract gives `expenseCategories` no argument, so the operation carries no parentheses
     * and the field carries no argument list. The document is asserted whole so neither creeps in.
     */
    test('to be the document the contract pins', () => {
      const expected = `
      query ExpenseCategoriesQuery {
        expenseCategories {
          expenseCategories {
            id
            name
            displayOrder
          }
        }
      }
    `

      const actual = ExpenseCategoriesQueryGraphqlPayload.document

      expect(actual)
        .toBe(expected)
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlPayload', () => {
  describe('.create()', () => {
    describe('to be instance of ExpenseCategoriesQueryGraphqlPayload', () => {
      test('with no params', () => {
        const actual = ExpenseCategoriesQueryGraphqlPayload.create()

        expect(actual)
          .toBeInstanceOf(ExpenseCategoriesQueryGraphqlPayload)
      })
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlPayload', () => {
  describe('.create()', () => {
    /*
     * An operation the document declares no variable for must send none. Sending an `input`
     * variable the document never declares is how furo's form-value-hash factory breaks such an
     * operation, so the empty hash is asserted rather than assumed.
     */
    describe('to send no variables, the document declaring none', () => {
      test('with no params', () => {
        const expected = {}

        const payload = ExpenseCategoriesQueryGraphqlPayload.create()

        const actual = payload.variables

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})
