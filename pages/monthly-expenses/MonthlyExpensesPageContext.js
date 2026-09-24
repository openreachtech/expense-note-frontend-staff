import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

import YenAmountFormatter from '~/app/modules/YenAmountFormatter.js'

const PAGE_TITLE = 'Monthly expenses'

/*
 * The one link out of this screen, and the screen it points at.
 *
 * Checkpoint 11 decided that the two signed-in screens link to each other, one link each, in the
 * page's own header rather than as chrome in `layouts/default.vue` -- that layout is shared with
 * `/sign-in`, where a link to a guarded screen would bounce straight back. `/expenses` exists, so
 * section 8 rule 17 is satisfied.
 */
const EXPENSES_LINK_PATH = '/expenses'
const EXPENSES_LINK_LABEL = 'Expenses'

const YEAR_FIELD_ID = 'monthly-expenses-year'
const YEAR_FIELD_LABEL = 'Year'

const MONTH_FIELD_ID = 'monthly-expenses-month'
const MONTH_FIELD_LABEL = 'Month'

/*
 * The month control's two step buttons.
 *
 * The visible word and the accessible name are separate on purpose. "Previous" alone does not say
 * previous WHAT, and a `FuroButton`'s label is `visibility: hidden` while it loads -- which removes
 * it from the accessibility tree -- so a durable `aria-label` is the only name that survives every
 * state. Neither button ever loads (see `#previousMonthButtonParcel`), and both carry one anyway.
 */
const PREVIOUS_MONTH_BUTTON_TEXT = 'Previous'
const PREVIOUS_MONTH_BUTTON_LABEL = 'Previous month'

const NEXT_MONTH_BUTTON_TEXT = 'Next'
const NEXT_MONTH_BUTTON_LABEL = 'Next month'

const RETRY_BUTTON_LABEL = 'Try again'

const TOTAL_AMOUNT_LABEL = 'Total'

/*
 * What the total reads before there is a total to read.
 *
 * An em dash, and never a formatted zero. A zero after a failed read -- or while one is still in
 * flight -- would state a figure for a month whose entries were never read, which is exactly the
 * falsehood section 12's first acceptance criterion is about. A month that genuinely holds nothing
 * reads a real formatted zero instead, and the two are told apart by whether a response has landed.
 */
const TOTAL_AMOUNT_PLACEHOLDER = '—'

const SPENT_ON_COLUMN_FIELD = 'spentOnText'
const AMOUNT_COLUMN_FIELD = 'amountText'
const EXPENSE_CATEGORY_COLUMN_FIELD = 'expenseCategoryName'
const MEMO_COLUMN_FIELD = 'memoText'

const SPENT_ON_COLUMN_LABEL = 'Date paid'
const AMOUNT_COLUMN_LABEL = 'Amount'
const EXPENSE_CATEGORY_COLUMN_LABEL = 'Category'
const MEMO_COLUMN_LABEL = 'Memo'

const EMPTY_STATE_DESCRIPTION = 'Nothing was recorded for this month.'

const ERROR_STATE_TITLE = 'This month could not be read.'

/*
 * The months, in the words the screen shows them in.
 *
 * English, single language, left to right (`ai/contexts/uiux-context.md` section 7), so the names
 * are written out rather than produced by a locale-dependent formatter whose output would change
 * with the browser's language.
 */
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const MONTHS_IN_YEAR = 12

/*
 * The bound of the calendar, and NOT a policy about which months may be read.
 *
 * `YYYY-MM-DD` cannot express a year outside 1...9999 at all, so nothing that is a month is being
 * refused by this pair. The backend states the same reasoning in its own words in
 * `MonthlyExpensesInputValidator`. Section 8 rule 28 -- never disable or refuse a future month --
 * is untouched by it: every month inside the calendar is reachable, future ones included.
 */
const MINIMUM_YEAR = 1
const MAXIMUM_YEAR = 9999

/*
 * How many years either side of the CHOSEN year the year field offers.
 *
 * Centred on the chosen year rather than on today's, which is what makes rule 28 hold absolutely:
 * walking past the window with "Next" simply re-centres it, so the chosen year is always present
 * in its own list and no year is ever unreachable. A window anchored on today would eventually
 * select a year absent from the options and leave the trigger blank.
 */
const YEAR_OPTION_SPAN = 5

const PREVIOUS_MONTH_OFFSET = -1
const NEXT_MONTH_OFFSET = 1

