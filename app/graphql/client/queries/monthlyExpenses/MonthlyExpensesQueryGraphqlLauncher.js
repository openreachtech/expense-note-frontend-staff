import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import MonthlyExpensesQueryGraphqlPayload from './MonthlyExpensesQueryGraphqlPayload.js'
import MonthlyExpensesQueryGraphqlCapsule from './MonthlyExpensesQueryGraphqlCapsule.js'

/**
 * MonthlyExpenses query graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class MonthlyExpensesQueryGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return MonthlyExpensesQueryGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return MonthlyExpensesQueryGraphqlCapsule
  }
}
