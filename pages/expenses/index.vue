<script>
import {
  defineComponent,
  reactive,
} from 'vue'

import {
  useRouter,
} from 'vue-router'

import {
  definePageMeta,
} from '#imports'

import {
  NuxtLink,
} from '#components'

import {
  useGraphqlClient,
} from '@openreachtech/furo-nuxt'

import {
  FuroAlertDialog,
  FuroButton,
  FuroControlBlock,
  FuroDatePicker,
  FuroEmptyState,
  FuroErrorState,
  FuroNumberField,
  FuroPagination,
  FuroSelect,
  FuroTable,
  FuroTextField,
} from '@openreachtech/furo-vue'

import AppAccessTokenClerk from '~/app/tools/storage/AppAccessTokenClerk.js'

import ExpensesQueryGraphqlLauncher from '~/app/graphql/client/queries/expenses/ExpensesQueryGraphqlLauncher.js'
import ExpenseCategoriesQueryGraphqlLauncher from '~/app/graphql/client/queries/expenseCategories/ExpenseCategoriesQueryGraphqlLauncher.js'
import RecordExpenseMutationGraphqlLauncher from '~/app/graphql/client/mutations/recordExpense/RecordExpenseMutationGraphqlLauncher.js'
import CorrectExpenseMutationGraphqlLauncher from '~/app/graphql/client/mutations/correctExpense/CorrectExpenseMutationGraphqlLauncher.js'
import RemoveExpenseMutationGraphqlLauncher from '~/app/graphql/client/mutations/removeExpense/RemoveExpenseMutationGraphqlLauncher.js'
import SignOutMutationGraphqlLauncher from '~/app/graphql/client/mutations/signOut/SignOutMutationGraphqlLauncher.js'

import AppRefusalMessage from '~/components/units/AppRefusalMessage.vue'

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
 *
 * WHAT GOES IN THIS TEMPLATE IS ALREADY DESIGNED, in `ai/contexts/uiux-context-expense-entry.md`.
 * Checkpoint 12 broke this screen into components and matched every part against the twenty
 * component skills the kit equips: eight library components serve it, `AppRefusalMessage` serves
 * the rest, and NOTHING here is a component of this application's own. That document also carries
 * the facts read out of the installed `@openreachtech/furo-vue` that its skills get wrong -- the
 * `row-actions` slot no skill lists, and a date picker whose `maxValue` flags a late date rather
 * than blocking one. Read it before adding markup; it is loaded automatically by the skill that
 * generates UI here and by the one that audits it, which is why it lives where it does.
 *
 * -------------------------------------------------------------------------------------------
 * The four reactive objects, and why they are here rather than on the context
 * -------------------------------------------------------------------------------------------
 *
 * They are created here and handed over, the way `/sign-in` already does, so the context owns the
 * reading of them and the component owns their lifetime. Every one of the screen's four states is
 * reachable by the value of one of these fields, and checkpoint 16 filled those values in from the
 * six GraphQL clients below without moving any markup at all.
 *
 * The clients, the router and the token clerk are created here for the same reason the reactive
 * objects are: a context never calls a composable and never constructs its own collaborators. Six
 * clients, one per operation of section 11.2's call table, are grouped into one `graphqlClientHash`
 * keyed by the operation name.
 *
 * | State | Reached when |
 * | :-- | :-- |
 * | filled | `responseHashReactive.expenses` holds entries |
 * | loading | `statusReactive.isLoadingExpenses` -- and per-button, the four other flags |
 * | empty | the read answered, `expenses` is empty, nothing is loading and nothing failed |
 * | failed | `errorMessageHashReactive.readingExpenses` holds a sentence |
 *
 * Those four are the ENTRIES' four states. The form has a fifth condition of its own, which they
 * do not cover: `errorMessageHashReactive.readingExpenseCategories` holds a sentence, meaning the
 * categories could not be read and the select has nothing to offer. It keeps a key of its own
 * rather than borrowing `submittingExpense`, because the form empties that one at the top of every
 * submit -- so a category failure kept there survived exactly until somebody pressed the button
 * the message was telling them they could not use.
 */
