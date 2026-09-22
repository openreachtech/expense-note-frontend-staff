import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * Expenses query payload.
 *
 * @extends {BaseAppGraphqlPayload<ExpensesQueryRequestVariables>}
 */
export default class ExpensesQueryGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      query ExpensesQuery ($input: ExpensesInput!) {
        expenses (input: $input) {
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
          pagination {
            limit
            offset
            sort {
              key
              direction
            }
            totalRecords
          }
        }
      }
    `
  }
}

/**
 * @typedef {{
 *   input: schema.graphql.ExpensesInput
 * }} ExpensesQueryRequestVariables
 */