/*
 * The reader of "now" this screen opens on.
 *
 * `Asia/Tokyo` explicitly, and not the browser's own calendar fields. Specification section 6 fixes
 * "today" and "month" as read in `Asia/Tokyo`, and `monthlyExpenses` answers whatever `{ year,
 * month }` it is handed -- truthfully -- so nothing downstream corrects a wrong opening month. The
 * moment that bites is precisely section 12's first use case, a member of staff filing a claim at
 * the end of the month, sometimes away from a desk.
 *
 * `ExpensesPageContext.generateTodayDate()` deliberately reads the browser instead, because on that
 * screen the backend refuses a late date and is authoritative. Here there is no refusal to fall back
 * on, which is the whole difference.
 */
const CURRENT_MONTH_DATE_TIME_FORMAT = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Tokyo',
  year: 'numeric',
  month: '2-digit',
})

/**
 * Context of the monthly summary screen.
 *
 * Specification section 12.2 describes ONE screen: a signed-in member of staff reading one month of
 * their own entries, with that month's total, opening on the current month and moving to another
 * month without leaving the screen.
 *
 * **The members this class carries are designed in `ai/contexts/uiux-context-monthly-summary.md`**:
 * which component each part of the screen is, which parcel getter feeds it, the month control and
 * why a date picker is the wrong surface for it, the four states and who renders each, and the names
 * chosen here -- checked against the `id-denylist` before they were written down. The pointer lives
 * in this file as well as in the sibling `index.vue`, because the next checkpoint works from this
 * file and is not run by a skill that reads `ai/contexts/`.
 *
 * -------------------------------------------------------------------------------------------
 * The four states, and how each one is reached
 * -------------------------------------------------------------------------------------------
 *
 * | State | Reached when | Rendered by |
 * | :-- | :-- | :-- |
 * | filled | the read landed and `responseHashReactive.expenses` holds entries | `FuroTable` rows |
 * | loading | `statusReactive.isLoadingMonthlyExpenses` | `FuroTable`'s own `loading` |
 * | empty | the read landed, no entries, nothing loading and nothing failed | `FuroEmptyState`, INSTEAD of the table |
 * | failed | `errorMessageHashReactive.readingMonthlyExpenses` holds a sentence | `FuroErrorState` in the table's `#error` slot |
 *
 * "The read landed" is `responseHashReactive.totalAmount !== null`, and that is why the capsule's
 * `totalAmount` falls back to `null` rather than `0`: a month in which nothing was recorded reports
 * a real total of zero, so `0` is an answer this operation gives and cannot also mean "no answer
 * yet".
 *
 * **The empty month is rendered instead of the table, not inside it.** Section 8 rule 30 and section
 * 12's third acceptance criterion both say the same thing in the same words -- the month "says it is
 * empty, rather than an empty table" -- and the table's own `#empty` slot keeps four column headers
 * above the sentence, which is an empty table with a sentence in it. `/expenses` puts its empty
 * state in that slot; it had no such criterion when it chose, and this screen does.
 *
 * -------------------------------------------------------------------------------------------
 * What is here, and what is not
 * -------------------------------------------------------------------------------------------
 *
 * Everything the template reads is here: the month the screen is showing, the four controls that
 * write it, the parcels, the rows, the total and the four branches. **The request itself is not.**
 * The next checkpoint injects the `monthlyExpenses` client, watches `monthValueHashReactive` so a
 * month change re-reads, clears the rows and the total before the request goes out (section 4.4),
 * discards a response whose `{ year, month }` is no longer the chosen one (section 4.2), and adds
 * the read to `#onClickRetry()` behind the clear that method already performs. **No markup moves
 * when it does** -- every state above is already reachable from the value of one reactive field.
 *
 * @extends {BaseAppContext}
 */
export default class MonthlyExpensesPageContext extends BaseAppContext {
  /**
   * Constructor.
   *
   * @param {MonthlyExpensesPageContextParams} params - Parameters of this constructor.
   */
  constructor ({
    props,
    componentContext,
    monthValueHashReactive,
    statusReactive,
    errorMessageHashReactive,
    responseHashReactive,
  }) {
    super({
      props,
      componentContext,
    })

    this.monthValueHashReactive = monthValueHashReactive
    this.statusReactive = statusReactive
    this.errorMessageHashReactive = errorMessageHashReactive
    this.responseHashReactive = responseHashReactive
  }