export default defineComponent({
  name: 'ExpensesPage',

  components: {
    AppRefusalMessage,
    FuroAlertDialog,
    FuroButton,
    FuroControlBlock,
    FuroDatePicker,
    FuroEmptyState,
    FuroErrorState,
    FuroNumberField,
    FuroPagination,
    FuroSelect,
    FuroTable,
    FuroTextField,
    NuxtLink,
  },

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

    const formValueHashReactive = reactive({
      spentOn: null,
      amount: null,
      expenseCategoryId: null,
      memo: null,
    })

    const statusReactive = reactive({
      isLoadingExpenses: false,
      isLoadingExpenseCategories: false,
      isRecordingExpense: false,
      isRemovingExpense: false,
      isSigningOut: false,
      correctingExpenseId: null,
      removingExpenseId: null,
    })

    const errorMessageHashReactive = reactive({
      submittingExpense: null,
      removingExpense: null,
      readingExpenses: null,
      readingExpenseCategories: null,
    })

    const responseHashReactive = reactive({
      expenses: [],
      expensesPagination: null,
      expenseCategories: [],
    })

    const router = useRouter()

    const expensesGraphqlClient = useGraphqlClient({
      Launcher: ExpensesQueryGraphqlLauncher,
    })

    const expenseCategoriesGraphqlClient = useGraphqlClient({
      Launcher: ExpenseCategoriesQueryGraphqlLauncher,
    })

    const recordExpenseGraphqlClient = useGraphqlClient({
      Launcher: RecordExpenseMutationGraphqlLauncher,
    })

    const correctExpenseGraphqlClient = useGraphqlClient({
      Launcher: CorrectExpenseMutationGraphqlLauncher,
    })

    const removeExpenseGraphqlClient = useGraphqlClient({
      Launcher: RemoveExpenseMutationGraphqlLauncher,
    })

    const signOutGraphqlClient = useGraphqlClient({
      Launcher: SignOutMutationGraphqlLauncher,
    })

    const graphqlClientHash = {
      expenses: expensesGraphqlClient,
      expenseCategories: expenseCategoriesGraphqlClient,
      recordExpense: recordExpenseGraphqlClient,
      correctExpense: correctExpenseGraphqlClient,
      removeExpense: removeExpenseGraphqlClient,
      signOut: signOutGraphqlClient,
    }

    const accessTokenClerk = AppAccessTokenClerk.create()

    const expensesPageContext = ExpensesPageContext.create({
      props,
      componentContext,
      router,
      formValueHashReactive,
      statusReactive,
      errorMessageHashReactive,
      responseHashReactive,
      graphqlClientHash,
      accessTokenClerk,
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
    <header class="header">
      <h1 class="heading">
        {{ context.pageTitle }}
      </h1>

      <NuxtLink
        class="link"
        :to="context.monthlyExpensesLinkPath"
      >
        {{ context.monthlyExpensesLinkLabel }}
      </NuxtLink>

      <FuroButton
        class="signout"
        :parcel="context.signOutButtonParcel"
        :aria-label="context.signOutButtonLabel"
        @click="context.onClickSignOut()"
      >
        {{ context.signOutButtonLabel }}
      </FuroButton>
    </header>

    <section class="panel">
      <h2 class="heading">
        {{ context.formHeading }}
      </h2>

      <form
        class="unit-form"
        novalidate
        @submit.prevent="context.onSubmitForm()"
      >
        <FuroControlBlock
          class="block"
          :parcel="context.spentOnControlBlockParcel"
        >
          <FuroDatePicker
            :id="context.spentOnFieldId"
            class="input"
            :parcel="context.spentOnFieldParcel"
            :trigger-parcel="context.spentOnFieldTriggerParcel"
            @change-value="context.onChangeSpentOn({
              payload: $event,
            })"
          />
        </FuroControlBlock>

        <FuroControlBlock
          class="block"
          :parcel="context.amountControlBlockParcel"
        >
          <FuroNumberField
            class="input"
            :parcel="context.amountFieldParcel"
            @change-value="context.onChangeAmount({
              payload: $event,
            })"
          />
        </FuroControlBlock>

        <FuroControlBlock
          class="block"
          :parcel="context.expenseCategoryControlBlockParcel"
        >
          <FuroSelect
            class="input"
            :parcel="context.expenseCategoryFieldParcel"
            :trigger-parcel="context.expenseCategoryFieldTriggerParcel"
            @change-value="context.onChangeExpenseCategory({
              payload: $event,
            })"
          />
        </FuroControlBlock>

        <div class="unavailable">
          <AppRefusalMessage
            :id="context.expenseCategoriesRefusalRegionId"
            class="refusal"
            :message="context.expenseCategoriesRefusalMessage"
          />

          <FuroButton
            v-if="context.hasExpenseCategoriesFailed()"
            class="retry"
            :parcel="context.retryExpenseCategoriesButtonParcel"
            :aria-label="context.retryExpenseCategoriesButtonLabel"
            @click="context.onClickRetryExpenseCategories()"
          >
            {{ context.retryExpenseCategoriesButtonLabel }}
          </FuroButton>
        </div>

        <FuroControlBlock
          class="block memo"
          :parcel="context.memoControlBlockParcel"
        >
          <FuroTextField
            :id="context.memoFieldId"
            class="input"
            :parcel="context.memoFieldParcel"
            :maxlength="context.memoMaximumLength"
            :aria-describedby="context.formRefusalRegionId"
            @change-value="context.onChangeMemo({
              payload: $event,
            })"
          />
        </FuroControlBlock>

        <AppRefusalMessage
          :id="context.formRefusalRegionId"
          class="refusal"
          :message="context.formRefusalMessage"
        />

        <div class="actions">
          <FuroButton
            class="submit"
            :parcel="context.submitButtonParcel"
            :aria-label="context.submitButtonLabel"
          >
            {{ context.submitButtonLabel }}
          </FuroButton>

          <FuroButton
            v-if="context.isCorrectingExpense()"
            class="cancel"
            :parcel="context.cancelCorrectionButtonParcel"
            :aria-label="context.cancelCorrectionButtonLabel"
            @click="context.onClickCancelCorrection()"
          >
            {{ context.cancelCorrectionButtonLabel }}
          </FuroButton>
        </div>
      </form>
    </section>

    <section class="panel">
      <h2 class="heading">
        {{ context.entriesHeading }}
      </h2>

      <p class="note">
        {{ context.entriesOrderNote }}
      </p>

      <AppRefusalMessage
        :id="context.entriesRefusalRegionId"
        class="refusal"
        :message="context.entriesRefusalMessage"
      />

      <FuroTable
        class="entries"
        :parcel="context.expenseTableParcel"
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

        <template #row-actions="{ row }">
          <FuroButton
            class="action"
            :parcel="context.correctRowButtonParcel"
            :aria-label="context.extractCorrectRowButtonLabel({
              row,
            })"
            @click="context.onClickCorrect({
              row,
            })"
          >
            {{ context.correctRowButtonLabel }}
          </FuroButton>

          <FuroButton
            class="action"
            :parcel="context.removeRowButtonParcel"
            :aria-label="context.extractRemoveRowButtonLabel({
              row,
            })"
            @click="context.onClickRemove({
              row,
            })"
          >
            {{ context.removeRowButtonLabel }}
          </FuroButton>
        </template>

        <template #empty>
          <FuroEmptyState
            class="placeholder"
            :parcel="context.expensesEmptyStateParcel"
          />
        </template>

        <template #error>
          <FuroErrorState
            class="placeholder"
            :parcel="context.expensesErrorStateParcel"
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

        <template #pagination>
          <FuroPagination
            v-if="context.hasMultipleExpensePages()"
            class="pages"
            :parcel="context.expensePaginationParcel"
            :aria-label="context.paginationLabel"
            @page:change="context.onChangePage({
              payload: $event,
            })"
          />
        </template>
      </FuroTable>
    </section>

    <FuroAlertDialog
      class="confirmation"
      :parcel="context.removalConfirmationParcel"
      @confirm="context.onConfirmRemoval()"
      @cancel="context.onCancelRemoval()"
    />
  </main>
