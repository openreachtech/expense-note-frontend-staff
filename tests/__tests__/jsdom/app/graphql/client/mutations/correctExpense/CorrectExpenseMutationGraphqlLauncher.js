import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import CorrectExpenseMutationGraphqlLauncher from '~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlLauncher'
import CorrectExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlPayload'
import CorrectExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlCapsule'

describe('CorrectExpenseMutationGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = CorrectExpenseMutationGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('CorrectExpenseMutationGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be CorrectExpenseMutationGraphqlPayload', () => {
      const actual = CorrectExpenseMutationGraphqlLauncher.Payload

      expect(actual)
        .toBe(CorrectExpenseMutationGraphqlPayload) // same reference
    })
  })
})

describe('CorrectExpenseMutationGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be CorrectExpenseMutationGraphqlCapsule', () => {
      const actual = CorrectExpenseMutationGraphqlLauncher.Capsule

      expect(actual)
        .toBe(CorrectExpenseMutationGraphqlCapsule) // same reference
    })
  })
})
