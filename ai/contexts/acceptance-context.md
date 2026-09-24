# Acceptance Context

<!--
  Created at `#monthly-summary`'s checkpoint 18, because `hof-acceptance-review`'s Phase 1 says to
  create it rather than infer a core flow and audit against the guess. `#expense-entry`'s acceptance
  ran without it; that run's Gate 1 passed on the other clause -- Phase 4 recorded as not run.

  Everything below is filled from the codebase and from `specs/1.0.0/spec.md`. Where nothing is
  discoverable it says TBD, and a review citing a TBD must say so limited it.
-->

## Purpose

A staff expense note. A member of staff records what they paid for work, corrects or removes an
entry, and reads one month's entries with their total so they can file a claim.

**Identifier scheme:** spec section numbers (`§10.2`, `§11.2`, `§12.2` are the three screens) and
`Q<n>` for recorded questions in `.hora/questions/1.0.0/open.md`. Cite those; where neither applies,
cite files and lines.

## Roles

**There is one role.** §3 and §4 put account creation outside the product: there is no sign-up, no
password reset, no account management and **no operator or administrator screen**.

| Role | May reach | Must not reach |
|---|---|---|
| member of staff (signed in) | `/` → `/expenses`, `/monthly-expenses`, and their own entries only | any other member of staff's entry — answered as **not found**, never as forbidden (§7) |
| no session | `/sign-in` only | every other route; the global gateway middleware redirects, and every operation but `signIn`, `signOut` and `renewAccessToken` is refused by the engine filter |

**There is no second role to cross-check a permission boundary with.** A review can only sign in as a
member of staff, so the staff-to-staff boundary is checked by signing in as two *different* members
of staff — which the seeded accounts below allow — and not by any privilege difference.

## Credentials for review

Seeded by `npm run db:seed:dev` in `expense-note-backend`. Ten complete accounts,
`10110001`–`10110010`; the plaintext passwords are recorded against their digests in
`sequelize/seeders/development/*password*.cjs`.

| Role | How to sign in |
|---|---|
| member of staff A | `haruka.arai@expense-note.example` / `haruka-monday-8401` (id `10110001`, owns 10 of the 14 seeded expenses) |
| member of staff B | `kenji.ogawa@expense-note.example` / `kenji-tuesday-3927` (id `10110002`, owns the other 4 — **use this pair to check the scoping rule**) |

`10110011`–`10110013` are deliberately incomplete accounts (a partial issue), for the states the code
still has to answer for. They are not sign-in credentials.

## Running the app

- **Start (frontend):** `npm run dev` in `expense-note-frontend-staff` — Nuxt, `ssr: false`. Port is
  Nuxt's default `3000` unless overridden.
- **Start (backend):** `npm run dev` in `expense-note-backend` — listens on **4900**, GraphQL at
  `/graphql-staff`.
  **It does not start on this machine.** Two measured reasons, recorded at `#expense-entry`'s
  acceptance: **Q24** (renchan's loader hands a raw `D:\…` path to `import()`; does *not* reproduce
  on WSL) and this tree's own `node_modules` holding Windows binaries, which kills it under WSL at
  `sqlite3 … invalid ELF header`. **A review here records Phase 4 as not run rather than reporting
  broken screens.**
- **Environment:** `.furo-env.development` in the frontend — `ENDPOINT_URL` must be
  `http://localhost:4900/graphql-staff`, matching the backend's port and `graphqlEndpoint`.
  `.env.development` in the backend.
- **Dependencies, and how to tell whether each is up:**

  | Dependency | Up when |
  |---|---|
  | MariaDB 10.5.12 (`docker compose -f docker-compose.development.yml up -d`) | `docker exec expense-note-backend-mariadb-1 mariadb -uroot -ppassword -e "SELECT 1"` **exits 0 and prints `1`**. Do not read `docker compose up`'s own exit code — a start command returning 0 having started nothing is a recorded failure mode (Q58) |
  | the backend API | answers a GraphQL POST on **port 4900** at `/graphql-staff`. See the Q24 note above: on this machine it does not |
  | Redis | **not required.** §8: *"Redis is not declared, because this version runs no background job."* `ioredis` is a declared dependency with zero importers |

