import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * CorrectExpense mutation payload.
 *
 * @extends {BaseAppGraphqlPayload<CorrectExpenseMutationRequestVariables>}
 */
export default class CorrectExpenseMutationGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      mutation CorrectExpenseMutation ($input: CorrectExpenseInput!) {
        correctExpense (input: $input) {
          expenseId
        }
      }
    `
  }
}

/**
 * @typedef {{
 *   input: schema.graphql.CorrectExpenseInput
 * }} CorrectExpenseMutationRequestVariables
 */
