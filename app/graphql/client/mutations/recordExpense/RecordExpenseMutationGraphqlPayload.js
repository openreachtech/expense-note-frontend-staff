import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * RecordExpense mutation payload.
 *
 * @extends {BaseAppGraphqlPayload<RecordExpenseMutationRequestVariables>}
 */
export default class RecordExpenseMutationGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      mutation RecordExpenseMutation ($input: RecordExpenseInput!) {
        recordExpense (input: $input) {
          expenseId
        }
      }
    `
  }
}

/**
 * @typedef {{
 *   input: schema.graphql.RecordExpenseInput
 * }} RecordExpenseMutationRequestVariables
 */
