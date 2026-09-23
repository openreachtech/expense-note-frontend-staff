# Component design — `#expense-entry`'s screen (`/expenses`)

> Written at `#expense-entry`'s checkpoint 12 ("Component design"), which owns this file.
>
> **Why it sits here rather than in a `docs/` folder or a comment.** `hof-uiux-forge` — the
> generator checkpoint 15 runs — and `hof-uiux-audit` — the reviewer checkpoint 18 runs — both
> resolve their project context by filename: `ai/contexts/uiux-context.md` **plus any
> `uiux-context-<word>.md`**, read together as one binding document (`hof-uiux-forge/SKILL.md`
> lines 60-62, `hof-uiux-audit/SKILL.md` lines 46-47). So a design put here is not merely
> discoverable — it is loaded by the two skills that build and judge this screen, without anybody
> having to remember it exists. A `docs/` page or a block comment would depend on somebody looking.
>
> It is a **sibling** of `uiux-context.md` rather than an edit to it, because checkpoint 11 owns
> that file and section 8 rule 15 — extend, do not modify — reads the same way for a document as
> for a component.
>
> `pages/expenses/index.vue` and `pages/expenses/ExpensesPageContext.js` carry a pointer to this
> file, because checkpoint 16 works from the context class and is not run by a skill that reads
> `ai/contexts/`.
>
> Every claim marked **[source]** was read out of the installed package — `@openreachtech/furo-vue`
> 1.3.2 under `node_modules/` — rather than taken from a skill, and several of them contradict the
> skill. Claims marked **[contract]** were read out of `.hora/contracts/1.0.0/staff-graphql.graphql`.

---

## 1. The exit condition, answered first

**Every component this screen needs already exists. Nothing new is built at this checkpoint.**

Eight of the library's components serve it, and the one component this application already owns —
`components/units/AppRefusalMessage.vue` — serves the two places a refusal is read. There is no
part of the screen left over, so there is nothing to justify as new.

That is the result rather than a shortcut: section 11.2's screen is a list, a form, a confirmation
and a sign-out control, and a component library with 50 entries covers all four.

---

## 2. All twenty component skills, matched

The kit equips twenty component skills. Each is answered, because "no, because …" is the part of
this checkpoint that stops a library component being rebuilt by hand.

