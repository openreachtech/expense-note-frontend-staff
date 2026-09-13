import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * SignedInStaffMember query graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<SignedInStaffMemberQueryResponseContent>}
 */
export default class SignedInStaffMemberQueryGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: signedInStaffMemberValueHash
   *
   * @returns {schema.graphql.SignedInStaffMemberResult | null}
   */
  get signedInStaffMemberValueHash () {
    return this.content
      ?.signedInStaffMember
      ?? null
  }

  /**
   * get: staffMemberId
   *
   * @returns {number | null}
   */
  get staffMemberId () {
    return this.signedInStaffMemberValueHash
      ?.staffMemberId
      ?? null
  }

  /**
   * get: name
   *
   * @returns {string | null}
   */
  get name () {
    return this.signedInStaffMemberValueHash
      ?.name
      ?? null
  }

  /**
   * get: email
   *
   * @returns {string | null}
   */
  get email () {
    return this.signedInStaffMemberValueHash
      ?.email
      ?? null
  }
}

/**
 * @typedef {{
 *   signedInStaffMember: schema.graphql.SignedInStaffMemberResult
 * }} SignedInStaffMemberQueryResponseContent
 */
