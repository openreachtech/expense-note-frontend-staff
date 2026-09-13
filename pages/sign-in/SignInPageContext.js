import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

const PAGE_TITLE = 'Sign in'

const SUBMIT_BUTTON_LABEL = 'Sign in'

const EMAIL_FIELD_ID = 'sign-in-email'
const EMAIL_FIELD_LABEL = 'Email address'

const PASSWORD_FIELD_ID = 'sign-in-password'
const PASSWORD_FIELD_LABEL = 'Password'

const REFUSAL_REGION_ID = 'sign-in-refusal'

/*
 * The query key `middleware/000.gateway.global.js` writes the path somebody wanted before being
 * sent here, and the path they go to when it carries nothing usable. `/` is still an empty stub
 * (Q41); that is the route's business, not this screen's.
 */
const REDIRECT_QUERY_KEY = 'redirect'
const DEFAULT_DESTINATION_PATH = '/'

/**
 * Context of the sign-in page.
 *
 * The sign-in screen is the only one reachable without a session, and every other
 * screen sends a member of staff here when theirs has gone.
 *
 * The screen has four states, and every one of them is read off the three reactive
 * objects this context is given:
 *
 * | State | How it is reached |
 * | :-- | :-- |
 * | empty | both form values null, no refusal, not signing in |
 * | filled | a form value on either field |
 * | loading | statusReactive.isSigningIn true, so the submit is pending |
 * | error | errorMessageHashReactive.signIn holds the one refusal message |
 *
 * @extends {BaseAppContext}
 */
export default class SignInPageContext extends BaseAppContext {
  /**
   * Constructor.
   *
   * @param {SignInPageContextParams} params - Parameters of this constructor.
   */
  constructor ({
    props,
    componentContext,
    route,
    router,
    formValueHashReactive,
    statusReactive,
    errorMessageHashReactive,
    graphqlClientHash,
    accessTokenClerk,
  }) {
    super({
      props,
      componentContext,
    })

    this.route = route
    this.router = router
    this.formValueHashReactive = formValueHashReactive
    this.statusReactive = statusReactive
    this.errorMessageHashReactive = errorMessageHashReactive
    this.graphqlClientHash = graphqlClientHash
    this.accessTokenClerk = accessTokenClerk
  }

  /**
   * Factory method.
   *
   * @template {X extends typeof SignInPageContext ? X : never} T, X
   * @override
   * @param {SignInPageContextParams} params - Parameters of this factory method.
   * @returns {InstanceType<T>} An instance of this class.
   * @this {T}
   */
  static create ({
    props,
    componentContext,
    route,
    router,
    formValueHashReactive,
    statusReactive,
    errorMessageHashReactive,
    graphqlClientHash,
    accessTokenClerk,
  }) {
    return /** @type {InstanceType<T>} */ (
      new this({
        props,
        componentContext,
        route,
        router,
        formValueHashReactive,
        statusReactive,
        errorMessageHashReactive,
        graphqlClientHash,
        accessTokenClerk,
      })
    )
  }

  /**
   * get: Page title.
   *
   * @returns {string} Title of the sign-in page.
   */
  get pageTitle () {
    return PAGE_TITLE
  }

  /**
   * get: Parcel of the block framing the email address field.
   *
   * It carries no errorMessages, and that is a requirement rather than an omission.
   * Specification section 10 refuses an address with no account and a correct address with
   * the wrong password identically, so the refusal is one form-level message; errorMessages
   * attaches to a single control, which is the shape that would let the two diverge.
   *
   * @returns {ControlBlockParcel} Parcel of the block.
   */
  get emailControlBlockParcel () {
    return {
      label: EMAIL_FIELD_LABEL,
      controlId: this.emailFieldId,
      required: true,
    }
  }

  /**
   * get: Id of the email address field.
   *
   * The block renders its label's "for" from the parcel's controlId and cannot set an id on
   * the control it frames, so the same id has to reach both or the label points at nothing.
   *
   * @returns {string} Id of the field.
   */
  get emailFieldId () {
    return EMAIL_FIELD_ID
  }

