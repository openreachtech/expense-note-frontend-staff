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
 * The members this class is going to need are already designed, in
 * `ai/contexts/uiux-context-expense-entry.md`: which component each part of the screen is, which
 * parcel getter feeds it, which of section 8's rules binds it, and the names chosen for the
 * properties, getters and handlers -- checked against the `id-denylist` before they were written
 * down. Two things in it decide code rather than markup, and both belong to whoever wires the data
 * in: `correctExpense` is a full replace, so one form collects all four fields in both modes and a
 * correction pre-fills from the row already on screen rather than from a second request; and the
 * date picker does not prevent a future date, so the date must be checked here before it is sent.
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
 * of logic two places share, not of logic one page uses twice. Checkpoint 16 writes it; this note is
 * the instruction it works from.
 *
 * **Both sides refuse a future date, and that is not duplication to be removed.** They answer
 * different questions. `RecordExpenseInputValidator` and `CorrectExpenseInputValidator` protect the
 * data against any caller at all, reading "today" in `Asia/Tokyo` from the instant the request
 * arrived; the check here tells a member of staff why nothing happened, immediately and without a
 * round trip.
 *
 * **The backend is authoritative.** The two can genuinely disagree — the browser reads its own
 * timezone and the server reads `Asia/Tokyo`, so for a few hours either side of midnight one calls
 * a date "today" that the other calls tomorrow — and where they do, the backend's refusal stands and
 * its message is what the screen shows (`203.M004.007` for a recording, `203.M005.009` for a
 * correction, both already mapped in `app/constants-error.js`). The check here never suppresses a
 * response and never decides that a date is acceptable: it declines to send one it can already see
 * is later than today, and every date it does send is judged again on the far side.
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
