import {
  PAGINATION,
} from '~/app/constants.js'

import {
  ERROR_CODE_HASH,
  ERROR_MESSAGE_HASH,
} from '~/app/constants-error.js'

import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import YenAmountFormatter from '~/app/modules/YenAmountFormatter.js'

const PAGE_TITLE = 'Expenses'

/*
 * The one link out of this screen, and the screen it points at.
 *
 * Checkpoint 11 decided that the two signed-in screens link to each other, one link each, in the
 * page's own header rather than as chrome in `layouts/default.vue` -- that layout is shared with
 * `/sign-in`, where a link to a guarded screen would bounce straight back. The link is planned
 * growth of a screen that was already complete for its own feature: what changed is that there is
 * now somewhere to go.
 */
const MONTHLY_EXPENSES_LINK_PATH = '/monthly-expenses'
const MONTHLY_EXPENSES_LINK_LABEL = 'Monthly expenses'

const RECORDING_FORM_HEADING = 'Record an expense'
const CORRECTING_FORM_HEADING = 'Correct this entry'

const ENTRIES_HEADING = 'Your entries'
const ENTRIES_ORDER_NOTE = 'Most recent first, by the date the money was paid.'

const SPENT_ON_FIELD_ID = 'expense-spent-on'
const SPENT_ON_FIELD_LABEL = 'Date paid'

const AMOUNT_FIELD_ID = 'expense-amount'
const AMOUNT_FIELD_LABEL = 'Amount'
const AMOUNT_MINIMUM_VALUE = 1
const AMOUNT_STEP_VALUE = 1

const EXPENSE_CATEGORY_FIELD_ID = 'expense-category'
const EXPENSE_CATEGORY_FIELD_LABEL = 'Category'
const EXPENSE_CATEGORY_FIELD_PLACEHOLDER = 'Choose a category'

const MEMO_FIELD_ID = 'expense-memo'
const MEMO_FIELD_LABEL = 'Memo (optional)'
const MEMO_MAXIMUM_LENGTH = 191

const FORM_REFUSAL_REGION_ID = 'expense-form-refusal'
const ENTRIES_REFUSAL_REGION_ID = 'expense-entries-refusal'

/*
 * The region reporting that the categories themselves could not be read.
 *
 * It is a region of its own rather than a second writer of the form's one refusal slot, and that
 * is the whole of the fix: a submit clears the form's refusal before it sends, so a category
 * failure written there was erased by the first press of "Record the expense" and replaced by
 * "Choose a category." -- an instruction nobody could follow, because the select it names was
 * empty for the reason the erased sentence had given.
 */
const EXPENSE_CATEGORIES_REFUSAL_REGION_ID = 'expense-categories-refusal'

const RECORDING_SUBMIT_BUTTON_LABEL = 'Record the expense'
const CORRECTING_SUBMIT_BUTTON_LABEL = 'Save the correction'
const CANCEL_CORRECTION_BUTTON_LABEL = 'Cancel the correction'
const SIGN_OUT_BUTTON_LABEL = 'Sign out'
const RETRY_BUTTON_LABEL = 'Try again'
const RETRY_EXPENSE_CATEGORIES_BUTTON_LABEL = 'Load the categories again'
const CORRECT_ROW_BUTTON_LABEL = 'Correct'
const REMOVE_ROW_BUTTON_LABEL = 'Remove'
const ROW_ACTIONS_LABEL = 'Actions'
const PAGINATION_LABEL = 'Pages of entries'

const EMPTY_STATE_TITLE = 'No entries yet'
const EMPTY_STATE_DESCRIPTION = 'An expense you record appears here, most recent first.'

const ERROR_STATE_TITLE = 'The entries could not be loaded'

const REMOVAL_CONFIRMATION_TITLE = 'Remove this entry?'
const REMOVAL_CONFIRMATION_DESCRIPTION = 'The entry is removed permanently and cannot be restored.'
const REMOVAL_CONFIRM_BUTTON_LABEL = 'Remove the entry'
const REMOVAL_CANCEL_BUTTON_LABEL = 'Keep the entry'

/*
 * The column whose cell is rendered as `<time datetime="...">`.
 *
 * `FuroTable` hands every column to one `cell` slot rather than declaring one slot per column, so
 * the single place that knows which column is the date is this constant and the method that reads
 * it. A comparison in the template would be logic in a template.
 */
const SPENT_ON_COLUMN_FIELD = 'spentOnText'

const AMOUNT_COLUMN_FIELD = 'amountText'
const EXPENSE_CATEGORY_COLUMN_FIELD = 'expenseCategoryName'
const MEMO_COLUMN_FIELD = 'memoText'

const SPENT_ON_COLUMN_LABEL = 'Date paid'
const AMOUNT_COLUMN_LABEL = 'Amount'
const EXPENSE_CATEGORY_COLUMN_LABEL = 'Category'
const MEMO_COLUMN_LABEL = 'Memo'

/*
 * The offset the screen opens on: the first page of entries.
 *
 * Every later read carries an offset a member of staff chose -- from the page control, or the one
 * already on screen after a write -- so this number is read exactly once, when there is no page yet.
 */
const INITIAL_EXPENSES_OFFSET = 0

/*
 * Where a member of staff lands once their session has ended.
 *
 * The same path `middleware/000.gateway.global.js` sends an unauthenticated visitor to, and the
 * route `#sign-in` owns. It is restated rather than imported because the middleware declares its
 * own module-local copy, carrying a `TODO` that says the path belongs in configuration. A third
 * copy is not made: when that `TODO` is answered, both readers move to the one place at once.
 */
const SIGN_IN_PATH = '/sign-in'

/**
 * Context of the expense-entry screen.
 *
 * Specification section 11.2 describes ONE screen: a signed-in member of staff looking at their
 * own entries, most recent first by `spent_on`, which is also where they record a new entry,
 * correct one they got wrong, remove a duplicate, and sign out.
 *
 * The members this class needs are designed in `ai/contexts/uiux-context-expense-entry.md`: which
 * component each part of the screen is, which parcel getter feeds it, which of section 8's rules
 * binds it, and the names chosen for the properties, getters and handlers -- checked against the
 * `id-denylist` before they were written down.
 *
 * -------------------------------------------------------------------------------------------
 * What is here, and what is not
 * -------------------------------------------------------------------------------------------
 *
 * Checkpoint 15 built the screen: every parcel the template binds, every state the screen can be
 * in, and every transition a member of staff drives with a click, performing no request at all.
 * Checkpoint 16 filled in the five request methods it left -- `#readExpenses()`,
 * `#readExpenseCategories()`, `#submitExpenseForm()`, `#removeExpense()` and `#signOut()` --
 * without moving anything above them.
 *
 * The four reactive objects are still the only thing the screen renders from:
 * `responseHashReactive` is where an answer lands, `statusReactive` is what the screen is doing,
 * `errorMessageHashReactive` is what it has been refused, `formValueHashReactive` is what has been
 * typed. **Every one of them is now written from a real response**: a status flag is raised and
 * lowered by the request's own `beforeRequest` / `afterRequest` hooks rather than by hand around
 * the call, so the screen is pending for exactly as long as something is in flight, and a message
 * is read off the capsule that came back.
 *
 * -------------------------------------------------------------------------------------------
 * A write is followed by a re-read, and by exactly one
 * -------------------------------------------------------------------------------------------
 *
 * Specification section 11.2's call table fires `expenses` "on opening, and after every write",
 * and section 11.1 says why: each mutation answers the identifier of what it wrote and nothing
 * more, so the screen has no other way to show a correction in place or a removal gone. Every
 * successful recording, correction and removal therefore ends in `#rereadExpenses()`.
 *
 * **The re-read keeps the page a member of staff is looking at** -- `#expensesOffset`, the offset
 * the last answer carried -- rather than jumping to the first. The call table does not say which
 * page, and moving somebody off the page they were reading is a decision nothing in the
 * specification asks for.
 *
 * **It keeps that page only while the new total still has one.** A write can leave the offset on
 * screen past the end -- remove the only entry of a second page of twenty-one and the answer for
 * offset twenty is zero rows with a total of twenty, which the table cannot tell apart from having
 * no entries at all: it renders the empty region, and the paginator that would lead back is gone
 * with it, so twenty entries are unreachable without a reload. So the offset the re-read settles on
 * is decided by the total the answer carried, not by the one the screen was holding when the write
 * began. It is not a rule about removal -- a correction cannot change the count and never reaches
 * it -- but the re-read is one method serving every write, and a rule that held for only one of
 * them would be a rule the next writer does not know about.
 *
 * -------------------------------------------------------------------------------------------
 * The fifth condition: the form's own source failing
 * -------------------------------------------------------------------------------------------
 *
 * The four states the screen was designed around -- waiting, empty, failed, refused -- are the
 * *entries'* four states. A failed `expenseCategories` is none of them: the entries are fine, the
 * table is fine, and the one thing that cannot be done is the thing the screen exists for, because
 * the select has nothing in it to choose. It is given a state of its own here rather than borrowed
 * from the form's single refusal slot, which is what left the screen unusable: the form clears that
 * slot at the top of every submit, so pressing "Record the expense" erased the sentence saying why
 * the categories were missing and replaced it with "Choose a category."
 *
 * Its own slot (`readingExpenseCategories`), its own always-rendered region, and its own retry that
 * re-reads only `expenseCategories`. A submit cannot reach any of the three, so the message stays
 * on screen for as long as the condition lasts, and the way out of it costs a click rather than a
 * reload.
 *
 * -------------------------------------------------------------------------------------------
 * The future date, and which side is authoritative about it
 * -------------------------------------------------------------------------------------------
 *
 * `FuroDatePicker`'s `maxValue` marks a later date and does not block one: Reka's `DateFieldRoot`
 * reads it only to set a `data-invalid` attribute, and `modelValue` still updates, so a typed
 * tomorrow reaches this class intact (`ai/contexts/uiux-context-expense-entry.md` section 5.1,
 * verified against the installed package). **The check therefore belongs here, on this context, and
 * never on the component.** It is one method of this one screen and is deliberately not a class
 * under `app/modules/`: nothing else in this feature reads it, and section 8 rule 13 makes a module
 * of logic two places share, not of logic one page uses twice.
 *
 * It is written at THIS checkpoint rather than the next one, against the earlier note that left it
 * to checkpoint 16, for one reason: the exit condition here is that the screen can show a refusal
 * for a future date, and a refusal the screen cannot reach is not a refusal.
 * `#isSpentOnLaterThanToday()` and `#onSubmitForm()`'s early return are the whole of it, they need
 * no client to run, and they are among the few things on this screen a test can reach at all --
 * no `.vue` file in this repository can be unit tested. Checkpoint 16 keeps the request half,
 * `#submitExpenseForm()`, which the early return stands in front of.
 *
 * **Both sides refuse a future date, and that is not duplication to be removed.** They answer
 * different questions. `RecordExpenseInputValidator` and `CorrectExpenseInputValidator` protect the
 * data against any caller at all, reading "today" in `Asia/Tokyo` from the instant the request
 * arrived; the check here tells a member of staff why nothing happened, immediately and without a
 * round trip.
 *
 * **The backend is authoritative.** The two can genuinely disagree -- the browser reads its own
 * timezone and the server reads `Asia/Tokyo`, so for a few hours either side of midnight one calls
 * a date "today" that the other calls tomorrow -- and where they do, the backend's refusal stands
 * and its message is what the screen shows (`203.M004.007` for a recording, `203.M005.009` for a
 * correction, both already mapped in `app/constants-error.js`). The check here never suppresses a
 * response and never decides that a date is acceptable: it declines to send one it can already see
 * is later than today, and every date it does send is judged again on the far side. The sentence it
 * shows is read out of that same hash rather than written again here, so a member of staff cannot
 * tell which of the two sides noticed.
 *
 * @extends {BaseAppContext}
 */
