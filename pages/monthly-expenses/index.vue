<script>
import {
  defineComponent,
  reactive,
} from 'vue'

import {
  definePageMeta,
} from '#imports'

import {
  NuxtLink,
} from '#components'

import {
  FuroButton,
  FuroControlBlock,
  FuroEmptyState,
  FuroErrorState,
  FuroSelect,
  FuroTable,
} from '@openreachtech/furo-vue'

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
 * HOW A MEMBER OF STAFF REACHES THIS SCREEN is checkpoint 11's decision, and it has now been
 * written: the two signed-in screens link to each other, one link each, in the page's own header --
 * not as chrome in `layouts/default.vue`, because that layout is shared with `/sign-in`, where a
 * link to a guarded screen would bounce straight back. The reciprocal link lives in this screen's
 * own `<header>` below, and the one pointing here lives in `/expenses`'s.
 *
 * WHAT GOES IN THIS TEMPLATE IS ALREADY DESIGNED, in `ai/contexts/uiux-context-monthly-summary.md`.
 * Checkpoint 12 broke this screen into components and matched every part against the twenty
 * component skills the kit equips: five library components serve it and NOTHING here is a component
 * of this application's own. That document also carries the facts read out of the installed
 * `@openreachtech/furo-vue` that its skills get wrong -- chiefly that an `id` on a `FuroSelect`
 * reaches no DOM element, so a label association has to go through `:trigger-parcel` -- plus the
 * month control's design and why a date picker is the wrong surface for it.
 *
 * `NuxtLink` is imported and declared by hand like every other component here. It would resolve
 * without that: `components: { dirs: [] }` switches off the scan of THIS project's `components/`
 * directory and `imports: { autoImport: false }` switches off composable auto-import, but neither
 * touches Nuxt's own built-in component registry, which registers `NuxtLink` independently. Relying
 * on a transform the configuration appears to have switched off is the implicit assumption the
 * charter forbids, so the import is written out.
 *
 * -------------------------------------------------------------------------------------------
 * The four reactive objects, and why they are here rather than on the context
 * -------------------------------------------------------------------------------------------
 *
 * They are created here and handed over, the way `/sign-in` and `/expenses` already do, so the
 * context owns the reading of them and the component owns their lifetime. Every one of the screen's
 * four states is reachable by the value of one of these fields.
 *
 * | State | Reached when |
 * | :-- | :-- |
 * | filled | `responseHashReactive.expenses` holds entries |
 * | loading | `statusReactive.isLoadingMonthlyExpenses` |
 * | empty | `responseHashReactive.totalAmount` is a number, `expenses` is empty, nothing loading, nothing failed |
 * | failed | `errorMessageHashReactive.readingMonthlyExpenses` holds a sentence |
 *
 * `monthValueHashReactive` is the fifth object and the only one a member of staff writes: the month
 * the screen is showing. It is SCREEN STATE and never a route segment -- section 8 rule 27 -- and
 * never a query parameter either, because a query change would push a history entry and re-run the
 * global gateway middleware, which is the re-route that rule exists to prevent. It is seeded from
 * `Asia/Tokyo` rather than from the browser's own calendar fields, because `monthlyExpenses` answers
 * whatever month it is handed and nothing downstream corrects a wrong one.
 *
 * The `monthlyExpenses` client is the next checkpoint's, and it moves no markup when it lands.
 */
