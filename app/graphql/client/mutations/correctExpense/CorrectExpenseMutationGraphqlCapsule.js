import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * CorrectExpense mutation graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<CorrectExpenseMutationResponseContent>}
 */
export default class CorrectExpenseMutationGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: correctExpenseValueHash
   *
   * @returns {schema.graphql.CorrectExpenseResult | null}
   */
  get correctExpenseValueHash () {
    return this.content
      ?.correctExpense
      ?? null
  }

  /**
   * get: expenseId
   *
   * @returns {number | null}
   */
  get expenseId () {
    return this.correctExpenseValueHash
      ?.expenseId
      ?? null
  }
}

/**
 * @typedef {{
 *   correctExpense: schema.graphql.CorrectExpenseResult
 * }} CorrectExpenseMutationResponseContent
 */