export default class ExpensesPageContext extends BaseAppContext {
  /**
   * Constructor.
   *
   * @param {ExpensesPageContextParams} params - Parameters of this constructor.
   */
  constructor ({
    props,
    componentContext,
    router,
    formValueHashReactive,
    statusReactive,
    errorMessageHashReactive,
    responseHashReactive,
    graphqlClientHash,
    accessTokenClerk,
  }) {
    super({
      props,
      componentContext,
    })

    this.router = router
    this.formValueHashReactive = formValueHashReactive
    this.statusReactive = statusReactive
    this.errorMessageHashReactive = errorMessageHashReactive
    this.responseHashReactive = responseHashReactive
    this.graphqlClientHash = graphqlClientHash
    this.accessTokenClerk = accessTokenClerk
  }

  /**
   * Factory method.
   *
   * @template {X extends typeof ExpensesPageContext ? X : never} T, X
   * @override
   * @param {ExpensesPageContextParams} params - Parameters of this factory method.
   * @returns {InstanceType<T>} An instance of this class.
   * @this {T}
   */
  static create ({
    props,
    componentContext,
    router,
    formValueHashReactive,
    statusReactive,
    errorMessageHashReactive,
    responseHashReactive,
    graphqlClientHash,
    accessTokenClerk,
  }) {
    return /** @type {InstanceType<T>} */ (
      new this({
        props,
        componentContext,
        router,
        formValueHashReactive,
        statusReactive,
        errorMessageHashReactive,
        responseHashReactive,
        graphqlClientHash,
        accessTokenClerk,
      })
    )
  }

