import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import MonthlyExpensesQueryGraphqlLauncher from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlLauncher'
import MonthlyExpensesQueryGraphqlPayload from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlPayload'
import MonthlyExpensesQueryGraphqlCapsule from '~/app/graphql/client/queries/monthlyExpenses/MonthlyExpensesQueryGraphqlCapsule'

describe('MonthlyExpensesQueryGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = MonthlyExpensesQueryGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('MonthlyExpensesQueryGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be MonthlyExpensesQueryGraphqlPayload', () => {
      const actual = MonthlyExpensesQueryGraphqlLauncher.Payload

      expect(actual)
        .toBe(MonthlyExpensesQueryGraphqlPayload) // same reference
    })
  })
})

describe('MonthlyExpensesQueryGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be MonthlyExpensesQueryGraphqlCapsule', () => {
      const actual = MonthlyExpensesQueryGraphqlLauncher.Capsule

      expect(actual)
        .toBe(MonthlyExpensesQueryGraphqlCapsule) // same reference
    })
  })
})
