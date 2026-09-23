import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * RemoveExpense mutation graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<RemoveExpenseMutationResponseContent>}
 */
export default class RemoveExpenseMutationGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: removeExpenseValueHash
   *
   * @returns {schema.graphql.RemoveExpenseResult | null}
   */
  get removeExpenseValueHash () {
    return this.content
      ?.removeExpense
      ?? null
  }

  /**
   * get: expenseId
   *
   * @returns {number | null}
   */
  get expenseId () {
    return this.removeExpenseValueHash
      ?.expenseId
      ?? null
  }
}

/**
 * @typedef {{
 *   removeExpense: schema.graphql.RemoveExpenseResult
 * }} RemoveExpenseMutationResponseContent
 */