</template>

<style scoped>
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

/* The one link out of this screen, and the spacing that pushes it and the control
   beside it to the end of the row. The margin is declared from the layout owner
   rather than on the item, which is where spacing a `gap` cannot express belongs.
   It is drawn in the title colour rather than in the library's link colour, which
   reaches 3.68:1 on this background and does not clear the 4.5:1 a piece of text
   has to; the underline is what says it is a link, so nothing signals by colour
   alone. */
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

/* The library removes the native outline on its own controls and draws a ring
   instead, so the link draws the same ring rather than a second focus language
   on one screen. */
.unit-page > .header > .link:focus-visible {
  outline-color: var(--color-ring);
  outline-offset: 0.2rem;
  outline-style: solid;
  outline-width: 0.2rem;
}

/* The sign-out control keeps the standard control height so it lines up with the
   heading beside it, and it stays quiet: one action on this screen carries the
   primary weight, and it is the one the member of staff came here for. */
.unit-page > .header > :deep(.signout) {
  box-sizing: border-box;
  block-size: var(--size-input-height-medium);
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

/* The order the entries are in, said on the screen rather than left implied. */
.unit-page > .panel > .note {
  margin-block-start: 0;
  margin-block-end: 0;

  color: var(--color-muted-foreground);
  font-family: var(--font-family);
  font-size: var(--font-size-small);
}

.unit-page > .panel > :deep(.refusal) {
  margin-block-start: 0;
  margin-block-end: 0;
}

/* The table already scrolls its own viewport, so the narrow-screen answer is to give
   the table a width it will not compress below rather than to let five columns squeeze
   into 20rem. Nothing is clipped, and nothing is unreadable. */
.unit-page > .panel > :deep(.entries) > .table-scroll > .table {
  min-inline-size: 42rem;
}

/* The dialog's root element is rendered whether or not the dialog is open, and its
   content is portalled out of here, so it is kept out of the column's own spacing. */
.unit-page > :deep(.confirmation) {
  display: contents;
}

/* Two fields to a row on a desk browser, one to a row on a phone. The memo takes the
   full row in both, because it is the field with the most to say. */
.unit-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--size-space-medium);
  row-gap: var(--size-space-medium);

  @media (width < 40rem) {
    grid-template-columns: 1fr;
  }
}

