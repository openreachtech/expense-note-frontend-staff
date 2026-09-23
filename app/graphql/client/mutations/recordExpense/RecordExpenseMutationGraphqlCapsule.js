import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * RecordExpense mutation graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<RecordExpenseMutationResponseContent>}
 */
export default class RecordExpenseMutationGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: recordExpenseValueHash
   *
   * @returns {schema.graphql.RecordExpenseResult | null}
   */
  get recordExpenseValueHash () {
    return this.content
      ?.recordExpense
      ?? null
  }

  /**
   * get: expenseId
   *
   * @returns {number | null}
   */
  get expenseId () {
    return this.recordExpenseValueHash
      ?.expenseId
      ?? null
  }
}

/**
 * @typedef {{
 *   recordExpense: schema.graphql.RecordExpenseResult
 * }} RecordExpenseMutationResponseContent
 */