  /**
   * Generate today's date, in the wire format the date picker and the contract share.
   *
   * Built from the browser's own calendar fields rather than from `Date#toISOString()`, which
   * answers the UTC date and would call a Tokyo evening "tomorrow". Which timezone this reads is
   * exactly why the backend stays authoritative -- see the class docblock.
   *
   * @returns {string} Today, as `YYYY-MM-DD`.
   */
  static generateTodayDate () {
    const now = new Date()

    const year = String(now.getFullYear())
      .padStart(4, '0')
    const month = String(now.getMonth() + 1)
      .padStart(2, '0')
    const day = String(now.getDate())
      .padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  /**
   * get: Page title.
   *
   * Read by the template as the screen's heading. `definePageMeta` in the sibling `index.vue`
   * restates the same words for the document title rather than reading this constant: Nuxt
   * compiles that call out of the component at build time, so it cannot reference an import.
   *
   * @returns {string} Title of the expenses page.
   */
  get pageTitle () {
    return PAGE_TITLE
  }

  /**
   * get: Path of the link to the monthly summary screen.
   *
   * @returns {string} The path.
   */
  get monthlyExpensesLinkPath () {
    return MONTHLY_EXPENSES_LINK_PATH
  }

  /**
   * get: Label of the link to the monthly summary screen.
   *
   * A plain anchor rather than a `FuroButton` dressed as one: a navigation target is an `<a>`, and
   * hiding that costs the keyboard, the context menu and the accessibility tree's own reading of
   * what the control does. The words are the link's accessible name, so it needs no `aria-label`.
   *
   * @returns {string} The label.
   */
  get monthlyExpensesLinkLabel () {
    return MONTHLY_EXPENSES_LINK_LABEL
  }

  /**
   * get: Heading of the entry form.
   *
   * One form serves both `recordExpense` and `correctExpense`, so the heading is what says which
   * of the two a submit will send.
   *
   * @returns {string} Heading of the form.
   */
  get formHeading () {
    return this.isCorrectingExpense()
      ? CORRECTING_FORM_HEADING
      : RECORDING_FORM_HEADING
  }

  /**
   * get: Parcel of the block framing the date field.
   *
   * It carries no `errorMessages`, and that is a decision rather than an omission: every refusal
   * this form can show is one sentence in the form-level region, which is what keeps a refusal
   * from being attached to the wrong field.
   *
   * @returns {ControlBlockParcel} Parcel of the block.
   */
  get spentOnControlBlockParcel () {
    return {
      label: SPENT_ON_FIELD_LABEL,
      controlId: this.spentOnFieldId,
      required: true,
    }
  }

  /**
   * get: Id of the date field.
   *
   * The block renders its label's "for" from the parcel's `controlId` and cannot set an id on the
   * control it frames, so the same id has to reach both or the label points at nothing. On this
   * field the id reaches a visually hidden input that forwards focus into the first segment, so
   * clicking the label lands a member of staff on the day.
   *
   * @returns {string} Id of the field.
   */
  get spentOnFieldId () {
    return SPENT_ON_FIELD_ID
  }

  /**
   * get: Parcel of the date field.
   *
   * `maxValue` is set and is not relied on. It disables the calendar's out-of-range cells, which is
   * worth having, and it marks the typed segments invalid -- but the segments still accept the
   * value and still emit it, so the refusal is `#onSubmitForm()`'s. `invalid` is bound live for the
   * same reason: the control marks itself with `data-invalid` whatever this class does, so binding
   * it keeps the two in agreement rather than letting them disagree.
   *
   * @returns {DatePickerParcel} Parcel of the field.
   */
  get spentOnFieldParcel () {
    const value = this.spentOnValue
    const invalid = this.isSpentOnLaterThanToday()
    const maxValue = this.todayDate

    return {
      value,
      invalid,
      maxValue,
    }
  }

  /**
   * get: Parcel bound onto the date field's own segment group.
   *
   * `aria-describedby` cannot ride on the component itself: its root is Reka's `DatePickerRoot`,
   * which declares `inheritAttrs: false` and renders no element of its own, so a plain attribute
   * would land nowhere. The trigger parcel reaches the `role="group"` holding the segments, which
   * is the element the refusal describes.
   *
   * @returns {Record<string, string>} Attributes for the segment group.
   */
  get spentOnFieldTriggerParcel () {
    return {
      'aria-describedby': this.formRefusalRegionId,
      'aria-required': 'true',
    }
  }

  /**
   * get: Date the money was paid, as entered so far.
   *
   * @returns {string | null} The date, or null while the field is untouched.
   */
  get spentOnValue () {
    return this.formValueHashReactive.spentOn
      ?? null
  }

  /**
   * get: Parcel of the block framing the amount field.
   *
   * @returns {ControlBlockParcel} Parcel of the block.
   */
  get amountControlBlockParcel () {
    return {
      label: AMOUNT_FIELD_LABEL,
      controlId: this.amountFieldId,
      required: true,
    }
  }

  /**
   * get: Id of the amount field.
   *
   * @returns {string} Id of the field.
   */
  get amountFieldId () {
    return AMOUNT_FIELD_ID
  }

  /**
   * get: Parcel of the amount field.
   *
   * The amount is yen and the yen has no minor unit, so the step is one and the minimum is one:
   * "no amount, an amount of zero, or a negative amount is refused" is a backend criterion, and
   * these two keep the control from offering a value that would be refused.
   *
   * @returns {NumberFieldParcel} Parcel of the field.
   */
  get amountFieldParcel () {
    const value = this.amountValue
    const inputParcel = this.amountFieldInputParcel

    return {
      value,
      min: AMOUNT_MINIMUM_VALUE,
      step: AMOUNT_STEP_VALUE,
      inputParcel,
    }
  }

  /**
   * get: Parcel bound onto the amount field's own input element.
   *
   * The id belongs here rather than on the component: the component spreads what it is given onto
   * its wrapper, so a plain `id` would leave the label pointing at a `<div>` and the association
   * would silently be nothing.
   *
   * @returns {Record<string, string>} Attributes for the input.
   */
  get amountFieldInputParcel () {
    return {
      id: this.amountFieldId,
      'aria-describedby': this.formRefusalRegionId,
      'aria-required': 'true',
      inputmode: 'numeric',
    }
  }

  /**
   * get: Amount entered so far.
   *
   * @returns {number | null} The amount in yen, or null while the field is untouched.
   */
  get amountValue () {
    return this.formValueHashReactive.amount
      ?? null
  }

  /**
   * get: Parcel of the block framing the category field.
   *
   * @returns {ControlBlockParcel} Parcel of the block.
   */
  get expenseCategoryControlBlockParcel () {
    return {
      label: EXPENSE_CATEGORY_FIELD_LABEL,
      controlId: this.expenseCategoryFieldId,
      required: true,
    }
  }

  /**
   * get: Id of the category field.
   *
   * @returns {string} Id of the field.
   */
  get expenseCategoryFieldId () {
    return EXPENSE_CATEGORY_FIELD_ID
  }

  /**
   * get: Parcel of the category field.
   *
   * @returns {SelectParcel} Parcel of the field.
   */
  get expenseCategoryFieldParcel () {
    const value = this.expenseCategoryIdValue
    const options = this.expenseCategoryOptions
    const loading = this.isLoadingExpenseCategories()

    return {
      value,
      options,
      loading,
      placeholder: EXPENSE_CATEGORY_FIELD_PLACEHOLDER,
    }
  }

  /**
   * get: Parcel bound onto the category field's own trigger button.
   *
   * The id belongs here rather than on the component: a fallthrough attribute is spread onto
   * Reka's `SelectRoot`, which renders a fragment, so an id given to the component reaches no
   * element at all and the label's "for" resolves to nothing. The trigger is a real button, and
   * it is also the element that otherwise has no accessible name.
   *
   * @returns {Record<string, string>} Attributes for the trigger.
   */
  get expenseCategoryFieldTriggerParcel () {
    return {
      id: this.expenseCategoryFieldId,
      'aria-describedby': this.expenseCategoryFieldDescriptionIds,
      'aria-required': 'true',
    }
  }

  /**
   * get: Regions describing the category field, as one attribute value.
   *
   * Two of them, where the other three fields have one: the form's refusal, and the region saying
   * the categories themselves could not be read. The second is the only field-level explanation a
   * member of staff gets for a select with nothing in it, so the field points at it as well as at
   * the form's. Both ids exist whether or not their region holds text, which is what lets the
   * association hold before there is anything to read.
   *
   * @returns {string} The ids, space separated.
   */
  get expenseCategoryFieldDescriptionIds () {
    return [
      this.formRefusalRegionId,
      this.expenseCategoriesRefusalRegionId,
    ].join(' ')
  }

  /**
   * get: Category chosen so far.
   *
   * @returns {number | null} The category id, or null while the field is untouched.
   */
  get expenseCategoryIdValue () {
    return this.formValueHashReactive.expenseCategoryId
      ?? null
  }

  /**
   * get: Options offered by the category field.
   *
   * The order is the answer's own -- the API returns the categories by `displayOrder`, and sorting
   * them again here would be a second opinion about an order somebody else owns.
   *
   * @returns {Array<ExpenseCategoryOption>} The options.
   */
  get expenseCategoryOptions () {
    return this.expenseCategories
      .map(expenseCategory => this.buildExpenseCategoryOption({
        expenseCategory,
      }))
  }

  /**
   * get: Parcel of the block framing the memo field.
   *
   * `required` is false here and true on the other three, and the label says "optional" in words:
   * the memo is genuinely optional, an entry recorded without one reads back as null, and a screen
   * that marked it required would refuse an entry the backend accepts.
   *
   * @returns {ControlBlockParcel} Parcel of the block.
   */
  get memoControlBlockParcel () {
    return {
      label: MEMO_FIELD_LABEL,
      controlId: this.memoFieldId,
      required: false,
    }
  }

  /**
   * get: Id of the memo field.
   *
   * @returns {string} Id of the field.
   */
  get memoFieldId () {
    return MEMO_FIELD_ID
  }

  /**
   * get: Parcel of the memo field.
   *
   * @returns {TextFieldParcel} Parcel of the field.
   */
  get memoFieldParcel () {
    const value = this.memoValue

    return {
      value,
    }
  }

  /**
   * get: Longest memo the field accepts.
   *
   * The column is `varchar(191)` and the backend refuses a longer one, so the attribute stops a
   * member of staff typing past the limit rather than telling them afterwards.
   *
   * @returns {number} The maximum length.
   */
  get memoMaximumLength () {
    return MEMO_MAXIMUM_LENGTH
  }

  /**
   * get: Memo entered so far.
   *
   * @returns {string | null} The memo, or null while the field is untouched.
   */
  get memoValue () {
    return this.formValueHashReactive.memo
      ?? null
  }

  /**
   * get: Id of the region holding the form's refusal message.
   *
   * All four fields point at it with `aria-describedby`. The library's own block wires no such
   * association from its error region to the control it describes, and its source says so, so this
   * screen wires it instead. The region exists whether or not it holds a message, which is what
   * lets the association hold before there is anything to read.
   *
   * @returns {string} Id of the region.
   */
  get formRefusalRegionId () {
    return FORM_REFUSAL_REGION_ID
  }

  /**
   * get: The one message shown when a recording or a correction is refused.
   *
   * One message with no branch, by requirement rather than by economy: an entry somebody else
   * owns, an entry already removed and an id that never existed are answered by one backend code
   * apiece, and the screen may not distinguish them.
   *
   * @returns {string | null} The message, or null when nothing has been refused.
   */
  get formRefusalMessage () {
    return this.errorMessageHashReactive.submittingExpense
      ?? null
  }

  /**
   * get: Id of the region holding the entries' refusal message.
   *
   * @returns {string} Id of the region.
   */
  get entriesRefusalRegionId () {
    return ENTRIES_REFUSAL_REGION_ID
  }

  /**
   * get: The one message shown when a removal is refused.
   *
   * @returns {string | null} The message, or null when nothing has been refused.
   */
  get entriesRefusalMessage () {
    return this.errorMessageHashReactive.removingExpense
      ?? null
  }

  /**
   * get: Id of the region saying the categories could not be read.
   *
   * @returns {string} Id of the region.
   */
  get expenseCategoriesRefusalRegionId () {
    return EXPENSE_CATEGORIES_REFUSAL_REGION_ID
  }

  /**
   * get: The message shown when the categories could not be read.
   *
   * It is read from a key of its own, and that is the point of it: the form empties
   * `submittingExpense` at the top of every submit, so a sentence about the category source kept
   * there lasted until the first press of the submit button and was replaced by an instruction
   * about a select that had nothing in it.
   *
   * @returns {string | null} The message, or null when the last read succeeded.
   */
  get expenseCategoriesRefusalMessage () {
    return this.errorMessageHashReactive.readingExpenseCategories
      ?? null
  }

  /**
   * get: Parcel of the form's submit button.
   *
   * The loading field is the whole double-submission guard: the library suppresses the click emit
   * and sets the native disabled attribute from it, and a disabled default button also blocks a
   * form's implicit submission on Enter. No guard belongs in the template.
   *
   * The primary-looking variant is named default. There is no variant named primary.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get submitButtonParcel () {
    const loading = this.isRecordingExpense()

    return {
      variant: 'default',
      type: 'submit',
      loading,
    }
  }

  /**
   * get: Label of the form's submit button.
   *
   * Read twice on purpose: once as the visible label, once as `aria-label`. While the button is
   * pending the library hides its label with visibility and marks the spinner `aria-hidden`, which
   * leaves the button with no accessible name at all; an `aria-label` carrying the same words
   * survives that, and matching the visible text keeps the two in agreement.
   *
   * @returns {string} Label of the button.
   */
  get submitButtonLabel () {
    return this.isCorrectingExpense()
      ? CORRECTING_SUBMIT_BUTTON_LABEL
      : RECORDING_SUBMIT_BUTTON_LABEL
  }

  /**
   * get: Parcel of the button that leaves a correction.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get cancelCorrectionButtonParcel () {
    const disabled = this.isRecordingExpense()

    return {
      variant: 'outline',
      type: 'button',
      disabled,
    }
  }

  /**
   * get: Label of the button that leaves a correction.
   *
   * @returns {string} Label of the button.
   */
  get cancelCorrectionButtonLabel () {
    return CANCEL_CORRECTION_BUTTON_LABEL
  }

  /**
   * get: Parcel of the sign-out button.
   *
   * Quiet rather than prominent: exactly one action on this screen carries the primary weight, and
   * it is recording the expense somebody came here to file.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get signOutButtonParcel () {
    const loading = this.isSigningOut()

    return {
      variant: 'outline',
      type: 'button',
      loading,
    }
  }

  /**
   * get: Label of the sign-out button.
   *
   * @returns {string} Label of the button.
   */
  get signOutButtonLabel () {
    return SIGN_OUT_BUTTON_LABEL
  }

  /**
   * get: Parcel of the button that reads the entries again.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get retryButtonParcel () {
    const loading = this.isLoadingExpenses()

    return {
      variant: 'default',
      type: 'button',
      loading,
    }
  }

  /**
   * get: Label of the button that reads the entries again.
   *
   * @returns {string} Label of the button.
   */
  get retryButtonLabel () {
    return RETRY_BUTTON_LABEL
  }

  /**
   * get: Parcel of the button that reads the categories again.
   *
   * A button of its own beside the form, because the entries' retry reads the entries and nothing
   * else: offering "Try again" for the table while the form's own source is the thing that failed
   * is an offer that does not answer the condition it is shown for.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get retryExpenseCategoriesButtonParcel () {
    const loading = this.isLoadingExpenseCategories()

    return {
      variant: 'outline',
      type: 'button',
      size: 'sm',
      loading,
    }
  }

  /**
   * get: Label of the button that reads the categories again.
   *
   * It names the categories rather than saying "Try again": the screen can be showing this button
   * and the table's own retry at the same time, and two buttons reading alike would not say which
   * of the two failures each one answers.
   *
   * @returns {string} Label of the button.
   */
  get retryExpenseCategoriesButtonLabel () {
    return RETRY_EXPENSE_CATEGORIES_BUTTON_LABEL
  }

  /**
   * get: Parcel of a row's correct button.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get correctRowButtonParcel () {
    return {
      variant: 'outline',
      type: 'button',
      size: 'sm',
    }
  }

  /**
   * get: Visible label of a row's correct button.
   *
   * @returns {string} Label of the button.
   */
  get correctRowButtonLabel () {
    return CORRECT_ROW_BUTTON_LABEL
  }

  /**
   * get: Parcel of a row's remove button.
   *
   * **Every row's Remove is disabled while a removal is in flight**, this one included. Until the
   * re-read lands, the entry just removed is still in the table, so its own button is still there
   * to be pressed a second time -- and the second request answers not-found for an entry whose
   * removal succeeded, putting a refusal on screen about something that worked. One removal at a
   * time is the truth of the screen, and the button is where a member of staff sees it.
   *
   * The disabling is the affordance and not the guard: `#onClickRemove()` and `#onConfirmRemoval()`
   * check the same flag, because a parcel describes a control and does not enforce anything.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get removeRowButtonParcel () {
    const disabled = this.isRemovingExpense()

    return {
      variant: 'ghost',
      type: 'button',
      size: 'sm',
      disabled,
    }
  }

  /**
   * get: Visible label of a row's remove button.
   *
   * @returns {string} Label of the button.
   */
  get removeRowButtonLabel () {
    return REMOVE_ROW_BUTTON_LABEL
  }

  /**
   * get: Heading of the entries region.
   *
   * @returns {string} The heading.
   */
  get entriesHeading () {
    return ENTRIES_HEADING
  }

  /**
   * get: The sentence naming the order the entries are in.
   *
   * Stated on the screen rather than left implied. The order is by the day the money was paid, so
   * an expense paid last week and recorded today appears below this week's -- a member of staff who
   * back-dates an entry and then hunts for it at the top needs the order named where they are
   * looking. `FuroTable` has no caption slot, so this is a paragraph above it.
   *
   * @returns {string} The sentence.
   */
  get entriesOrderNote () {
    return ENTRIES_ORDER_NOTE
  }

  /**
   * get: Columns of the entries table.
   *
   * Every column is unsortable, deliberately. No operation in 1.0.0 lets a caller choose a sort, so
   * a clickable header would either do nothing or echo into a field that reaches no query, and a
   * control that looks like it sorts and does not is worse than no control.
   *
   * @returns {Array<TableColumn>} The columns.
   */
  get expenseColumns () {
    return [
      {
        field: SPENT_ON_COLUMN_FIELD,
        label: SPENT_ON_COLUMN_LABEL,
        sortable: false,
      },
      {
        field: AMOUNT_COLUMN_FIELD,
        label: AMOUNT_COLUMN_LABEL,
        sortable: false,
        align: 'end',
      },
      {
        field: EXPENSE_CATEGORY_COLUMN_FIELD,
        label: EXPENSE_CATEGORY_COLUMN_LABEL,
        sortable: false,
      },
      {
        field: MEMO_COLUMN_FIELD,
        label: MEMO_COLUMN_LABEL,
        sortable: false,
      },
    ]
  }

  /**
   * get: Rows of the entries table.
   *
   * Each row carries both what is displayed and what a correction needs, because a correction is
   * pre-filled from the row already on screen and never from a second request: the entries answer
   * already holds every value `correctExpense` takes.
   *
   * @returns {Array<ExpenseRow>} The rows.
   */
  get expenseRows () {
    return this.expenses
      .map(expense => this.buildExpenseRow({
        expense,
      }))
  }

  /**
   * get: Parcel of the entries table.
   *
   * The three states other than "filled" are all here. `loading` renders the spinner -- centred on
   * a first read, floating over the rows on a re-read, so the layout never collapses under a
   * refresh. `errorMessage` outranks everything and renders the error region. Neither set, with no
   * rows, renders the empty region.
   *
   * **A removal in flight raises the same waiting state**, from the moment the request goes out
   * until the re-read behind it has landed. The confirmation closes before the removal is sent --
   * deliberately, see `#onConfirmRemoval()` -- so without this the dialog simply vanished and the
   * row sat there untouched, with nothing anywhere saying a request was running. The entries are
   * what a removal changes, so the entries are where it is shown.
   *
   * @returns {TableParcel} Parcel of the table.
   */
  get expenseTableParcel () {
    const rows = this.expenseRows
    const loading = this.isChangingExpenses()
    const errorMessage = this.expensesFailureMessage

    return {
      columns: this.expenseColumns,
      rows,
      rowKey: 'id',
      loading,
      errorMessage,
      rowActionsLabel: ROW_ACTIONS_LABEL,
    }
  }

  /**
   * get: Parcel of the region shown when the entries are read and there are none.
   *
   * It carries no action. The form that would fill it is already on the same screen, so a button
   * that scrolled to a visible form would be noise.
   *
   * @returns {EmptyStateParcel} Parcel of the region.
   */
  get expensesEmptyStateParcel () {
    return {
      title: EMPTY_STATE_TITLE,
      description: EMPTY_STATE_DESCRIPTION,
    }
  }

  /**
   * get: Parcel of the region shown when the entries could not be read.
   *
   * `FuroErrorState` stands in for the table's own bare error text because its root carries
   * `role="alert"`, which is what a failed re-read after a write needs in order to be announced at
   * all.
   *
   * @returns {ErrorStateParcel} Parcel of the region.
   */
  get expensesErrorStateParcel () {
    const description = this.expensesFailureMessage

    return {
      title: ERROR_STATE_TITLE,
      description,
    }
  }

  /**
   * get: The message shown when the entries could not be read.
   *
   * @returns {string | null} The message, or null when the last read succeeded.
   */
  get expensesFailureMessage () {
    return this.errorMessageHashReactive.readingExpenses
      ?? null
  }

  /**
   * get: Parcel of the entries' page control.
   *
   * `offset` is passed and `page` is not: the control throws outside production when both are set
   * and disagree, and the answer's own pagination speaks in offsets.
   *
   * `sort` is neither sent nor rendered. It is echoed back from whatever the caller sent, is not
   * validated on the far side, and reaches no query.
   *
   * @returns {PaginationParcel} Parcel of the control.
   */
  get expensePaginationParcel () {
    const offset = this.expensesOffset
    const totalRecords = this.expensesTotalRecords
    const disabled = this.isLoadingExpenses()

    return {
      offset,
      limit: PAGINATION.EXPENSES_LIMIT,
      totalRecords,
      disabled,
    }
  }

  /**
   * get: Accessible name of the entries' page control.
   *
   * The control renders a `<nav>` with no name of its own, and its buttons' names are hard coded
   * by the primitive, so this is the only name a member of staff using a screen reader gets for
   * the region.
   *
   * @returns {string} The name.
   */
  get paginationLabel () {
    return PAGINATION_LABEL
  }

  /**
   * get: Parcel of the removal confirmation.
   *
   * A removal is confirmed before it is sent because the specification's own call table fires
   * `removeExpense` on confirming, and because the delete is permanent -- an entry is removed
   * outright rather than archived, so there is nothing to undo and no trash to restore from.
   *
   * @returns {AlertDialogParcel} Parcel of the dialog.
   */
  get removalConfirmationParcel () {
    const isOpen = this.isRemovalConfirmationOpen()
    const busy = this.isRemovingExpense()

    return {
      open: isOpen,
      title: REMOVAL_CONFIRMATION_TITLE,
      description: REMOVAL_CONFIRMATION_DESCRIPTION,
      tone: 'destructive',
      confirmText: REMOVAL_CONFIRM_BUTTON_LABEL,
      cancelText: REMOVAL_CANCEL_BUTTON_LABEL,
      busy,
    }
  }

  /**
   * get: Id of the entry the form is correcting.
   *
   * Null while the form is recording. The form's mode is this one value, not a second form and not
   * a second component: the same four fields are collected either way, so there is no code path
   * that can submit a correction carrying only some of them.
   *
   * @returns {number | null} The id, or null.
   */
  get correctingExpenseId () {
    return this.statusReactive.correctingExpenseId
      ?? null
  }

  /**
   * get: Id of the entry the confirmation is holding.
   *
   * @returns {number | null} The id, or null when no removal is being confirmed.
   */
  get removingExpenseId () {
    return this.statusReactive.removingExpenseId
      ?? null
  }

  /**
   * get: Today, as the date picker and the contract both spell it.
   *
   * @returns {string} Today, as `YYYY-MM-DD`.
   */
  get todayDate () {
    return this.Ctor.generateTodayDate()
  }

  /**
   * get: The entries the last read answered.
   *
   * @returns {Array<schema.graphql.Expense>} The entries.
   */
  get expenses () {
    return this.responseHashReactive.expenses
      ?? []
  }

  /**
   * get: The pagination the last read answered.
   *
   * @returns {schema.graphql.Pagination | null} The pagination, or null before the first answer.
   */
  get expensesPagination () {
    return this.responseHashReactive.expensesPagination
      ?? null
  }

  /**
   * get: Offset of the page of entries on screen.
   *
   * @returns {number} The offset, zero before the first answer.
   */
  get expensesOffset () {
    return this.expensesPagination
      ?.offset
      ?? 0
  }

  /**
   * get: How many entries this member of staff has in total.
   *
   * @returns {number} The count, zero before the first answer.
   */
  get expensesTotalRecords () {
    return this.expensesPagination
      ?.totalRecords
      ?? 0
  }

  /**
   * get: The categories the last read answered.
   *
   * @returns {Array<schema.graphql.ExpenseCategory>} The categories.
   */
  get expenseCategories () {
    return this.responseHashReactive.expenseCategories
      ?? []
  }

  /**
   * get: Capsule of the last expenses response.
   *
   * The client replaces this value with a new capsule on every invocation, and starts holding one
   * that answers pending before a request has been made, so there is never a moment where it is
   * absent.
   *
   * @returns {ExpensesCapsule} The capsule.
   */
  get expensesCapsule () {
    return this.graphqlClientHash.expenses
      .capsuleRef
      .value
  }

  /**
   * get: Hooks the expenses request runs at its own boundaries.
   *
   * `beforeRequest` returns false, which is what lets the request proceed -- returning true aborts
   * it. It runs once the launcher has accepted the variables and is about to fetch, and
   * `afterRequest` runs once the capsule is built, whether the response was an answer, a refusal or
   * a network failure. That is what makes the spinner's lifetime the request's own.
   *
   * @returns {LauncherHooks} The hooks.
   */
  get expensesLauncherHooks () {
    const beforeRequest = async () => {
      this.startLoadingExpenses()

      return false
    }

    const afterRequest = async () => {
      this.finishLoadingExpenses()
    }

    return {
      beforeRequest,
      afterRequest,
    }
  }

  /**
   * get: Capsule of the last expenseCategories response.
   *
   * @returns {ExpenseCategoriesCapsule} The capsule.
   */
  get expenseCategoriesCapsule () {
    return this.graphqlClientHash.expenseCategories
      .capsuleRef
      .value
  }

  /**
   * get: Hooks the expenseCategories request runs at its own boundaries.
   *
   * @returns {LauncherHooks} The hooks.
   */
  get expenseCategoriesLauncherHooks () {
    const beforeRequest = async () => {
      this.startLoadingExpenseCategories()

      return false
    }

    const afterRequest = async () => {
      this.finishLoadingExpenseCategories()
    }

    return {
      beforeRequest,
      afterRequest,
    }
  }

  /**
   * get: Capsule of the last recordExpense response.
   *
   * @returns {RecordExpenseCapsule} The capsule.
   */
  get recordExpenseCapsule () {
    return this.graphqlClientHash.recordExpense
      .capsuleRef
      .value
  }

  /**
   * get: Capsule of the last correctExpense response.
   *
   * @returns {CorrectExpenseCapsule} The capsule.
   */
  get correctExpenseCapsule () {
    return this.graphqlClientHash.correctExpense
      .capsuleRef
      .value
  }

  /**
   * get: Hooks the form's request runs at its own boundaries.
   *
   * One getter serves `recordExpense` and `correctExpense` alike, because the form has one pending
   * state and one submit button: which of the two operations is in flight is the form's mode, not
   * a second thing for the screen to show.
   *
   * @returns {LauncherHooks} The hooks.
   */
  get submittingExpenseLauncherHooks () {
    const beforeRequest = async () => {
      this.startRecordingExpense()

      return false
    }

    const afterRequest = async () => {
      this.finishRecordingExpense()
    }

    return {
      beforeRequest,
      afterRequest,
    }
  }

  /**
   * get: Capsule of the last removeExpense response.
   *
   * @returns {RemoveExpenseCapsule} The capsule.
   */
  get removeExpenseCapsule () {
    return this.graphqlClientHash.removeExpense
      .capsuleRef
      .value
  }

  /**
   * get: Hooks the removeExpense request runs at its own boundaries.
   *
   * @returns {LauncherHooks} The hooks.
   */
  get removeExpenseLauncherHooks () {
    const beforeRequest = async () => {
      this.startRemovingExpense()

      return false
    }

    const afterRequest = async () => {
      this.finishRemovingExpense()
    }

    return {
      beforeRequest,
      afterRequest,
    }
  }

  /**
   * get: Hooks the signOut request runs at its own boundaries.
   *
   * There is no `signOutCapsule` getter beside this one, and its absence is deliberate: `#signOut()`
   * does not read the answer -- see the reason on that method -- so a getter for it would be a
   * member nothing calls.
   *
   * @returns {LauncherHooks} The hooks.
   */
  get signOutLauncherHooks () {
    const beforeRequest = async () => {
      this.startSigningOut()

      return false
    }

    const afterRequest = async () => {
      this.finishSigningOut()
    }

    return {
      beforeRequest,
      afterRequest,
    }
  }

  /**
   * Set the component up.
   *
   * @override
   * @returns {ExpensesPageContext} This instance, for the page to hold.
   * @this {ExpensesPageContext}
   */
  setupComponent () {
    this.readScreenOnMounted()

    return this
  }

  /**
   * Read everything the screen opens with.
   *
   * Specification section 11.2 puts both reads "on opening". They are sent together rather than one
   * after the other because neither answer is an input to the other: the categories fill the form's
   * one select, the entries fill the table, and a member of staff waiting for the sum of two
   * round trips would be waiting for nothing.
   *
   * Nothing is awaited by `#setupComponent()`, which is synchronous and returns the instance for
   * the page to hold; each read raises its own pending flag, and the screen renders the waiting
   * state from those.
   *
   * @returns {Promise<void>}
   */
  async readScreenOnMounted () {
    await Promise.all([
      this.readExpenses({
        offset: INITIAL_EXPENSES_OFFSET,
      }),
      this.readExpenseCategories(),
    ])
  }

  /**
   * Build one option of the category field.
   *
   * @param {{
   *   expenseCategory: schema.graphql.ExpenseCategory
   * }} params - Parameters of this method.
   * @returns {ExpenseCategoryOption} The option.
   */
  buildExpenseCategoryOption ({
    expenseCategory,
  }) {
    return {
      label: expenseCategory.name,
      value: expenseCategory.id,
    }
  }

  /**
   * Build one row of the entries table.
   *
   * @param {{
   *   expense: schema.graphql.Expense
   * }} params - Parameters of this method.
   * @returns {ExpenseRow} The row.
   */
  buildExpenseRow ({
    expense,
  }) {
    const spentOnText = this.extractSpentOnText({
      expense,
    })
    const amountText = this.extractAmountText({
      expense,
    })
    const memoText = this.extractMemoText({
      expense,
    })

    return {
      id: expense.id,
      spentOn: expense.spentOn,
      spentOnText,
      amount: expense.amount,
      amountText,
      expenseCategoryId: expense.expenseCategory.id,
      expenseCategoryName: expense.expenseCategory.name,
      memo: expense.memo,
      memoText,
    }
  }

  /**
   * Extract the text shown for the day an entry's money was paid.
   *
   * The wire value is already ISO `YYYY-MM-DD`, and so is the `datetime` attribute the cell
   * carries, so the displayed text is the value unchanged. No locale format is applied because no
   * locale decision is recorded anywhere for this application, and inventing one here would bury a
   * design decision in a formatter. This method is where such a decision would land.
   *
   * @param {{
   *   expense: schema.graphql.Expense
   * }} params - Parameters of this method.
   * @returns {string} The text.
   */
  extractSpentOnText ({
    expense,
  }) {
    return expense.spentOn
  }

  /**
   * Extract the text shown for an entry's amount.
   *
   * @param {{
   *   expense: schema.graphql.Expense
   * }} params - Parameters of this method.
   * @returns {string} The text.
   */
  extractAmountText ({
    expense,
  }) {
    const yenAmountFormatter = this.createYenAmountFormatter()

    return yenAmountFormatter.formatYenAmount({
      amount: expense.amount,
    })
  }

  /**
   * Create the formatter that writes a yen amount.
   *
   * The configuration used to be a module constant of this file, which was correct while this was
   * the only screen showing an amount. `/monthly-expenses` shows the same entries in the same four
   * columns and a total besides, and `ai/contexts/uiux-context-monthly-summary.md` section 4.4
   * requires the two amount columns to match field for field -- which two independently configured
   * formatters cannot be relied on to do. There is one configuration now, and both screens read it.
   *
   * @returns {YenAmountFormatter} The formatter.
   */
  createYenAmountFormatter () {
    return YenAmountFormatter.create()
  }

  /**
   * Extract the text shown for an entry's memo.
   *
   * An entry recorded without a memo reads back as null and renders as nothing -- never as the
   * word "null", never as an error. Left to the table's own default the cell would print the raw
   * value, which is exactly what that would be.
   *
   * @param {{
   *   expense: schema.graphql.Expense
   * }} params - Parameters of this method.
   * @returns {string} The text, empty when there is no memo.
   */
  extractMemoText ({
    expense,
  }) {
    return expense.memo
      ?? ''
  }

  /**
   * Extract the accessible name of a row's correct button.
   *
   * Every row holds a button reading "Correct", so the visible word alone does not say which entry
   * it corrects. The name carries the day and the amount, which identify the row without repeating
   * the memo -- a memo may name a client.
   *
   * @param {{
   *   row: ExpenseRow
   * }} params - Parameters of this method.
   * @returns {string} The name.
   */
  extractCorrectRowButtonLabel ({
    row,
  }) {
    return `${CORRECT_ROW_BUTTON_LABEL} the entry of ${row.amountText} paid on ${row.spentOnText}`
  }

  /**
   * Extract the accessible name of a row's remove button.
   *
   * @param {{
   *   row: ExpenseRow
   * }} params - Parameters of this method.
   * @returns {string} The name.
   */
  extractRemoveRowButtonLabel ({
    row,
  }) {
    return `${REMOVE_ROW_BUTTON_LABEL} the entry of ${row.amountText} paid on ${row.spentOnText}`
  }

  /**
   * Whether a column is the one whose cell is a `<time>` element.
   *
   * The table hands every column to one cell slot, so the template asks this rather than comparing
   * a field name itself.
   *
   * @param {{
   *   column: TableColumn
   * }} params - Parameters of this method.
   * @returns {boolean} true for the date column.
   */
  isSpentOnColumn ({
    column,
  }) {
    return column.field === SPENT_ON_COLUMN_FIELD
  }

  /**
   * Whether the form is correcting an entry rather than recording a new one.
   *
   * @returns {boolean} true while a correction is open.
   */
  isCorrectingExpense () {
    return this.correctingExpenseId !== null
  }

  /**
   * Whether anything the entries table shows is being changed or fetched.
   *
   * Two requests reach the same waiting state, because a member of staff is told that the entries
   * are busy and not which request is doing it: reading a page, and removing an entry -- whose own
   * re-read is a read and raises the first flag anyway, so the two run into one another with no gap
   * in between.
   *
   * @returns {boolean} true while a read or a removal is in flight.
   */
  isChangingExpenses () {
    return this.isLoadingExpenses()
      || this.isRemovingExpense()
  }

  /**
   * Whether the entries are being read.
   *
   * @returns {boolean} true while a read is in flight.
   */
  isLoadingExpenses () {
    return Boolean(this.statusReactive.isLoadingExpenses)
  }

  /**
   * Enter the pending state of the entries.
   *
   * Called from the expenses request's own `beforeRequest` hook, never from a handler, so the
   * state is raised by a request that is actually going out.
   *
   * @returns {void}
   */
  startLoadingExpenses () {
    this.statusReactive.isLoadingExpenses = true
  }

  /**
   * Leave the pending state of the entries.
   *
   * Called from the expenses request's own `afterRequest` hook, so it is lowered by a real
   * response -- an answer, a refusal and a network failure all reach it.
   *
   * @returns {void}
   */
  finishLoadingExpenses () {
    this.statusReactive.isLoadingExpenses = false
  }

  /**
   * Whether the categories are being read.
   *
   * @returns {boolean} true while a read is in flight.
   */
  isLoadingExpenseCategories () {
    return Boolean(this.statusReactive.isLoadingExpenseCategories)
  }

  /**
   * Enter the pending state of the categories.
   *
   * @returns {void}
   */
  startLoadingExpenseCategories () {
    this.statusReactive.isLoadingExpenseCategories = true
  }

  /**
   * Leave the pending state of the categories.
   *
   * @returns {void}
   */
  finishLoadingExpenseCategories () {
    this.statusReactive.isLoadingExpenseCategories = false
  }

  /**
   * Whether the form is being sent.
   *
   * @returns {boolean} true while a recording or a correction is in flight.
   */
  isRecordingExpense () {
    return Boolean(this.statusReactive.isRecordingExpense)
  }

  /**
   * Enter the pending state of the form.
   *
   * @returns {void}
   */
  startRecordingExpense () {
    this.statusReactive.isRecordingExpense = true
  }

  /**
   * Leave the pending state of the form.
   *
   * @returns {void}
   */
  finishRecordingExpense () {
    this.statusReactive.isRecordingExpense = false
  }

  /**
   * Whether a removal is being sent.
   *
   * @returns {boolean} true while a removal is in flight.
   */
  isRemovingExpense () {
    return Boolean(this.statusReactive.isRemovingExpense)
  }

  /**
   * Enter the pending state of a removal.
   *
   * @returns {void}
   */
  startRemovingExpense () {
    this.statusReactive.isRemovingExpense = true
  }

  /**
   * Leave the pending state of a removal.
   *
   * @returns {void}
   */
  finishRemovingExpense () {
    this.statusReactive.isRemovingExpense = false
  }

  /**
   * Whether a sign-out is being sent.
   *
   * @returns {boolean} true while a sign-out is in flight.
   */
  isSigningOut () {
    return Boolean(this.statusReactive.isSigningOut)
  }

  /**
   * Enter the pending state of a sign-out.
   *
   * @returns {void}
   */
  startSigningOut () {
    this.statusReactive.isSigningOut = true
  }

  /**
   * Leave the pending state of a sign-out.
   *
   * @returns {void}
   */
  finishSigningOut () {
    this.statusReactive.isSigningOut = false
  }

  /**
   * Whether the removal confirmation is on screen.
   *
   * @returns {boolean} true while an entry is waiting to be confirmed.
   */
  isRemovalConfirmationOpen () {
    return this.removingExpenseId !== null
  }

  /**
   * Whether the entries run to more than one page.
   *
   * The page control is not rendered below a single page: there is nothing to navigate, and a
   * paginator under an empty table says the opposite of what the empty region says.
   *
   * @returns {boolean} true when there is a second page.
   */
  hasMultipleExpensePages () {
    return this.expensesTotalRecords > PAGINATION.EXPENSES_LIMIT
  }

  /**
   * Whether the categories the form offers could not be read.
   *
   * @returns {boolean} true while the form has no categories to offer and knows why.
   */
  hasExpenseCategoriesFailed () {
    return this.expenseCategoriesRefusalMessage !== null
  }

  /**
   * Whether the page on screen begins past the last entry there is.
   *
   * Asked of an answer that has already landed, so both numbers come from the same response: the
   * offset the backend echoed and the total it counted. A total of zero is not past the end of
   * anything -- there are genuinely no entries, which is the empty state and is true.
   *
   * @returns {boolean} true when the offset on screen is beyond the total.
   */
  isExpensesOffsetBeyondTotal () {
    if (this.expensesTotalRecords === 0) {
      return false
    }

    return this.expensesOffset >= this.expensesTotalRecords
  }

  /**
   * Generate the offset of the last page the current total has.
   *
   * @returns {number} The offset, zero when there is at most one page.
   */
  generateLastExpensesPageOffset () {
    const pageCount = Math.ceil(this.expensesTotalRecords / PAGINATION.EXPENSES_LIMIT)
    const lastPageIndex = Math.max(pageCount - 1, 0)

    return lastPageIndex * PAGINATION.EXPENSES_LIMIT
  }

  /**
   * Whether the date entered is later than today.
   *
   * Both values are ISO `YYYY-MM-DD`, whose lexical order is its chronological order, so the
   * comparison needs no date arithmetic and no library. An untouched field is not later than
   * today: it is empty, which the backend refuses with a message of its own.
   *
   * @returns {boolean} true when the date is after today.
   */
  isSpentOnLaterThanToday () {
    const spentOn = this.spentOnValue

    if (spentOn === null) {
      return false
    }

    return spentOn > this.todayDate
  }

  /**
   * Respond to the date field changing.
   *
   * @param {{
   *   payload: DatePickerEmitPayload
   * }} params - Parameters of this method.
   * @returns {void}
   */
  onChangeSpentOn ({
    payload,
  }) {
    this.formValueHashReactive.spentOn = payload.value
  }

  /**
   * Respond to the amount field changing.
   *
   * @param {{
   *   payload: NumberFieldEmitPayload
   * }} params - Parameters of this method.
   * @returns {void}
   */
  onChangeAmount ({
    payload,
  }) {
    this.formValueHashReactive.amount = payload.value
  }

  /**
   * Respond to the category field changing.
   *
   * @param {{
   *   payload: SelectEmitPayload
   * }} params - Parameters of this method.
   * @returns {void}
   */
  onChangeExpenseCategory ({
    payload,
  }) {
    this.formValueHashReactive.expenseCategoryId = payload.value
  }

  /**
   * Respond to the memo field changing.
   *
   * @param {{
   *   payload: TextFieldEmitPayload
   * }} params - Parameters of this method.
   * @returns {void}
   */
  onChangeMemo ({
    payload,
  }) {
    this.formValueHashReactive.memo = payload.value
  }

  /**
   * Respond to the form being submitted.
   *
   * The previous refusal goes first, so a second attempt is never read against the first one's
   * message. Then the one thing this side can already see -- a date later than today -- is refused
   * without a round trip, and nothing is sent. Every other refusal is the backend's to make.
   *
   * @returns {Promise<void>}
   */
  async onSubmitForm () {
    this.clearFormRefusal()

    if (this.isSpentOnLaterThanToday()) {
      this.refuseFutureSpentOn()

      return
    }

    await this.submitExpenseForm()
  }

  /**
   * Put the future-date refusal on the screen.
   *
   * The sentence is read out of the same hash the backend's own refusal resolves through, rather
   * than written again here, so the message does not depend on which of the two sides noticed.
   *
   * @returns {void}
   */
  refuseFutureSpentOn () {
    this.errorMessageHashReactive.submittingExpense =
      ERROR_MESSAGE_HASH[ERROR_CODE_HASH.FutureSpentOn203M004007]
  }

  /**
   * Send the form -- a recording, or a correction carrying all four fields.
   *
   * It is a method of its own rather than the tail of `#onSubmitForm()` so that the refusal above
   * it is already in place, and already tested, when the request arrives underneath it.
   *
   * Which of the two operations goes out is the form's mode and nothing else, so the branch is one
   * early return rather than a pair of forms or a pair of code paths: the same four values are
   * collected either way, which is what makes a partial correction unreachable.
   *
   * The branch hands the chosen request's promise back rather than awaiting it here, which is what
   * `@openreachtech/eslint-config` requires: its `IfStatement[test] AwaitExpression` rule reads the
   * whole `if` statement, body included, not only the condition its message names.
   *
   * @returns {Promise<void>} The chosen request.
   */
  submitExpenseForm () {
    if (this.isCorrectingExpense()) {
      return this.submitCorrection()
    }

    return this.submitRecording()
  }

  /**
   * Record a new entry.
   *
   * @returns {Promise<void>}
   */
  async submitRecording () {
    const variables = this.buildRecordExpenseVariables()
    const hooks = this.submittingExpenseLauncherHooks

    await this.graphqlClientHash.recordExpense
      .invokeRequestOnEvent({
        variables,
        hooks,
      })

    const capsule = this.recordExpenseCapsule

    if (capsule.hasError()) {
      this.surfaceFormRefusal({
        capsule,
      })

      return
    }

    await this.finishWrite()
  }

  /**
   * Build the variables the recordExpense document declares.
   *
   * **The memo is sent as it stands, null included.** The contract types it as a nullable `String`
   * and the backend has no presence rule reading it, so "not entered" travels as `null` and reads
   * back as an empty memo. Substituting an empty string here would record something other than
   * what was typed.
   *
   * @returns {RecordExpenseVariables} The variables.
   */
  buildRecordExpenseVariables () {
    const spentOn = this.spentOnValue
    const amount = this.amountValue
    const expenseCategoryId = this.expenseCategoryIdValue
    const memo = this.memoValue

    return {
      input: {
        spentOn,
        amount,
        expenseCategoryId,
        memo,
      },
    }
  }

  /**
   * Correct the entry the form was opened on.
   *
   * @returns {Promise<void>}
   */
  async submitCorrection () {
    const variables = this.buildCorrectExpenseVariables()
    const hooks = this.submittingExpenseLauncherHooks

    await this.graphqlClientHash.correctExpense
      .invokeRequestOnEvent({
        variables,
        hooks,
      })

    const capsule = this.correctExpenseCapsule

    if (capsule.hasError()) {
      this.surfaceFormRefusal({
        capsule,
      })

      return
    }

    await this.finishWrite()
  }

  /**
   * Build the variables the correctExpense document declares.
   *
   * **All four values go, plus the id.** `correctExpense` is a full replace, so a correction that
   * carried only the field somebody edited would clear the other three -- the memo above all, which
   * is the field a member of staff would discover missing later and not connect to this.
   *
   * @returns {CorrectExpenseVariables} The variables.
   */
  buildCorrectExpenseVariables () {
    const expenseId = this.correctingExpenseId
    const spentOn = this.spentOnValue
    const amount = this.amountValue
    const expenseCategoryId = this.expenseCategoryIdValue
    const memo = this.memoValue

    return {
      input: {
        expenseId,
        spentOn,
        amount,
        expenseCategoryId,
        memo,
      },
    }
  }

  /**
   * Leave the form as it was before, and show what was written.
   *
   * The form is emptied and the correction closed before the re-read rather than after it, so the
   * fields a member of staff has finished with do not sit filled while a request is in flight.
   *
   * @returns {Promise<void>}
   */
  async finishWrite () {
    this.leaveCorrection()

    await this.rereadExpenses()
  }

  /**
   * Read the entries again, on a page the new total still has.
   *
   * Section 11.2's call table fires `expenses` after every write, and section 11.1 is why: a
   * mutation answers an identifier and nothing else, so this is the only thing that makes a
   * correction appear in place and a removal disappear.
   *
   * **The page it settles on is decided by the total that comes back, not by the offset the screen
   * was holding.** A write can leave that offset past the end -- twenty-one entries, page two,
   * remove the one entry there, and offset twenty against a total of twenty answers no rows at all.
   * The table has no way to tell that apart from a member of staff with nothing recorded: it shows
   * "No entries yet", and the paginator that would lead back to the twenty is hidden at the same
   * moment, because a single page is not worth navigating. So the answer is read for what it is and
   * the last page is asked for instead.
   *
   * The second read is the only one, and it cannot become a third: it asks for an offset computed
   * from the total, which is inside the total by construction.
   *
   * @returns {Promise<void>}
   */
  async rereadExpenses () {
    await this.readExpenses({
      offset: this.expensesOffset,
    })

    if (!this.isExpensesOffsetBeyondTotal()) {
      return
    }

    await this.readExpenses({
      offset: this.generateLastExpensesPageOffset(),
    })
  }

  /**
   * Put a refused submission's message on the screen.
   *
   * The message is read off the capsule, which resolves it from the error code the backend sent.
   * `BaseAppGraphqlCapsule#extractResolvedErrorMessage()` is the single resolution point, and this
   * screen mapping a code itself is exactly how the rule that a not-found reads identically
   * whatever caused it would quietly stop holding.
   *
   * @param {{
   *   capsule: RecordExpenseCapsule | CorrectExpenseCapsule
   * }} params - Parameters of this method.
   * @returns {void}
   */
  surfaceFormRefusal ({
    capsule,
  }) {
    this.errorMessageHashReactive.submittingExpense = capsule.extractResolvedErrorMessage()
  }

  /**
   * Respond to a row's correct button.
   *
   * The four fields are filled from the row already on screen and no request is made: the entries
   * answer carries every value a correction needs, and there is no read-one operation to call.
   *
   * @param {{
   *   row: ExpenseRow
   * }} params - Parameters of this method.
   * @returns {void}
   */
  onClickCorrect ({
    row,
  }) {
    this.clearFormRefusal()

    this.fillFormFromRow({
      row,
    })

    this.statusReactive.correctingExpenseId = row.id
  }

  /**
   * Fill the form from a row of the entries table.
   *
   * All four values are taken, the memo included. A correction is a full replace, so a form that
   * opened without the memo would clear it on save -- the thing a screen gets wrong once and a
   * member of staff discovers by losing a memo.
   *
   * @param {{
   *   row: ExpenseRow
   * }} params - Parameters of this method.
   * @returns {void}
   */
  fillFormFromRow ({
    row,
  }) {
    this.formValueHashReactive.spentOn = row.spentOn
    this.formValueHashReactive.amount = row.amount
    this.formValueHashReactive.expenseCategoryId = row.expenseCategoryId
    this.formValueHashReactive.memo = row.memo
  }

  /**
   * Respond to the button that leaves a correction.
   *
   * @returns {void}
   */
  onClickCancelCorrection () {
    this.leaveCorrection()
  }

  /**
   * Leave correction mode and empty the form.
   *
   * @returns {void}
   */
  leaveCorrection () {
    this.clearFormRefusal()
    this.clearFormValues()

    this.statusReactive.correctingExpenseId = null
  }

  /**
   * Empty the four form fields.
   *
   * Every one of them goes back to null rather than to an empty string: "not entered" and "entered
   * as nothing" are different facts, and the memo is the field where the difference is real.
   *
   * @returns {void}
   */
  clearFormValues () {
    this.formValueHashReactive.spentOn = null
    this.formValueHashReactive.amount = null
    this.formValueHashReactive.expenseCategoryId = null
    this.formValueHashReactive.memo = null
  }

  /**
   * Respond to a row's remove button.
   *
   * It opens the confirmation and records which entry it is holding. Nothing is sent here.
   *
   * **A removal already in flight stops it.** The row whose removal is running is still in the
   * table until the re-read replaces it, so its Remove button is still there to be pressed; the
   * second removal answers not-found for an entry that was removed, and the screen shows a refusal
   * about something that succeeded. The button is disabled for the same reason, and this is not the
   * same check written twice: the parcel describes the control and this decides what happens.
   *
   * @param {{
   *   row: ExpenseRow
   * }} params - Parameters of this method.
   * @returns {void}
   */
  onClickRemove ({
    row,
  }) {
    if (this.isRemovingExpense()) {
      return
    }

    this.clearEntriesRefusal()

    this.statusReactive.removingExpenseId = row.id
  }

  /**
   * Respond to the removal being confirmed.
   *
   * The confirmation closes before the removal is sent, and that is deliberate. Kept open, the
   * dialog's confirm button would enter the library's loading state, where its label is hidden and
   * its spinner is `aria-hidden` -- leaving a button with no accessible name at all, on a button
   * this screen has no way to name. Closing first removes that state rather than compensating for
   * it, and a refusal that comes back lands in the entries' own refusal region, which is where the
   * design puts it either way.
   *
   * **Nothing is sent while a removal is already running.** `#onClickRemove()` will not open a
   * second confirmation over one, so this is the closing half of the same guard rather than a
   * reachable path of its own: what a dialog emits is the dialog's business, and a method that
   * sends a request answers for the request.
   *
   * @returns {Promise<void>}
   */
  async onConfirmRemoval () {
    if (this.isRemovingExpense()) {
      return
    }

    this.clearEntriesRefusal()

    const expenseId = this.removingExpenseId

    this.closeRemovalConfirmation()

    await this.removeExpense({
      expenseId,
    })
  }

  /**
   * Respond to the removal being declined.
   *
   * Reached by the cancel button and by the Escape key alike -- the component routes both through
   * one event.
   *
   * @returns {void}
   */
  onCancelRemoval () {
    this.closeRemovalConfirmation()
  }

  /**
   * Take the removal confirmation off the screen.
   *
   * @returns {void}
   */
  closeRemovalConfirmation () {
    this.statusReactive.removingExpenseId = null
  }

  /**
   * Remove an entry.
   *
   * A refusal lands in the entries' own message region rather than the form's: the confirmation
   * has already closed by the time this runs, and the entry it named is in the table.
   *
   * @param {{
   *   expenseId: number | null
   * }} params - Parameters of this method.
   * @returns {Promise<void>}
   */
  async removeExpense ({
    expenseId,
  }) {
    const variables = this.buildRemoveExpenseVariables({
      expenseId,
    })
    const hooks = this.removeExpenseLauncherHooks

    await this.graphqlClientHash.removeExpense
      .invokeRequestOnEvent({
        variables,
        hooks,
      })

    const capsule = this.removeExpenseCapsule

    if (capsule.hasError()) {
      this.surfaceEntriesRefusal({
        capsule,
      })

      return
    }

    await this.rereadExpenses()
  }

  /**
   * Build the variables the removeExpense document declares.
   *
   * @param {{
   *   expenseId: number | null
   * }} params - Parameters of this method.
   * @returns {RemoveExpenseVariables} The variables.
   */
  buildRemoveExpenseVariables ({
    expenseId,
  }) {
    return {
      input: {
        expenseId,
      },
    }
  }

  /**
   * Put a refused removal's message on the screen.
   *
   * Resolved by the capsule, for the reason given on `#surfaceFormRefusal()`. An entry somebody
   * else owns, an entry already removed and an id that never existed all carry one code and one
   * sentence, and a second mapping site here is the way those three would stop reading alike.
   *
   * @param {{
   *   capsule: RemoveExpenseCapsule
   * }} params - Parameters of this method.
   * @returns {void}
   */
  surfaceEntriesRefusal ({
    capsule,
  }) {
    this.errorMessageHashReactive.removingExpense = capsule.extractResolvedErrorMessage()
  }

  /**
   * Respond to another page of entries being chosen.
   *
   * @param {{
   *   payload: PaginationEmitPayload
   * }} params - Parameters of this method.
   * @returns {Promise<void>}
   */
  async onChangePage ({
    payload,
  }) {
    this.clearEntriesRefusal()

    await this.readExpenses({
      offset: payload.offset,
    })
  }

  /**
   * Respond to the button that reads the entries again after a failure.
   *
   * @returns {Promise<void>}
   */
  async onClickRetry () {
    this.clearExpensesFailure()

    await this.readExpenses({
      offset: this.expensesOffset,
    })
  }

  /**
   * Read a page of entries.
   *
   * **A refused read leaves the entries already on screen alone.** The table renders its error
   * region from `errorMessage` regardless of its rows, so the failure is shown either way, and
   * emptying the rows would throw away a page a member of staff can still read when the failure was
   * a re-read after a write that did land.
   *
   * @param {{
   *   offset: number
   * }} params - Parameters of this method.
   * @returns {Promise<void>}
   */
  async readExpenses ({
    offset,
  }) {
    const variables = this.buildExpensesVariables({
      offset,
    })
    const hooks = this.expensesLauncherHooks

    await this.graphqlClientHash.expenses
      .invokeRequestOnEvent({
        variables,
        hooks,
      })

    const capsule = this.expensesCapsule

    if (capsule.hasError()) {
      this.surfaceExpensesFailure({
        capsule,
      })

      return
    }

    this.holdExpenses({
      capsule,
    })
  }

  /**
   * Build the variables the expenses document declares.
   *
   * `sort` is not sent. The contract declares it on `PaginationInput` for the convention's sake and
   * says in as many words that no operation in 1.0.0 lets a caller choose one -- the order is
   * section 11.2's, most recent first by the day the money was paid, and it is the backend's.
   *
   * @param {{
   *   offset: number
   * }} params - Parameters of this method.
   * @returns {ExpensesVariables} The variables.
   */
  buildExpensesVariables ({
    offset,
  }) {
    return {
      input: {
        pagination: {
          limit: PAGINATION.EXPENSES_LIMIT,
          offset,
        },
      },
    }
  }

  /**
   * Hold the entries a read answered.
   *
   * @param {{
   *   capsule: ExpensesCapsule
   * }} params - Parameters of this method.
   * @returns {void}
   */
  holdExpenses ({
    capsule,
  }) {
    this.responseHashReactive.expenses = capsule.expenses
    this.responseHashReactive.expensesPagination = capsule.pagination
  }

  /**
   * Put a failed read's message on the screen.
   *
   * Resolved by the capsule, for the reason given on `#surfaceFormRefusal()`.
   *
   * @param {{
   *   capsule: ExpensesCapsule
   * }} params - Parameters of this method.
   * @returns {void}
   */
  surfaceExpensesFailure ({
    capsule,
  }) {
    this.errorMessageHashReactive.readingExpenses = capsule.extractResolvedErrorMessage()
  }

  /**
   * Respond to the button that reads the categories again.
   *
   * The way out of the one condition on this screen that has no other way out. Until it existed, a
   * failed category read left the form permanently unusable -- the select empty, the sentence
   * saying why erased by the first submit, and the table's "Try again" answering a different
   * failure -- and the only recovery was a reload nothing on the screen suggested.
   *
   * @returns {Promise<void>}
   */
  async onClickRetryExpenseCategories () {
    this.clearExpenseCategoriesRefusal()

    await this.readExpenseCategories()
  }

  /**
   * Read the categories the form offers.
   *
   * **A refused category read is reported in a region of its own**, which the category field points
   * at with `aria-describedby` alongside the form's. It is not the form's refusal region, and the
   * difference is the whole of what makes the screen recoverable: the form empties that region at
   * the top of every submit, so a sentence kept there was erased by the first press of the submit
   * button and replaced by "Choose a category." -- an instruction about a select that was empty for
   * exactly the reason the erased sentence had given.
   *
   * @returns {Promise<void>}
   */
  async readExpenseCategories () {
    const hooks = this.expenseCategoriesLauncherHooks

    await this.graphqlClientHash.expenseCategories
      .invokeRequestOnEvent({
        hooks,
      })

    const capsule = this.expenseCategoriesCapsule

    if (capsule.hasError()) {
      this.surfaceExpenseCategoriesFailure({
        capsule,
      })

      return
    }

    this.holdExpenseCategories({
      capsule,
    })
  }

  /**
   * Put a failed category read's message on the screen.
   *
   * Resolved by the capsule, for the reason given on `#surfaceFormRefusal()`.
   *
   * @param {{
   *   capsule: ExpenseCategoriesCapsule
   * }} params - Parameters of this method.
   * @returns {void}
   */
  surfaceExpenseCategoriesFailure ({
    capsule,
  }) {
    this.errorMessageHashReactive.readingExpenseCategories = capsule.extractResolvedErrorMessage()
  }

  /**
   * Hold the categories a read answered.
   *
   * @param {{
   *   capsule: ExpenseCategoriesCapsule
   * }} params - Parameters of this method.
   * @returns {void}
   */
  holdExpenseCategories ({
    capsule,
  }) {
    this.responseHashReactive.expenseCategories = capsule.expenseCategories
  }

  /**
   * Respond to the sign-out button.
   *
   * No confirmation. A removal is confirmed because it is permanent; signing out costs a sign-in.
   *
   * @returns {Promise<void>}
   */
  async onClickSignOut () {
    await this.signOut()
  }

  /**
   * End the session.
   *
   * **The token is dropped and the screen left whatever the response said**, and that is a decision
   * rather than an oversight. Every way `signOut` can be refused -- a session the backend has
   * already forgotten, a revocation it could not complete -- ends with a member of staff who asked
   * to leave. Keeping a credential they asked to give up, on a screen of their own expenses, to
   * report a failure they can do nothing about, is the worse of the two.
   *
   * There is no message region for a sign-out on this screen, which is the other half of the same
   * reason: the design gives the entries and the form one apiece and the header none.
   *
   * @returns {Promise<void>}
   */
  async signOut () {
    const hooks = this.signOutLauncherHooks

    await this.graphqlClientHash.signOut
      .invokeRequestOnEvent({
        hooks,
      })

    this.dropAccessToken()

    await this.navigateToSignIn()
  }

  /**
   * Give up the access token this application holds.
   *
   * @returns {void}
   */
  dropAccessToken () {
    this.accessTokenClerk.saveToken({
      token: null,
    })
  }

  /**
   * Go to the sign-in screen.
   *
   * `replace` rather than `push`: the screen behind a sign-out is one the browser's back button
   * must not return to, and there is no session left to render it with anyway.
   *
   * @returns {Promise<void>}
   */
  async navigateToSignIn () {
    await this.router.replace(SIGN_IN_PATH)
  }

  /**
   * Take the form's refusal off the screen.
   *
   * @returns {void}
   */
  clearFormRefusal () {
    this.errorMessageHashReactive.submittingExpense = null
  }

  /**
   * Take the entries' refusal off the screen.
   *
   * @returns {void}
   */
  clearEntriesRefusal () {
    this.errorMessageHashReactive.removingExpense = null
  }

  /**
   * Take the failed-read message off the screen.
   *
   * @returns {void}
   */
  clearExpensesFailure () {
    this.errorMessageHashReactive.readingExpenses = null
  }

  /**
   * Take the failed category read's message off the screen.
   *
   * Called from its own retry and from nowhere else. No submit reaches it, which is the property
   * the fifth condition depends on.
   *
   * @returns {void}
   */
  clearExpenseCategoriesRefusal () {
    this.errorMessageHashReactive.readingExpenseCategories = null
  }
}

/**
 * @typedef {import('@openreachtech/furo-nuxt').BaseFuroContextParams<*> & {
 *   router: import('vue-router').Router
 *   formValueHashReactive: import('vue').Reactive<FormValueHash>
 *   statusReactive: import('vue').Reactive<UserInterfaceState>
 *   errorMessageHashReactive: import('vue').Reactive<ErrorMessageHash>
 *   responseHashReactive: import('vue').Reactive<ResponseHash>
 *   graphqlClientHash: GraphqlClientHash
 *   accessTokenClerk: import('@openreachtech/furo-nuxt').AccessTokenClerk
 * }} ExpensesPageContextParams
 */

/**
 * @typedef {{
 *   expenses: GraphqlClient
 *   expenseCategories: GraphqlClient
 *   recordExpense: GraphqlClient
 *   correctExpense: GraphqlClient
 *   removeExpense: GraphqlClient
 *   signOut: GraphqlClient
 * }} GraphqlClientHash
 */

/**
 * @typedef {{
 *   capsuleRef: import('vue').Ref<*>
 *   invokeRequestOnEvent: (args?: *) => Promise<void>
 * }} GraphqlClient
 */

/**
 * @typedef {import('~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlCapsule.js').default} ExpensesCapsule
 */

/**
 * @typedef {import('~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlCapsule.js').default} ExpenseCategoriesCapsule
 */

/**
 * @typedef {import('~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlCapsule.js').default} RecordExpenseCapsule
 */

/**
 * @typedef {import('~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlCapsule.js').default} CorrectExpenseCapsule
 */

/**
 * @typedef {import('~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlCapsule.js').default} RemoveExpenseCapsule
 */

/**
 * @typedef {{
 *   beforeRequest: () => Promise<boolean>
 *   afterRequest: () => Promise<void>
 * }} LauncherHooks
 */

/**
 * @typedef {{
 *   input: schema.graphql.ExpensesInput
 * }} ExpensesVariables
 */

/**
 * @typedef {{
 *   input: schema.graphql.RecordExpenseInput
 * }} RecordExpenseVariables
 */

/**
 * @typedef {{
 *   input: schema.graphql.CorrectExpenseInput
 * }} CorrectExpenseVariables
 */

/**
 * @typedef {{
 *   input: schema.graphql.RemoveExpenseInput
 * }} RemoveExpenseVariables
 */

/**
 * @typedef {{
 *   spentOn: string | null
 *   amount: number | null
 *   expenseCategoryId: number | null
 *   memo: string | null
 * }} FormValueHash
 */

/**
 * @typedef {{
 *   isLoadingExpenses: boolean
 *   isLoadingExpenseCategories: boolean
 *   isRecordingExpense: boolean
 *   isRemovingExpense: boolean
 *   isSigningOut: boolean
 *   correctingExpenseId: number | null
 *   removingExpenseId: number | null
 * }} UserInterfaceState
 */

/**
 * @typedef {{
 *   submittingExpense: string | null
 *   removingExpense: string | null
 *   readingExpenses: string | null
 *   readingExpenseCategories: string | null
 * }} ErrorMessageHash
 */

/**
 * @typedef {{
 *   expenses: Array<schema.graphql.Expense>
 *   expensesPagination: schema.graphql.Pagination | null
 *   expenseCategories: Array<schema.graphql.ExpenseCategory>
 * }} ResponseHash
 */

/**
 * @typedef {{
 *   id: number
 *   spentOn: string
 *   spentOnText: string
 *   amount: number
 *   amountText: string
 *   expenseCategoryId: number
 *   expenseCategoryName: string
 *   memo: string | null
 *   memoText: string
 * }} ExpenseRow
 */

/**
 * @typedef {{
 *   label: string
 *   value: number
 * }} ExpenseCategoryOption
 */

/**
 * @typedef {{
 *   field: string
 *   label?: string
 *   sortable?: boolean
 *   align?: 'start' | 'center' | 'end'
 *   width?: string
 * }} TableColumn
 */

/**
 * @typedef {{
 *   page: number
 *   offset: number
 *   limit: number
 * }} PaginationEmitPayload
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroControlBlock/FuroControlBlockContext.js').Props['parcel']} ControlBlockParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroDatePicker/FuroDatePickerContext.js').Props['parcel']} DatePickerParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroNumberField/FuroNumberFieldContext.js').FuroNumberFieldParcel} NumberFieldParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroSelect/FuroSelectContext.js').Props['parcel']} SelectParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroTextField/FuroTextFieldContext.js').FuroTextFieldParcel} TextFieldParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroButton/FuroButtonContext.js').FuroButtonParcel} ButtonParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/organisms/FuroTable/FuroTableContext.js').Props['parcel']} TableParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroPagination/FuroPaginationContext.js').Props['parcel']} PaginationParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroEmptyState/FuroEmptyStateContext.js').Props['parcel']} EmptyStateParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroErrorState/FuroErrorStateContext.js').Props['parcel']} ErrorStateParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/organisms/FuroAlertDialog/FuroAlertDialogContext.js').Props['parcel']} AlertDialogParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroDatePicker/DatePickerEmitPayload.js').default} DatePickerEmitPayload
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroNumberField/NumberFieldEmitPayload.js').default} NumberFieldEmitPayload
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroSelect/SelectEmitPayload.js').default} SelectEmitPayload
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroTextField/TextFieldEmitPayload.js').default} TextFieldEmitPayload
 */
