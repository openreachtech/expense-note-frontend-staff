<script>
import {
  defineComponent,
} from 'vue'

import {
  definePageMeta,
} from '#imports'

import ExpensesPageContext from './ExpensesPageContext.js'

/*
 * The expense-entry screen, and why it is ONE route at `/expenses`.
 *
 * Specification section 11.2 describes one screen, and the three things a member of staff does on
 * it are not three screens. Section 11's second use case -- "opens that entry, corrects the amount"
 * -- is served by data `expenses` has already returned, so opening an entry for correction needs no
 * further read; it therefore needs no `/expenses/[id]` route to carry an identifier, and no route
 * param to fetch by. Recording and removing are the same: a form and a confirmation on the screen
 * that lists the entries, both re-reading through `expenses` afterwards. Splitting them would add
 * routes section 11.2 does not describe, and would put a page load between a member of staff and a
 * correction they can already see on screen.
 *
 * `alias: '/'` is what makes the root land here. It is not a second screen: `middleware/000.gateway
 * .global.js` sends an unauthenticated visitor to `` `/sign-in?redirect=${to.fullPath}` ``, and
 * `SignInPageContext` sends anybody who arrives without such a query to `/` -- so without this the
 * ordinary sign-in would land on a route with nothing on it. The alias answers that, and leaves
 * `#sign-in`'s own landing constant alone.
 *
 * `#monthly-summary` (section 12.2) is a separate screen reading one month at a time, and takes its
 * own route beside this one. Nothing here is in its way.
 *
 * The route requires a session by the mechanism this repository already has, and by no other: the
 * gateway middleware above is global and guards every path except `/sign-in`, so a page that sets
 * no `$furo: { skipFilter: true }` is guarded by existing. No per-page middleware is declared, which
 * is also what the Furo convention requires.
 */
export default defineComponent({
  name: 'ExpensesPage',

  setup (
    props,
    componentContext
  ) {
    definePageMeta({
      alias: '/',

      $furo: {
        pageTitle: 'Expenses',
      },
    })

    const expensesPageContext = ExpensesPageContext.create({
      props,
      componentContext,
    })

    expensesPageContext.setupComponent()

    return {
      context: expensesPageContext,
    }
  },
})
</script>

<template>
  <main class="unit-page">
    <h1 class="heading">
      {{ context.pageTitle }}
    </h1>
  </main>
</template>
