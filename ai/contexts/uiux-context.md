# Client / Project Context

> Filled at `#sign-in`'s checkpoint 11 ("Reconfirm UI/UX and the use cases"), which is the
> checkpoint that owns this file. Both `hof-uiux-forge` (the generator, checkpoints 12 and 15) and
> `hof-uiux-audit` (the reviewer, checkpoint 18) read it, so **an answer written here becomes both
> the instruction and the standard it is later judged against.**
>
> Because of that, every answer below is marked with where it came from:
>
> - **[spec]** — derived from `specs/1.0.0/spec.md`, with the section named. Not negotiable here;
>   changing it means changing the spec, which is its own pull request with the words put to the
>   user.
> - **[user]** — decided by the user, in conversation, at this checkpoint. Also not this file's to
>   revise.
> - **[tree]** — read off the repository as it actually is.
> - **[chosen]** — **arbitrary, chosen rather than derived.** Checkpoint 18 should not audit one of
>   these as though it were a rule. If a better answer appears, take it.

---

## 1. Project identity

- **Q: Client / project name?**
  > **[spec §1]** Expense note — `expense-note-app`. This repository is `expense-note-frontend-staff`,
  > the staff-facing frontend. Version 1.0.0.

- **Q: One-sentence description of what this application is?**
  > **[spec §6]** An internal tool where a member of staff records the expenses they paid — the date,
  > the amount, a category and an optional memo — and reads their own month back with a total.

- **Q: What stage is it in?**
  > **[spec §5]** Greenfield. "Current implementation: none (new). Treatment: build new — there is
  > nothing to port and nothing to match." Nothing is inherited, so there is no existing look to
  > respect and no migration to stage.

## 2. Application type & audience

- **Q: What kind of application is this?**
  > **[spec §4]** An internal business web app, behind a sign-in, with exactly one consumer. A phone
  > app and any public API are **permanently** out of scope — "there is exactly one consumer and it
  > speaks GraphQL". Note that this rules out a native app, not a phone *browser*; see §4 below.

- **Q: Who are the primary users, and in what context do they use it?**
  > **[spec §3, §7]** Members of staff at one company — 20 at launch, 50 foreseen within two years.
  > **There is no second actor.** Accounts are issued by whoever operates the deployment, outside the
  > product, so the operator never signs in and **no screen is built for them**. Context is ordinary
  > office work at a desk, with some filing done away from one **[user]**.
  >
  > **[spec §10.2]** At least one machine is shared: the sign-out use case exists because "a member
  > of staff who has finished on a shared machine signs out, and the next person to open the app is
  > asked to sign in rather than landing in somebody else's account."

- **Q: What are the top 3 things users come here to do?**
  > **[spec §10, §11, §12]**
  > 1. Sign in, and stay signed in across a reload.
  > 2. Record an expense they just paid, and correct or remove one they got wrong.
  > 3. Read one month back, with its total, to write on a claim form.

- **Q: How familiar are these users with this kind of tool, and how often do they use it?**
  > **[spec §7 + reasoned]** Daily-to-weekly users of one small tool they did not choose. Not
  > first-timers after the first week, and not power users either — the app has three screens and no
  > configuration. **So: efficiency over onboarding, but no shortcuts that assume expertise.** There
  > is no tour to build and no empty-state tutorial worth writing; a member of staff who signs in on
  > Monday has done it fifty times.

- **Q: What's their mindset and the stakes when using it, plus any audience-wide accessibility needs?**
  > **[spec §7 + reasoned]** Low-stakes and slightly grudging: filing expenses is admin, done between
  > other work, and nobody is anxious about it. **The stakes are bookkeeping rather than financial
  > harm** — §7 keeps an expense 7 years for bookkeeping, so a wrong entry is a correction, not a
  > loss. Corrections and removals are routine and reversible by re-entry, so confirmation strength
  > should be proportionate: confirm a removal, do not interrogate it.
  >
  > No audience-wide accessibility need is known **[chosen: treated as none]** — 20 named colleagues
  > is a small enough population that a specific need would be a fact about a person rather than a
  > design assumption. The baseline below is not raised above AA on this ground.

## 3. Scope

- **Q: What is IN scope?**
  > **[spec §4, "Built this time (1.0.0)"]** Three features, each with one screen:
  > `#sign-in` (§10.2), `#expense-entry` (§11.2), `#monthly-summary` (§12.2).

