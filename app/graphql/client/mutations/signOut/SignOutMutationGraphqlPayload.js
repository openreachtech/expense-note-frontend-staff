import BaseAppGraphqlPayload from '~/app/graphql/client/BaseAppGraphqlPayload.js'

/**
 * SignOut mutation payload.
 *
 * @extends {BaseAppGraphqlPayload<SignOutMutationRequestVariables>}
 */
export default class SignOutMutationGraphqlPayload extends BaseAppGraphqlPayload {
  /** @override */
  static get document () {
    return /* GraphQL */ `
      mutation SignOutMutation {
        signOut {
          signedOut
        }
      }
    `
  }
}

/**
 * @typedef {{}} SignOutMutationRequestVariables
 */
