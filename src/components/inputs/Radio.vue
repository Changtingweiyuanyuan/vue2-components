<template>
  <div
    class="form-radio inline-block"
    :class="{ 'form-radio--disabled': disabled }"
  >
    <label class="d-flex align-items-center cursor-pointer position-relative">
      <input
        type="radio"
        class="form-radio__input position-absolute"
        :checked="$attrs.localValue ? $attrs.localValue === value : checked"
        :disabled="disabled"
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
        border-color: $black;
        border-radius: 4px;
        box-shadow: 2px 2px 1px black;

        &::after {
          content: '✔';
          display: block;
          top: -8px;
          right: 4px;
          width: 4px;
          height: 4px;
          color: $primary;
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

      &::before,
      &::after {
        display: none;
        position: absolute;
      }
    }

    &:disabled {
      + div {
        border-color: $black;

        &::before,
        &::after {
          content: '┊';
          display: block;
          top: -8px;
          right: 0px;
          width: 6px;
          height: 6px;
          color: $gray-800;
          transform: rotate(45deg);
        }
        &::after {
          top: 0px;
          left: -8px;
          right: 0px;
          transform: rotate(315deg);
        }
      }

      &:checked {
        + div {
          &::before {
            display: none;
          }
          &::after {
            content: '✔';
            display: block;
            left: unset;
            top: -8px;
            right: 2px;
            color: $gray-800;
            transform: none;
          }
        }
      }
    }
  }
}
</style>
