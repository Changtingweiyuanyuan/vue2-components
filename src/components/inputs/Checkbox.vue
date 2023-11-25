<template>
  <div class="form-checkbox" :class="{ 'form-checkbox--disabled': disabled }">
    <label
      class="form-checkbox__label d-flex align-items-center cursor-pointer position-relative t4"
    >
      <input
        type="checkbox"
        class="form-checkbox__label__input position-absolute"
        :true-value="trueValue"
        :false-value="falseValue"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        @change="handleChange"
      />
      <div
        class="t4"
        :class="{ 'me-2': $slots.default, [`check-${color}`]: color }"
      ></div>
      <slot />
    </label>
  </div>
</template>

<script>
import { oneOfType, bool, number, string, array, object } from 'vue-types'
export default {
  name: 'FormCheckbox',
  model: {
    prop: 'localValue',
    event: 'changeValue',
  },
  props: {
    // localValue: oneOfType([bool(), number(), string(), array()]).def(false),
    localValue: array().def([]),
    value: oneOfType([bool(), number(), string(), array(), object()]).def(''),
    trueValue: oneOfType([number(), string()]).def(''),
    falseValue: oneOfType([number(), string()]).def(''),
    disabled: bool().def(false),
    color: string().def('primary'),
  },
  computed: {
    checked() {
      // checked時，若localValue(v-model傳入值)為陣列型態 把value加入localValue中
      // localValue不是陣列型態 將trueValue賦值給localValue
      if (this.localValue instanceof Array && this.value) {
        // localValue:[{text:'text', value: value}], value:{text:'text', value: value}
        if (this.value?.value) {
          return !!this.localValue
            .map(e => e.value)
            .find(
              value =>
                JSON.stringify(value) === JSON.stringify(this.value.value)
            )
        }
        return !!this.localValue.find(
          value => String(value) === String(this.value)
        )
      } else {
        return this.localValue === this.trueValue
      }
    },
  },
  methods: {
    arrayHandler(checked) {
      const value = checked
        ? [...this.localValue, this.value]
        : this.value?.value
        ? this.localValue.filter(item => item.value != this.value.value)
        : this.localValue.filter(item => item != this.value)

      this.$emit('changeValue', value)
    },
    defaultHandler(checked) {
      // 若有自定義 true/false value，則使用自定義的值
      const value = (checked ? this.trueValue : this.falseValue) || checked
      this.$emit('changeValue', value)
    },
    handleChange(event) {
      const { checked } = event.target

      if (this.localValue instanceof Array) {
        this.arrayHandler(checked)
      } else {
        this.defaultHandler(checked)
      }

      this.$emit('changeEvent', event)
    },
  },
}
</script>

<style lang="scss" scoped>
.form-checkbox {
  user-select: none;
  word-break: keep-all;

  &--disabled {
    label {
      cursor: not-allowed;
    }
  }

  input[type='checkbox'] {
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
          font-family: Avenir, Helvetica, Arial, sans-serif;
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
        color: red !important;
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
            font-family: Avenir, Helvetica, Arial, sans-serif;
          }
        }
      }
    }
  }
}
</style>
