# Component design — `#monthly-summary`'s screen (`/monthly-expenses`)

> Written at `#monthly-summary`'s checkpoint 12 ("Component design"), which owns this file.
>
> **Why it sits here.** `hof-uiux-forge` — the generator checkpoint 15 runs — and `hof-uiux-audit`
> — the reviewer checkpoint 18 runs — both resolve their project context by filename:
> `ai/contexts/uiux-context.md` **plus any `uiux-context-<suffix>.md`**, read together as one
> binding document (`hof-uiux-forge/SKILL.md` lines 60-62, `hof-uiux-audit/SKILL.md` lines 46-47).
> A design put here is loaded by the two skills that build and judge this screen without anybody
> having to remember it exists.
>
> It is a **sibling** of `uiux-context.md` rather than an edit to it, because checkpoint 11 owns
> that file and §8 rule 15 — extend, do not modify — reads the same way for a document as for a
> component. It is also a sibling of `uiux-context-expense-entry.md`, which owns `/expenses`;
> where the two screens differ, the difference is stated here with its reason rather than left for
> a reader to notice.
>
> `pages/monthly-expenses/index.vue` and `pages/monthly-expenses/MonthlyExpensesPageContext.js`
> carry a pointer to this file, because checkpoint 16 works from the context class and is not run
> by a skill that reads `ai/contexts/`.
>
> Claims marked **[source]** were read out of the installed packages under `node_modules/` —
> `@openreachtech/furo-vue` 1.3.2, `reka-ui`, `nuxt` 3.21.11 — rather than taken from a skill, and
> several of them contradict the skill. Claims marked **[contract]** were read out of
> `.hora/contracts/1.0.0/staff-graphql.graphql`. Claims marked **[backend]** were read out of
> `expense-note-backend/`. **[chosen]** marks a decision that is arbitrary rather than derived —
> checkpoint 18 should not audit one of those as though it were a rule.

---

## 1. The exit condition, answered first

**Every component this screen needs already exists. Nothing new is built at this checkpoint.**

Five of the twenty equipped component skills serve it — `hof-cp-button`, `hof-cp-control-block`,
`hof-cp-empty-state`, `hof-cp-select`, `hof-cp-table` — and the rest of the screen is plain
semantic markup, which is a decision recorded in §4.3 rather than a gap. The one component this
application owns, `components/units/AppRefusalMessage.vue`, is **not** used here, and §3 says why.

There is no part of the screen left over, so there is nothing to justify as new.

---

## 2. All twenty component skills, matched

The kit equips twenty component skills. Each is answered, because "no, because …" is the part of
this checkpoint that stops a library component being rebuilt by hand, and because "not used" and
"not considered" are indistinguishable a year later.

