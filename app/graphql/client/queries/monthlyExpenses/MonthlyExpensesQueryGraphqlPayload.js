import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * MonthlyExpenses query payload.
 *
 * @extends {BaseAppGraphqlPayload<MonthlyExpensesQueryRequestVariables>}
 */
export default class MonthlyExpensesQueryGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      query MonthlyExpensesQuery ($input: MonthlyExpensesInput!) {
        monthlyExpenses (input: $input) {
          expenses {
            id
            spentOn
            amount
            memo
            status
            expenseCategory {
              id
              name
              displayOrder
            }
            createdAt
            updatedAt
          }
          totalAmount
        }
      }
    `
  }
}

/**
 * @typedef {{
 *   input: schema.graphql.MonthlyExpensesInput
 * }} MonthlyExpensesQueryRequestVariables
 */
