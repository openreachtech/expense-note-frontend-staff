# Acceptance review — `#monthly-summary` (spec 1.0.0 §12)

**2026-09-24 · scoped to one feature at its own gate · `hof-acceptance-review` 0.1.0**

## Audit capability

*Without this note there is no way to tell a check that passed from a check that never ran.*

| | |
|---|---|
| UI framework | Nuxt 3 + `@openreachtech/furo-vue` 1.3.2, `ssr: false`, auto-import **off** (`components.dirs: []`, `imports.autoImport: false`) |
| API style | schema-first GraphQL, pinned contract at `.hora/contracts/1.0.0/staff-graphql.graphql` |
| Test runner | jest, two projects (`node`, `jsdom`); backend jest with a per-worker SQLite copy |
| Browser driven | **no** |
| Local environment checked, not assumed | MariaDB **was down** (`docker info` → daemon not answering; container `Exited (255)`). Brought up and confirmed **answering** by query, not by the start command's exit code. `live` holds 14 expenses, 13 staff members |
| Mechanical checks that apply | 8 shipped scripts — 5 ran clean, 3 exited `2`; **one of those three is a false "not applicable"** (below) |
| Roles exercised live | **none** |

**This is a static sweep with Phase 4 recorded as not run. A static sweep is a legitimate deliverable; a static sweep presented as a full acceptance review is not**, and this report is not one.

## Gates

| Gate | Result |
|---|---|
| 0 Capability stated | **pass** |
| 1 Declaration present | **pass** — `ai/contexts/acceptance-context.md` did not exist and was created before continuing, per Phase 1. Phase 4 is also recorded as not run, which satisfies the clause independently |
| 2 Every operation classified | **pass** — 10 of 10 reachable, **0 excluded**, so the exclusion table is empty rather than unexplained |
| 3 Static sweep clean | **pass** — with one instrument finding, below |
| 4 Every screen mounted, flows completed, console silent | **not run** |

## Why Phase 4 did not run — two separate facts

**It is out of scope by default at a feature gate.** Nobody requested it and this feature's acceptance was not deferred by a spec listing. So it was **not attempted and did not fail**.

