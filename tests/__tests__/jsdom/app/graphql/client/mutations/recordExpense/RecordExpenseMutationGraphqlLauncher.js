import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher'

import RecordExpenseMutationGraphqlLauncher from '~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlLauncher'
import RecordExpenseMutationGraphqlPayload from '~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlPayload'
import RecordExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlCapsule'

describe('RecordExpenseMutationGraphqlLauncher', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlLauncher', () => {
      const actual = RecordExpenseMutationGraphqlLauncher.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlLauncher)
    })
  })
})

describe('RecordExpenseMutationGraphqlLauncher', () => {
  describe('.get:Payload', () => {
    /*
     * furo's own `Payload` getter throws, so a launcher that answers the wrong pair fails only at
     * request time. The pairing is asserted here instead.
     */
    test('to be RecordExpenseMutationGraphqlPayload', () => {
      const actual = RecordExpenseMutationGraphqlLauncher.Payload

      expect(actual)
        .toBe(RecordExpenseMutationGraphqlPayload) // same reference
    })
  })
})

describe('RecordExpenseMutationGraphqlLauncher', () => {
  describe('.get:Capsule', () => {
    test('to be RecordExpenseMutationGraphqlCapsule', () => {
      const actual = RecordExpenseMutationGraphqlLauncher.Capsule

      expect(actual)
        .toBe(RecordExpenseMutationGraphqlCapsule) // same reference
    })
  })
})