.unit-form > :deep(.block.memo) {
  grid-column-start: 1;
  grid-column-end: -1;
}

.unit-form > :deep(.refusal) {
  grid-column-start: 1;
  grid-column-end: -1;

  margin-block-start: 0;
  margin-block-end: 0;
}

/* The one condition the entries' four states do not cover: the categories themselves could not be
   read, so the select above has nothing to offer. It sits directly under that field, holds a
   message region of its own -- rendered whether or not it has text, so the field's
   aria-describedby points at something that exists -- and carries the only way out of the
   condition that is not a reload. */
.unit-form > .unavailable {
  grid-column-start: 1;
  grid-column-end: -1;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: var(--size-space-small);
  row-gap: var(--size-space-small);
}

.unit-form > .unavailable > :deep(.refusal) {
  margin-block-start: 0;
  margin-block-end: 0;
}

.unit-form > .actions {
  grid-column-start: 1;
  grid-column-end: -1;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: var(--size-space-small);
  row-gap: var(--size-space-small);
}

/* The library sizes its controls in a content box, and neither it nor this application
   ships a reset, so an inline size of 100% plus padding overflows every row. Restated
   here per control until the application declares a reset of its own. The resting border
   is redrawn because the library's own choice reaches 1.69:1 against the card, under the
   3:1 a control's own boundary has to clear. The replacement reaches 3.09:1. */
.unit-form > :deep(.block) > .control > .input {
  border-color: var(--color-foreground-tertiary);

  box-sizing: border-box;
  block-size: var(--size-input-height-large);
  inline-size: 100%;
}

.unit-form > :deep(.block) > .control > .input > .field,
.unit-form > :deep(.block) > .control > .input > .trigger {
  border-color: var(--color-foreground-tertiary);

  box-sizing: border-box;
  block-size: var(--size-input-height-large);
  inline-size: 100%;
}

.unit-form > :deep(.block) > .control > .input.invalid,
.unit-form > :deep(.block) > .control > .input > .field.invalid,
.unit-form > :deep(.block) > .control > .input > .trigger.invalid {
  border-color: var(--color-destructive);
}

/* The library's own focus style on a field removes the native outline and repaints the
   border alone, which changes hue without changing weight. The buttons beside them draw
   a ring, so the fields draw one too and the two read as the same interface. */
.unit-form > :deep(.block) > .control > .input:focus-visible,
.unit-form > :deep(.block) > .control > .input:focus-within {
  outline-color: var(--color-ring);
  outline-offset: 0.1rem;
  outline-style: solid;
  outline-width: 0.2rem;
}

.unit-form > .actions > :deep(.submit),
.unit-form > .actions > :deep(.cancel) {
  box-sizing: border-box;
  block-size: var(--size-input-height-large);
}
</style>
