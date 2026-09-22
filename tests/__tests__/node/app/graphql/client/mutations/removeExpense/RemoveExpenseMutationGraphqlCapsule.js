import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import RemoveExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('RemoveExpenseMutationGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = RemoveExpenseMutationGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('RemoveExpenseMutationGraphqlCapsule', () => {
  describe('#get:removeExpenseValueHash', () => {
    /*
     * A removal answers with the identifier of the entry it removed, so the screen knows which
     * row to drop without re-reading first.
     */
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                removeExpense: {
                  expenseId: 70005,
                },
              },
            },
          },
          expected: {
            expenseId: 70005,
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                removeExpense: {
                  expenseId: 70006,
                },
              },
            },
          },
          expected: {
            expenseId: 70006,
          },
        },
      ]

      test.each(cases)('expenseId: $factoryParams.result.data.removeExpense.expenseId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = RemoveExpenseMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.removeExpenseValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('RemoveExpenseMutationGraphqlCapsule', () => {
  describe('#get:removeExpenseValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = RemoveExpenseMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.removeExpenseValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('RemoveExpenseMutationGraphqlCapsule', () => {
  describe('#get:expenseId', () => {
    describe('to be the identifier of the entry it wrote', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                removeExpense: {
                  expenseId: 70005,
                },
              },
            },
          },
          expected: 70005,
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                removeExpense: {
                  expenseId: 70006,
                },
              },
            },
          },
          expected: 70006,
        },
      ]

      test.each(cases)('expenseId: $factoryParams.result.data.removeExpense.expenseId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = RemoveExpenseMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.expenseId

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('RemoveExpenseMutationGraphqlCapsule', () => {
  describe('#get:expenseId', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = RemoveExpenseMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.expenseId

        expect(actual)
          .toBeNull()
      })
    })
  })
})
