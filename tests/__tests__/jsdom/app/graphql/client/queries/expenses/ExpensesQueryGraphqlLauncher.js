import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import ExpensesQueryGraphqlLauncher from '~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlLauncher'
import ExpensesQueryGraphqlPayload from '~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlPayload'
import ExpensesQueryGraphqlCapsule from '~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlCapsule'

describe('ExpensesQueryGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = ExpensesQueryGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('ExpensesQueryGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be ExpensesQueryGraphqlPayload', () => {
      const actual = ExpensesQueryGraphqlLauncher.Payload

      expect(actual)
        .toBe(ExpensesQueryGraphqlPayload) // same reference
    })
  })
})

describe('ExpensesQueryGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be ExpensesQueryGraphqlCapsule', () => {
      const actual = ExpensesQueryGraphqlLauncher.Capsule

      expect(actual)
        .toBe(ExpensesQueryGraphqlCapsule) // same reference
    })
  })
})
