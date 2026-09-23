import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import RemoveExpenseMutationGraphqlLauncher from '~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlLauncher'
import RemoveExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlPayload'
import RemoveExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlCapsule'

describe('RemoveExpenseMutationGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = RemoveExpenseMutationGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('RemoveExpenseMutationGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be RemoveExpenseMutationGraphqlPayload', () => {
      const actual = RemoveExpenseMutationGraphqlLauncher.Payload

      expect(actual)
        .toBe(RemoveExpenseMutationGraphqlPayload) // same reference
    })
  })
})

describe('RemoveExpenseMutationGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be RemoveExpenseMutationGraphqlCapsule', () => {
      const actual = RemoveExpenseMutationGraphqlLauncher.Capsule

      expect(actual)
        .toBe(RemoveExpenseMutationGraphqlCapsule) // same reference
    })
  })
})