  /**
   * get: Parcel of the email address field.
   *
   * A refusal marks both fields invalid, never one: which of the two credentials was wrong
   * is exactly what the refusal may not say.
   *
   * @returns {EmailFieldParcel} Parcel of the field.
   */
  get emailFieldParcel () {
    const invalid = this.hasRefusal()

    return {
      value: this.emailValue,
      invalid,
    }
  }

  /**
   * get: Email address entered so far.
   *
   * @returns {string | null} The address, or null while the field is untouched.
   */
  get emailValue () {
    return this.formValueHashReactive.email
      ?? null
  }

  /**
   * get: Parcel of the block framing the password field.
   *
   * Carries no errorMessages, for the reason given on the email address block.
   *
   * @returns {ControlBlockParcel} Parcel of the block.
   */
  get passwordControlBlockParcel () {
    return {
      label: PASSWORD_FIELD_LABEL,
      controlId: this.passwordFieldId,
      required: true,
    }
  }

  /**
   * get: Id of the password field.
   *
   * @returns {string} Id of the field.
   */
  get passwordFieldId () {
    return PASSWORD_FIELD_ID
  }

  /**
   * get: Parcel of the password field.
   *
   * @returns {PasswordFieldParcel} Parcel of the field.
   */
  get passwordFieldParcel () {
    const invalid = this.hasRefusal()

    return {
      value: this.passwordValue,
      invalid,
    }
  }

  /**
   * get: Password entered so far.
   *
   * @returns {string | null} The password, or null while the field is untouched.
   */
  get passwordValue () {
    return this.formValueHashReactive.password
      ?? null
  }

  /**
   * get: Id of the region holding the refusal message.
   *
   * Both fields point at it with aria-describedby. The library's own block wires no such
   * association from its error region to the control it describes, and its source says so,
   * so this screen wires it instead. The region exists whether or not it holds a message,
   * which is what lets the association hold before there is anything to read.
   *
   * @returns {string} Id of the region.
   */
  get refusalRegionId () {
    return REFUSAL_REGION_ID
  }

  /**
   * get: The one message shown when a sign-in is refused.
   *
   * Resolved from the error code by BaseAppGraphqlCapsule, which is the single place a code
   * becomes a message. This context never maps one itself.
   *
   * @returns {string | null} The message, or null when nothing has been refused.
   */
  get refusalMessage () {
    return this.errorMessageHashReactive.signIn
      ?? null
  }

  /**
   * get: Parcel of the submit button.
   *
   * The loading field is the whole double-submission guard: the library suppresses the click
   * emit and sets the native disabled attribute from it, and a disabled default button also
   * blocks a form's implicit submission on Enter. No guard belongs in the template.
   *
   * The primary-looking variant is named default. There is no variant named primary.
   *
   * @returns {SubmitButtonParcel} Parcel of the button.
   */
  get submitButtonParcel () {
    const loading = this.isSigningIn()

    return {
      variant: 'default',
      type: 'submit',
      loading,
    }
  }

  /**
   * get: Label of the submit button.
   *
   * Read twice on purpose: once as the visible label, once as aria-label. While the button is
   * pending the library hides its label with visibility and marks the spinner aria-hidden,
   * which leaves the button with no accessible name at all; an aria-label carrying the same
   * words survives that, and matching the visible text keeps the two in agreement.
   *
   * @returns {string} Label of the button.
   */
  get submitButtonLabel () {
    return SUBMIT_BUTTON_LABEL
  }

  /**
   * get: Capsule of the last signIn response.
   *
   * The client replaces this value with a new capsule on every invocation, and starts holding one
   * that answers pending before a request has been made, so there is never a moment where it is
   * absent.
   *
   * @returns {SignInCapsule} The capsule.
   */
  get signInCapsule () {
    return this.graphqlClientHash.signIn
      .capsuleRef
      .value
  }