| # | Skill | Routes to | Verdict | Why / why not |
|---|---|---|---|---|
| 1 | `hof-cp-button` | `FuroButton` | **ADOPT** | Three call sites: previous month, next month, and retry after a failed read. §4.2 and §4.6. |
| 2 | `hof-cp-checkbox-toggle` | `FuroCheckbox`, `FuroToggle`, `FuroSwitch` | DECLINE | No boolean is entered or displayed. `MonthlyExpensesInput` is `year` + `month`; `MonthlyExpensesResult` is `expenses` + `totalAmount` **[contract]** — none of the four is boolean. Row selection is the other use, and this screen declares **no mutation at all**, so there is nothing to select rows for. |
| 3 | `hof-cp-collapsible` | `FuroCollapsible`, `FuroAccordion` | DECLINE | §12.2 puts one month's entries and one total on the screen. Collapsing either hides the only thing the screen is for, and adds open/closed state no acceptance criterion asks for. |
| 4 | `hof-cp-control-block` | `FuroControlBlock` | **ADOPT** | The year select and the month select each need a `<label>`. `FuroSelect`'s trigger carries **no accessible name of its own** **[source]**, so the block plus a trigger id is the only way either field gets a name at all. §5.1. |
| 5 | `hof-cp-date-time` | `FuroDatePicker`, `FuroTimeField`, `FuroDateTimePicker` | DECLINE | **The important no.** A date picker selects a *date*; this screen selects a *month*. And `FuroDatePicker` has no month mode to reach: `extractRootAttributes()` returns `granularity: 'day'` **after** spreading the parcel, so a parcel `granularity` is overwritten **[source: `FuroDatePickerContext.js` lines 684-685]**. It would commit a day this screen has to invent and then discard, and its calendar grid asks a member of staff for a date when the answer wanted is a month. Full reasoning in §4.2. |
| 6 | `hof-cp-dialog` | `FuroDialog`, `FuroAlertDialog`, `FuroDrawer` | DECLINE | Nothing here is destructive, irreversible or blocking. §12.2's call table declares one query and no mutation, so there is no decision to force and nothing to confirm. |
| 7 | `hof-cp-dropdown-menu` | `FuroDropdownMenu` | DECLINE | A menu triggers **actions**; the month is a **value** the screen stores, and a value-bearing control is a field (`hof-cp-select`'s own "when NOT to use" says so). No row on this screen has an action either. |
| 8 | `hof-cp-editable-field` | `FuroEditableField` | DECLINE | Nothing on this screen is editable. §12.2 declares `monthlyExpenses` and nothing else, so an inline commit would have no operation to call. (On `/expenses` it was declined for a sharper reason — a one-value commit against a full-replace mutation; here the reason is simply that there is nothing to commit.) |
| 9 | `hof-cp-editor` | `FuroEditor` | DECLINE | The memo is `varchar(191)` plain text, read-only here, rendered in one cell. A rich-text editor holds HTML, which would not fit the column and would open a render-HTML path on a screen that renders only values it was handed. |
| 10 | `hof-cp-empty-state` | `FuroEmptyState`, `FuroErrorState` | **ADOPT** | Both. `FuroEmptyState` is exactly what §8 rule 24 and §12's third acceptance criterion ask for; `FuroErrorState` carries the failed read and its root is the only `role="alert"` in the region. §4.5 and §4.6. |
| 11 | `hof-cp-popover` | `FuroPopover`, `FuroTooltip` | DECLINE | Nothing is a hover hint and nothing is a click-anchored panel. A long memo behind a tooltip was considered and rejected for the same reason as on `/expenses`: a tooltip is not a keyboard- or touch-equivalent way to read content that is the entry's own text, and 191 characters wrap in a cell. |
| 12 | `hof-cp-select` | `FuroSelect`, `FuroAutocompleteField` | **ADOPT** `FuroSelect`, twice — year and month. `FuroAutocompleteField` DECLINED | Twelve months and a short year window are neither long, nor searched, nor asynchronously fetched, which are the three things the autocomplete exists for. §4.2. |
| 13 | `hof-cp-splitter` | `FuroSplitter`, `FuroScrollArea`, `FuroSeparator` | DECLINE | Nothing is resizable; the panel borders already draw every boundary this screen has, and a `FuroSeparator` beside a border would draw the same line twice; `FuroTable` owns its own scroll viewport **[source]**. |
| 14 | `hof-cp-stepper` | `FuroStepper` | DECLINE | Reading a month is one step. That the month control moves **by** one step does not make the screen a sequence — a stepper indicates progress through a fixed set of stages toward a completion, and there is no completion here. |
| 15 | `hof-cp-table` | `FuroTable`, `FuroPagination` | **ADOPT** `FuroTable`. **DECLINE `FuroPagination`** | The entries are tabular. Pagination is declined **on the record**, so its absence is never read as an oversight: §12.1 declares no pagination input, `MonthlyExpensesResult` carries **no `pagination` field** **[contract]**, and the contract says so in a comment of its own — there is nothing to page with and no payload to feed the component. §4.4. |
| 16 | `hof-cp-tabs` | `FuroTabs` | DECLINE | Considered as the month control and rejected in writing — §4.2. |
| 17 | `hof-cp-text-field` | `FuroTextField`, `FuroNumberField`, `FuroEmailField`, `FuroPasswordField` | DECLINE | Nothing is typed on this screen. A `FuroNumberField` for the year was considered and rejected: it accepts `20265` and every other integer, so the control would routinely produce input the backend refuses as `203.Q004.001` **[backend]**, where a select cannot. §4.2. |
| 18 | `hof-cp-textarea` | `FuroTextarea` | DECLINE | Nothing is typed; the memo is read-only here. |
| 19 | `hof-cp-toast` | `FuroToast`, `FuroToaster` | DECLINE | Nothing is confirmed here, because nothing is written. A month change is confirmed by that month's entries and total appearing, which persist where a toast would not, and a failure has to stay readable rather than time out. Adopting it would also mean mounting `FuroToaster` in `layouts/default.vue` — a shared file, on the one screen with no write to report. |
| 20 | `hof-cp-toggle-group` | `FuroToggleGroup`, `FuroToolBar` | DECLINE | Considered as the month control and rejected in writing — §4.2. `FuroToolBar` separately: the month control is four controls in a panel of their own, not a toolbar over a document. |

**Five adopt, fifteen decline.**

> **Components in the library that no equipped skill covers.** `FuroBadge`, `FuroSectionHeader`,
> `FuroSkeleton`, `FuroSearchField`, `FuroBreadcrumb`, `FuroSidebar`, `FuroAvatar` and others exist
> under `node_modules/@openreachtech/furo-vue/lib/components/` with no skill routing to them. None
> is adopted here. `FuroSectionHeader` and `FuroBadge` were the two that could plausibly have
> dressed the total (§4.3), and both were declined: reaching past the twenty equipped skills for a
> component nobody has read against this project is a larger decision than a `<p>` deserves.

---

## 3. What this application already owns, and why it is not used here

`components/units/AppRefusalMessage.vue` is the only component this application has built. **It is
not used on this screen**, and that is a decision rather than an omission.

It exists for a **refusal** — a request the backend declined, whose sentence must be shown without
saying which of several causes it was. This screen sends one request and it is a read. A read that
fails is not a refusal, it is a failure, and the component for a failed read is `FuroErrorState`
inside the table's own `#error` region — which is what `/expenses` already does for the same
condition, and which `AppRefusalMessage` cannot do: it carries no retry affordance and it sits
outside the table's own state precedence.

If a later version puts a write on this screen, that is when the component earns a place here.

---

## 4. The screen, region by region

```
<main class="unit-page">
  <header class="header">                     4.1   h1 + the link to /expenses
  <section class="panel month">               4.2   previous | year | month | next
  <section class="panel summary">             4.3   h2 naming the month, and the total
                                              4.4   the entries table
                                              4.5   the empty month (instead of the table)
                                              4.6   the failed read (inside the table)
</main>
```

The `unit-page` frame and the `panel` shape are the ones `/expenses` already draws, and the
skeleton page already carries the frame. Two panels, as `/expenses` has two.

### 4.1 Header — the heading and the one link

`<header class="header">` holding the `<h1>` the context already supplies (`context.pageTitle`,
"Monthly expenses") and **one link to `/expenses`** — checkpoint 11's decision, recorded in
`uiux-context.md` §3: the two signed-in screens link to each other, one link each, in the page's
own header, and not as chrome in the shared `layouts/default.vue`. `/expenses` exists, so §8 rule
17 is satisfied.

**The link is a plain anchor, not a `FuroButton`.** `hof-cp-button` documents `asChild` for
composing button behaviour onto an anchor, and it is declined here: a navigation target is an
`<a>`, and dressing it as a button hides that from the keyboard, from the context menu and from
the accessibility tree's own reading of what it does. §8 rule 11 asks for semantic elements, and
this is one.

**It is `NuxtLink`, and it is imported explicitly.** See §5.4 — the reading that this repository's
disabled auto-import makes `NuxtLink` unavailable is **false**, and it was tested rather than
reasoned; but the house posture is explicit registration, so the page declares it:

```js
import {
  NuxtLink,
} from '#components'
```

…and lists `NuxtLink` in `components: { … }` beside the furo imports, exactly as `/expenses`
declares `AppRefusalMessage`.

**No `<nav>` wrapper** **[chosen]** — a landmark holding a single link adds a navigation stop
without adding navigation, and `<header>` is already a landmark. If the reciprocal link on
`/expenses` grows into a set, that is when the wrapper earns its place.

**No sign-out control here.** §11.2 puts `signOut` on `/expenses`, and this screen's call table
declares one operation. A second sign-out would be a control the spec does not place.

### 4.2 The month control — the open design question, settled

**Chosen: a previous button, a year select, a month select, and a next button — four controls in
one panel, all four writing the same `{ year, month }` screen state.**

§12.2's two use cases pull in different directions and **they are not in conflict; they are two
gestures on one piece of state**:

| Use case | Gesture it asks for |
|---|---|
| *"filing a claim at the end of the month **picks that month**"* | a pick — one gesture to **any** month |
| *"checking last month … **switches to the previous month**"* | a step — one gesture to the **adjacent** month |

Neither control alone answers both well. A pair of selects makes "the previous month" an
open-scroll-pick, and across a January boundary it is two controls rather than one. A
previous/next pair leaves "picks that month" with no picking affordance at all, and a month eight
back is eight clicks. Building both is not over-building: they add no route, no second request
kind and no second source of truth — they write the same two numbers.

The state is two fields, `year` and `month`, because that is what the glossary fixes the term
`month` to be — *"`year` + `month`, a value pair … not one packed string, so neither field needs
parsing"* — and it is what `MonthlyExpensesInput` takes **[contract]**.

**What was rejected, and why**

| Candidate | Rejected because |
|---|---|
| `FuroDatePicker` in a month mode | **There is no month mode.** `FuroDatePickerContext.extractRootAttributes()` builds its return with `...strippedParcel` and then `granularity: 'day'` on the next line, so a parcel `granularity` is silently overwritten **[source: lines 684-685]**; `granularity` is not among `FURO_DATE_PICKER_PARCEL_KEYS` either, so it is spread and then lost. Even if it could be reached: a date picker asks for a **date**, and a day-of-month is a value this screen would have to invent and immediately discard. The calendar grid would invite the wrong gesture on a screen whose unit is the month. (Its header does render month and year `<select>`s **[source]** — but they steer the *view*, not the value.) |
| `FuroDateTimePicker`, `FuroTimeField` | Further off still: §6 fixes `spentOn` as a date with no time of day, and the input has no time part **[contract]**. |
| `FuroToggleGroup` | Twelve segments is not a segmented control. At the 320px minimum viewport `uiux-context.md` §4 fixes, twelve segments do not fit, and it carries **no answer for the year at all** — leaving a second control to be invented anyway. A toggle group is for a small closed set of modes. |
| `FuroTabs` | The same width problem and the same silence about the year, plus a worse one: tabs name **panels of one screen**, and twelve months are not twelve panels. A tab strip also reads as a complete set, and the months of an unbounded range of years are not one. |
| A single "recent months" `FuroSelect` (the last 24, say) | A bounded list is a **refusal by omission**, and §8 rule 22 forbids refusing a future month. Every month outside the window would be unreachable while looking like a deliberate choice. |
| `FuroNumberField` for the year | It accepts `20265` and every other integer, so the control would routinely produce input the backend refuses (`203.Q004.001` — `year` must be 1…9999 **[backend]**). A select cannot produce a year that is not a year. |
| Previous/next **alone** | "Picks that month" would have no pick. |
| The two selects **alone** | "Switches to the previous month" would cost three gestures, and four across a January boundary. |

**Rule 21 — screen state, and not only "not a route segment".** The month is held in a `reactive`
object owned by `pages/monthly-expenses/index.vue` and read by the context, the way `/sign-in` and
`/expenses` already hand their reactive objects over. It is **not a route segment, and not a query
parameter either** — the rule names the segment, and a `?year=&month=` is the near miss it does not
name: a query change pushes a history entry and re-runs the global gateway middleware, which is the
re-route the rule exists to prevent. It is also **not persisted** across a reload: §12.2 says the
month it opens on is the current one, full stop.

**Rule 22 — nothing is disabled and nothing is refused.**

- No month option is disabled, ever. All twelve are always offered.
- The **year select's options are recomputed around the currently selected year** — selected year
  ± 5 **[chosen: the width of the window, not the mechanism]** — rather than around today's year.
  This is what makes the rule hold absolutely: walking past the window with `next` simply
  re-centres it, so the selected year is always present in its own list and no year is ever
  unreachable. A window anchored on *today* would eventually select a year absent from the options
  and leave the trigger blank.
- The window is clamped to **1…9999**, and that is the calendar format's bound rather than a policy
  about which months may be read. The backend states the same reasoning in its own words: *"The
  bound is the **date format's** … not if somebody decides which years a member of staff may
  read"* **[backend: `MonthlyExpensesInputValidator.js`]**. A year outside it cannot be written as
  `YYYY-MM-DD` at all, so nothing that is a month is being refused.
- **The previous/next buttons are never disabled**, including at those two extremes. The context's
  `onClickPreviousMonth()` / `onClickNextMonth()` clamp, and a click at December 9999 is a no-op.
  A `disabled` at the boundary was considered and declined: it is a state no member of staff will
  ever reach, it costs a branch, and an auditor reading §8 rule 22 would be right to stop at a
  greyed-out next-month button and ask why.

**Labels.** Each select sits inside a `FuroControlBlock` carrying `label` ("Year" / "Month") and
`controlId`. **The id goes on `:trigger-parcel`, never as an `id` attribute on `<FuroSelect>`** —
§5.1, and the pattern that `ExpensesPageContext#expenseCategoryFieldTriggerParcel` already
establishes.

**Button content is text, not an icon** — "Previous" and "Next", each also carrying a durable
`aria-label` ("Previous month" / "Next month") so the name survives a `loading` state and says
*previous what*. `uiux-context.md` §5 asks that no icon dependency be added without raising it; see
§5.5, where the state of icons in this repository turns out not to be what that answer says.

**The control stays interactive while a read is in flight.** No `disabled`, no `loading` on the two
buttons. Three quick clicks on "Previous" must land on the month three back, not on whichever
response happens to return last, so **checkpoint 16 discards a response whose `{ year, month }` is
not the current selection** — a stale-response guard on the context, not a disabled control. Stated
here so that checkpoint 16 does not reach for the disable instead.

### 4.3 The month's heading and its total — plain markup, deliberately

The summary panel's `<h2>` names the chosen month in words — "September 2026" — built by a context
method, never in the template (§8 rule 12). It is what tells a member of staff which month the
figures below belong to, and it is the thing that changes when the month does.

**The total is plain markup and not a component.** No equipped skill routes to anything that
represents a single summary figure, and the two library components that could have been dressed
into one — `FuroBadge`, `FuroSectionHeader` — are covered by no skill and would be a larger
decision than this needs. The shape:

```html
<p class="total">
  <span class="label">Total</span>
  <output class="amount">¥12,345</output>
</p>
```

`<output>` rather than a second `<span>` **[chosen, with a reason]**: its implicit ARIA role is
`status`, so the figure is announced when it changes. On a screen whose whole interaction is a
re-read with **no page load** (rule 21), nothing else announces that the numbers on screen are now
a different month's. It costs one element and no script.

**The total renders in all three of its states, and they are three, not two:**

| State | Shows |
|---|---|
| read landed, entries present | the formatted figure |
| read landed, **no** entries | **`¥0` — rendered, not hidden.** §8 rule 24 and §12's third acceptance criterion |
| read **failed**, or in flight | a placeholder (`—`), **never `¥0`** |

The third row is the one worth writing down. A zero after a failed read would be a lie of exactly
the kind §12's first acceptance criterion is about: it would state a total for a month whose
entries were never read.

**Formatting is a context method** (`extractTotalAmountText`, `extractAmountText`) — `amount` and
`totalAmount` are `Int!` yen **[contract]**, a second currency is permanently out of scope, and the
symbol and the thousands separator are the context's to add.

### 4.4 The entries table

`FuroTable`, four columns, matching `/expenses` field for field so that two lists of the same rows
never look like different things:

| `field` | `label` | `align` | `sortable` |
|---|---|---|---|
| `spentOn` | Date | — | **false** |
| `amount` | Amount | `end` | **false** |
| `expenseCategory` | Category | — | **false** |
| `memo` | Memo | — | **false** |

- **Every column is unsortable, and that is §8 rule 23 rather than a shortcut.** §6 fixes one order
  for both screens and the backend already returns it from a constant both resolvers share. A
  sortable header would emit `sort:change` **[source]** into a query that has no sort input
  **[contract]**, so it would either do nothing or re-decide something §6 settled. `@sort:change`
  is **not bound**.
- **`status` is not a column.** It is in the result **[contract]** and it is `recorded` for every
  row in 1.0.0 — the approval seam. `/expenses` does not show it; showing it here would make the
  two screens disagree about what an entry is.
- **No `row-actions` slot.** §12.2 declares one operation. `/expenses` uses that slot for Correct
  and Remove; providing it here would build a trailing column — **providing the slot is what
  creates the column** **[source]** — for actions this screen has no operation to perform.
- The `#cell` slot renders `spentOn` as `<time :datetime="row.spentOn">` (§8 rule 11, ISO 8601),
  and everything else as text — the same shape `/expenses` already uses.
- `rowKey: 'id'`.
- **A `memo` of `null` renders empty** — never the text "null". The `#expense-entry` rule about the
  memo being genuinely optional reads the same way on a screen that only displays it.

**The rows and the total are cleared when the month changes, before the request goes out.** This is
a deliberate divergence from `/expenses`, where a re-read keeps its rows under a floating overlay so
the layout never collapses. Here the rows on screen belong to the **previous month**, and leaving
them under a spinner while the heading beside them already says October is the same falsehood as
the stale total in §4.3. §7's budget is a few hundred rows in under a second, so the flash is short
and the truth is cheap.

### 4.5 The empty month — outside the table, not inside it

`FuroEmptyState`, rendered **instead of** `FuroTable`, guarded by one boolean getter on the
context: the read landed, there are no entries, nothing is loading and nothing failed.

**This is a deliberate divergence from `/expenses`, which puts its empty state in the table's own
`#empty` slot.** §8 rule 24 and §12's acceptance criterion both say the same thing in the same
words — *"says the month is empty, **rather than an empty table**"* — and the `#empty` slot keeps
the four column headers above a `<td colspan>`, which is an empty table with a sentence in it. The
sibling screen had no such criterion when it chose; this one does, and the criterion wins.

The title names the month (checkpoint 15's copy, e.g. *"No expenses in September 2026"*), because a
sentence that does not name the month is not the criterion being met. **No action slot** — there is
nothing to do here; recording an expense happens on the other screen, and a button that navigated
away from a month somebody had just chosen would be answering a question nobody asked.

**The total stays on screen and reads `¥0`.** It sits in the panel above the table, outside the
branch, so this needs no special handling — stated because it is half of the criterion.

### 4.6 The failed read — inside the table

`FuroErrorState` in `FuroTable`'s `#error` slot, with a retry `FuroButton` in its `#action` slot,
fed by `parcel.errorMessage` — the same construction `/expenses` uses, and for the same reason:
`FuroErrorState`'s root carries `role="alert"` where the table's bare `errorMessage` text does not
**[source]**, and a failure a member of staff was never told about is the worst of the four states.

It stays **inside** the table where the empty state moved outside, because the two are not the same
kind of thing: an empty month is a fact about the month and belongs in place of the table; a failed
read is a fact about the request, and `errorMessage` outranks every other table state **[source]**,
so the component's own precedence already does the work.

`#error` is scoped `{ message }` **[source]**, which is the natural source for the error state's
`description`.

Retry re-issues `monthlyExpenses` for the **currently selected** month — not for the current
calendar month.

### 4.7 The four states, and who owns each

| State | Reached when | Rendered by |
|---|---|---|
| filled | the read landed with entries | `FuroTable` rows |
| loading | a read is in flight | `FuroTable`'s `loading` — the centred spinner, since §4.4 clears the rows first |
| empty | read landed, no entries, not loading, not failed | `FuroEmptyState`, **instead of** the table (§4.5) |
| failed | the read failed | `FuroErrorState` in the table's `#error` slot (§4.6) |

Every one of the four is reachable from the value of one reactive field, and the branch is a
boolean getter on the context in each case — never an expression in the template (§8 rule 12).

---

## 5. Facts read from the installed packages that the skills do not say

Each was verified under `node_modules/`, and each would otherwise have produced code that compiles
and is wrong.

### 5.1 An `id` on `<FuroSelect>` reaches no DOM element — the trigger parcel is the seam

`FuroSelect` puts `$attrs.class` / `$attrs.style` on its wrapper `<div>` and spreads the rest onto
reka's `SelectRoot`, which has **no `id` prop** and renders `PopperRoot` — and `PopperRoot` is
`inheritAttrs: false` and returns `renderSlot(_ctx.$slots, "default")` and nothing else
**[source: `reka-ui/dist/Popper/PopperRoot.js` lines 7-17]**. A fallthrough `id` therefore lands on
no element, and a `FuroControlBlock` whose `controlId` points at it produces a `<label for>` that
resolves to nothing. **It compiles, it renders, and the label association silently does not
exist.**

**The working seam is `:trigger-parcel="{ id: … }"`** — built as a context getter, never inline —
because `triggerParcel` is `v-bind`-ed onto `SelectTrigger`, which renders a real `<button>`. That
button is also the element with **no accessible name of its own**, so this is the only way either
of this screen's two fields gets a name for checkpoint 18's audit.

Both month-control selects use it. The pattern already exists in this repository, at
`ExpensesPageContext#expenseCategoryFieldTriggerParcel`.

> Two sibling components, opposite behaviour, and neither documented: an `id` on `<FuroDatePicker>`
> **does** land — `/expenses` relies on it reaching a visually hidden input that forwards focus into
> the first segment. This screen uses no date picker, so the difference costs it nothing; it is
> recorded so the next reader does not generalise from either one.

### 5.2 `hof-cp-date-time`'s control-block example passes a parcel field that does not exist

`hof-cp-date-time/SKILL.md:199` writes:

```vue
<FuroControlBlock :parcel="{ label: 'Due date', error: context.dueDateError }">
```

**There is no `error` field.** `FuroControlBlock`'s parcel is `label` / `controlId` /
`errorMessages: Array<string>` / `required` / `orientation` **[source:
`FuroControlBlockContext.js` lines 17-78]**, and `hasError()` reads
`this.errorMessages.length > 0`. An `error` key is spread and ignored, and **no message renders** —
silently. The same fact was recorded at `#sign-in`'s and `#expense-entry`'s checkpoint 12 and is
unchanged in 1.3.2.

This screen has no field-level error to show — neither select can hold an invalid value — so
nothing here depends on it. Recorded because the same skill file is what checkpoint 15 will read.

### 5.3 `FuroTable`'s slot list, `FuroSelect`'s slot list, and `update:value`

Three the skills get wrong, all confirmed against 1.3.2 and all already recorded in
`.hora/digests/hof-cp-table.md` and `.hora/digests/hof-cp-select.md`:

- **`FuroTable` has a `row-actions` slot no skill lists**, and providing it is what *creates* the
  trailing column — `hasRowActionsColumn()` is `Boolean(slots['row-actions'])`
  **[source: `FuroTableContext.js:380`]**. This screen deliberately does not provide it (§4.4),
  which means the column does not exist rather than existing and being empty.
- **`sort-icon` is missing from the component's own `FuroTableSlots` typedef** though the template
  renders it. Not used here — every column is unsortable.
- **`FuroSelect`'s `update:value` returns the whole array in `multiple` mode**, not the first value
  as the skill says. Neither select here is `multiple`, so both receive a single resolved
  `optionValue`. Recorded because it is the kind of thing a later filter would trip over.

### 5.4 Auto-import is off — and `NuxtLink` is available anyway. Tested, not reasoned.

`nuxt.config.js` sets `components: { dirs: [] }` and `imports: { autoImport: false }`, and
`.hora/tree/` was corrected at checkpoint 10 to say so. **The correct conclusion from that is
narrower than it first looks**, and the difference decides how §4.1's link is written:

- `imports.autoImport: false` disables **composable / util** auto-import. That is why
  `definePageMeta` is imported from `#imports`.
- `components.dirs: []` disables scanning **this project's own `components/`** directory. That is
  why `AppRefusalMessage` is imported and declared by hand.
- **Neither touches Nuxt's built-in component registry.** `NuxtLink` is registered by Nuxt core
  itself via `addComponent({ name: 'NuxtLink', priority: 10, … })` **[source: `nuxt/dist/index.mjs`
  line 6236]**, independently of `dirs`; it is not `global: true`, so it is resolved by the SFC
  components transform rather than by a runtime plugin.

**Measured rather than argued.** A throwaway page using a bare `<NuxtLink>` with no import at all
was built with `npm run build`, and the emitted client chunk contains a **static import**
(`import{_ as n}from"./BNCtVsO4.js" … const t=n`) and no `resolveComponent("NuxtLink")` string — the
transform fired. A second build, with `import { NuxtLink } from '#components'` plus a
`components: { NuxtLink }` declaration, also succeeded. The probe page was deleted; both builds
were green.

**So both forms work, and §4.1 chooses the explicit one** — every other component on every page in
this repository is imported and declared, and a tag that resolves through a transform the config
appears to have switched off is exactly the implicit assumption §8 rule 12's neighbours exist to
prevent.

### 5.5 No icon collection is bundled — every `ph:` icon is fetched at runtime

`uiux-context.md` §5 answers the icon question with *"None installed, and none required by anything
built so far."* **The first half is not accurate, and the consequence lands on this screen.**

- `@nuxt/icon` **is** a configured module (`nuxt.config.js` line 82) and a declared devDependency.
- Furo's own components render Phosphor icons through it without being asked: `FuroSelect`'s caret
  (`ph:caret-down`) and its check indicator, `FuroTable`'s spinner, `FuroEmptyState`'s icon-slot
  default **[source]**. This screen mounts two `FuroSelect`s and a `FuroTable`, so it renders them
  whether or not this project ever writes an `<FuroIcon>` of its own.
- **No icon collection is installed in this application.** `@iconify-json/ph` is a devDependency of
  `@openreachtech/furo-vue` and is not hoisted here — `node_modules/@iconify-json/` does not exist
  — and the generated `.nuxt/nuxt-icon-server-bundle.mjs` contains `export const collections = {}`
  **[source: the file, after a green `npm run build`]**.

The icons are therefore resolved over the network from the Iconify API at runtime. For an internal
tool on a company network — `ssr: false`, so the client asks directly — that is a dependency on a
third-party host for the caret on a dropdown. **It is pre-existing**: `/expenses` already mounts
`FuroSelect`, `FuroDatePicker` and `FuroTable` and already renders those icons. This screen adds
two more selects rather than introducing the condition.

**Not fixed here, and nothing installed.** Reported as a dependency for `/hora-build` to decide on
(`@iconify-json/ph`, matching furo-vue's own `^1.2.2`), and as a correction to `uiux-context.md`
§5, which checkpoint 11 owns.

### 5.6 Every component skill's example writes `:parcel="{ … }"` inline

Recorded once more, because checkpoint 15 reads the skills and not only this file. Every one of the
equipped component skills writes the parcel as a template object literal, several of them with a
method call in a property value. `uiux-context.md` §8 rule 12 and `D:\ORT\rules\javascript-style.md`
("no logic in object-literal property values"; an object literal argument is always chopped) both
bar it, and `hof-uiux-forge` itself says the project's §8 wins over every line of a skill.

**Every parcel on this screen is a named getter on `MonthlyExpensesPageContext`.**

### 5.7 The two accessibility gaps `#sign-in` found still apply

Both are checkpoint 15's to compensate for rather than checkpoint 18's to discover:

- **A loading `FuroButton` has no accessible name** — its label is `visibility: hidden` and the
  spinner is `aria-hidden="true"` **[source]**. The retry button passes through that state, so it
  carries a durable `aria-label`. The previous/next buttons never load (§4.2) but carry one anyway,
  because "Previous" alone does not say previous *what*.
- **`aria-describedby` is not wired** by `FuroControlBlock` from an error region to the control it
  frames. Neither select on this screen has a field-level message, so there is nothing to wire —
  stated so its absence is not read as the gap recurring.

One more, specific to this screen: **`FuroTable` sets `aria-busy="true"` and makes its scroll
viewport `inert` while loading** **[source]**, so focus inside the table is lost on a month change.
Focus after a month change belongs on the control that caused it — the button or the select the
member of staff just used — which is where the browser leaves it, provided neither is disabled
during the read. That is the second reason §4.2 keeps the control interactive.

---

## 6. The opening month must be read in `Asia/Tokyo`, not in the browser

§12.2: *"The month it opens on is the current one."* §6 fixes what "current" means: *"**month** —
the calendar month an expense's date falls in, read in `Asia/Tokyo`"*, and *"**today** — the
current calendar date in `Asia/Tokyo` — the timezone every date in this product is read in."*

**Nothing corrects a wrong opening month.** `monthlyExpenses` answers whatever `{ year, month }` it
is given, truthfully, so a browser outside `Asia/Tokyo` opening at a month boundary lands on the
wrong month and is told the truth about it. The moment this bites is precisely use case 1's — *a
member of staff filing a claim at the end of the month* — and `uiux-context.md` §4 records that
some filing is done away from a desk.

**So the opening month is derived in `Asia/Tokyo` explicitly**, from `Intl.DateTimeFormat` with
`timeZone: 'Asia/Tokyo'`, and **not** from `new Date().getFullYear()` / `.getMonth()`. It needs no
dependency, and the library does the same thing for the same reason in
`FuroDatePickerContext.extractDatePartsInTimezone()` **[source]**.

> **`ExpensesPageContext.generateTodayDate()` reads the browser's own calendar fields**, and that
> is **not** a defect to fix: its docblock says so deliberately, because on that screen the backend
> refuses a late date and is authoritative. Here there is no backend refusal to fall back on, which
> is the whole difference. Recorded, not changed — it is `#expense-entry`'s file (§8 rule 15).

---

## 7. Naming

New identifiers this design introduces, checked against `@openreachtech/eslint-config`'s
`id-denylist` and against `.hora/glossary.md`.

| Identifier | Kind | Note |
|---|---|---|
| `MonthlyExpensesPageContext` | class | already exists (checkpoint 10) |
| `selectedYear`, `selectedMonth` | reactive fields | the glossary's `month` is a `year` + `month` **pair**; never one packed `'2026-09'` string, which would need parsing |
| `monthValueHashReactive` | reactive hash | holds the two above. The `~HashReactive` suffix `/sign-in` and `/expenses` already use |
| `buildCurrentMonth` | context static method | returns `{ year, month }` in `Asia/Tokyo` (§6). `build~` is the verb for a temporary object (glossary); never `getCurrentMonth` — `get~` is prohibited |
| `yearOptions`, `monthOptions` | context getters | plural of the element. Never `yearList` — `list` is on the denylist |
| `yearFieldTriggerParcel`, `monthFieldTriggerParcel` | context getters | §5.1's seam. The name says trigger because that is the element the id lands on |
| `yearControlBlockParcel`, `monthControlBlockParcel`, `yearFieldId`, `monthFieldId` | context getters | the shape `/expenses` established |
| `previousMonthButtonParcel`, `nextMonthButtonParcel`, `retryButtonParcel` | context getters | |
| `previousMonthButtonLabel`, `nextMonthButtonLabel`, `retryButtonLabel` | context getters | the durable accessible names of §5.7 |
| `onClickPreviousMonth`, `onClickNextMonth`, `onChangeYear`, `onChangeMonth`, `onClickRetry` | context methods | `on~` handlers, the form `/sign-in` established |
| `isMonthEmpty`, `isLoadingMonthlyExpenses`, `hasMonthlyExpensesFailed` | context methods / getters | `is~` and `has~` for booleans |
| `extractTotalAmountText`, `extractAmountText`, `extractSpentOnText`, `extractExpenseCategoryName` | context methods | `extract~` pulls a value out of a property (glossary); never `get~` |
| `buildChosenMonthHeading` | context method | "September 2026", for §4.3's `<h2>` |
| `monthlyExpenseColumns`, `monthlyExpenseRows`, `monthlyExpenseTableParcel` | context getters | |
| `monthEmptyStateParcel`, `monthlyExpensesErrorStateParcel` | context getters | |

Avoided: `MonthManager` (`manager` is denied), `monthData` / `summaryData` (`data` is denied),
`monthInfo` (`info` is denied), `yearList` / `monthList` (`list` is denied), `getMonthlyTotal` (the
glossary names this one specifically — `get~` says neither what nor from where), `total` alone (the
glossary: *"never `total` alone — it does not say of what"*), `prevMonth` (`prev` is an
abbreviation; §8 rule 16).

---

## 8. What the later checkpoints have to build

Stated so nothing here is mistaken for done.

**Checkpoint 13 — modules.** The error-code-to-sentence entries for `monthlyExpenses` in
`app/constants-error.js`: `203.Q004.001` (`InvalidYear`), `203.Q004.002` (`InvalidMonth`) and
`204.Q004.001` (`StaffMemberNotFound`) **[backend]**. The first two are unreachable through the
control this design chooses — which is part of why it was chosen — and are mapped anyway, because a
code with no sentence shows a member of staff a code. Plus the `Asia/Tokyo` constant of §6, and
whether it is shared with `/expenses` or declared here.

**Checkpoint 14 — API client.** A Launcher / Payload / Capsule trio for `monthlyExpenses`, under
`app/graphql/client/queries/monthlyExpenses/`, matching the six trios that already exist.

**Checkpoint 15 — UI.** This document's markup and the screen's `<style>`. The tokens `/sign-in`
and `/expenses` declared in `assets/css/variables.css` are reused; a colour this screen needs and
that file lacks is added there as a **named** custom property, never a literal (§8 rule 1). Also
the reciprocal link **on `/expenses`** that checkpoint 11 decided on — planned growth of a screen
`#expense-entry` already shipped, not a retake.

**Checkpoint 16 — data.** The query on opening and on every month change, the four states, the
stale-response guard of §4.2, the clearing of rows and total on a month change (§4.4), and §6's
`Asia/Tokyo` opening month.

**Not built at any of them:** pagination (§2 row 15), a sort (§8 rule 23), a row action (§4.4), a
`status` column (§4.4), a route or query parameter carrying the month (§4.2), a disabled future
month (§4.2), an export (spec §4 — 1.2.0), and an icon dependency (§5.5 reports it; it is not this
checkpoint's to install).
