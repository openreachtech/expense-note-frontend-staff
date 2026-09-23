<script>
import {
  defineComponent,
} from 'vue'

import {
  definePageMeta,
} from '#imports'

import MonthlyExpensesPageContext from './MonthlyExpensesPageContext.js'

/*
 * The monthly summary screen, and why its route is `/monthly-expenses`.
 *
 * Specification section 12.2 names no URL, so the name is chosen by the rule the one screen
 * beside it already follows: `#expense-entry` is not at `/expense-entry`, it is at `/expenses`
 * -- the kebab-case plural of the collection the screen reads, which is also the name of the
 * query it opens on. The same rule applied to section 12.1's `monthlyExpenses` gives
 * `/monthly-expenses`. `/monthly-summary` was the other candidate, named for the feature rather
 * than for what is on screen; it was not taken because it would have been the only route in this
 * application named after a feature id, and because it reads as a different kind of page from the
 * one that opens on `monthlyExpenses`.
 *
 * It is a route of its own rather than a child of `/expenses` for the same reason: nothing here is
 * subordinate to the entry screen, the two read different operations, and a nested path would also
 * stand in the way of the `/expenses/[id]` a later version may want.
 *
 * `alias` is deliberately absent. `/` is already aliased by `pages/expenses/index.vue`, which is
 * where `SignInPageContext`'s `DEFAULT_DESTINATION_PATH` lands a member of staff who signed in with
 * no `?redirect=`; two records claiming `/` would resolve arbitrarily.
 *
 * NOTHING LINKS HERE YET. Which screen offers a way to this one, and how, is a UI/UX decision that
 * is taken separately from opening the route -- so this page adds no navigation of its own and the
 * entry screen is left untouched. Until that decision lands, the route resolves from the address
 * bar and from a `?redirect=` the gateway wrote, and from nowhere else.
 *
 * The screen itself is not built here: the month control, the table, the total, the empty month and
 * the `monthlyExpenses` client are each a later checkpoint's, and the paired context carries the
 * seam they fill.
 */
export default defineComponent({
  name: 'MonthlyExpensesPage',

  setup (
    props,
    componentContext
  ) {
    definePageMeta({
      $furo: {
        pageTitle: 'Monthly expenses',
      },
    })

    const monthlyExpensesPageContext = MonthlyExpensesPageContext.create({
      props,
      componentContext,
    })

    monthlyExpensesPageContext.setupComponent()

    return {
      context: monthlyExpensesPageContext,
    }
  },
})
</script>

<template>
  <main class="unit-page">
    <header class="header">
      <h1 class="heading">
        {{ context.pageTitle }}
      </h1>
    </header>
  </main>
</template>

<style scoped>
/* The page frame only -- the same one `/expenses` draws, so the two screens sit on the same
   background and the same gutters. Everything inside the frame is designed later. */
.unit-page {
  min-block-size: var(--size-screen-height);
  max-inline-size: 64rem;
  margin-inline-start: auto;
  margin-inline-end: auto;

  background-color: var(--color-background);

  display: flex;
  flex-direction: column;
  row-gap: var(--size-space-large);

  padding-block-start: var(--size-space-x-large);
  padding-block-end: var(--size-space-x-large);
  padding-inline-start: var(--size-space-medium);
  padding-inline-end: var(--size-space-medium);

  @media (width < 30rem) {
    padding-block-start: var(--size-space-medium);
    padding-block-end: var(--size-space-medium);
    padding-inline-start: var(--size-space-small);
    padding-inline-end: var(--size-space-small);
  }
}

.unit-page > .header > .heading {
  margin-block-start: 0;
  margin-block-end: 0;

  color: var(--color-foreground-title);
  font-family: var(--font-family);
  font-size: var(--font-size-2x-large);
  font-weight: var(--font-weight-bold);
}
</style>
