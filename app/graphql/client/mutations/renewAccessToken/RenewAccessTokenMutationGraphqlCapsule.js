import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * RenewAccessToken mutation graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<RenewAccessTokenMutationResponseContent>}
 */
export default class RenewAccessTokenMutationGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: renewAccessTokenValueHash
   *
   * @returns {schema.graphql.RenewAccessTokenResult | null}
   */
  get renewAccessTokenValueHash () {
    return this.content
      ?.renewAccessToken
      ?? null
  }

  /**
   * get: accessToken
   *
   * @returns {string | null}
   */
  get accessToken () {
    return this.renewAccessTokenValueHash
      ?.accessToken
      ?? null
  }
}

/**
 * @typedef {{
 *   renewAccessToken: schema.graphql.RenewAccessTokenResult
 * }} RenewAccessTokenMutationResponseContent
 */
