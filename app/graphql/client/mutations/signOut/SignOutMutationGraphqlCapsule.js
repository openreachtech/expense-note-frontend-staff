import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * SignOut mutation graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<SignOutMutationResponseContent>}
 */
export default class SignOutMutationGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: signOutValueHash
   *
   * @returns {schema.graphql.SignOutResult | null}
   */
  get signOutValueHash () {
    return this.content
      ?.signOut
      ?? null
  }

  /**
   * get: signedOut
   *
   * @returns {boolean | null}
   */
  get signedOut () {
    return this.signOutValueHash
      ?.signedOut
      ?? null
  }
}

/**
 * @typedef {{
 *   signOut: schema.graphql.SignOutResult
 * }} SignOutMutationResponseContent
 */
