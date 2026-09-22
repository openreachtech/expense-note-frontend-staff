import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import RecordExpenseMutationGraphqlPayload from './RecordExpenseMutationGraphqlPayload.js'
import RecordExpenseMutationGraphqlCapsule from './RecordExpenseMutationGraphqlCapsule.js'

/**
 * RecordExpense mutation graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class RecordExpenseMutationGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return RecordExpenseMutationGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return RecordExpenseMutationGraphqlCapsule
  }
}
