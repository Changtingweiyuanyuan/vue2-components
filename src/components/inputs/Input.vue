<template>
  <div
    class="form-input px-2 pl-4 position-relative w-100"
    :class="{
      'form-input--has-been-input': hasBeenInput || value !== '',
      'form-input--invalid': invalid,
      'form-input--readonly': readonly,
      'form-input--disabled': disabled,
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
      <input
        v-if="!readonly && !disabled"
        type="text"
        ref="input"
        class="w-100 p-0 border-0 t4"
        :value="value"
        v-bind="$attrs"
        @input="onInput"
        @blur="hasBeenInput = false"
        @mousedown.stop
      />
      <template v-else>
        <slot :value="value">
          <div class="t4 text-truncate">
            {{ value }}
          </div>
        </slot>
      </template>
    </div>
    <div v-if="invalid" class="form-input__invalid t6 text-danger">
      <i class="bi bi-exclamation-triangle-fill me-1"></i>
      <slot name="invalid" />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
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
    onInput(e) {
      let value = e.target.value.trim()

      this.$emit('input', value)
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

  &--readonly {
    height: auto;
    min-height: 52px;

    input {
      display: none;
    }
  }

  &--disabled {
    background: $gray-400;
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
    left: 8px;
    bottom: -28px;
  }
}
</style>