  /**
   * get: Hooks the signIn request runs at its own boundaries.
   *
   * The pending state is raised and lowered by the request itself rather than set by hand around
   * the call: `beforeRequest` runs once the launcher has accepted the variables and is about to
   * fetch, `afterRequest` once the capsule is built, whether the response was an answer, a refusal
   * or a network failure. Returning false from `beforeRequest` is what lets the request proceed —
   * returning true aborts it.
   *
   * @returns {LauncherHooks} The hooks.
   */
  get signInLauncherHooks () {
    const beforeRequest = async () => {
      this.startSigningIn()

      return false
    }

    const afterRequest = async () => {
      this.finishSigningIn()
    }

    return {
      beforeRequest,
      afterRequest,
    }
  }

  /**
   * get: Capsule of the last renewAccessToken response.
   *
   * @returns {RenewAccessTokenCapsule} The capsule.
   */
  get renewAccessTokenCapsule () {
    return this.graphqlClientHash.renewAccessToken
      .capsuleRef
      .value
  }

  /**
   * get: Capsule of the last signedInStaffMember response.
   *
   * @returns {SignedInStaffMemberCapsule} The capsule.
   */
  get signedInStaffMemberCapsule () {
    return this.graphqlClientHash.signedInStaffMember
      .capsuleRef
      .value
  }

  /**
   * Set the component up.
   *
   * @override
   * @returns {SignInPageContext} This instance, for the page to hold.
   * @this {SignInPageContext}
   */
  setupComponent () {
    this.restoreSessionOnMounted()

    return this
  }

  /**
   * Send a member of staff who already has a session on, rather than asking them twice.
   *
   * Section 10.2 puts `signedInStaffMember` on this screen "on opening". It cannot be the first
   * call: the access token lives in memory (section 6), so a page reload starts with none and
   * `signedInStaffMember` would be unauthenticated on every reload — the one case the row exists
   * for. So the session is established first, from the refresh-token cookie the browser still
   * holds, and only then is anybody asked who is signed in.
   *
   * Nothing here ever writes a refusal onto the screen. Every way this sequence can end early —
   * no cookie, an expired one, a spent one, a session the backend no longer honours — means the
   * same thing: this person is not signed in, which is the state the screen is already showing.
   * Telling them their session has ended when they simply opened a sign-in page would be wrong.
   *
   * @returns {Promise<void>}
   */
  async restoreSessionOnMounted () {
    await this.establishAccessToken()

    if (!this.accessTokenClerk.existsToken()) {
      return
    }

    await this.fetchSignedInStaffMember()

    if (!this.hasSignedInStaffMember()) {
      return
    }

    await this.navigateToDestination()
  }

  /**
   * Make sure an access token is held, renewing one when it is not.
   *
   * A token already in memory is left alone on purpose: `renewAccessToken` spends the refresh token
   * it is presented with and rotates the series, so calling it when the session is already usable
   * would burn a credential for nothing.
   *
   * @returns {Promise<void>}
   */
  async establishAccessToken () {
    if (this.accessTokenClerk.existsToken()) {
      return
    }

    await this.renewAccessToken()
  }

  /**
   * Buy a new access token with the refresh-token cookie.
   *
   * Holding the answer unconditionally is deliberate: a refused renewal answers no token, and
   * holding that clears whatever was held, which is the correct reading of a session the backend
   * has stopped honouring.
   *
   * @returns {Promise<void>}
   */
  async renewAccessToken () {
    await this.graphqlClientHash.renewAccessToken
      .invokeRequestOnEvent()

    const token = this.renewAccessTokenCapsule.accessToken

    this.holdAccessToken({
      token,
    })
  }

  /**
   * Ask the API who is signed in.
   *
   * @returns {Promise<void>}
   */
  async fetchSignedInStaffMember () {
    await this.graphqlClientHash.signedInStaffMember
      .invokeRequestOnEvent()
  }

  /**
   * Whether the API answered with a member of staff.
   *
   * @returns {boolean} true when somebody is signed in.
   */
  hasSignedInStaffMember () {
    return this.signedInStaffMemberCapsule.staffMemberId !== null
  }

