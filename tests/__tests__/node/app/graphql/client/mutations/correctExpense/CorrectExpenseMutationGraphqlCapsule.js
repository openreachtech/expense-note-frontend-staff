import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import CorrectExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('CorrectExpenseMutationGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = CorrectExpenseMutationGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('CorrectExpenseMutationGraphqlCapsule', () => {
  describe('#get:correctExpenseValueHash', () => {
    /*
     * A correction answers with the identifier of the entry it replaced — the same entry, not a
     * new one. That the identifier comes back unchanged is what tells the screen the correction
     * happened in place rather than adding a row.
     */
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                correctExpense: {
                  expenseId: 70003,
                },
              },
            },
          },
          expected: {
            expenseId: 70003,
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                correctExpense: {
                  expenseId: 70004,
                },
              },
            },
          },
          expected: {
            expenseId: 70004,
          },
        },
      ]

      test.each(cases)('expenseId: $factoryParams.result.data.correctExpense.expenseId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = CorrectExpenseMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.correctExpenseValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('CorrectExpenseMutationGraphqlCapsule', () => {
  describe('#get:correctExpenseValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = CorrectExpenseMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.correctExpenseValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('CorrectExpenseMutationGraphqlCapsule', () => {
  describe('#get:expenseId', () => {
    describe('to be the identifier of the entry it wrote', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                correctExpense: {
                  expenseId: 70003,
                },
              },
            },
          },
          expected: 70003,
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                correctExpense: {
                  expenseId: 70004,
                },
              },
            },
          },
          expected: 70004,
        },
      ]

      test.each(cases)('expenseId: $factoryParams.result.data.correctExpense.expenseId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = CorrectExpenseMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.expenseId

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('CorrectExpenseMutationGraphqlCapsule', () => {
  describe('#get:expenseId', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = CorrectExpenseMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.expenseId

        expect(actual)
          .toBeNull()
      })
    })
  })
})
