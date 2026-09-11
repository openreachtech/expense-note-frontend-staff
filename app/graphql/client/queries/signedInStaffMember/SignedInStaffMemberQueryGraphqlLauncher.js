import BaseAppGraphqlLauncher from '~/app/graphql/client/BaseAppGraphqlLauncher.js'

import SignedInStaffMemberQueryGraphqlPayload from './SignedInStaffMemberQueryGraphqlPayload.js'
import SignedInStaffMemberQueryGraphqlCapsule from './SignedInStaffMemberQueryGraphqlCapsule.js'

/**
 * SignedInStaffMember query graphql launcher.
 *
 * @extends {BaseAppGraphqlLauncher}
 */
export default class SignedInStaffMemberQueryGraphqlLauncher extends BaseAppGraphqlLauncher {
  /** @override */
  static get Payload () {
    return SignedInStaffMemberQueryGraphqlPayload
  }

  /** @override */
  static get Capsule () {
    return SignedInStaffMemberQueryGraphqlCapsule
  }
}