  /**
   * Go to the screen this person was on their way to.
   *
   * @returns {Promise<void>}
   */
  async navigateToDestination () {
    const path = this.generateDestinationPath()

    await this.router.replace(path)
  }

  /**
   * Generate the path to leave this screen for.
   *
   * @returns {string} The path.
   */
  generateDestinationPath () {
    return this.extractRequestedPath()
      ?? DEFAULT_DESTINATION_PATH
  }

  /**
   * Extract the path the gateway recorded when it sent this person here.
   *
   * A repeated query key arrives as an array and a bare one as undefined, so anything that is not
   * a single string is answered as nothing to go back to.
   *
   * @returns {string | null} The path, or null when the query carries none this screen will follow.
   */
  extractRequestedPath () {
    const requestedPath = this.route.query[REDIRECT_QUERY_KEY]

    if (typeof requestedPath !== 'string') {
      return null
    }

    if (!this.isInternalPath({
      path: requestedPath,
    })) {
      return null
    }

    return requestedPath
  }

  /**
   * Whether a path stays inside this application.
   *
   * The query is whatever was in the address bar, so it is not evidence of anything. A value that
   * is not a path of this application is refused rather than followed: `//elsewhere.example` is a
   * protocol-relative address to another origin, and one that reads like a path.
   *
   * @param {{
   *   path: string
   * }} params - Parameters.
   * @returns {boolean} true when the path belongs to this application.
   */
  isInternalPath ({
    path,
  }) {
    return path.startsWith('/')
      && !path.startsWith('//')
  }

  /**
   * Whether a sign-in has been refused.
   *
   * @returns {boolean} true when a refusal is on screen.
   */
  hasRefusal () {
    return this.refusalMessage !== null
  }

  /**
   * Whether a sign-in is in flight.
   *
   * @returns {boolean} true while the submit is pending.
   */
  isSigningIn () {
    return Boolean(this.statusReactive.isSigningIn)
  }

  /**
   * Enter the pending state.
   *
   * Called from the signIn request's own `beforeRequest` hook, never from a handler, so the state
   * is raised by a request that is actually going out.
   *
   * @returns {void}
   */
  startSigningIn () {
    this.statusReactive.isSigningIn = true
  }

  /**
   * Leave the pending state.
   *
   * Called from the signIn request's own `afterRequest` hook, so it is lowered by a real response
   * — an answer, a refusal and a network failure all reach it.
   *
   * @returns {void}
   */
  finishSigningIn () {
    this.statusReactive.isSigningIn = false
  }

  /**
   * Respond to the email address field changing.
   *
   * @param {{
   *   payload: EmailFieldEmitPayload
   * }} params - Parameters.
   * @returns {void}
   */
  onChangeEmail ({
    payload,
  }) {
    this.formValueHashReactive.email = payload.value
  }

  /**
   * Respond to the password field changing.
   *
   * @param {{
   *   payload: PasswordFieldEmitPayload
   * }} params - Parameters.
   * @returns {void}
   */
  onChangePassword ({
    payload,
  }) {
    this.formValueHashReactive.password = payload.value
  }

  /**
   * Respond to the form being submitted.
   *
   * The previous refusal goes first, so a second attempt is never read against the first one's
   * message. The pending state is not set here — the request raises and lowers it through its own
   * hooks, so the screen is pending for exactly as long as something is in flight.
   *
   * @returns {Promise<void>}
   */
  async onSubmitForm () {
    this.clearRefusal()

    const variables = this.buildSignInVariables()
    const hooks = this.signInLauncherHooks

    await this.graphqlClientHash.signIn
      .invokeRequestOnEvent({
        variables,
        hooks,
      })

    const capsule = this.signInCapsule

    if (capsule.hasError()) {
      this.surfaceRefusal({
        capsule,
      })

      return
    }

    const {
      accessToken,
    } = capsule

    this.holdAccessToken({
      token: accessToken,
    })

    await this.navigateToDestination()
  }

  /**
   * Build the variables the signIn document declares.
   *
   * @returns {SignInVariables} The variables.
   */
  buildSignInVariables () {
    const email = this.emailValue
    const password = this.passwordValue

    return {
      input: {
        email,
        password,
      },
    }
  }