  /**
   * Factory method.
   *
   * @template {X extends typeof MonthlyExpensesPageContext ? X : never} T, X
   * @override
   * @param {MonthlyExpensesPageContextParams} params - Parameters of this factory method.
   * @returns {InstanceType<T>} An instance of this class.
   * @this {T}
   */
  static create ({
    props,
    componentContext,
    monthValueHashReactive,
    statusReactive,
    errorMessageHashReactive,
    responseHashReactive,
  }) {
    return /** @type {InstanceType<T>} */ (
      new this({
        props,
        componentContext,
        monthValueHashReactive,
        statusReactive,
        errorMessageHashReactive,
        responseHashReactive,
      })
    )
  }

  /**
   * Build the month this screen opens on, read in `Asia/Tokyo`.
   *
   * Called from the sibling `index.vue`'s `setup()` to seed the reactive month, because a context
   * never creates the reactive objects it reads. `build~` is the verb for a temporary object, and
   * the answer is the `year` + `month` PAIR the glossary fixes the term to -- never one packed
   * `'2026-09'` string, which would have to be parsed again by everything that read it.
   *
   * @returns {MonthValueHash} The current month in `Asia/Tokyo`.
   */
  static buildCurrentMonth () {
    const dateTimeParts = this.currentMonthDateTimeFormat
      .formatToParts(new Date())

    const year = this.extractDateTimePartNumber({
      dateTimeParts,
      partType: 'year',
    })
    const month = this.extractDateTimePartNumber({
      dateTimeParts,
      partType: 'month',
    })

    return {
      year,
      month,
    }
  }

  /**
   * get: The formatter that reads the calendar fields of `Asia/Tokyo`.
   *
   * Wrapped in a static getter rather than referenced from the methods, so a test can substitute a
   * formatter fixed to another zone and assert what this screen opens on.
   *
   * @returns {Intl.DateTimeFormat} The formatter.
   */
  static get currentMonthDateTimeFormat () {
    return CURRENT_MONTH_DATE_TIME_FORMAT
  }

  /**
   * Extract one calendar field out of formatted date-time parts, as a number.
   *
   * @param {{
   *   dateTimeParts: Array<Intl.DateTimeFormatPart>
   *   partType: string
   * }} params - Parameters of this method.
   * @returns {number} The value of the part, or 0 when the formatter emitted no such part.
   */
  static extractDateTimePartNumber ({
    dateTimeParts,
    partType,
  }) {
    const matchedPart = dateTimeParts
      .find(part => part.type === partType)

    const partValue = matchedPart
      ?.value
      ?? '0'

    return Number(partValue)
  }

  /**
   * get: Page title.
   *
   * Read by the template as the screen's heading. `definePageMeta` in the sibling `index.vue`
   * restates the same words for the document title rather than reading this constant: Nuxt
   * compiles that call out of the component at build time, so it cannot reference an import.
   *
   * @returns {string} Title of the monthly expenses page.
   */
  get pageTitle () {
    return PAGE_TITLE
  }

  /**
   * get: Path of the link to the entry screen.
   *
   * @returns {string} The path.
   */
  get expensesLinkPath () {
    return EXPENSES_LINK_PATH
  }

  /**
   * get: Label of the link to the entry screen.
   *
   * A plain anchor rather than a `FuroButton` dressed as one: a navigation target is an `<a>`, and
   * hiding that costs the keyboard, the context menu and the accessibility tree's own reading of
   * what the control does. The word is the link's accessible name, so it needs no `aria-label`.
   *
   * @returns {string} The label.
   */
  get expensesLinkLabel () {
    return EXPENSES_LINK_LABEL
  }

  /**
   * get: Parcel of the block framing the year field.
   *
   * @returns {ControlBlockParcel} Parcel of the block.
   */
  get yearControlBlockParcel () {
    return {
      label: YEAR_FIELD_LABEL,
      controlId: this.yearFieldId,
    }
  }

  /**
   * get: Id of the year field.
   *
   * @returns {string} Id of the field.
   */
  get yearFieldId () {
    return YEAR_FIELD_ID
  }

  /**
   * get: Parcel of the year field.
   *
   * @returns {SelectParcel} Parcel of the field.
   */
  get yearFieldParcel () {
    const value = this.selectedYear
    const options = this.yearOptions

    return {
      value,
      options,
    }
  }

