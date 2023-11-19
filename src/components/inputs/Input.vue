<template>
  <div
    class="form-input mb-8 px-2 position-relative w-100"
    :class="{
      'form-input--without-placeholder': !placeholder,
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
    <div v-if="placeholder" class="form-input__placeholder">
      {{ placeholder }}
    </div>

    <div class="form-input__input">
      <div v-if="!readonly && !disabled" class="position-relative">
        <input
          ref="input"
          type="text"
          class="w-100 p-0 border-0 t5"
          v-bind="$attrs"
          :value="value"
          @blur="hasBeenInput = false"
          @mousedown.stop
          v-on="{
            ...$listeners,
            input: e => {
              $emit('inputValue', e.target.value.trim())
              $emit('inputEvent', e)
            },
          }"
        />
        <div
          v-if="clearable && value.length > 0"
          class="icons position-absolute cursor-pointer text-danger t3"
          @click="
            () => {
              $emit('inputValue', '')
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
            class="t5 text-truncate"
            :class="{
              'cursor-not-allowed': disabled,
              'cursor-default': readonly,
            }"
          >
            {{ value }}
          </div>
        </slot>
      </template>
    </div>
    <div
      v-if="invalid"
      class="form-input__invalid t6 text-danger w-100 text-truncate pe-3"
      :style="{ top: placeholder ? '54px' : '38px' }"
    >
      <i class="bi bi-exclamation-triangle-fill me-1"></i>{{ invalidText }}
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { INPUT_DEFAULT_TEXT } from '../constants/inputsConstants'
export default {
  name: 'FormInput',
  model: {
    prop: 'value',
    event: 'inputValue',
  },
  props: {
    value: VueTypes.string.def(''),
    placeholder: VueTypes.string.def(''),
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
      if (this.readonly || this.disabled) return

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
  height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
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

  &--without-placeholder {
    height: 34px;
    padding-top: 5px;
    padding-bottom: 5px;
    line-height: 1;
  }

  &--has-been-input {
    background: var(--input-background-transparent, $white);
    padding-top: 5px;
    padding-bottom: 5px;

    .form-input__input {
      line-height: 1;
      background: var(--input-background-transparent, $white);
      opacity: 1;
      transition: opacity 0.1s;
      transition-delay: 0.2s;

      & input,
      & .icons {
        line-height: 1;
      }
    }
    .form-input__placeholder {
      font-size: 12px;
      line-height: 18px;
      width: fit-content;
      color: $danger;
    }
  }

  &--invalid {
    &::before,
    &::after {
      background: $danger;
    }

    .form-input__input {
      display: block;
    }
    .form-input__placeholder {
      color: $danger;
    }
    .form-input__invalid {
      display: block;
    }
  }

  &--disabled,
  &--readonly {
    .form-input__placeholder {
      color: $gray-800;
    }
  }

  &--disabled {
    &::before,
    &::after {
      background: $gray-600;
    }
    .form-input__input {
      color: $gray-600;
    }
  }

  &--readonly {
    .form-input__input {
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
    font-weight: $font-weight-normal;
    line-height: 24px;
    color: $danger;
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
    left: 8px;
  }
}
</style>
