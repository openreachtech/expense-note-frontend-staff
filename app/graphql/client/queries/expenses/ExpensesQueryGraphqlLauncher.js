import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import ExpensesQueryGraphqlPayload from './ExpensesQueryGraphqlPayload.js'
import ExpensesQueryGraphqlCapsule from './ExpensesQueryGraphqlCapsule.js'

/**
 * Expenses query graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class ExpensesQueryGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return ExpensesQueryGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return ExpensesQueryGraphqlCapsule
  }
}
