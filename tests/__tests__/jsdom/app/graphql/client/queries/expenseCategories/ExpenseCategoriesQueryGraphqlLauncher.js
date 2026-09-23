import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import ExpenseCategoriesQueryGraphqlLauncher from '~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlLauncher'
import ExpenseCategoriesQueryGraphqlPayload from '~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlPayload'
import ExpenseCategoriesQueryGraphqlCapsule from '~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlCapsule'

describe('ExpenseCategoriesQueryGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = ExpenseCategoriesQueryGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be ExpenseCategoriesQueryGraphqlPayload', () => {
      const actual = ExpenseCategoriesQueryGraphqlLauncher.Payload

      expect(actual)
        .toBe(ExpenseCategoriesQueryGraphqlPayload) // same reference
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be ExpenseCategoriesQueryGraphqlCapsule', () => {
      const actual = ExpenseCategoriesQueryGraphqlLauncher.Capsule

      expect(actual)
        .toBe(ExpenseCategoriesQueryGraphqlCapsule) // same reference
    })
  })
})