- **Q: What is explicitly OUT of scope?**
  > **[spec §4]** Out of scope for now: everything not in the three features above. **Permanently**
  > out of scope: a phone app, and any public API.
  >
  > **[spec §3, §4]** Specifically and importantly for UI: **there is no sign-up screen, no password
  > reset, no account management and no operator/admin screen.** Accounts are issued outside the
  > product. Do not generate a "Create an account" link, a "Forgot your password?" link, or any
  > route to a screen that does not exist — §10.2's screen is the only one reachable without a
  > session, and there is nothing else for an unauthenticated person to reach.

- **Q: Are there hard deadlines or phases that affect what to build now vs. later?**
  > **[spec §13 / `.hora/tasks/1.0.0/_plan.md`]** No dates. Strict ordering instead: features are
  > built one at a time, `#sign-in` → `#expense-entry` → `#monthly-summary`, each carrying
  > `depends:` on the one before. **A screen belonging to a feature that has not been built yet does
  > not exist and must not be linked to or stubbed.**
  >
  > **Which screens exist right now** — this list is the authority, and it changes as features land:
  >
  > | route | feature | state |
  > |---|---|---|
  > | `/sign-in` | `#sign-in` | **built.** The only route reachable without a session |
  > | `/expenses` (aliased to `/`) | `#expense-entry` | **built at checkpoint 10.** Guarded |
  > | — | `#monthly-summary` (§12.2) | **does not exist.** Do not link to it, do not stub it |
  >
  > The alias is why `/` resolves at all: `SignInPageContext`'s `DEFAULT_DESTINATION_PATH` is `/`,
  > so a sign-in with no `?redirect=` lands there. The boilerplate's empty `pages/index.vue` was
  > deleted when the alias was added — two records claiming `/` would resolve arbitrarily.

## 4. Platforms & devices

- **Q: Which platforms must be supported?**
  > **[user]** **Desktop-first, and usable on a phone browser.** Lay out for a desk browser; keep it
  > working on a phone, because expenses sometimes get filed on the way back from a trip. Nothing is
  > designed twice, and the phone is not the primary target.
  >
  > Note the distinction that made this a question: §4 rules out a phone **app**, which says nothing
  > about a phone **browser**.

- **Q: Minimum viewport / smallest device to support?**
  > **[chosen]** 320px, the template's own default. Nothing in the spec speaks to it and no narrower
  > device is in use.

- **Q: Browser support requirements?**
  > **[tree + chosen]** Evergreen browsers, last two versions. Grounded rather than invented:
  > `nuxt.config.js` sets `vite.build.target: 'esnext'` with the comment that this is "to leverage
  > the latest JavaScript features and ensure compatibility with modern browsers", so a legacy target
  > is already excluded by the build. No IE, no named legacy browser.

## 5. Tech stack & tokens  *(the skill relies on this)*

- **Q: Framework and styling approach?**
  > **[tree]** **Nuxt 3 + `@openreachtech/furo-nuxt`, plain CSS in `<style>` blocks and
  > `assets/css/`. Not React, and not Tailwind** — the skill's default is wrong for this project.
  > `ssr: false` (SPA). Auto-imports are disabled (`imports.autoImport: false`), so every symbol is
  > imported explicitly.
  >
  > **Furo is OOP: a page is a `.vue` paired with a context class** extending
  > `app/vue/contexts/BaseAppContext.js`. Logic lives on the context, never in the template — see
  > the project rules in §8.

- **Q: WHERE are the design tokens defined?**
  > **[tree]** `assets/css/variables.css` — and **it is empty**. It declares `:root { }` with a
  > comment saying "Nothing is declared here yet, on purpose. What a colour, a size or a ratio should
  > be is the application's decision, and the boilerplate does not make it."
  >
  > **So there are no application tokens yet, and declaring them is part of the first UI checkpoint
  > that needs them (12/15).** Underneath, `@openreachtech/furo-nuxt` ships its own stylesheets under
  > a `reset, base, furo, app` `@layer` declaration, including a palette of colour scales and
  > z-index custom properties; the `@layer` order is what lets this project's own rules win without
  > specificity fights. **Read furo's palette before inventing a scale**, and declare the app's
  > semantic names in `variables.css` on top of it.
  >
  > This is why `#sign-in`'s checkpoint 10 page carries no `<style>` block: with no tokens declared,
  > any colour would have been a literal, which the project rules forbid.

- **Q: Is there a connected/authoritative design?**
  > **[spec §5]** **None.** No Figma, no mockups, nothing attached. "Baseline: not applicable —
  > nothing is inherited." The generator is the source of the visual system, within the rules below.
  > Light mode only unless somebody asks for dark **[chosen]**.

