# Monthly summary (`MON`)

A member of staff reads one month of their own expenses with the total taken over them, so they can
file a claim or check a card statement. Entered from the **Monthly expenses** link in the header of
`/expenses`, or directly at `/monthly-expenses`.

Derived from the API surface: this flow reaches **one** operation, `monthlyExpenses`, which spec
§12.1 declares and which takes `MonthlyExpensesInput(year, month)` and answers
`MonthlyExpensesResult(expenses, totalAmount)`. It takes **no pagination**.

---

## MON-01 — A member of staff reads the current month's entries and their total

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — signed in as `10110001` (`haruka.arai@expense-note.example`). The seeded
  expenses of June 2026 exist: `2026-06-01` for ¥3,450 and `2026-06-30` for ¥1.
- **Steps**
  1. Open `/monthly-expenses` from the header link on `/expenses`.
- **Success condition** — the screen shows the current month's entries with a total equal to their
  sum, to the yen.
- **Notes** — §12 criterion 1. The month it opens on is the current one, read in `Asia/Tokyo` (§6),
  **not in the browser's zone** — nothing downstream corrects a wrong month.

## MON-02 — A member of staff checking a card statement moves to the previous month

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — as MON-01, on `/monthly-expenses`.
- **Steps**
  1. Press **Previous**.
- **Success condition** — the previous month's entries and total replace the ones shown, **without
  leaving the screen**.
- **Then also observable** — the address bar does not change; no page reload occurs.
- **Notes** — §12.2's second use case; §8 rule 27.

## MON-03 — A member of staff filing a claim picks a month directly

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — as MON-01.
- **Steps**
  1. Choose a year from the year select.
  2. Choose a month from the month select.
- **Success condition** — the chosen month's entries and total are shown.

## MON-04 — A month in which nothing was recorded says so

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — signed in as `10110001`. May 2026 holds none of that member of staff's rows.
- **Steps**
  1. Move to May 2026.
- **Success condition** — the screen says the month is empty **and shows a total of ¥0** — not an
  empty table, and not a hidden total.
- **Notes** — §12 criterion 3; §8 rule 30. ¥0 must be distinguishable from "not yet read", which
  shows `—`.

## MON-05 — Two entries on one date appear most recently recorded first

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — signed in as a member of staff holding two entries that share a `spentOn`
  within one month.
- **Steps**
  1. Open that month.
- **Success condition** — the two entries appear newest `spentOn` first and, within the shared date,
  the more recently recorded first.
- **Notes** — §6's `entry order`, one clause for both screens (Q61). The screen applies no sort of
  its own; §8 rule 29.

## MON-06 — An expense recorded since the month was last read appears on the next read

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`, `recordExpense`
- **Preconditions** — signed in as `10110001`, viewing a month.
- **Steps**
  1. Record an expense dated within that month, on `/expenses`.
  2. Return to `/monthly-expenses` and read the same month.
- **Success condition** — the new entry is listed and the total has grown by its amount.
- **Notes** — §12 criterion 4. No total is stored (§7), so the month is summed per request.

## MON-07 — The first and last day of a month are in it; the days either side are not

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — signed in as `10110001`. June 2026 holds `2026-06-01` and `2026-06-30`; July
  2026 holds `2026-07-03`.
- **Steps**
  1. Open June 2026.
- **Success condition** — both June entries are shown and no entry dated outside June is.
- **Notes** — §12 criterion 2.

## MON-08 — A corrected entry shows its new values, and the total follows

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`, `correctExpense`
- **Preconditions** — signed in as `10110001`, an entry of theirs exists in a known month.
- **Steps**
  1. Correct that entry's amount on `/expenses`.
  2. Read its month.
- **Success condition** — the entry shows the corrected amount and the total reflects it.
- **Notes** — §12 criterion 4. A correction moving the date **out** of the month removes it from both
  the list and the total together.

## MON-09 — A removed entry leaves the month and the total together

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`, `removeExpense`
- **Preconditions** — signed in as `10110001`, an entry of theirs exists in a known month.
- **Steps**
  1. Remove it on `/expenses`.
  2. Read its month.
- **Success condition** — the entry is gone and the total has fallen by its amount.

---

## MON-51 — A failed read says so, and offers a way to try again

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — signed in; the backend is reachable, then made to fail the read.
- **Steps**
  1. Open a month while the read cannot succeed.
- **Success condition** — the screen states that the month could not be loaded and offers a retry.
- **Then also observable** — the total shows `—`, **never ¥0**: a zero after a failed read would
  state a total for a month nobody read.

## MON-52 — A lapsed session tells the member of staff to sign in again

- **Actor** — member of staff (signed in, then signed out elsewhere)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — a session that has been ended.
- **Steps**
  1. Read a month.
- **Success condition** — the screen shows *"Your session is no longer valid. Sign in again."*
- **Then also observable** — the dotted error code `204.Q004.001` never appears on screen.

## MON-53 — Stepping quickly through months lands on the month last chosen

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — signed in, on `/monthly-expenses`.
- **Steps**
  1. Press **Previous** three times in quick succession.
- **Success condition** — the screen shows the month three steps back, not an earlier answer that
  arrived late.
- **Notes** — the stale-response guard. **Q66 is open against this scenario**: while two reads are in
  flight the screen may briefly say a month is empty before its answer lands.

---

## MON-81 — Another member of staff's expense in the same month changes nothing

- **Actor** — member of staff (signed in)
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — `10110001` and `10110002` both hold entries in June 2026 (`2026-06-18` for
  ¥1,860 belongs to `10110002`).
- **Steps**
  1. Sign in as `10110001` and read June 2026.
- **Success condition** — only that member of staff's own entries are listed, and the total excludes
  the other's.
- **Notes** — §12 criterion 5. The total is ¥3,451; it would be ¥5,311 were the scoping to leak, so
  the figure itself is the evidence.

## MON-82 — Without a session the month is refused before anything is read

- **Actor** — no session
- **Status** — active
- **Covers** — `monthlyExpenses`
- **Preconditions** — no session.
- **Steps**
  1. Go to `/monthly-expenses`.
- **Success condition** — the member of staff is sent to sign in and no month is shown.
- **Notes** — §12 criterion 6. The refusal is the engine's filter, before the resolver is entered —
  the code raised is `102.X000.001`, the engine's own, not this resolver's.
