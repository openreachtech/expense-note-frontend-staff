import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import SignOutMutationGraphqlPayload from './SignOutMutationGraphqlPayload.js'
import SignOutMutationGraphqlCapsule from './SignOutMutationGraphqlCapsule.js'

/**
 * SignOut mutation graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class SignOutMutationGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return SignOutMutationGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return SignOutMutationGraphqlCapsule
  }
}
