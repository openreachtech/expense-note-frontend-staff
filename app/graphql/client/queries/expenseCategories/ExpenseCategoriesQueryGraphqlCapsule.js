import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * ExpenseCategories query graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<ExpenseCategoriesQueryResponseContent>}
 */
export default class ExpenseCategoriesQueryGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: expenseCategoriesValueHash
   *
   * @returns {schema.graphql.ExpenseCategoriesResult | null}
   */
  get expenseCategoriesValueHash () {
    return this.content
      ?.expenseCategories
      ?? null
  }

  /**
   * get: expenseCategories
   *
   * @returns {Array<schema.graphql.ExpenseCategory>}
   */
  get expenseCategories () {
    return this.expenseCategoriesValueHash
      ?.expenseCategories
      ?? []
  }
}

/**
 * @typedef {{
 *   expenseCategories: schema.graphql.ExpenseCategoriesResult
 * }} ExpenseCategoriesQueryResponseContent
 */