| # | Skill | Routes to | Used | Why / why not |
|---|---|---|---|---|
| 1 | `hof-cp-button` | `FuroButton` | **yes** | Six call sites: submit, cancel-a-correction, sign out, per-row Correct, per-row Remove, retry-a-failed-read. Section 11.2 puts `signOut` on this screen. |
| 2 | `hof-cp-checkbox-toggle` | `FuroCheckbox`, `FuroToggle` | no | No boolean is entered or displayed anywhere on this screen — `RecordExpenseInput` is `spentOn` / `amount` / `expenseCategoryId` / `memo` **[contract]**, none of them boolean. Row selection is the other use, and there is no bulk operation to select for: `removeExpense` takes one `expenseId`. |
| 3 | `hof-cp-collapsible` | `FuroCollapsible`, `FuroAccordion` | no | The form is one of the screen's two jobs and is also the correction form (rules 19/20), so it must already be open whenever a correction starts. Collapsing it would put an interaction in front of the screen's main action and add open/closed state no acceptance criterion asks for. |
| 4 | `hof-cp-control-block` | `FuroControlBlock` | **yes** | All four form fields need a label, a required marker and an error slot. Already the house pattern on `/sign-in`. |
| 5 | `hof-cp-date-time` | `FuroDatePicker` | **yes** | `spentOn` is a date with no time of day — `String!`, ISO `YYYY-MM-DD` **[contract]** — which is `FuroDatePicker`'s wire format exactly. Not `FuroDateTimePicker`: there is no time part in the column or the contract, and the skill's own rule is to pick by what the data is. |
| 6 | `hof-cp-dialog` | `FuroAlertDialog` | **yes** | Rule 22: a removal is confirmed before it is sent, and section 11.2's call table specifies it. `FuroAlertDialog` is the one overlay that encodes "block until decided" — no close button, no outside-click dismissal, built-in confirm/cancel, `tone: 'destructive'`. Not `FuroDialog` (freeform, dismissible) and not `FuroDrawer` (an edge panel, for content too long for a modal). |
| 7 | `hof-cp-dropdown-menu` | `FuroDropdownMenu` | no | A row has exactly two actions. Hiding two buttons behind a kebab costs a click and a keyboard stop and buys nothing at two. Sign-out is likewise one action, not a menu — and it cannot become an account menu, because section 3 and rule 17 forbid linking to account screens that do not exist. |
| 8 | `hof-cp-editable-field` | `FuroEditableField` | **no — and this is the important no** | Inline click-to-edit a cell is the obvious fit for "corrects the amount", and it is **wrong here**. `FuroEditableField` commits **one** value. `correctExpense` is a full replace: `spentOn`, `amount` and `expenseCategoryId` are non-null and `memo` is nullable **[contract]**, so a commit carrying only the amount **clears the memo**. That is rule 19, and checkpoint 2 recorded it as the thing a screen gets wrong once and a member of staff discovers by losing a memo. A correction goes through the same four-field form as a recording, always. |
| 9 | `hof-cp-editor` | `FuroEditor` | no | The memo is `varchar(191)` plain text (section 9.3). A rich-text editor holds HTML, which would not fit the column and would open a render-HTML path on a screen whose other untrusted value (rule 25) exists precisely because nothing here should be rendered as markup. |
| 10 | `hof-cp-empty-state` | `FuroEmptyState`, `FuroErrorState` | **yes** | Both, slotted into `FuroTable`'s own `#empty` and `#error` regions. See 4.4 for why the table's bare `emptyText` / `errorMessage` defaults are not enough. |
| 11 | `hof-cp-popover` | `FuroPopover`, `FuroTooltip` | no | Nothing on the screen is a hover hint, and nothing is a click-anchored panel. A truncated memo behind a tooltip was considered and rejected: a tooltip is not a keyboard- or touch-equivalent way to read content that is the entry's own text, and 191 characters wrap in a cell. |
| 12 | `hof-cp-select` | `FuroSelect` | **yes** | `expenseCategoryId` is picked from four seeded rows (section 9.2), ordered by `displayOrder` **[contract]**. A short, known, fully-loaded list is `FuroSelect`'s case; `FuroAutocompleteField` is for long, searched or asynchronously fetched lists, and four is none of those. |
| 13 | `hof-cp-splitter` | `FuroSplitter`, `FuroScrollArea`, `FuroSeparator` | no | Nothing is resizable, nothing needs a custom scrollbar, and the form/list boundary is already carried by the form's own bordered panel — a `FuroSeparator` beside a border would be drawing the same line twice. |
| 14 | `hof-cp-stepper` | `FuroStepper` | no | Recording an expense is one step. There is no sequence to indicate. |
| 15 | `hof-cp-table` | `FuroTable`, `FuroPagination` | **yes** | The entries are tabular — four fields and two actions per row — and `ExpensesResult` carries `pagination` **[contract]**, which `FuroPagination` consumes field for field. See 4.4. |
| 16 | `hof-cp-tabs` | `FuroTabs` | no | Section 11.2 describes one screen with everything on it. Tabs would hide the list behind the form or the form behind the list, which is the split checkpoint 10 already refused at the route level for the same reason. |
| 17 | `hof-cp-text-field` | `FuroNumberField`, `FuroTextField` | **yes** | `amount` is `Int!` yen **[contract]** → `FuroNumberField`. `memo` is the optional single-line note → `FuroTextField`. |
| 18 | `hof-cp-textarea` | `FuroTextarea` | no **[chosen]** | The memo is `varchar(191)`, has no newline semantics anywhere in the data model, and is rendered in one table cell. A textarea would invite newlines that nothing stores meaningfully or displays. **This one is chosen rather than derived** — if somebody wants a multi-line memo, this is the line to change, and the change is `FuroTextField` → `FuroTextarea` with nothing else moving. |
| 19 | `hof-cp-toast` | `FuroToast`, `FuroToaster` | no | Section 11.2 re-reads `expenses` after every write, so the changed list **is** the confirmation, and it persists where a toast would not. On the failure side, rule 21's one message has to stay readable rather than time out, so it belongs in the persistent refusal region. Adding a toast would also mean mounting `FuroToaster` in `layouts/default.vue` — a shared file, for feedback the re-read already gives. |
| 20 | `hof-cp-toggle-group` | `FuroToggleGroup`, `FuroToolBar` | no | A segmented control is for a mode or a filter; `expenseCategoryId` is a value the form submits, which is a field. `FuroToolBar` groups toolbar controls, and this screen's controls sit in a form and in table rows, not in a toolbar. |

