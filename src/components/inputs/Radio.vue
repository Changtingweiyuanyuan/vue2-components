<template>
  <div
    class="form-radio inline-block"
    :class="{ 'form-radio--disabled': disabled }"
  >
    <label class="d-flex align-items-center cursor-pointer position-relative">
      <input
        type="radio"
        class="form-radio__input position-absolute"
        :disabled="disabled"
        :checked="$attrs.localValue ? $attrs.localValue === value : checked"
        v-bind="$attrs"
        @change="handleChange"
      />
      <div :class="{ 'me-2': $slots.default }"></div>
      <slot />
    </label>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'FormRadio',
  model: {
    prop: 'localValue',
    event: 'change',
  },
  props: {
    value: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(''),
    checked: VueTypes.bool.def(false),
    disabled: VueTypes.bool.def(false),
  },
  methods: {
    handleChange(event) {
      const nullValue = typeof this.value === 'number' ? 0 : ''
      this.$emit('change', event.target.checked ? this.value : nullValue)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-radio {
  user-select: none;

  &--disabled {
    label {
      cursor: not-allowed;
    }
  }
  input[type='radio'] {
    width: 16px;
    height: 16px;
    visibility: hidden;

    &:checked {
      + div {
        background-color: $white;
        border-color: $primary;
        border-radius: 4px;
        box-shadow: 2px 2px 1px black;

        &::after {
          display: block;
        }
      }
    }

    + div {
      display: inline-block;
      position: relative;
      width: 16px;
      height: 16px;
      border-radius: 4px;
      background-color: $white;
      border: 1.5px $black solid;
      transition: background-color ease 0.2s, border-color ease 0.2s;

      &::after {
        content: '✔';
        display: none;
        position: absolute;
        top: -8px;
        right: 4px;
        width: 4px;
        height: 4px;
        color: $black;
      }
    }

    &:disabled {
      + div {
        border-color: $gray-600;
      }

      &:checked {
        + div {
          background-color: $gray-600;
        }
      }
    }
  }
}
</style>
