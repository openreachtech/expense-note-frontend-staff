import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

const PAGE_TITLE = 'Sign in'

const SUBMIT_BUTTON_LABEL = 'Sign in'

const EMAIL_FIELD_ID = 'sign-in-email'
const EMAIL_FIELD_LABEL = 'Email address'

const PASSWORD_FIELD_ID = 'sign-in-password'
const PASSWORD_FIELD_LABEL = 'Password'

const REFUSAL_REGION_ID = 'sign-in-refusal'

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
    formValueHashReactive,
    statusReactive,
    errorMessageHashReactive,
  }) {
    super({
      props,
      componentContext,
    })

    this.formValueHashReactive = formValueHashReactive
    this.statusReactive = statusReactive
    this.errorMessageHashReactive = errorMessageHashReactive
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
    formValueHashReactive,
    statusReactive,
    errorMessageHashReactive,
  }) {
    return /** @type {InstanceType<T>} */ (
      new this({
        props,
        componentContext,
        formValueHashReactive,
        statusReactive,
        errorMessageHashReactive,
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
   * Begins an attempt: the previous refusal goes, and the screen enters its pending state.
   * Invoking signIn itself belongs to the next checkpoint, which wires the API in.
   *
   * @returns {void}
   */
  onSubmitForm () {
    this.errorMessageHashReactive.signIn = null
    this.statusReactive.isSigningIn = true
  }
}

/**
 * @typedef {import('@openreachtech/furo-nuxt').BaseFuroContextParams<*> & {
 *   formValueHashReactive: import('vue').Reactive<FormValueHash>
 *   statusReactive: import('vue').Reactive<UserInterfaceState>
 *   errorMessageHashReactive: import('vue').Reactive<ErrorMessageHash>
 * }} SignInPageContextParams
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
