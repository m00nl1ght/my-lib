<template>
  <button
      v-bind="$attrs"
      :class="rootClasses"
      :type="type"
      :disabled="computedDisabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "DSButton",
  inheritAttrs: false,
  props: {
    /**
     * disabled status
     * @values true, false
     */
    disabled: {
      type: Boolean,
    },
    /**
     * Color of button
     * @values primary, secondary
     */
    variant: {
      type: String,
      validator: (value: string) => {
        return [
          'primary',
          'secondary'
        ].indexOf(value) >= 0
      }
    },
    /**
     * type of button
     * @values button, submit
     */
    type: {
      type: String,
      default: 'button',
      validator: (value: string) => {
        return [
          'button',
          'submit',
          'reset'
        ].indexOf(value) >= 0
      }
    },
    /**
     * Size of button
     * @values sm, md, lg
     */
    size: {
      type: String,
      validator: (value: string) => {
        return [
          'sm',
          'md',
          'lg'
        ].indexOf(value) >= 0
      },
    }
  },
  computed: {
    rootClasses(): string[] {
      return [
        'ds-button',
        'ds-button--' + this.size,
        'ds-button--' + this.variant
      ]
    },
    computedDisabled() {
      if (this.disabled) return true
      return null
    }
  }
});
</script>