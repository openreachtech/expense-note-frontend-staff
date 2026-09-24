/*
 * The one configuration of the yen amount format, shared by every screen that shows an amount.
 *
 * The amount is yen, which has no minor unit, so the formatter emits no decimal places of its own.
 * English is the interface language (`ai/contexts/uiux-context.md` section 7) and the currency is
 * the contract's -- `amount` and `totalAmount` are both `Int!` yen -- so neither half of this is a
 * decision made here.
 *
 * It is built once at module scope rather than per instance: `Intl.NumberFormat` is expensive to
 * construct, and a month's table asks for one formatted string per row.
 */
const YEN_NUMBER_FORMAT = new Intl.NumberFormat('en-US', {
  currency: 'JPY',
  style: 'currency',
})

/**
 * Formatter of a yen amount.
 *
 * **Why this is a module and not a method on one page.** `/expenses` and `/monthly-expenses` both
 * show the same entries with the same amount column, and `/monthly-expenses` additionally shows the
 * month's total. `ai/contexts/uiux-context-monthly-summary.md` section 4.4 requires the two screens'
 * amount columns to match "field for field so that two lists of the same rows never look like
 * different things" -- and two independently configured `Intl.NumberFormat`s can drift apart without
 * anything failing. One configuration, read by every caller, is what makes that requirement
 * structural rather than a thing somebody has to remember.
 *
 * It was not extracted earlier because there was exactly one consumer; writing the second one is
 * what made "reusing general logic across multiple files" true.
 */
export default class YenAmountFormatter {
  /**
   * Constructor.
   *
   * @param {YenAmountFormatterParams} params - Parameters of this constructor.
   */
  constructor ({
    numberFormat,
  }) {
    this.numberFormat = numberFormat
  }

  /**
   * Factory method.
   *
   * @template {X extends typeof YenAmountFormatter ? X : never} T, X
   * @param {YenAmountFormatterFactoryParams} [params] - Parameters of this factory method.
   * @returns {InstanceType<T>} An instance of this class.
   * @this {T}
   */
  static create ({
    numberFormat = this.numberFormat,
  } = {}) {
    return /** @type {InstanceType<T>} */ (
      new this({
        numberFormat,
      })
    )
  }

  /**
   * get: The number format every yen amount in this application is written with.
   *
   * Exposed as a static getter rather than read from the module constant inside the methods, so a
   * test can substitute its own and so a subclass can answer a different one.
   *
   * @returns {Intl.NumberFormat} The number format.
   */
  static get numberFormat () {
    return YEN_NUMBER_FORMAT
  }

  /**
   * Format an amount of yen as the text a member of staff reads.
   *
   * @param {{
   *   amount: number
   * }} params - Parameters of this method.
   * @returns {string} The formatted amount.
   */
  formatYenAmount ({
    amount,
  }) {
    return this.numberFormat
      .format(amount)
  }
}

/**
 * @typedef {{
 *   numberFormat: Intl.NumberFormat
 * }} YenAmountFormatterParams
 */

/**
 * @typedef {{
 *   numberFormat?: Intl.NumberFormat
 * }} YenAmountFormatterFactoryParams
 */
