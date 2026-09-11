import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * SignedInStaffMember query payload.
 *
 * @extends {BaseAppGraphqlPayload<SignedInStaffMemberQueryRequestVariables>}
 */
export default class SignedInStaffMemberQueryGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      query SignedInStaffMemberQuery {
        signedInStaffMember {
          staffMemberId
          name
          email
        }
      }
    `
  }
}

/**
 * @typedef {{}} SignedInStaffMemberQueryRequestVariables
 */
