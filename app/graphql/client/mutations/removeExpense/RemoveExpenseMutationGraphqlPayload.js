import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * RemoveExpense mutation payload.
 *
 * @extends {BaseAppGraphqlPayload<RemoveExpenseMutationRequestVariables>}
 */
export default class RemoveExpenseMutationGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      mutation RemoveExpenseMutation ($input: RemoveExpenseInput!) {
        removeExpense (input: $input) {
          expenseId
        }
      }
    `
  }
}

/**
 * @typedef {{
 *   input: schema.graphql.RemoveExpenseInput
 * }} RemoveExpenseMutationRequestVariables
 */
