import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import SignInMutationGraphqlPayload from './SignInMutationGraphqlPayload.js'
import SignInMutationGraphqlCapsule from './SignInMutationGraphqlCapsule.js'

/**
 * SignIn mutation graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class SignInMutationGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return SignInMutationGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return SignInMutationGraphqlCapsule
  }
}