  /**
   * get: Parcel bound onto the year field's own trigger button.
   *
   * The id belongs here rather than on the component. A fallthrough attribute is spread onto Reka's
   * `SelectRoot`, which renders a fragment, so an id given to `<FuroSelect>` reaches no element at
   * all and the block's `<label for>` resolves to nothing -- silently, because it compiles and
   * renders. The trigger is a real `<button>`, and it is also the element that otherwise has no
   * accessible name of its own.
   *
   * @returns {Record<string, string>} Attributes for the trigger.
   */
  get yearFieldTriggerParcel () {
    return {
      id: this.yearFieldId,
    }
  }

  /**
   * get: Options offered by the year field.
   *
   * Recomputed around the CHOSEN year, never around today's -- see `YEAR_OPTION_SPAN`. Clamped to
   * the calendar's own bound, which is not a refusal of any month (see `MINIMUM_YEAR`).
   *
   * @returns {Array<MonthControlOption>} The options.
   */
  get yearOptions () {
    const firstYear = this.extractFirstOptionYear()
    const lastYear = this.extractLastOptionYear()

    return [
      ...Array(lastYear - firstYear + 1)
        .keys(),
    ]
      .map(yearOffset => this.buildYearOption({
        year: firstYear + yearOffset,
      }))
  }

  /**
   * get: Parcel of the block framing the month field.
   *
   * @returns {ControlBlockParcel} Parcel of the block.
   */
  get monthControlBlockParcel () {
    return {
      label: MONTH_FIELD_LABEL,
      controlId: this.monthFieldId,
    }
  }

  /**
   * get: Id of the month field.
   *
   * @returns {string} Id of the field.
   */
  get monthFieldId () {
    return MONTH_FIELD_ID
  }

  /**
   * get: Parcel of the month field.
   *
   * @returns {SelectParcel} Parcel of the field.
   */
  get monthFieldParcel () {
    const value = this.selectedMonth
    const options = this.monthOptions

    return {
      value,
      options,
    }
  }

  /**
   * get: Parcel bound onto the month field's own trigger button.
   *
   * @returns {Record<string, string>} Attributes for the trigger.
   */
  get monthFieldTriggerParcel () {
    return {
      id: this.monthFieldId,
    }
  }

  /**
   * get: Options offered by the month field.
   *
   * All twelve, always, and not one of them ever disabled -- section 8 rule 28. A future month is
   * answered truthfully as empty with a total of zero, which is section 12's own third acceptance
   * criterion, so there is nothing here to grey out.
   *
   * @returns {Array<MonthControlOption>} The options.
   */
  get monthOptions () {
    return MONTH_NAMES
      .map((monthName, monthIndex) => this.buildMonthOption({
        monthName,
        month: monthIndex + 1,
      }))
  }

  /**
   * get: Parcel of the button that steps back one month.
   *
   * Neither step button is ever `disabled` and neither ever `loading`. Three quick presses must
   * land on the month three back rather than on whichever response returns last, and a disabled
   * control cannot be pressed a second time; the stale response is discarded on the way in instead.
   * A `disabled` at the calendar's own boundary was considered and declined as well -- it is a state
   * nobody reaches, it costs a branch, and an auditor reading rule 28 would be right to stop at a
   * greyed-out next-month button and ask why.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get previousMonthButtonParcel () {
    return {
      variant: 'outline',
      type: 'button',
    }
  }

  /**
   * get: Visible text of the button that steps back one month.
   *
   * Text and not an icon. No icon collection is installed in this application, so `@nuxt/icon`
   * resolves every icon over the network from the Iconify API at runtime; a control this screen
   * owns does not add one more.
   *
   * @returns {string} The text.
   */
  get previousMonthButtonText () {
    return PREVIOUS_MONTH_BUTTON_TEXT
  }

  /**
   * get: Accessible name of the button that steps back one month.
   *
   * @returns {string} The name.
   */
  get previousMonthButtonLabel () {
    return PREVIOUS_MONTH_BUTTON_LABEL
  }

  /**
   * get: Parcel of the button that steps forward one month.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get nextMonthButtonParcel () {
    return {
      variant: 'outline',
      type: 'button',
    }
  }

  /**
   * get: Visible text of the button that steps forward one month.
   *
   * @returns {string} The text.
   */
  get nextMonthButtonText () {
    return NEXT_MONTH_BUTTON_TEXT
  }

  /**
   * get: Accessible name of the button that steps forward one month.
   *
   * @returns {string} The name.
   */
  get nextMonthButtonLabel () {
    return NEXT_MONTH_BUTTON_LABEL
  }

