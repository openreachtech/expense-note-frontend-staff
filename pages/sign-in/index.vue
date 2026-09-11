<script>
import {
  defineComponent,
} from 'vue'

import {
  definePageMeta,
} from '#imports'

import SignInPageContext from './SignInPageContext.js'

export default defineComponent({
  name: 'SignInPage',

  setup (
    props,
    componentContext
  ) {
    definePageMeta({
      $furo: {
        pageTitle: 'Sign in',
      },
    })

    const signInPageContext = SignInPageContext.create({
      props,
      componentContext,
    })

    signInPageContext.setupComponent()

    return {
      context: signInPageContext,
    }
  },
})
</script>

<template>
  <div class="unit-page">
    <h1 class="title">
      {{ context.pageTitle }}
    </h1>
  </div>
</template>