- **Seed:** `npm run db:refresh` in `expense-note-backend` (teardown → setup → master seeds → dev
  seeds). For the `live` database, `npm run db:refresh:live`.

## Core flows

| Flow | Starts at | Succeeds when |
|---|---|---|
| Sign in | `/sign-in` | lands on `/` (aliased to `/expenses`) showing that member of staff's own entries |
| Record an expense | `/expenses` | the new entry appears in the list without a reload |
| Correct an entry | `/expenses` | the changed values show in place and the entry count is unchanged |
| Remove an entry | `/expenses` | the entry is gone and the remaining ones are still shown — **including when the removed one was the last on its page** |
| Read a month | `/monthly-expenses` (from the `/expenses` header link) | the chosen month's entries show with a total equal to their sum |
| Move between months | `/monthly-expenses` | the previous month's entries and total replace the current ones **without leaving the screen** |
| Sign out | `/expenses` | the session is refused afterwards, and a kept token no longer works |

## Entities and expected operations

| Entity | Create | Read | Update | Delete | Restore | Notes |
|---|---|---|---|---|---|---|
| Expense | ✓ `recordExpense` | ✓ `expenses`, `monthlyExpenses` | ✓ `correctExpense` | ✓ `removeExpense` | — | A correction is a **full replace**, so a correction omitting the memo clears it. Removal is a hard delete (§7: *"what is retained is what remains"*) |
| ExpenseCategory | — | ✓ `expenseCategories` | — | — | — | Master data, four rows, seeded. Not editable in the product |
| StaffMember | — | ✓ `signedInStaffMember` | — | — | — | **Accounts are issued outside the product** (§3, §4) |
| Session | ✓ `signIn` | — | ✓ `renewAccessToken` | ✓ `signOut` | — | Two credentials: an access token on a header, a refresh token as an httpOnly cookie |

## Deliberately absent from the UI

**None.** All ten operations the staff audience exposes are reached from a screen —
`find-unused-operations.mjs` reports `UNREACHED OPERATIONS: 0 … OPERATIONS: 10`.

| Operation | Reason |
|---|---|
| — | — |

## Out of scope for this review

- **The live browser sweep**, at a feature gate — `hof-acceptance-review`'s Phase 4 is out of scope
  for a gate run by default. **Separately**, it could not have run on this machine at all (Q24 and
  the Windows-binary note above). **These are two different facts and collapsing them would make a
  platform limitation look like a process choice, or the reverse.**
- **The version's own acceptance criteria** (§15) — those belong to the whole-version sweep, never to
  a feature gate.
- **UX audit and the repo-wide security audit** — the sweep's, not a gate's. Checkpoint 8 audits each
  feature's own change set as it is built.

## Known and accepted

Defects and limits already recorded, so a review does not report them as new:

| | |
|---|---|
| **Q24** | the backend does not boot on this machine; does not reproduce on WSL |
| **Q16** | no datastore TLS, hardcoded credentials in `sequelize/config.cjs`, `.env.live` tracked |
| **Q54** | the two boilerplate audiences allow any origin and a 10mb body |
| **Q55** | nothing rate-limits the read path — and `monthlyExpenses` is the first read with **no enforced row ceiling** |
| **Q57** | the frontend's contract copy has no automated drift guard; a fingerprint makes drift cheap to detect |
| **Q63** | GraphQL introspection is enabled in every environment |
| **Q64** | every `ph:` icon is fetched from `api.iconify.design` at runtime — `@iconify-json` is not installed |
| **Q66** | with two reads in flight the first answer clears the wait for both, so the month screen can briefly say a month is empty while it is still loading |
| **`expenseCategories`** | the one operation with no in-resolver session guard; the engine's filter still refuses it |
| **`--color-link`** | furo's link colour is 3.68:1, under the 4.5:1 floor; this project's screens draw links in the title foreground with an underline instead |
