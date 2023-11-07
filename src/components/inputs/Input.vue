<template>
  <div
    class="form-input mb-8 px-2 position-relative w-100"
    :class="{
      'form-input--has-been-input': hasBeenInput || value !== '',
      'form-input--invalid': invalid,
      'form-input--readonly': readonly,
      'form-input--disabled': disabled,
      'form-input--clearable': clearable,
    }"
    :style="{
      '--input-background-transparent': backgroundTransparent
        ? 'transparent'
        : '',
    }"
    @click.stop="handleFocus"
    @mousedown.prevent
  >
    <div class="form-input__placeholder">
      {{ placeholder }}
    </div>

    <div class="form-input__input">
      <div v-if="!readonly && !disabled" class="position-relative">
        <input
          ref="input"
          type="text"
          class="w-100 p-0 border-0 t4"
          v-bind="$attrs"
          :value="value"
          @blur="hasBeenInput = false"
          @mousedown.stop
          v-on="{
            ...$listeners,
            input: e => {
              $emit('input', e.target.value.trim())
              $emit('inputEvent', e)
            },
          }"
        />
        <div
          v-if="clearable && value.length > 0"
          class="icons position-absolute cursor-pointer text-danger t3"
          @click="
            () => {
              $emit('input', '')
              $emit('clear')
            }
          "
        >
          ✘
        </div>
      </div>
      <template v-else>
        <slot :value="value">
          <div
            class="t4 text-truncate"
            :class="{ 'cursor-not-allowed': readonly || disabled }"
          >
            {{ value }}
          </div>
        </slot>
      </template>
    </div>
    <div
      v-if="invalid"
      class="form-input__invalid t6 text-danger w-100 text-truncate pe-3"
    >
      <i class="bi bi-exclamation-triangle-fill me-1"></i>
      {{ invalidText }}
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { INPUT_DEFAULT_TEXT } from '../constants/inputsConstants'
export default {
  name: 'FormInput',
  props: {
    value: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(''),
    placeholder: VueTypes.string.def(''),
    error: VueTypes.bool.def(false),
    clearable: VueTypes.bool.def(false),
    disabled: VueTypes.bool.def(false),
    readonly: VueTypes.bool.def(false),
    invalid: VueTypes.bool.def(false),
    invalidText: VueTypes.string.def(INPUT_DEFAULT_TEXT.INVALID),
    backgroundTransparent: VueTypes.bool.def(false),
  },
  data() {
    return {
      hasBeenInput: false,
    }
  },
  methods: {
    handleFocus() {
      if (this.readonly) return

      this.hasBeenInput = true
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.form-input {
  height: 52px;
  padding-top: 14px;
  padding-right: 12px;
  padding-bottom: 14px;
  color: $black;
  border-color: $black;
  border-radius: 2px;
  background: var(--input-background-transparent, $white);
  transition: padding 0.2s;
  cursor: text;

  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background: $black;
    position: absolute;
    left: 0px;
    bottom: 0px;
  }
  &::after {
    height: 2px;
    bottom: -4px;
  }

  &--has-been-input {
    background: var(--input-background-transparent, $white);
    padding-top: 5px;
    padding-bottom: 5px;

    .form-input__input {
      background: var(--input-background-transparent, $white);
      opacity: 1;
      transition: opacity 0.1s;
      transition-delay: 0.2s;
    }
    .form-input__placeholder {
      font-size: 12px;
      line-height: 18px;
      width: fit-content;
      color: $red;
    }
  }

  &--invalid {
    &::before,
    &::after {
      background: $red;
    }

    .form-input__input {
      display: block;
    }
    .form-input__placeholder {
      color: $red;
    }
    .form-input__invalid {
      display: block;
    }
  }

  &--disabled,
  &--readonly {
    .form-input__input {
      color: $gray-600;
    }
    .form-input__placeholder {
      color: $gray-800;
    }
  }

  &--clearable {
    .icons {
      top: 2px;
      right: 0px;
      transition: filter ease 0.1s;

      &:hover {
        filter: drop-shadow(1px 1px 0px $black);
      }
    }
  }

  &__placeholder {
    font-size: 16px;
    line-height: 24px;
    color: $red;
    transition: 0.2s;
  }

  &__input {
    opacity: 0;
    input {
      background: var(--input-background-transparent, $white);
      outline: none;
    }
  }

  &__invalid {
    display: none;
    position: absolute;
    top: 60px;
    left: 8px;
  }
}
</style>
