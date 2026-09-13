<script>
import {
  defineComponent,
  reactive,
} from 'vue'

import {
  useRoute,
  useRouter,
} from 'vue-router'

import {
  definePageMeta,
} from '#imports'

import {
  useGraphqlClient,
} from '@openreachtech/furo-nuxt'

import {
  FuroButton,
  FuroControlBlock,
  FuroEmailField,
  FuroPasswordField,
} from '@openreachtech/furo-vue'

import AppAccessTokenClerk from '~/app/tools/storage/AppAccessTokenClerk.js'

import SignInMutationGraphqlLauncher from '~/app/graphql/client/mutations/signIn/SignInMutationGraphqlLauncher.js'
import RenewAccessTokenMutationGraphqlLauncher from '~/app/graphql/client/mutations/renewAccessToken/RenewAccessTokenMutationGraphqlLauncher.js'
import SignedInStaffMemberQueryGraphqlLauncher from '~/app/graphql/client/queries/signedInStaffMember/SignedInStaffMemberQueryGraphqlLauncher.js'

import AppRefusalMessage from '~/components/units/AppRefusalMessage.vue'

import SignInPageContext from './SignInPageContext.js'

export default defineComponent({
  name: 'SignInPage',

  components: {
    AppRefusalMessage,
    FuroButton,
    FuroControlBlock,
    FuroEmailField,
    FuroPasswordField,
  },

  setup (
    props,
    componentContext
  ) {
    definePageMeta({
      $furo: {
        pageTitle: 'Sign in',
      },
    })

    const formValueHashReactive = reactive({
      email: null,
      password: null,
    })

    const statusReactive = reactive({
      isSigningIn: false,
    })

    const errorMessageHashReactive = reactive({
      signIn: null,
    })

    const route = useRoute()
    const router = useRouter()

    const signInGraphqlClient = useGraphqlClient({
      Launcher: SignInMutationGraphqlLauncher,
    })

    const renewAccessTokenGraphqlClient = useGraphqlClient({
      Launcher: RenewAccessTokenMutationGraphqlLauncher,
    })

    const signedInStaffMemberGraphqlClient = useGraphqlClient({
      Launcher: SignedInStaffMemberQueryGraphqlLauncher,
    })

    const graphqlClientHash = {
      signIn: signInGraphqlClient,
      renewAccessToken: renewAccessTokenGraphqlClient,
      signedInStaffMember: signedInStaffMemberGraphqlClient,
    }

    const accessTokenClerk = AppAccessTokenClerk.create()

    const signInPageContext = SignInPageContext.create({
      props,
      componentContext,
      route,
      router,
      formValueHashReactive,
      statusReactive,
      errorMessageHashReactive,
      graphqlClientHash,
      accessTokenClerk,
    })

    signInPageContext.setupComponent()

    return {
      context: signInPageContext,
    }
  },
})
</script>

<template>
  <main class="unit-page">
    <section class="panel">
      <h1 class="heading">
        {{ context.pageTitle }}
      </h1>

      <form
        class="unit-form"
        novalidate
        @submit.prevent="context.onSubmitForm()"
      >
        <FuroControlBlock
          class="field"
          :parcel="context.emailControlBlockParcel"
        >
          <FuroEmailField
            :id="context.emailFieldId"
            class="input"
            :parcel="context.emailFieldParcel"
            :aria-describedby="context.refusalRegionId"
            aria-required="true"
            autocomplete="username"
            @change-value="context.onChangeEmail({
              payload: $event,
            })"
          />
        </FuroControlBlock>

        <FuroControlBlock
          class="field"
          :parcel="context.passwordControlBlockParcel"
        >
          <FuroPasswordField
            :id="context.passwordFieldId"
            class="input"
            :parcel="context.passwordFieldParcel"
            :aria-describedby="context.refusalRegionId"
            aria-required="true"
            autocomplete="current-password"
            @change-value="context.onChangePassword({
              payload: $event,
            })"
          />
        </FuroControlBlock>

        <AppRefusalMessage
          :id="context.refusalRegionId"
          class="refusal"
          :message="context.refusalMessage"
        />

        <FuroButton
          class="submit"
          :parcel="context.submitButtonParcel"
          :aria-label="context.submitButtonLabel"
        >
          {{ context.submitButtonLabel }}
        </FuroButton>
      </form>
    </section>
  </main>
</template>

<style scoped>
.unit-page {
  min-block-size: var(--size-screen-height);

  background-color: var(--color-background);

  display: flex;
  align-items: center;
  justify-content: center;

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

.unit-page > .panel {
  border-color: var(--color-border);
  border-radius: var(--size-border-radius-large);
  border-style: solid;
  border-width: var(--size-thinnest);

  box-sizing: border-box;
  inline-size: 100%;
  max-inline-size: 24rem;

  background-color: var(--color-card);

  display: flex;
  flex-direction: column;
  row-gap: var(--size-space-large);

  padding-block-start: var(--size-space-x-large);
  padding-block-end: var(--size-space-x-large);
  padding-inline-start: var(--size-space-large);
  padding-inline-end: var(--size-space-large);

  @media (width < 30rem) {
    padding-block-start: var(--size-space-large);
    padding-block-end: var(--size-space-large);
    padding-inline-start: var(--size-space-medium);
    padding-inline-end: var(--size-space-medium);
  }
}

.unit-page > .panel > .heading {
  margin-block-start: 0;
  margin-block-end: 0;

  color: var(--color-foreground-title);
  font-family: var(--font-family);
  font-size: var(--font-size-2x-large);
  font-weight: var(--font-weight-bold);
}

.unit-form {
  display: flex;
  flex-direction: column;
  row-gap: var(--size-space-medium);
}

/* The library sizes its controls in a content box, and neither it nor this application
   ships a reset, so an inline size of 100% plus padding overflows every row. Restated
   here per control until the application declares a reset of its own. The resting border
   is redrawn because the library's own choice reaches 1.69:1 against the card, under the
   3:1 a control's own boundary has to clear. */
.unit-form > :deep(.field) > .control > .input {
  border-color: var(--color-foreground-tertiary);

  box-sizing: border-box;
  block-size: var(--size-input-height-large);
}

.unit-form > :deep(.field) > .control > .input.invalid {
  border-color: var(--color-destructive);
}

/* The library's own focus style on a field removes the native outline and repaints the
   border alone, which changes hue without changing weight. The submit button beside it
   draws a ring, so the fields draw one too and the two read as the same interface. */
.unit-form > :deep(.field) > .control > .input:focus-visible {
  outline-color: var(--color-ring);
  outline-offset: 0.1rem;
  outline-style: solid;
  outline-width: 0.2rem;
}

.unit-form > :deep(.refusal) {
  margin-block-start: 0;
  margin-block-end: 0;
}

.unit-form > :deep(.submit) {
  box-sizing: border-box;
  block-size: var(--size-input-height-large);
  inline-size: 100%;
}
</style>
