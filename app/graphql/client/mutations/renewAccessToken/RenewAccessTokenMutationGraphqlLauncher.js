import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import RenewAccessTokenMutationGraphqlPayload from './RenewAccessTokenMutationGraphqlPayload.js'
import RenewAccessTokenMutationGraphqlCapsule from './RenewAccessTokenMutationGraphqlCapsule.js'

/**
 * RenewAccessToken mutation graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class RenewAccessTokenMutationGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return RenewAccessTokenMutationGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return RenewAccessTokenMutationGraphqlCapsule
  }
}