- **Q: Component library / design system in use?**
  > **[tree]** None beyond what `@openreachtech/furo-nuxt` provides. `components/` is empty. There is
  > no shadcn/ui, no MUI, no in-house library yet. **`#sign-in`'s checkpoint 12 is the first
  > component design in this repository**, so what it creates becomes the library.

- **Q: Icon set?**
  > **[tree + chosen]** None installed, and none required by anything built so far. **Do not add an
  > icon dependency** without raising it — three screens of forms and a table may need no icons at
  > all. Off-limits: any CSS framework (Tailwind, Bootstrap), because the styling approach above is
  > plain CSS with project-specific conventions that a utility framework would directly contradict.

- **Q: Existing components or patterns the skill should reuse rather than recreate?**
  > **[tree]** `layouts/default.vue` — a bare `<slot />`, and **the only layout**. The `hof-nuxt`
  > skill expects auth pages to take a `gateway` layout; **this repository has none**, so either use
  > the default or create one deliberately.
  >
  > `middleware/000.gateway.global.js` already redirects every unauthenticated request to
  > `/sign-in?redirect=<path>`. `middleware/010.pageTitle.global.js` already sets the page title from
  > `definePageMeta`. **Both already work — do not reimplement either.**

## 6. Accessibility & compliance

- **Q: Accessibility target?**
  > **[user]** **WCAG 2.2 AA.** Contrast ratios, visible focus, keyboard reachable, labelled fields,
  > sensible heading order. Chosen on the reasoning that it is cheap to hold from the start and
  > expensive to retrofit. This is the standard checkpoint 18's audit fails against.

- **Q: Anything about the audience or environment that should raise contrast above the baseline?**
  > **[reasoned]** No. Indoor office use, no known low-vision requirement in a population of 20 named
  > colleagues, nothing safety-critical. Use the tiered AA defaults without headroom.

- **Q: Any assistive-tech or audit requirements?**
  > **[reasoned]** No external audit and no client sign-off to satisfy — this is an internal tool.
  > The keyboard path through sign-in should work, because it is the screen everyone hits every day
  > and a form is where keyboard use is most natural.

- **Q: Legal/consent obligations the UI must satisfy?**
  > **[spec §7, §8]** **No cookie-consent UI.** The only cookie is the refresh token: httpOnly,
  > strictly necessary for authentication, and set by the backend rather than by any script. Nothing
  > here is analytics or advertising, and §8 declares no log aggregation.
  >
  > **Personal data the UI touches, and one hard rule from §7:** a member of staff's name and email
  > address, and an expense memo, "which may name a client". **None of the three is ever written to a
  > log line.** That binds the frontend too — no `console.log` of a form value, an error payload or a
  > profile response.

## 7. Content, language & brand

- **Q: Languages / localization?**
  > **[spec §6]** **English, single language, left-to-right.** Grounded rather than assumed: §6 names
  > the expense categories in English — "transport, meals, supplies, other" — so the domain
  > vocabulary the UI displays is English. No localization layer, no RTL. (§1's "Question language |
  > English" is about questions put to the user during specification and is *not* evidence for the
  > interface language; the categories are.)

- **Q: Tone and voice for UI copy?**
  > **[user]** **Plain and neutral.** "Sign in", "Email address", "That email address and password do
  > not match." No personality, no apology, no exclamation marks. It is a screen someone sees every
  > morning, and warmth wears thin on the fiftieth reading.
  >
  > **[spec §10, acceptance criteria]** One copy rule is a requirement rather than a preference: an
  > address with no account and a correct address with the wrong password **must be refused
  > identically, and neither refusal may say which of the two it was.** One message, for both. Do not
  > write "No account found for that email" — it is a defect, not a nicety.

- **Q: Brand constraints beyond tokens?**
  > **[spec §5]** None. Nothing is inherited — no logo, no imagery style, no guidelines. There is no
  > brand to violate and none to honour.

- **Q: Named visual style direction?**
  > **[chosen]** **Modern-quiet**, the template's default: soft hairline borders, structure carried
  > by spacing and surfaces rather than by heavy borders or hard shadows. Chosen because an internal
  > tool used daily should recede, and because with no brand to express there is nothing a bold
  > aesthetic would be expressing. **Arbitrary — if somebody wants otherwise, this is the line to
  > change.**

## 8. Project-specific UX rules  *(enforced like the global rules)*

