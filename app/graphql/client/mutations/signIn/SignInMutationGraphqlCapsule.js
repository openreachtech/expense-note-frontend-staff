import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * SignIn mutation graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<SignInMutationResponseContent>}
 */
export default class SignInMutationGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: signInValueHash
   *
   * @returns {schema.graphql.SignInResult | null}
   */
  get signInValueHash () {
    return this.content
      ?.signIn
      ?? null
  }

  /**
   * get: staffMemberId
   *
   * @returns {number | null}
   */
  get staffMemberId () {
    return this.signInValueHash
      ?.staffMemberId
      ?? null
  }

  /**
   * get: accessToken
   *
   * @returns {string | null}
   */
  get accessToken () {
    return this.signInValueHash
      ?.accessToken
      ?? null
  }
}

/**
 * @typedef {{
 *   signIn: schema.graphql.SignInResult
 * }} SignInMutationResponseContent
 */
