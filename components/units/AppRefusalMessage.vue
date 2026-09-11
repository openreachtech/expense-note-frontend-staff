<script>
import {
  defineComponent,
} from 'vue'

/**
 * A form-level refusal message.
 *
 * The first component of this application's own. It exists because specification section 10
 * requires an address with no account and a correct address with the wrong password to be
 * refused identically: the refusal therefore belongs to the form, not to one field, and
 * FuroControlBlock's errorMessages attaches to exactly one control.
 *
 * Two things about it are deliberate.
 *
 * The region is always rendered, empty or not. An assertive live region has to exist before
 * the text arrives for a screen reader to announce the text reliably, and an id that is
 * always present is what lets each field carry a stable aria-describedby.
 *
 * It reserves one line of space whether or not it holds a message, so a refusal appearing
 * moves nothing around it.
 */
export default defineComponent({
  name: 'AppRefusalMessage',

  props: {
    message: {
      /** @type {import('vue').PropType<string | null>} */
      type: String,
      default: null,
    },
  },
})
</script>

<template>
  <p
    class="unit-refusal"
    role="alert"
  >
    {{ message }}
  </p>
</template>

<style scoped>
.unit-refusal {
  min-block-size: var(--size-space-relaxed);

  color: var(--color-error-subtle-foreground);
  font-family: var(--font-family);
  font-size: var(--font-size);
}
</style>