**Eight yes, twelve no.**

---

## 3. What this application already owns

`components/units/AppRefusalMessage.vue` is the only component this application has built.

**It is reused, unchanged, in three places on this screen** — nothing is modified, nothing is
wrapped, no variant is created.

| Instance | Holds |
|---|---|
| inside the form, below the fields | a refusal of `recordExpense` or `correctExpense` |
| inside the form, under the category field | a failed read of `expenseCategories` (4.8, added after checkpoint 18's review) |
| above the entries table | a refusal of `removeExpense`, and a refusal raised from a row |

It fits both without alteration. It is a single always-rendered `role="alert"` region taking one
`message` string, which is exactly the shape rule 21 demands: **one message, no branch**, so a
component that cannot distinguish three causes is the right component for a rule that forbids
distinguishing them. It reserves one line of space whether or not it holds text, so a refusal
appearing does not move the table under it.

**One note for checkpoint 18, not a defect.** Its docblock says "a form-level refusal message" and
explains itself through section 10's identical-refusal requirement. That records where it came
from; it is not a limit on where it may be used, and the second instance above the table is the
same kind of message about a different region. The docblock was deliberately **not** edited — it
belongs to `#sign-in`, and rewriting another feature's file to widen a sentence is the modification
rule 15 exists to prevent.

---

## 4. The screen, region by region

One route, `/expenses`, aliased to `/` (checkpoint 10). One `<main>`.

### 4.1 Header — heading and sign-out

```
<header>
  <h1> Expenses              <- context.pageTitle, already built
  <FuroButton>  Sign out     <- variant: 'outline' or 'ghost'
```

- Section 11.2's call table puts `signOut` on this screen, and checkpoint 11's assumption 1 records
  that section 10's second use case ("a member of staff who has finished on a shared machine signs
  out") is only closable once this control exists. **It is this checkpoint's job to place it and
  checkpoint 15's to build it.**
- `SignOutMutationGraphqlLauncher` already exists (built for `#sign-in`'s checkpoint 14) — see 7.
- **No shared app header component is extracted.** `#monthly-summary`'s screen does not exist
  (section 3's route table), and a header built now for a screen that does not exist is a guess.
  When that screen lands and needs the same header, extracting one is an addition; extracting it
  now is design for a feature nobody has built.
- A sign-out does not get a confirmation. Rule 22 specifies a confirmation for a **removal**, which
  is permanent; signing out costs a sign-in.

### 4.2 The entry form — one form, two modes

```
<form novalidate @submit.prevent="context.onSubmitForm()">
  FuroControlBlock(label 'Date paid')  > FuroDatePicker     <- spentOn
  FuroControlBlock(label 'Amount')     > FuroNumberField    <- amount
  FuroControlBlock(label 'Category')   > FuroSelect         <- expenseCategoryId
  AppRefusalMessage + FuroButton                            <- 4.8, only when the categories failed
  FuroControlBlock(label 'Memo')       > FuroTextField      <- memo, NOT required
  AppRefusalMessage                                         <- one message, no branch
  FuroButton (submit)  +  FuroButton (cancel, correction mode only)
```

**One form serves both `recordExpense` and `correctExpense`.** The mode is a property of the
context (`correctingExpenseId` is `null` or an id), not a second form and not a second component.
That is what rule 19 needs: the same four fields are collected and **all four are sent** either
way, so there is no code path that can submit a partial correction.

| Field | Component | Bound by |
|---|---|---|
| `spentOn` | `FuroDatePicker`, `parcel.maxValue` = today | "an expense dated after today is refused" (section 11 criterion). Read 5.1 — `maxValue` is a guard, not a guarantee. |
| `amount` | `FuroNumberField`, minimum 1, integer step | "no amount, an amount of zero, or a negative amount is refused". Yen has no minor unit **[contract]**, so no decimals. |
| `expenseCategoryId` | `FuroSelect`, options from `expenseCategories` | Section 11.2: `expenseCategories` is called on opening, to fill this field. Options are `{ label: name, value: id }` **[source]**, in `displayOrder`. |
| `memo` | `FuroTextField`, **no required marker**, maximum length 191 | Rule 24: genuinely optional. `FuroControlBlock`'s `required` stays `false` on this one field and `true` on the other three. |

**Entering correction mode** sets the four fields from the row already on screen and shows the
cancel button. **No request is made** — rule 20, and the row carries every value needed:
`Expense { spentOn, amount, memo, expenseCategory { id } }` **[contract]**. This was checked against
the contract rather than assumed; had `Expense` carried only a category name, rule 20 would have
been unsatisfiable and this checkpoint would have had to say so.

**Leaving correction mode** — cancel, or a successful submit — clears the four fields and the id.

### 4.3 The refusal region

Two instances of `AppRefusalMessage`, per section 3 above.

**Rule 21 is a design constraint on this region and not only on the copy.** The message text comes
from `app/constants-error.js`'s code-to-sentence hash, one sentence per code; the backend answers
**one** code for somebody else's entry, an already-removed entry and an id that never existed, so
the region has nothing to branch on even if somebody wanted it to. **Do not add a `v-if` that
chooses wording**, and do not add "this entry was already deleted" — that sentence is the
disclosure the rule exists to prevent.

### 4.4 The entries table

```
FuroTable
  columns      Date paid | Amount | Category | Memo      <- sortable: false on every one
  #cell        <time datetime>, yen, category name, memo-or-empty
  #row-actions FuroButton 'Correct'  +  FuroButton 'Remove'
  #empty       FuroEmptyState
  #error       FuroErrorState  (+ FuroButton 'Retry' in its #action)
  #loading     library default (spinner)
  #pagination  FuroPagination
```

- **`sortable` is `false` on every column, deliberately.** No operation in 1.0.0 lets a caller
  choose a sort — `Sort` / `SortInput` are declared for the convention's pagination shape and left
  unused **[contract]** — so a clickable header would either do nothing or echo into
  `pagination.sort`, which rule 25 says reaches no query. A control that looks like it sorts and
  does not is worse than no control.
- **The fixed order is stated instead of implied.** A short line under the heading —
  *"Most recent first, by the date the money was paid."* — and the column label **"Date paid"**
  rather than "Date". Rule 23 says an expense paid last week and recorded today appears below this
  week's, and that this cost was accepted knowingly; a member of staff who back-dates an entry and
  hunts for it at the top needs the order named on the screen, not in a commit message. `FuroTable`
  has no caption slot **[source: its ten slots are `header-cell`, `sort-icon`, `error`, `loading`,
  `empty`, `cell`, `row-actions`, `placeholder`, `pagination`, `footer`]**, so this is a `<p>`
  above the table.
- **`memo` renders empty, never "null"** (rule 24). The `#cell` slot reads a context method that
  answers an empty string for a null memo. Left to the library's default the cell would print the
  raw value **[source: the `cell` slot falls back to `extractCellValue({ column })`]**.
- **`spentOn` renders as `<time datetime="YYYY-MM-DD">`** — section 8 rule 11, and the contract's
  value is already ISO **[contract]**, so the attribute is the value unchanged.
- **`status` is not a column.** Every row this version writes is `recorded` **[contract]**; a column
  with one value in it is noise until approval exists.
- **Empty and failed get real states rather than the library's bare text.** `FuroTable`'s defaults
  render `emptyText` / `errorMessage` as plain text inside a `<td colspan>` **[source]** — no
  heading, no action, and **no live region**. `FuroErrorState`'s root announces via `role="alert"`,
  which is what WCAG 2.2 AA 4.1.3 (Status Messages) needs when a re-read fails after a write the
  member of staff just made; section 6 of the context file sets AA as the standard checkpoint 18
  audits against. `FuroEmptyState` is used beside it so the two states read as one interface. The
  empty state carries a title and a description and **no `#action` button** — the form that would
  fill it is already visible on the same screen, so a button that scrolls to a visible form is
  noise.

### 4.5 Pagination

`FuroPagination`, hosted in `FuroTable`'s own `#pagination` slot.

`ExpensesResult.pagination` is `{ limit, offset, sort, totalRecords }` **[contract]** and
`FuroPagination`'s parcel is `{ offset, limit, totalRecords }` with a `page:change` payload of
`{ page, offset, limit }` — so the answer maps onto the control and the control's event maps back
onto `PaginationInput` with no translation layer. Pass `offset` (zero-based), **not** `page`.

**`sort` is neither sent nor rendered.** Rule 25: it is echoed back from whatever the caller sent,
is not validated server-side, and reaches no query. It is not displayed, not put in an attribute,
and not used to build a label.

**A re-read after a write decides its offset from the total that comes back**, not from the offset
the screen was holding — added after checkpoint 18's review. Remove the only entry of a second page
of twenty-one and the answer for offset twenty is zero rows against a total of twenty, which
`FuroTable` cannot tell apart from a member of staff with nothing recorded: it renders `#empty`,
and the paginator that would lead back is hidden at the same moment, because a single page is not
worth navigating. Twenty entries, unreachable without a reload. The re-read therefore reads the
answer it got and asks again for the last page the new total has. It is not a rule about removal —
a correction cannot change the count and never reaches it — but the re-read is one method serving
every write.

**One page-size constant, and 100 is not copied into this repository.** Rule 26 caps a request at
100 rows. The page size here is **20** (`FuroPagination`'s own default, and a sane desk-browser
page) — comfortably under the cap, declared **once** as a constant at checkpoint 13 and read from
there by both the initial query and the control. The backend's `PAGINATION.MAXIMUM_LIMIT` of 100 is
**not** restated on this side: a second copy of a number is the thing rule 26 warns about, and a
frontend that never asks for more than its own 20 cannot reach the cap.

### 4.6 The removal confirmation

`FuroAlertDialog`, one instance, controlled by the context.

| Parcel field | Value | Why |
|---|---|---|
| `open` | `context.isRemovalConfirmationOpen` | controlled — the row's Remove button opens it and records which id |
| `title` | a plain question | section 7's tone: neutral, no exclamation |
| `description` | that the removal is permanent | rule 22: section 7 removes an entry outright rather than archiving, so there is nothing to undo |
| `tone` | `'destructive'` | the confirm button takes the destructive variant |
| `busy` | `context.isRemovingExpense` | blocks dismissal and disables both buttons while the mutation is in flight |
| `confirmText` / `cancelText` | explicit | the defaults are `Confirm` / `Cancel`; name the action instead |

**One removal at a time, and it is visible while it runs.** Two things were added after
checkpoint 18's review, and both follow from the dialog closing before the request goes out. The
row just removed is still in the table until the re-read replaces it, so its Remove button is still
there to be pressed — a second press answered not-found for an entry whose removal had succeeded.
Every row's Remove is therefore **disabled** while a removal is in flight, and `onClickRemove()` /
`onConfirmRemoval()` check the same flag, because a parcel describes a control and enforces
nothing. And because `busy` above can never be observed — the dialog is gone before the flag is
raised — the **table takes its waiting state** from the moment the removal is sent until the
re-read behind it lands. The in-flight indication is put where the change is, not back into a
dialog whose confirm button has no accessible name in that state (5.5).

`@confirm` sends `removeExpense`; `@cancel` clears the pending id. **Both are handled** — the
component has no close button and no outside-click dismissal by design, so those two events are its
entire contract. The mutation itself lives in the context, never in the template (section 8
rule 12).

**The dialog says nothing about the entry's existence.** A refusal that comes back lands in the
list-level `AppRefusalMessage` after the dialog closes, as one message (rule 21) — the dialog does
not grow a second state to report it.

### 4.7 The four states, and who owns each

The context exposes booleans; the template branches on them (section 8 rule 12).

| State | Rendered by |
|---|---|
| **waiting** — first read, or a re-read after a write | `FuroTable`'s `parcel.loading` (spinner). Submit and confirm buttons take their own loading state too — a `FuroButton` in that state blocks its own click emit **[source]** |
| **empty** — the read succeeded, there are no entries | `FuroEmptyState` in `#empty` |
| **failed** — the read failed | `FuroErrorState` in `#error`, with a retry `FuroButton` |
| **refused** — a write was refused | `AppRefusalMessage`, one sentence from the error-code hash |
| **forbidden** — no session | not this screen's to render. `middleware/000.gateway.global.js` is global and already redirects to `/sign-in?redirect=<path>`; the page sets no `skipFilter`, so it is guarded by existing (checkpoint 10). Do not build a second guard and do not render a "please sign in" panel |

### 4.8 The fifth condition — the form's own source failing

> Added after checkpoint 18's acceptance review found it missing. The four states above are the
> **entries'** four states, and this one is not among them: it belongs to the form.

`expenseCategories` can fail. When it does, the entries are fine, the table is fine, and the one
thing that cannot be done is the thing the screen exists for — the select has nothing in it to
choose. Reported through the form's single refusal slot, it was erased by the first press of
"Record the expense", because a submit clears that slot before it sends; what replaced it was
*"Choose a category."*, an instruction about a select that was empty for exactly the reason the
erased sentence had given. The screen was then unusable until a reload, and said so nowhere.

| Part | Choice | Why |
|---|---|---|
| where the message is held | `errorMessageHashReactive.readingExpenseCategories`, a key of its own | the form clears `submittingExpense` at the top of every submit. A separate key is what makes "a submit does not erase it" structural rather than remembered |
| what renders it | a **third** instance of `AppRefusalMessage`, in the form, directly under the category field | still one always-rendered `role="alert"` taking one `message` string. Nothing is modified and no variant is created (rule 15) |
| always rendered? | yes, as the other two are | the category field carries its id in `aria-describedby`, so the id must exist before there is anything to read |
| `aria-describedby` on the field | **two** ids — the form's refusal and this one | the other three fields keep one. This is the only field-level explanation for a select with nothing in it |
| the way out | a `FuroButton` beside the message, shown only while the condition holds, re-reading **only** `expenseCategories` | the table's "Try again" reads the entries. Offering it for a form-side failure answers a question nobody asked |
| its label | *"Load the categories again"*, not "Try again" | both retries can be on screen at once, and two buttons reading alike would not say which failure each one answers |
| does a submit still send? | yes | the backend stays authoritative, and blocking the submit would be a second opinion about a refusal it already gives. The message simply survives the attempt |

---

## 5. Facts read from the installed library that the skills do not say

Each was verified in `node_modules/`, and each would otherwise have produced code that compiles and
is wrong.

### 5.1 `FuroDatePicker`'s `maxValue` flags a late date — it does not block one

`hof-cp-date-time` says of `maxValue`: *"Later dates are non-interactive."* That is true of the
**calendar grid** and false of the **typed segments**.

`FuroDatePickerContext.extractRootAttributes()` forwards `maxValue` to Reka's `DatePickerRoot`
**[source]**, and Reka's `DateFieldRoot` uses it only to compute `isInvalid`:

```
if (props.maxValue && isBefore(props.maxValue, modelValue.value)) return true;
```

— which sets a `data-invalid` attribute **[source: `reka-ui/dist/DateField/DateFieldRoot.js`
lines 146-150 and 247]**. `modelValue` still updates, and `change-value` / `update:value` still
fire with the out-of-range date.

**So a member of staff can type tomorrow's date and the form will hold it.** `maxValue` is worth
setting — it narrows the calendar and marks the field — but the criterion *"an expense dated after
today is refused"* is satisfied by the backend, and the context must check before sending rather
than assuming the control prevented it. Checkpoint 15 builds the visual guard; checkpoint 16 builds
the check.

### 5.2 `FuroTable` has a `row-actions` slot the skill does not list

`hof-cp-table`'s slot table names seven slots. The component declares ten, and three of the missing
ones matter here **[source: `FuroTable.vue`]**:

- **`row-actions`** — and it is not just an extra slot. `hasRowActionsColumn()` is true *when the
  consumer provides the slot*, and the table then adds a trailing header and cell of its own, with
  `@click.stop` **already applied to the cell** **[source]**. The skill's own example instead puts
  action buttons in the `cell` slot behind `v-if="column.field === 'actions'"` with a hand-written
  `@click.stop` and a fake column — **do not follow the example.** A fake `actions` column would
  also have to be declared in `parcel.columns`, where it would be a column with no field.
- `sort-icon` and `footer` — unused here, recorded so the next reader does not re-derive the list.

### 5.3 Parcels are context getters, not object literals in the template

Every component skill's usage example writes `:parcel="{ … }"` inline. **Section 8 rule 12 forbids
JavaScript logic in a template**, and `/sign-in` already establishes the house form —
`:parcel="context.emailControlBlockParcel"`. Where a skill example and section 8 disagree,
section 8 wins (`hof-uiux-forge` says so itself: the project's section 8 rules "win over every line
of this skill").

Every parcel on this screen is a getter on `ExpensesPageContext`.

### 5.4 `FuroControlBlock` has no `error` field and no hint

`hof-cp-date-time`'s wrapper example passes `:parcel="{ label: …, error: … }"`. There is no `error`
field. The parcel is `label` / `controlId` / `errorMessages` / `required` / `orientation`, and
there is no hint prop or hint slot either — established at `#sign-in`'s checkpoint 12 from the same
source, and unchanged in 1.3.2.

### 5.5 Two accessibility gaps `#sign-in` already found still apply

Both were recorded at `#sign-in`'s checkpoint 12 as things the library hands us, and both recur on
this screen. They are checkpoint 15's to compensate for, not checkpoint 18's to discover:

- **A loading `FuroButton` has no accessible name** — its label is `visibility: hidden` and its
  spinner is `aria-hidden="true"`. The submit button and the dialog's confirm button both pass
  through that state, so both need a name that survives it (`aria-label`, as `/sign-in` does).
- **`aria-describedby` is not wired** from an error region to the control it describes. Each of the
  four fields carries it to the form's refusal region, as `/sign-in`'s two fields already do.

---

## 6. Naming

New identifiers this design introduces, checked against `@openreachtech/eslint-config`'s
`id-denylist` and against `.hora/glossary.md`'s existing entries.

| Identifier | Kind | Note |
|---|---|---|
| `ExpensesPageContext` | class | already exists (checkpoint 10) |
| `correctingExpenseId` | context property | `null` when the form is recording. Not `editingId` — "edit" is not the spec's word, and a bare `id` does not say of what |
| `removingExpenseId` | context property | the id the confirmation is holding |
| `expenseColumns`, `expenseRows` | context getters | plural of the element, never `expenseList` — `list` is on the denylist |
| `expenseCategoryOptions` | context getter | the `FuroSelect` options |
| `formValueHashReactive` | reactive hash | the name `/sign-in` already uses |
| `isRecordingExpense`, `isRemovingExpense`, `isLoadingExpenses` | context getters | boolean getters read `is~` |
| `extractMemoText`, `extractAmountText`, `extractSpentOnText` | context methods | `extract~` is the verb for pulling a value out of a property (glossary). Never `get~` |
| `onSubmitForm`, `onClickCorrect`, `onClickRemove`, `onConfirmRemoval`, `onCancelRemoval`, `onChangePage`, `onClickSignOut`, `onClickRetry` | context methods | `on~` handlers, the form `/sign-in` established |
| `expenseCategoriesRefusalRegionId`, `expenseCategoriesRefusalMessage`, `expenseCategoryFieldDescriptionIds`, `retryExpenseCategoriesButtonParcel`, `retryExpenseCategoriesButtonLabel`, `hasExpenseCategoriesFailed`, `onClickRetryExpenseCategories`, `surfaceExpenseCategoriesFailure`, `clearExpenseCategoriesRefusal` | 4.8's state | added after checkpoint 18's review. `has~` for the boolean, `on~` for the handler, and the region words the other two refusal regions already use |
| `isChangingExpenses`, `isExpensesOffsetBeyondTotal`, `generateLastExpensesPageOffset` | context methods | added after checkpoint 18's review. `generate~` builds a primitive (glossary); never `getLastOffset` |

Avoided: `ExpenseFormManager` (`manager` is denied), `expenseData` (`data` is denied),
`cateOptions` (`cate` is denied), `editExpense` (the spec's verb is **correct**, and the operation
is `correctExpense`).

---

## 7. What the later checkpoints have to build

Stated so nothing here is mistaken for done.

**Checkpoint 13 — modules.** The error-code-to-sentence entries for `expenses`,
`expenseCategories`, `recordExpense`, `correctExpense` and `removeExpense`, added to
`app/constants-error.js`. **Every not-found code across the three mutations maps to the same
sentence** (rule 21) — repeated per code, never collapsed into one entry, which is the file's own
stated convention. Plus the single page-size constant of 4.5.

**Checkpoint 14 — API client.** Launcher / Payload / Capsule trios for the five operations.
`signOut`'s already exists — `app/graphql/client/mutations/signOut/` — and is reused rather than
rebuilt.

**Checkpoint 15 — UI.** This document's markup and the screen's `<style>`. The tokens `/sign-in`
declared in `assets/css/variables.css` are reused; a colour this screen needs and that file lacks
is added there as a **named** custom property, never a literal (section 8 rule 1).

**Checkpoint 16 — data.** The context's queries, mutations, re-read-after-every-write, the
before-send validation of 5.1, and Q40's decision about `composables/useRedirect.js`.

**Not built at any of them:** a `/expenses/[id]` route (checkpoint 10 settled it), a read-one
operation (rule 20 — none is declared), a link to `#monthly-summary` (rule 17 — its screen does not
exist), and a shared app header (4.1).
