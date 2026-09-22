import BaseAppContext from '~/app/vue/contexts/BaseAppContext.js'

const PAGE_TITLE = 'Expenses'

/**
 * Context of the expense-entry screen.
 *
 * Specification section 11.2 describes ONE screen: a signed-in member of staff looking at their
 * own entries, most recent first by `spent_on`, which is also where they record a new entry,
 * correct one they got wrong, remove a duplicate, and sign out.
 *
 * This checkpoint opens that screen and nothing more. The entries, the form, the category field
 * and the sign-out control arrive at the checkpoints that own them, and every one of them lands
 * on this one route rather than on a route of its own.
 *
 * @extends {BaseAppContext}
 */
export default class ExpensesPageContext extends BaseAppContext {
  /*
   * No constructor and no factory method are declared here on purpose. This context holds no
   * dependency of its own yet, so `BaseFuroContext`'s own `constructor` and `create()` already
   * take exactly the parameters the page hands over, and `new this(...)` in the inherited
   * factory resolves to this class. A checkpoint that injects a client, a fetcher or a reactive
   * hash declares both here, the way `SignInPageContext` does.
   */

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
}
