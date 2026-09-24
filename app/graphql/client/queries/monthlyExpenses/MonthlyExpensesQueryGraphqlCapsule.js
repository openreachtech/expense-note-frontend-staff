import BaseAppGraphqlCapsule from '~/app/graphql/client/BaseAppGraphqlCapsule.js'

/**
 * MonthlyExpenses query graphql capsule.
 *
 * @extends {BaseAppGraphqlCapsule<MonthlyExpensesQueryResponseContent>}
 */
export default class MonthlyExpensesQueryGraphqlCapsule extends BaseAppGraphqlCapsule {
  /**
   * get: monthlyExpensesValueHash
   *
   * @returns {schema.graphql.MonthlyExpensesResult | null}
   */
  get monthlyExpensesValueHash () {
    return this.content
      ?.monthlyExpenses
      ?? null
  }

  /**
   * get: expenses
   *
   * @returns {Array<schema.graphql.Expense>}
   */
  get expenses () {
    return this.monthlyExpensesValueHash
      ?.expenses
      ?? []
  }

  /**
   * get: totalAmount
   *
   * The fallback is `null` and not `0`, because a month in which nothing was recorded reports a
   * total of zero (spec section 12) — so `0` is a real answer this operation gives, and a getter
   * that also answered `0` before the first response arrived would make the two indistinguishable.
   *
   * @returns {number | null}
   */
  get totalAmount () {
    return this.monthlyExpensesValueHash
      ?.totalAmount
      ?? null
  }
}

/**
 * @typedef {{
 *   monthlyExpenses: schema.graphql.MonthlyExpensesResult
 * }} MonthlyExpensesQueryResponseContent
 */
