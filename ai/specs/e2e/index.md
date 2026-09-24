# End-to-end scenario specification

The durable list of what must be true of this product, flow by flow. **Maintained**, not dated:
amended when the product changes, read by every later acceptance run. **Results never go in here** —
which scenario passed on which day belongs to the dated report under `docs/reports/`.

## Flows

| Flow | Prefix | File | Scenarios |
|---|---|---|---|
| Monthly summary | `MON` | [`monthly-summary.md`](./monthly-summary.md) | 14 (9 capability, 3 provocation, 2 role) |
| Expense entry | `EXP` | **not written** | — |
| Sign in | `SIG` | **not written** | — |

## The two flows with no file, said rather than omitted

**`EXP` and `SIG` have never been specified, and this directory did not exist until 2026-09-24.**

`#expense-entry`'s acceptance recorded that its scenario list — 25 scenarios, flow `EXP`, coverage
complete against all five operations — was **derived in the run rather than read from a maintained
document**, and nothing was written down afterwards. So that derivation is gone, and the next run
will derive it again.

**The prefixes `EXP` and `SIG` are reserved here so that, when those flows are written, they take
these namespaces rather than new ones.** A prefix is a namespace, not a label.

**This was created at `#monthly-summary`'s checkpoint 18**, whose scope is one feature, so only that
feature's flow is written. Writing the other two is a version-sweep-sized job and is not this gate's
to do — but a gate that left the directory absent entirely would have left the next run deriving all
four from scratch, which is the state that lost `EXP`'s 25 scenarios.

## Identifier bands

| Band | Source | Reading a gap |
|---|---|---|
| `01`–`49` | the capability inventory | — |
| `51`–`79` | the provocation catalogue | a flow with nothing here has never been specified against failure |
| `81`–`99` | the role list | a flow with nothing here has no permission boundary written down |

Allocated in order, **never reused and never renumbered**. A gap means a retirement, and a gap is
information.
