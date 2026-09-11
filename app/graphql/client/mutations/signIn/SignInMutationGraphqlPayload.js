import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * SignIn mutation payload.
 *
 * @extends {BaseAppGraphqlPayload<SignInMutationRequestVariables>}
 */
export default class SignInMutationGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      mutation SignInMutation ($input: SignInInput!) {
        signIn (input: $input) {
          staffMemberId
          accessToken
        }
      }
    `
  }
}

/**
 * @typedef {{
 *   input: schema.graphql.SignInInput
 * }} SignInMutationRequestVariables
 */
