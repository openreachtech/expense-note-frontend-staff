import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

const PAGE_TITLE = 'Monthly expenses'

/**
 * Context of the monthly expenses page.
 *
 * The screen specification section 12.2 describes: one month of one member of staff's own
 * entries, read together with that month's total, opening on the current month.
 *
 * **This class is deliberately a skeleton.** The checkpoint that created it opens the route
 * and pairs it with a context; the month control, the table of entries, the total, the empty
 * month and the `monthlyExpenses` client are each a later checkpoint's, and writing any of
 * them here would have emptied that checkpoint of its purpose. What is here is the seam they
 * fill: the constructor, the factory method and the reactive objects they need arrive when
 * there is something to read off them, exactly as `ExpensesPageContext` grew.
 *
 * The route requires a session by `middleware/000.gateway.global.js` alone -- it is global and
 * guards every path but `/sign-in`, so a page that does not set `$furo: { skipFilter: true }`
 * is guarded by existing. No second mechanism is declared here, and no per-page middleware,
 * which is also what the Furo convention requires.
 *
 * @extends {BaseAppContext}
 */
export default class MonthlyExpensesPageContext extends BaseAppContext {
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
}