> **These are not preferences.** They come from `D:\ORT\rules\05-frontend.md` and the project's
> charter, and they are enforced in review. A generator that ignores them produces code that gets
> rejected.

  > **Your rules:**
  >
  > **CSS**
  > 1. **No colour literals in a property value, ever.** Every colour is a CSS custom property
  >    defined in `assets/css/variables.css`, named by **use** and not by appearance:
  >    `var(--color-article-title)`, never `#333` and never `--color-dark-gray`. The file is
  >    two-tier: `--palette-*` for the raw colours, `--color-*` for what they mean.
  > 2. **No shorthand properties.** `margin-top` and `margin-right`, never `margin: 10px 20px`. Not
  >    `background`, not `font`, not `flex`. Shorthands hide values they silently reset.
  > 3. **`rem`, never `px`.** Decimals limited to intuitive fractions
  >    (`.1 .2 .25 .3 .4 .5 .6 .7 .75 .8 .9`); no `0.625rem`-style 16px arithmetic. Absolute
  >    decimals only below font-size scale — not on the width or height of a block.
  > 4. **Properties ordered outer → inner** — placement and `margin`, then the element's own
  >    `width`/`height`/`background`, then `padding` and contents — with a blank line where the
  >    meaning changes.
  > 5. **Class names are semantic, never Tailwind-like.** `.article-header`, never `.flex-center`
  >    and never `.layout-flex-grid`. A class name describes structure and meaning, not the
  >    properties it sets.
  > 6. **A layout block's root element takes a `unit-` prefix** — `.unit-header`, `.unit-article` —
  >    and the part after `unit-` is one word where possible. Finer structure is expressed with a
  >    second class (`.unit-table.users`, `.button.filter`).
  > 7. **Child combinator `>`, never the descendant combinator.** `.unit-article > .image`, not
  >    `.unit-article .image`. Multi-level `>` chains are fine.
  > 8. **Media queries go inside the selector they modify**, so one selector's behaviour at every
  >    width reads in one place.
  > 9. **No `line-height` unless asked for.** `p` takes the golden ratio; everything else defaults
  >    to `1`.
  >
  > **Markup**
  > 10. **Two or more attributes ⇒ one attribute per line**, chopped down.
  > 11. **Semantic elements, and no layout-only `div` soup.** `<header>`, `<main>`, `<footer>`,
  >     `<article>`, `<section>`, `<nav>`; a date is `<time datetime="…">` in ISO 8601.
  >
  > **Vue / structure**
  > 12. **No JavaScript logic in a `<template>`.** Logic moves onto a member of the page's context
  >     class. The template reads `context.*`.
  > 13. **Shared logic is a class** under the app's own folders — **never a composable, never a bare
  >     function.** (One boilerplate file breaks this and is a known open question, Q40.)
  > 14. **A `ref`'s initial value is `null`, not `''`** — "unset" and "empty string" are different
  >     facts.
  > 15. **Extend a component, do not modify it.** A variant is a new component wrapping the original
  >     and adding classes.
  > 16. **No abbreviations in any name** — not `btn`, `el`, `err`, `ev`, `cfg`, `msg`, `args`. Write
  >     the word.
  >
  > **Product**
  > 17. **Never link to a screen that does not exist** — no sign-up, no password reset, no account
  >     settings. See §3.
  > 18. **Never log a name, an email address or a memo** (§7).
  >
  > **`#expense-entry`'s own rules** — each one is an acceptance criterion or a trap that has
  > already been recorded, not a preference:
  >
  > 19. **A correction sends every field, always.** `correctExpense` is a **full replace**, not a
  >     patch: `spentOn`, `amount` and `expenseCategoryId` are non-null and `memo` is nullable, so
  >     **a correction that omits the memo clears it.** The form opened for a correction must be
  >     pre-filled from the entry's current values and must resend all four. This was flagged at
  >     checkpoint 2 as the thing a screen gets wrong once and a member of staff discovers by
  >     losing a memo.
  > 20. **Pre-fill from the list, not from a second request.** The entries list already carries
  >     every value a correction needs. There is no read-one operation and none is declared. Do not
  >     add a fetch to open an entry.
  > 21. **A not-found must look identical in all three cases** — an entry somebody else owns, an
  >     entry already removed, and an id that never existed. §7 and §11 both require the answer to
  >     say nothing about whether the row exists, and the backend answers one code for all three.
  >     **Do not write a message that distinguishes them**, and do not add "this entry was already
  >     deleted" as a kindness — that sentence is the disclosure the rule exists to prevent.
  > 22. **A removal is confirmed before it is sent.** §11.2's call table says `removeExpense` fires
  >     *on confirming a removal*, so the confirmation is specified rather than optional. The delete
  >     is permanent: §7 removes an entry outright rather than archiving it, so there is nothing to
  >     undo and no trash to restore from.
  > 23. **Entries read newest `spentOn` first — the day the money was paid, not the day it was
  >     typed.** A consequence worth designing for rather than hiding: **an expense paid last week
  >     and recorded today appears below this week's, not at the top.** A member of staff who
  >     back-dates an entry and then looks for it at the top will not find it there. That cost was
  >     accepted knowingly at checkpoint 1.
  > 24. **The memo is genuinely optional.** An entry recorded without one reads back as `null` and
  >     must render as empty — never as the text "null", never as an error, and the field must not
  >     be marked required.
  > 25. **Never render `pagination.sort` as markup.** It is echoed back from whatever the caller
  >     sent and is not validated server-side, because no operation in 1.0.0 lets a caller choose a
  >     sort. It reaches no query. Treat it as untrusted text (Q53).
  > 26. **Never ask for more than 100 rows in a page.** `PAGINATION.MAXIMUM_LIMIT` is 100 and a
  >     larger `limit` is refused as invalid input (Q50). The number is chosen and not yet
  >     user-confirmed, so read it rather than hard-coding a second copy.

