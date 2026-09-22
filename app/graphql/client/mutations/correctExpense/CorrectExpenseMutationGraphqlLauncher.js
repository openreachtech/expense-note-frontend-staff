import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import CorrectExpenseMutationGraphqlPayload from './CorrectExpenseMutationGraphqlPayload.js'
import CorrectExpenseMutationGraphqlCapsule from './CorrectExpenseMutationGraphqlCapsule.js'

/**
 * CorrectExpense mutation graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class CorrectExpenseMutationGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return CorrectExpenseMutationGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return CorrectExpenseMutationGraphqlCapsule
  }
}
