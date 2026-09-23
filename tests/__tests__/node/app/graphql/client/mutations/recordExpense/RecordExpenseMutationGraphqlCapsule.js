import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import RecordExpenseMutationGraphqlCapsule from '~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('RecordExpenseMutationGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = RecordExpenseMutationGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('RecordExpenseMutationGraphqlCapsule', () => {
  describe('#get:recordExpenseValueHash', () => {
    /*
     * `recordExpense` answers with the identifier of the row it wrote and nothing else, so the
     * capsule has exactly one field to read. The screen re-reads the entry itself through
     * `expenses`; anything more here would be the write answering a read.
     */
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                recordExpense: {
                  expenseId: 70001,
                },
              },
            },
          },
          expected: {
            expenseId: 70001,
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                recordExpense: {
                  expenseId: 70002,
                },
              },
            },
          },
          expected: {
            expenseId: 70002,
          },
        },
      ]

      test.each(cases)('expenseId: $factoryParams.result.data.recordExpense.expenseId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = RecordExpenseMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.recordExpenseValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('RecordExpenseMutationGraphqlCapsule', () => {
  describe('#get:recordExpenseValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = RecordExpenseMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.recordExpenseValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('RecordExpenseMutationGraphqlCapsule', () => {
  describe('#get:expenseId', () => {
    describe('to be the identifier of the entry it wrote', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                recordExpense: {
                  expenseId: 70001,
                },
              },
            },
          },
          expected: 70001,
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                recordExpense: {
                  expenseId: 70002,
                },
              },
            },
          },
          expected: 70002,
        },
      ]

      test.each(cases)('expenseId: $factoryParams.result.data.recordExpense.expenseId', ({
        factoryParams,
        expected,
      }) => {
        const capsule = RecordExpenseMutationGraphqlCapsule.create(factoryParams)

        const actual = capsule.expenseId

        expect(actual)
          .toBe(expected)
      })
    })
  })
})

describe('RecordExpenseMutationGraphqlCapsule', () => {
  describe('#get:expenseId', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = RecordExpenseMutationGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.expenseId

        expect(actual)
          .toBeNull()
      })
    })
  })
})