## 9. Constraints & non-functional needs

- **Q: Performance, SEO, or bundle-size constraints that affect UI choices?**
  > **[spec §7]** One performance figure, and it is a backend one: a month's entries and its total
  > return in under a second at the foreseen size (at most a few hundred rows). **The UI is not under
  > pressure** — 50 users, a few hundred rows each, office hours, best effort, no uptime commitment.
  >
  > **No SEO at all.** The app is behind a sign-in, `ssr: false`, and has no public page. Do not add
  > meta description tags, structured data, Open Graph tags or a sitemap.
  >
  > No stated bundle budget **[chosen: none]** — but see the icon-set answer: do not add a dependency
  > for something three screens can do without.

- **Q: Anything else the skill should know before generating UI for this project?**
  > **[spec §10.2]** The sign-in screen is **the one screen reachable without a session**, and it is
  > where every other screen sends somebody whose session has gone. The route is **`/sign-in`**, and
  > that is not adjustable: `middleware/000.gateway.global.js` hard-codes `SIGN_IN_PATH = '/sign-in'`
  > and every unauthenticated request already redirects there with `?redirect=<the path they wanted>`.
  >
  > **[spec §10.2]** `renewAccessToken` is **not a call any screen makes.** It belongs to the GraphQL
  > client layer, which calls it transparently when an access token has expired, on whatever screen
  > is open. Do not build UI for it, and do not show a "session expiring" prompt.
  >
  > **[spec §9.6]** The access token lives **in memory, never in a cookie** and never in
  > `localStorage`. The refresh token is an httpOnly cookie the JavaScript cannot read. A "remember
  > me" checkbox has nothing to control and must not be built.

## 10. Open questions & assumptions

- **Q: What's still undecided?**
  > 1. **No design tokens exist.** `variables.css` is empty. The first checkpoint that needs a colour
  >    declares the palette, reading furo's own scales first. Until then there is no answer to "what
  >    is the primary colour".
  > 2. **There is no `gateway` layout**, though the `hof-nuxt` skill expects auth pages to use one.
  >    Use `default` or create one — not yet decided.
  > 3. **Q40** — `composables/useRedirect.js` is a bare function, which rule 13 excludes, and it is
  >    not dead code: it reads the `?redirect=` the gateway writes. Use it, replace it with a class,
  >    or write the redirect fresh. Decided at checkpoint 16.
  > 4. **Where a sign-out control lives.** §11.2 puts `signOut` on the **expense-entry** screen, and
  >    `#sign-in` has no screen a signed-in person ever sees. See the assumption below.

- **Q: Assumptions we're proceeding on until told otherwise?**
  > 1. **§10's second use case cannot be completed through the interface until `#expense-entry`
  >    exists.** "A member of staff who has finished on a shared machine signs out" needs a sign-out
  >    control, and the spec puts that control on §11.2's screen, which belongs to the next feature.
  >    `#sign-in`'s own screen is explicitly "for a member of staff who is **not** signed in", so
  >    there is nowhere in this feature for it to live. **Proceeding on the reading that the use case
  >    is satisfiable at version level and simply not closable at `#sign-in`'s gate** — not that the
  >    spec is wrong. Recorded so checkpoint 18 does not report it as a missing control.
  > 2. **Light mode only.** No dark-mode requirement stated; not built until asked for.
  > 3. **No icons**, until a screen genuinely needs one.