  /**
   * get: Parcel of the button that reads the chosen month again.
   *
   * @returns {ButtonParcel} Parcel of the button.
   */
  get retryButtonParcel () {
    const loading = this.isLoadingMonthlyExpenses()

    return {
      variant: 'default',
      type: 'button',
      loading,
    }
  }

  /**
   * get: Label of the button that reads the chosen month again.
   *
   * It is the visible word and the durable accessible name both, because this button does pass
   * through a loading state, where the visible word stops being readable by anything.
   *
   * @returns {string} The label.
   */
  get retryButtonLabel () {
    return RETRY_BUTTON_LABEL
  }

  /**
   * get: Label sitting beside the month's total.
   *
   * @returns {string} The label.
   */
  get totalAmountLabel () {
    return TOTAL_AMOUNT_LABEL
  }

  /**
   * get: Columns of the month's entries.
   *
   * The same four columns `/expenses` shows, with the same labels and in the same order, so two
   * lists of the same rows never look like different things.
   *
   * **Every column is unsortable, and that is section 8 rule 29 rather than a shortcut.** Section 6
   * fixes one order for both screens and the backend already returns it from a constant the two
   * resolvers share. A sortable header would emit `sort:change` into a query that has no sort input,
   * so it would either do nothing or re-decide something section 6 settled. `@sort:change` is not
   * bound anywhere on this screen.
   *
   * `status` is deliberately not a column: it is in the result and it is `recorded` for every row in
   * 1.0.0, `/expenses` does not show it, and showing it here would make the two screens disagree
   * about what an entry is.
   *
   * @returns {Array<TableColumn>} The columns.
   */
  get monthlyExpenseColumns () {
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
   * get: Rows of the month's entries.
   *
   * In the answer's own order, which section 6 fixes and the backend returns. Nothing here sorts.
   *
   * @returns {Array<MonthlyExpenseRow>} The rows.
   */
  get monthlyExpenseRows () {
    return this.monthlyExpenses
      .map(expense => this.buildMonthlyExpenseRow({
        expense,
      }))
  }

  /**
   * get: The entries the last answer carried.
   *
   * @returns {Array<schema.graphql.Expense>} The entries.
   */
  get monthlyExpenses () {
    return this.responseHashReactive.expenses
      ?? []
  }

  /**
   * get: The total the last answer carried.
   *
   * @returns {number | null} The total in yen, or null while no answer has landed.
   */
  get monthlyTotalAmount () {
    return this.responseHashReactive.totalAmount
      ?? null
  }

  /**
   * get: Parcel of the entries table.
   *
   * Two of the four states are here. `loading` renders the spinner -- centred, because the rows and
   * the total are cleared before a month's request goes out, so there is never a previous month's
   * table sitting under it saying one thing while the heading beside it says another.
   * `errorMessage` outranks every other table state and renders the error region.
   *
   * `emptyText` restates the empty month's own sentence. The empty state proper is rendered instead
   * of this table, so the table's own empty row is only ever reached in the moment before the first
   * request goes out -- and even there it says something true rather than "No records".
   *
   * No `row-actions` slot is provided anywhere on this screen, so the trailing actions column does
   * not exist rather than existing and being empty: the table builds that column from the presence
   * of the slot, and section 12.2 declares one operation and no mutation to put in it.
   *
   * @returns {TableParcel} Parcel of the table.
   */
  get monthlyExpenseTableParcel () {
    const rows = this.monthlyExpenseRows
    const loading = this.isLoadingMonthlyExpenses()
    const errorMessage = this.monthlyExpensesFailureMessage
    const emptyText = this.buildEmptyMonthTitle()

    return {
      columns: this.monthlyExpenseColumns,
      rows,
      rowKey: 'id',
      loading,
      errorMessage,
      emptyText,
    }
  }

  /**
   * get: Parcel of the region shown when the chosen month holds nothing.
   *
   * The title names the month, because a sentence that does not name the month is not the
   * acceptance criterion being met. No action slot: recording an expense happens on the other
   * screen, and a button that navigated away from a month somebody had just chosen would answer a
   * question nobody asked.
   *
   * @returns {EmptyStateParcel} Parcel of the region.
   */
  get monthEmptyStateParcel () {
    const title = this.buildEmptyMonthTitle()

    return {
      title,
      description: EMPTY_STATE_DESCRIPTION,
    }
  }

  /**
   * get: Parcel of the region shown when the chosen month could not be read.
   *
   * `FuroErrorState` stands in for the table's own bare error text because its root carries
   * `role="alert"`, and a failure a member of staff was never told about is the worst of the four
   * states.
   *
   * @returns {ErrorStateParcel} Parcel of the region.
   */
  get monthlyExpensesErrorStateParcel () {
    const description = this.monthlyExpensesFailureMessage

    return {
      title: ERROR_STATE_TITLE,
      description,
    }
  }

  /**
   * get: The message shown when the chosen month could not be read.
   *
   * @returns {string | null} The message, or null when the last read succeeded.
   */
  get monthlyExpensesFailureMessage () {
    return this.errorMessageHashReactive.readingMonthlyExpenses
      ?? null
  }

  /**
   * get: The year the screen is showing.
   *
   * @returns {number} The year.
   */
  get selectedYear () {
    return this.monthValueHashReactive.year
  }

  /**
   * get: The month the screen is showing.
   *
   * @returns {number} The month, 1 through 12.
   */
  get selectedMonth () {
    return this.monthValueHashReactive.month
  }

  /**
   * Build the heading naming the month the figures below belong to.
   *
   * Built here and never in the template (section 8 rule 12). It is the thing that changes when the
   * month does, on a screen whose whole interaction is a re-read with no page load.
   *
   * @returns {string} The heading, such as "September 2026".
   */
  buildChosenMonthHeading () {
    const monthName = this.extractMonthName({
      month: this.selectedMonth,
    })

    return `${monthName} ${this.selectedYear}`
  }

  /**
   * Extract the name of a month.
   *
   * @param {{
   *   month: number
   * }} params - Parameters of this method.
   * @returns {string} The name, empty when the number is not a month.
   */
  extractMonthName ({
    month,
  }) {
    return MONTH_NAMES[month - 1]
      ?? ''
  }

  /**
   * Build the sentence saying that the chosen month holds nothing.
   *
   * @returns {string} The sentence.
   */
  buildEmptyMonthTitle () {
    const chosenMonthHeading = this.buildChosenMonthHeading()

    return `No expenses in ${chosenMonthHeading}`
  }

  /**
   * Extract the text shown for the month's total.
   *
   * Three states, not two. A month that was read and holds nothing reads a real formatted zero --
   * rendered, never hidden, which is half of section 12's third acceptance criterion. A month that
   * was not read, or is still being read, reads the placeholder instead.
   *
   * @returns {string} The text.
   */
  extractTotalAmountText () {
    if (!this.hasMonthlyExpensesLanded()) {
      return TOTAL_AMOUNT_PLACEHOLDER
    }

    const yenAmountFormatter = this.createYenAmountFormatter()

    return yenAmountFormatter.formatYenAmount({
      amount: this.monthlyTotalAmount,
    })
  }

  /**
   * Build one row of the month's entries.
   *
   * @param {{
   *   expense: schema.graphql.Expense
   * }} params - Parameters of this method.
   * @returns {MonthlyExpenseRow} The row.
   */
  buildMonthlyExpenseRow ({
    expense,
  }) {
    const spentOnText = this.extractSpentOnText({
      expense,
    })
    const amountText = this.extractAmountText({
      expense,
    })
    const expenseCategoryName = this.extractExpenseCategoryName({
      expense,
    })
    const memoText = this.extractMemoText({
      expense,
    })

    return {
      id: expense.id,
      spentOn: expense.spentOn,
      spentOnText,
      amountText,
      expenseCategoryName,
      memoText,
    }
  }

  /**
   * Extract the text shown for the day an entry's money was paid.
   *
   * The wire value is already ISO `YYYY-MM-DD`, and so is the `datetime` attribute the cell carries,
   * so the displayed text is the value unchanged -- the same answer `/expenses` gives, for the same
   * reason: no locale decision is recorded anywhere for this application, and inventing one here
   * would bury a design decision in a formatter.
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
   * One configuration, shared with `/expenses`, so the amount column of the two screens cannot drift
   * apart.
   *
   * @returns {YenAmountFormatter} The formatter.
   */
  createYenAmountFormatter () {
    return YenAmountFormatter.create()
  }

  /**
   * Extract the text shown for an entry's category.
   *
   * @param {{
   *   expense: schema.graphql.Expense
   * }} params - Parameters of this method.
   * @returns {string} The text.
   */
  extractExpenseCategoryName ({
    expense,
  }) {
    return expense.expenseCategory
      ?.name
      ?? ''
  }

  /**
   * Extract the text shown for an entry's memo.
   *
   * An entry recorded without a memo reads back as null and renders as nothing -- never as the word
   * "null", never as an error. Left to the table's own default the cell would print the raw value,
   * which is exactly what that would be.
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
   * Build one option of the year field.
   *
   * @param {{
   *   year: number
   * }} params - Parameters of this method.
   * @returns {MonthControlOption} The option.
   */
  buildYearOption ({
    year,
  }) {
    return {
      label: String(year),
      value: year,
    }
  }

  /**
   * Extract the first year the year field offers.
   *
   * @returns {number} The year.
   */
  extractFirstOptionYear () {
    return Math.max(
      this.selectedYear - YEAR_OPTION_SPAN,
      MINIMUM_YEAR
    )
  }

  /**
   * Extract the last year the year field offers.
   *
   * @returns {number} The year.
   */
  extractLastOptionYear () {
    return Math.min(
      this.selectedYear + YEAR_OPTION_SPAN,
      MAXIMUM_YEAR
    )
  }

  /**
   * Build one option of the month field.
   *
   * @param {{
   *   monthName: string
   *   month: number
   * }} params - Parameters of this method.
   * @returns {MonthControlOption} The option.
   */
  buildMonthOption ({
    monthName,
    month,
  }) {
    return {
      label: monthName,
      value: month,
    }
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
   * Whether the chosen month was read and holds nothing.
   *
   * All four conditions, because each of the other three states would otherwise be told as an empty
   * month: a read in flight has no entries yet, a failed read has none either, and a screen that has
   * asked for nothing at all has none least of all.
   *
   * @returns {boolean} true when the month is known to be empty.
   */
  isMonthEmpty () {
    return this.hasMonthlyExpensesLanded()
      && this.monthlyExpenses.length === 0
      && !this.isLoadingMonthlyExpenses()
      && !this.hasMonthlyExpensesFailed()
  }

  /**
   * Whether an answer for the chosen month has arrived.
   *
   * Read off the total rather than off the entries, because an empty list is what a month with
   * nothing in it and a month nobody has asked about both look like, while the total is `null`
   * until an answer lands and a real number -- zero included -- once one has.
   *
   * @returns {boolean} true once an answer has landed.
   */
  hasMonthlyExpensesLanded () {
    return this.monthlyTotalAmount !== null
  }

  /**
   * Whether the chosen month is being read.
   *
   * @returns {boolean} true while a read is in flight.
   */
  isLoadingMonthlyExpenses () {
    return this.statusReactive.isLoadingMonthlyExpenses
  }

  /**
   * Whether the chosen month could not be read.
   *
   * @returns {boolean} true while a failure is on screen.
   */
  hasMonthlyExpensesFailed () {
    return this.monthlyExpensesFailureMessage !== null
  }

  /**
   * Respond to the previous-month button being pressed.
   *
   * @returns {void}
   */
  onClickPreviousMonth () {
    const monthValueHash = this.buildSteppedMonth({
      monthOffset: PREVIOUS_MONTH_OFFSET,
    })

    this.applyMonth({
      monthValueHash,
    })
  }

  /**
   * Respond to the next-month button being pressed.
   *
   * @returns {void}
   */
  onClickNextMonth () {
    const monthValueHash = this.buildSteppedMonth({
      monthOffset: NEXT_MONTH_OFFSET,
    })

    this.applyMonth({
      monthValueHash,
    })
  }

  /**
   * Build the month a step away from the chosen one.
   *
   * Counted in whole months since year zero so that December steps forward into the next January
   * and January steps back into the previous December without a branch for either.
   *
   * @param {{
   *   monthOffset: number
   * }} params - Parameters of this method.
   * @returns {MonthValueHash} The month.
   */
  buildSteppedMonth ({
    monthOffset,
  }) {
    const steppedMonthCount = (this.selectedYear * MONTHS_IN_YEAR)
      + (this.selectedMonth - 1)
      + monthOffset

    const year = Math.floor(steppedMonthCount / MONTHS_IN_YEAR)
    const month = (steppedMonthCount % MONTHS_IN_YEAR) + 1

    return {
      year,
      month,
    }
  }

  /**
   * Show a month.
   *
   * A month outside the calendar is not shown and nothing else happens -- a press at December 9999
   * is a no-op, which is why neither step button is ever disabled. The month is written to a
   * reactive object this screen owns: it is screen state, and never a route segment and never a
   * query parameter either (section 8 rule 27). A `?year=&month=` is the near miss that rule does
   * not name -- it would push a history entry and re-run the global gateway middleware, which is
   * exactly the re-route the rule exists to prevent.
   *
   * @param {{
   *   monthValueHash: MonthValueHash
   * }} params - Parameters of this method.
   * @returns {void}
   */
  applyMonth ({
    monthValueHash,
  }) {
    if (!this.isWithinCalendar({
      monthValueHash,
    })) {
      return
    }

    this.monthValueHashReactive.year = monthValueHash.year
    this.monthValueHashReactive.month = monthValueHash.month
  }

  /**
   * Whether a month can be written as a calendar date at all.
   *
   * @param {{
   *   monthValueHash: MonthValueHash
   * }} params - Parameters of this method.
   * @returns {boolean} true when the year is one `YYYY-MM-DD` can express.
   */
  isWithinCalendar ({
    monthValueHash,
  }) {
    return monthValueHash.year >= MINIMUM_YEAR
      && monthValueHash.year <= MAXIMUM_YEAR
  }

  /**
   * Respond to the year field changing.
   *
   * @param {{
   *   payload: SelectEmitPayload
   * }} params - Parameters of this method.
   * @returns {void}
   */
  onChangeYear ({
    payload,
  }) {
    this.applyMonth({
      monthValueHash: {
        year: payload.value,
        month: this.selectedMonth,
      },
    })
  }

  /**
   * Respond to the month field changing.
   *
   * @param {{
   *   payload: SelectEmitPayload
   * }} params - Parameters of this method.
   * @returns {void}
   */
  onChangeMonth ({
    payload,
  }) {
    this.applyMonth({
      monthValueHash: {
        year: this.selectedYear,
        month: payload.value,
      },
    })
  }

  /**
   * Respond to the retry button being pressed.
   *
   * Clearing the previous failure first is this method's own half of the work, and it is written
   * here rather than folded into the read: a second attempt must never be read against the first
   * one's message. The read itself follows at the next checkpoint, behind this clear.
   *
   * @returns {void}
   */
  onClickRetry () {
    this.clearMonthlyExpensesFailure()
  }

  /**
   * Clear the message saying the chosen month could not be read.
   *
   * @returns {void}
   */
  clearMonthlyExpensesFailure () {
    this.errorMessageHashReactive.readingMonthlyExpenses = null
  }
}

/**
 * @typedef {import('@openreachtech/furo-nuxt').BaseFuroContextParams<*> & {
 *   monthValueHashReactive: import('vue').Reactive<MonthValueHash>
 *   statusReactive: import('vue').Reactive<UserInterfaceState>
 *   errorMessageHashReactive: import('vue').Reactive<ErrorMessageHash>
 *   responseHashReactive: import('vue').Reactive<ResponseHash>
 * }} MonthlyExpensesPageContextParams
 */

/**
 * @typedef {{
 *   year: number
 *   month: number
 * }} MonthValueHash
 */

/**
 * @typedef {{
 *   isLoadingMonthlyExpenses: boolean
 * }} UserInterfaceState
 */

/**
 * @typedef {{
 *   readingMonthlyExpenses: string | null
 * }} ErrorMessageHash
 */

/**
 * @typedef {{
 *   expenses: Array<schema.graphql.Expense>
 *   totalAmount: number | null
 * }} ResponseHash
 */

/**
 * @typedef {{
 *   label: string
 *   value: number
 * }} MonthControlOption
 */

/**
 * @typedef {{
 *   id: number
 *   spentOn: string
 *   spentOnText: string
 *   amountText: string
 *   expenseCategoryName: string
 *   memoText: string
 * }} MonthlyExpenseRow
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroControlBlock/FuroControlBlockContext.js').Props['parcel']} ControlBlockParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroSelect/FuroSelectContext.js').Props['parcel']} SelectParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/atoms/FuroButton/FuroButtonContext.js').FuroButtonParcel} ButtonParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/organisms/FuroTable/FuroTableContext.js').Props['parcel']} TableParcel
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
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroEmptyState/FuroEmptyStateContext.js').Props['parcel']} EmptyStateParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroErrorState/FuroErrorStateContext.js').Props['parcel']} ErrorStateParcel
 */

/**
 * @typedef {import('@openreachtech/furo-vue/lib/components/molecules/FuroSelect/SelectEmitPayload.js').default} SelectEmitPayload
 */