  /**
   * Take the refusal off the screen.
   *
   * @returns {void}
   */
  clearRefusal () {
    this.errorMessageHashReactive.signIn = null
  }

  /**
   * Put a refused response's message on the screen.
   *
   * The message is read off the capsule, which resolves it from the error code the backend sent.
   * That is the single resolution point, and this screen mapping a code itself is exactly how
   * section 10's identically-refused pair would quietly stop being identical.
   *
   * @param {{
   *   capsule: SignInCapsule
   * }} params - Parameters.
   * @returns {void}
   */
  surfaceRefusal ({
    capsule,
  }) {
    this.errorMessageHashReactive.signIn = capsule.extractResolvedErrorMessage()
  }

  /**
   * Hold the access token for the requests that follow.
   *
   * It goes to a clerk backed by memory rather than by storage the browser keeps, which is section
   * 6's requirement. A null token clears whatever was held.
   *
   * @param {{
   *   token: string | null
   * }} params - Parameters.
   * @returns {void}
   */
  holdAccessToken ({
    token,
  }) {
    this.accessTokenClerk.saveToken({
      token,
    })
  }
}

/**
 * @typedef {import('@openreachtech/furo-nuxt').BaseFuroContextParams<*> & {
 *   route: import('vue-router').RouteLocationNormalizedLoaded
 *   router: import('vue-router').Router
 *   formValueHashReactive: import('vue').Reactive<FormValueHash>
 *   statusReactive: import('vue').Reactive<UserInterfaceState>
 *   errorMessageHashReactive: import('vue').Reactive<ErrorMessageHash>
 *   graphqlClientHash: GraphqlClientHash
 *   accessTokenClerk: import('@openreachtech/furo-nuxt').AccessTokenClerk
 * }} SignInPageContextParams
 */

/**
 * @typedef {{
 *   signIn: GraphqlClient
 *   renewAccessToken: GraphqlClient
 *   signedInStaffMember: GraphqlClient
 * }} GraphqlClientHash
 */

/**
 * @typedef {{
 *   capsuleRef: import('vue').Ref<*>
 *   invokeRequestOnEvent: (args?: *) => Promise<void>
 * }} GraphqlClient
 */

/**
 * @typedef {import('~/app/graphql/client/mutations/signIn/SignInMutationGraphqlCapsule.js').default} SignInCapsule
 */

/**
 * @typedef {import('~/app/graphql/client/mutations/renewAccessToken/RenewAccessTokenMutationGraphqlCapsule.js').default} RenewAccessTokenCapsule
 */

/**
 * @typedef {import('~/app/graphql/client/queries/signedInStaffMember/SignedInStaffMemberQueryGraphqlCapsule.js').default} SignedInStaffMemberCapsule
 */

/**
 * @typedef {{
 *   beforeRequest: () => Promise<boolean>
 *   afterRequest: () => Promise<void>
 * }} LauncherHooks
 */

/**
 * @typedef {{
 *   input: schema.graphql.SignInInput
 * }} SignInVariables
 */

/**
 * @typedef {{
 *   email: string | null
 *   password: string | null
 * }} FormValueHash
 */

/**
 * @typedef {{
 *   isSigningIn: boolean
 * }} UserInterfaceState
 */

/**
 * @typedef {{
 *   signIn: string | null
 * }} ErrorMessageHash
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroControlBlock/FuroControlBlockContext.js').Props['parcel']} ControlBlockParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroEmailField/FuroEmailFieldContext.js').FuroEmailFieldParcel} EmailFieldParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroPasswordField/FuroPasswordFieldContext.js').FuroPasswordFieldParcel} PasswordFieldParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroButton/FuroButtonContext.js').FuroButtonParcel} SubmitButtonParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroEmailField/EmailFieldEmitPayload.js').default} EmailFieldEmitPayload
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroPasswordField/PasswordFieldEmitPayload.js').default} PasswordFieldEmitPayload
 */
