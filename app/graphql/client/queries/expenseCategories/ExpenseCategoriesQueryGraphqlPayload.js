import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * ExpenseCategories query payload.
 *
 * @extends {BaseAppGraphqlPayload<ExpenseCategoriesQueryRequestVariables>}
 */
export default class ExpenseCategoriesQueryGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      query ExpenseCategoriesQuery {
        expenseCategories {
          expenseCategories {
            id
            name
            displayOrder
          }
        }
      }
    `
  }
}

/**
 * @typedef {{}} ExpenseCategoriesQueryRequestVariables
 */