export default defineComponent({
  name: 'MonthlyExpensesPage',

  components: {
    FuroButton,
    FuroControlBlock,
    FuroEmptyState,
    FuroErrorState,
    FuroSelect,
    FuroTable,
    NuxtLink,
  },

  setup (
    props,
    componentContext
  ) {
    definePageMeta({
      $furo: {
        pageTitle: 'Monthly expenses',
      },
    })

    const currentMonth = MonthlyExpensesPageContext.buildCurrentMonth()

    const monthValueHashReactive = reactive({
      year: currentMonth.year,
      month: currentMonth.month,
    })

    const statusReactive = reactive({
      isLoadingMonthlyExpenses: false,
    })

    const errorMessageHashReactive = reactive({
      readingMonthlyExpenses: null,
    })

    const responseHashReactive = reactive({
      expenses: [],
      totalAmount: null,
    })

    const monthlyExpensesPageContext = MonthlyExpensesPageContext.create({
      props,
      componentContext,
      monthValueHashReactive,
      statusReactive,
      errorMessageHashReactive,
      responseHashReactive,
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

      <NuxtLink
        class="link"
        :to="context.expensesLinkPath"
      >
        {{ context.expensesLinkLabel }}
      </NuxtLink>
    </header>

    <section class="panel month">
      <div class="controls">
        <FuroButton
          class="step"
          :parcel="context.previousMonthButtonParcel"
          :aria-label="context.previousMonthButtonLabel"
          @click="context.onClickPreviousMonth()"
        >
          {{ context.previousMonthButtonText }}
        </FuroButton>

        <FuroControlBlock
          class="block"
          :parcel="context.yearControlBlockParcel"
        >
          <FuroSelect
            class="input"
            :parcel="context.yearFieldParcel"
            :trigger-parcel="context.yearFieldTriggerParcel"
            @change-value="context.onChangeYear({
              payload: $event,
            })"
          />
        </FuroControlBlock>

        <FuroControlBlock
          class="block"
          :parcel="context.monthControlBlockParcel"
        >
          <FuroSelect
            class="input"
            :parcel="context.monthFieldParcel"
            :trigger-parcel="context.monthFieldTriggerParcel"
            @change-value="context.onChangeMonth({
              payload: $event,
            })"
          />
        </FuroControlBlock>

        <FuroButton
          class="step"
          :parcel="context.nextMonthButtonParcel"
          :aria-label="context.nextMonthButtonLabel"
          @click="context.onClickNextMonth()"
        >
          {{ context.nextMonthButtonText }}
        </FuroButton>
      </div>
    </section>

    <section class="panel summary">
      <h2 class="heading">
        {{ context.buildChosenMonthHeading() }}
      </h2>

      <p class="total">
        <span class="label">
          {{ context.totalAmountLabel }}
        </span>

        <output class="amount">
          {{ context.extractTotalAmountText() }}
        </output>
      </p>

      <FuroEmptyState
        v-if="context.isMonthEmpty()"
        class="placeholder"
        :parcel="context.monthEmptyStateParcel"
      />

      <FuroTable
        v-else
        class="entries"
        :parcel="context.monthlyExpenseTableParcel"
      >
        <template #cell="{ row, column, value }">
          <time
            v-if="context.isSpentOnColumn({
              column,
            })"
            class="date"
            :datetime="row.spentOn"
          >
            {{ value }}
          </time>

          <span
            v-else
            class="text"
          >
            {{ value }}
          </span>
        </template>

        <template #error>
          <FuroErrorState
            class="placeholder"
            :parcel="context.monthlyExpensesErrorStateParcel"
          >
            <template #action>
              <FuroButton
                class="retry"
                :parcel="context.retryButtonParcel"
                :aria-label="context.retryButtonLabel"
                @click="context.onClickRetry()"
              >
                {{ context.retryButtonLabel }}
              </FuroButton>
            </template>
          </FuroErrorState>
        </template>
      </FuroTable>
    </section>
  </main>
</template>

<style scoped>
/* The page frame is the one `/expenses` draws, so the two screens sit on the same background,
   the same gutters and the same column width. */
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

.unit-page > .header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: var(--size-space-medium);
  row-gap: var(--size-space-small);
}

.unit-page > .header > .heading {
  margin-block-start: 0;
  margin-block-end: 0;

  color: var(--color-foreground-title);
  font-family: var(--font-family);
  font-size: var(--font-size-2x-large);
  font-weight: var(--font-weight-bold);
}

/* The one way out of this screen, pushed to the end of the row from the layout owner rather than
   by a margin written on the item. It is drawn in the title colour rather than in the library's
   link colour, which reaches 3.68:1 on this background and does not clear the 4.5:1 a piece of
   text has to; the underline is what says it is a link, so nothing here signals by colour alone. */
.unit-page > .header > .link {
  margin-inline-start: auto;

  min-block-size: 1.5rem;

  display: flex;
  align-items: center;

  color: var(--color-foreground-title);
  font-family: var(--font-family);
  font-size: var(--font-size);
  text-decoration-line: underline;
  text-decoration-thickness: var(--size-thinnest);
  text-underline-offset: 0.2rem;
}

.unit-page > .header > .link:hover {
  color: var(--color-foreground);
  text-decoration-thickness: 0.2rem;
}

.unit-page > .header > .link:active {
  color: var(--color-foreground-secondary);
  text-decoration-thickness: 0.2rem;
}

/* The library removes the native outline on its own controls and draws a ring instead, so the
   link draws the same ring rather than a second focus language on one screen. */
