import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import RemoveExpenseMutationGraphqlPayload from './RemoveExpenseMutationGraphqlPayload.js'
import RemoveExpenseMutationGraphqlCapsule from './RemoveExpenseMutationGraphqlCapsule.js'

/**
 * RemoveExpense mutation graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class RemoveExpenseMutationGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return RemoveExpenseMutationGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return RemoveExpenseMutationGraphqlCapsule
  }
}
