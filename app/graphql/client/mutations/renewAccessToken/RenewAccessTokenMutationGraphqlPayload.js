import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * RenewAccessToken mutation payload.
 *
 * @extends {BaseAppGraphqlPayload<RenewAccessTokenMutationRequestVariables>}
 */
export default class RenewAccessTokenMutationGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      mutation RenewAccessTokenMutation {
        renewAccessToken {
          accessToken
        }
      }
    `
  }
}

/**
 * @typedef {{}} RenewAccessTokenMutationRequestVariables
 */