.unit-page > .header > .link:focus-visible {
  outline-color: var(--color-ring);
  outline-offset: 0.2rem;
  outline-style: solid;
  outline-width: 0.2rem;
}

.unit-page > .panel {
  border-color: var(--color-border);
  border-radius: var(--size-border-radius-large);
  border-style: solid;
  border-width: var(--size-thinnest);

  box-sizing: border-box;
  inline-size: 100%;

  background-color: var(--color-card);

  display: flex;
  flex-direction: column;
  row-gap: var(--size-space-medium);

  padding-block-start: var(--size-space-large);
  padding-block-end: var(--size-space-large);
  padding-inline-start: var(--size-space-large);
  padding-inline-end: var(--size-space-large);

  @media (width < 30rem) {
    padding-block-start: var(--size-space-medium);
    padding-block-end: var(--size-space-medium);
    padding-inline-start: var(--size-space-small);
    padding-inline-end: var(--size-space-small);
  }
}

.unit-page > .panel > .heading {
  margin-block-start: 0;
  margin-block-end: 0;

  color: var(--color-foreground-title);
  font-family: var(--font-family);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-semibold);
}

/* Four controls writing one pair of numbers: a step back, the year, the month, a step forward.
   They wrap rather than shrink, so at the 320px minimum the two selects take a row each and the
   two step buttons keep their words instead of squeezing to an ellipsis. The two buttons align on
   the controls' own baseline, which sits below the labels above them. */
.unit-page > .panel > .controls {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  column-gap: var(--size-space-small);
  row-gap: var(--size-space-small);
}

.unit-page > .panel > .controls > :deep(.step) {
  box-sizing: border-box;
  block-size: var(--size-input-height-large);
}

.unit-page > .panel > .controls > :deep(.block) {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 10rem;
}

/* The library sizes its controls in a content box, and neither it nor this application ships a
   reset, so an inline size of 100% plus padding overflows the row. Restated here per control,
   exactly as `/expenses` restates it, until the application declares a reset of its own. The
   resting border is redrawn because the library's own choice reaches 1.69:1 against the card,
   under the 3:1 a control's own boundary has to clear. The replacement reaches 3.09:1. */
.unit-page > .panel > .controls > :deep(.block) > .control > .input {
  border-color: var(--color-foreground-tertiary);

  box-sizing: border-box;
  block-size: var(--size-input-height-large);
  inline-size: 100%;
}

.unit-page > .panel > .controls > :deep(.block) > .control > .input > .trigger {
  border-color: var(--color-foreground-tertiary);

  box-sizing: border-box;
  block-size: var(--size-input-height-large);
  inline-size: 100%;
}

/* The library's own focus style on a field removes the native outline and repaints the border
   alone, which changes hue without changing weight. The buttons beside them draw a ring, so the
   fields draw one too and the whole row reads as one interface. */
.unit-page > .panel > .controls > :deep(.block) > .control > .input:focus-visible,
.unit-page > .panel > .controls > :deep(.block) > .control > .input:focus-within {
  outline-color: var(--color-ring);
  outline-offset: 0.1rem;
  outline-style: solid;
  outline-width: 0.2rem;
}

/* The month's total. `<output>` rather than a second span: its implicit ARIA role is `status`,
   so the figure is announced when it changes -- and on a screen whose whole interaction is a
   re-read with no page load, nothing else says the numbers now belong to a different month. */
.unit-page > .panel > .total {
  margin-block-start: 0;
  margin-block-end: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: var(--size-space-small);
  row-gap: var(--size-space-2x-small);
}

.unit-page > .panel > .total > .label {
  color: var(--color-muted-foreground);
  font-family: var(--font-family);
  font-size: var(--font-size-small);
}

.unit-page > .panel > .total > .amount {
  color: var(--color-foreground-title);
  font-family: var(--font-family);
  font-size: var(--font-size-x-large);
  font-variant-numeric: tabular-nums;
  font-weight: var(--font-weight-bold);
}

/* The table already scrolls its own viewport, so the narrow-screen answer is to give the table a
   width it will not compress below rather than to let four columns squeeze into 20rem. Nothing is
   clipped, and nothing is unreadable. */
.unit-page > .panel > :deep(.entries) > .table-scroll > .table {
  min-inline-size: 36rem;
}

/* The empty month stands in place of the table, so it occupies the same slot in the column and
   the panel does not collapse around it. */
.unit-page > .panel > :deep(.placeholder) {
  box-sizing: border-box;
  inline-size: 100%;
}
</style>
