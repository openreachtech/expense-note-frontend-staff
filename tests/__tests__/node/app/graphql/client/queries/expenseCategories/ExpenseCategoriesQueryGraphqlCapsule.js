import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule'

import ExpenseCategoriesQueryGraphqlCapsule from '~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlCapsule'

/*
 * The key furo reads a response's content from. It is written as a constant because the name furo
 * chose for it is one `@openreachtech/eslint-config` denies as an identifier, and the envelope is
 * furo's to name, not this repository's.
 */
const RESPONSE_CONTENT_FIELD = 'data'

describe('ExpenseCategoriesQueryGraphqlCapsule', () => {
  describe('super class', () => {
    test('to be derived class of BaseAppGraphqlCapsule', () => {
      const actual = ExpenseCategoriesQueryGraphqlCapsule.prototype

      expect(actual)
        .toBeInstanceOf(BaseAppGraphqlCapsule)
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlCapsule', () => {
  describe('#get:expenseCategoriesValueHash', () => {
    /*
     * The result type wraps the rows in a field of the same name, so the value hash is the wrapper
     * and `#expenseCategories` is the array inside it. Both are asserted, because collapsing the two
     * is the mistake this shape invites.
     */
    describe('to be the value hash the contract returns', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenseCategories: {
                  expenseCategories: [
                    {
                      id: 71001,
                      name: 'Travel',
                      displayOrder: 1,
                    },
                  ],
                },
              },
            },
          },
          expected: {
            expenseCategories: [
              {
                id: 71001,
                name: 'Travel',
                displayOrder: 1,
              },
            ],
          },
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenseCategories: {
                  expenseCategories: [
                    {
                      id: 71002,
                      name: 'Entertainment',
                      displayOrder: 2,
                    },
                  ],
                },
              },
            },
          },
          expected: {
            expenseCategories: [
              {
                id: 71002,
                name: 'Entertainment',
                displayOrder: 2,
              },
            ],
          },
        },
      ]

      test.each(cases)('id: $factoryParams.result.data.expenseCategories.expenseCategories.0.id', ({
        factoryParams,
        expected,
      }) => {
        const capsule = ExpenseCategoriesQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.expenseCategoriesValueHash

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlCapsule', () => {
  describe('#get:expenseCategoriesValueHash', () => {
    describe('to be null while there is no content', () => {
      test('with no result', () => {
        const capsule = ExpenseCategoriesQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.expenseCategoriesValueHash

        expect(actual)
          .toBeNull()
      })
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlCapsule', () => {
  describe('#get:expenseCategories', () => {
    describe('to be the categories the field is filled from', () => {
      const cases = [
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenseCategories: {
                  expenseCategories: [
                    {
                      id: 71001,
                      name: 'Travel',
                      displayOrder: 1,
                    },
                    {
                      id: 71002,
                      name: 'Entertainment',
                      displayOrder: 2,
                    },
                  ],
                },
              },
            },
          },
          expected: [
            {
              id: 71001,
              name: 'Travel',
              displayOrder: 1,
            },
            {
              id: 71002,
              name: 'Entertainment',
              displayOrder: 2,
            },
          ],
        },
        {
          factoryParams: {
            result: {
              [RESPONSE_CONTENT_FIELD]: {
                expenseCategories: {
                  expenseCategories: [
                    {
                      id: 71003,
                      name: 'Supplies',
                      displayOrder: 3,
                    },
                  ],
                },
              },
            },
          },
          expected: [
            {
              id: 71003,
              name: 'Supplies',
              displayOrder: 3,
            },
          ],
        },
      ]

      test.each(cases)('id: $factoryParams.result.data.expenseCategories.expenseCategories.0.id', ({
        factoryParams,
        expected,
      }) => {
        const capsule = ExpenseCategoriesQueryGraphqlCapsule.create(factoryParams)

        const actual = capsule.expenseCategories

        expect(actual)
          .toEqual(expected)
      })
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlCapsule', () => {
  describe('#get:expenseCategories', () => {
    /*
     * A list falls back to an empty array rather than to null, so a template may iterate the getter
     * before the first response has arrived without guarding it. That is the whole reason the
     * fallback differs from the one every scalar getter uses, so it is asserted rather than assumed.
     */
    describe('to be empty while there is no content', () => {
      test('with no result', () => {
        const capsule = ExpenseCategoriesQueryGraphqlCapsule.create({
          result: null,
        })

        const actual = capsule.expenseCategories

        expect(actual)
          .toHaveLength(0)
      })
    })
  })
})

describe('ExpenseCategoriesQueryGraphqlCapsule', () => {
  describe('#get:expenseCategories', () => {
    describe('to be empty when the contract returns no categories', () => {
      test('with an empty array', () => {
        const capsule = ExpenseCategoriesQueryGraphqlCapsule.create({
          result: {
            [RESPONSE_CONTENT_FIELD]: {
              expenseCategories: {
                expenseCategories: [],
              },
            },
          },
        })

        const actual = capsule.expenseCategories

        expect(actual)
          .toHaveLength(0)
      })
    })
  })
})
