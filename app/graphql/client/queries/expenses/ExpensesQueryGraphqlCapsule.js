import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * Expenses query graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<ExpensesQueryResponseContent>}
 */
export default class ExpensesQueryGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: expensesValueHash
   *
   * @returns {schema.graphql.ExpensesResult | null}
   */
  get expensesValueHash () {
    return this.content
      ?.expenses
      ?? null
  }

  /**
   * get: expenses
   *
   * @returns {Array<schema.graphql.Expense>}
   */
  get expenses () {
    return this.expensesValueHash
      ?.expenses
      ?? []
  }

  /**
   * get: pagination
   *
   * @returns {schema.graphql.Pagination | null}
   */
  get pagination () {
    return this.expensesValueHash
      ?.pagination
      ?? null
  }
}

/**
 * @typedef {{
 *   expenses: schema.graphql.ExpensesResult
 * }} ExpensesQueryResponseContent
 */
