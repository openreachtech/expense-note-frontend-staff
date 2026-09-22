import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import ExpenseCategoriesQueryGraphqlPayload from './ExpenseCategoriesQueryGraphqlPayload.js'
import ExpenseCategoriesQueryGraphqlCapsule from './ExpenseCategoriesQueryGraphqlCapsule.js'

/**
 * ExpenseCategories query graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class ExpenseCategoriesQueryGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return ExpenseCategoriesQueryGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return ExpenseCategoriesQueryGraphqlCapsule
  }
}