**And it could not have run here if requested.** The backend does not start on this machine, for two measured reasons: **Q24** (renchan's loader hands a raw `D:\…` path to `import()`; does not reproduce on WSL) and this tree's own `node_modules` holding Windows binaries, which kills it under WSL at `sqlite3 … invalid ELF header`.

**Collapsing these would make a platform limitation look like a process choice, or the reverse.** Only the second is about this machine, and neither is a property of `#monthly-summary`.

## Unit suites — every repository, in full

| Repository | Command | Result |
|---|---|---|
| backend | `npm_config_script_shell=bash npm run lint` | clean |
| backend | `npm_config_script_shell=bash npm test -- --seeded --maxWorkers=3 tests/__tests__/` | **69 suites / 1693 tests** |
| backend | `npm_config_script_shell=bash npm test -- --seeded --maxWorkers=3 tests/_orders/` | **8 suites / 326 tests** |
| frontend | `npm run lint` | clean |
| frontend | `npm test --script-shell=bash` | **50 suites / 959 tests** |
| frontend | `npm run build` | `✨ Build complete!` |
| app (hora) | `npm run lint` | clean |
| app (hora) | `npm run lint:docs-pairs` | 8 pairs, 0 failures |

**All run on `release/1.0.0` in each repository**, not on a feature branch — release is what the merge produced rather than what was proposed. `--maxWorkers=3` is exactly what CI uses. **No step reused a recorded result.**

## Phase 3 — the static sweep, with a verdict per check

| Script | Exit | Result |
|---|---|---|
| `find-unreachable-screens` | 0 | **0 unreachable of 3.** Was 2 of 3 before checkpoint 15 |
| `find-missing-screen-states` | 0 | **0 incomplete of 3 fetching screens** |
| `find-unused-operations` | 0 | **0 unreached of 10**, 0 excluded, 0 stale |
| `find-leaked-vocabulary` | 0 | **0 leaks**, 5 templates |
| `find-unsafe-html` | 0 | **0 markup sinks**, 63 files |
| `find-orphan-template-members` | **2** | **"NOT APPLICABLE" — and it is false.** See finding 1 |
| `find-unguarded-slots` | 2 | not applicable, **and verified true**: no component here declares a visibility prop |
| `find-emit-mismatches` | 2 | not applicable, **and verified true**: no context declares `static get EMIT_EVENT_NAME` |

**Exit 2 is not a pass**, so each of the three was checked rather than accepted. Two are genuine. One is not.

## Findings

### 1. A static check has never run on this project, and reported itself inapplicable rather than blind

**Severity: Minor · Verification: Static**

`find-orphan-template-members.mjs` catches a template referencing `context.<member>` that the paired class does not define — by its own docblock, *"the template still compiles, lint still passes, and the unit tests still pass because they call the context directly and never render"*. That is precisely the defect class this project keeps finding by other means.

It reports **`NOT APPLICABLE: no .vue file binds context to a Context class here.`**

**That is false.** Its detection is:

```js
const CONTEXT_BINDING_PATTERN = /const\s+context\s*=\s*(?<className>[A-Za-z0-9_]+)\s*\n?\s*\.?\s*create/u
```

It requires the **variable** to be named `context`. Every screen here names it for its screen — `const monthlyExpensesPageContext = MonthlyExpensesPageContext.create(…)` — and exposes it to the template as `context:` in the returned object (`pages/monthly-expenses/index.vue:166`, and the template reads `{{ context.pageTitle }}` at 176).

**So the script is blind to this project's entire idiom, and has been across three features.** `#expense-entry`'s acceptance recorded three scripts exiting 2 as a limitation *"done by reading"* — treating the exit as a reach limit rather than asking whether the "not applicable" was true.

**The check was redone by reading, adapted to the real idiom:**

```
pages/expenses/index.vue           ExpensesPageContext          65 members   ORPHANS: none
pages/monthly-expenses/index.vue   MonthlyExpensesPageContext   30 members   ORPHANS: none
pages/sign-in/index.vue            SignInPageContext            14 members   ORPHANS: none
SCREENS CHECKED: 3   TOTAL ORPHANS: 0
```

**109 members bound across three templates, none orphaned.** So the gap is real and nothing was hiding behind it.

**Recommendation — not applied here:** widen the pattern to the `context: <variable>,` exposure form, or have the script report *"no binding matched my pattern"* rather than *"not applicable"*. **The wording is the more important half**: "not applicable" reads as a reviewed decision, while "no match" reads as what it is.

## Couldn't verify

- **Everything Phase 4 would have established** — that each screen mounts, that a core flow completes end to end in a browser, that the console stays silent, and how each screen behaves when a dependency is stopped on purpose. On `#expense-entry` the live sweep is what found the last-page removal defect, which every unit suite had passed over.
- **The staff-to-staff scoping boundary as a person meets it.** It is proven at the API (checkpoint 9's walk: June answered 3451, which would read 5311 if the other member of staff's row leaked) and by unit tests, but not by signing in as two people in a browser.
- **Q66's flicker window**, which is a timing behaviour with no static surface.
- No `TBD` in the declaration limited this review — every field was discoverable.

## What this review could prove

That the product **builds, lints and passes 2978 unit tests across three repositories**; that **every operation the API exposes is reached from a screen**; that **every screen is navigable**, which it was not before checkpoint 15; that no template binds a member its context lacks; that no markup sink and no vocabulary leak exists; and that this feature's own §12 criteria are backed where they have a frontend surface, with the two that do not **named rather than claimed**.

## Verdict

**Passed at static reach, with Gate 4 not run.**

One finding, Minor, and it is about an instrument rather than the product. **No product defect was found at this gate** — which is a weaker statement than it looks, because the reach that found five defects on `#expense-entry` is the reach that did not run here.
