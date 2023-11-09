<template>
  <div class="utility-tag btn t6 m-1 py-0" :class="tagClasses" @click="onClick">
    <slot></slot>
    <span
      v-if="deleteBtn && value.length > 0"
      class="utility-tag__icons cursor-pointer t6 ms-1"
      @click.stop="onClickDeleteBtn"
    >
      ✘
    </span>
  </div>
</template>

<script>
import { oneOfType, bool, number, string, array, object } from 'vue-types'
export default {
  name: 'UtilityTag',
  props: {
    value: oneOfType([bool(), number(), string(), array(), object()]).def(''),
    clicked: bool().def(false),
    disabled: bool().def(false),
    deleteBtn: bool().def(false),
    color: string().def('warning'),
  },
  data() {
    return {
      tagColors: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'light',
        'white',
        'dark',
        'gray-dark',
      ],
      addBorderColors: ['white', 'light'],
    }
  },
  computed: {
    tagClasses() {
      return {
        clicked: this.clicked,
        disabled: this.disabled,
        [`btn-${this.color}`]: this.tagColors.includes(this.color),
        border: this.addBorderColors.includes(this.color),
      }
    },
  },
  mounted() {},
  destroyed() {},
  methods: {
    onClick() {
      if (this.disabled) return
      this.$emit('click', this.value)
    },
    onClickDeleteBtn() {
      if (this.disabled) return
      this.$emit('deleteTag', this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
.utility-tag {
  &__icons {
    top: 2px;
    right: 0px;
    transition: filter ease 0.1s, color ease 0.1s;

    &:hover {
      color: $danger;
    }
  }

  @each $color, $value in $theme-colors {
    &.btn-#{$color} {
      .utility-tag__icons {
        &:hover {
          @if $color == 'success' {
            color: $morandi-green;
          } @else if $color == 'info' {
            color: $blue;
          } @else if $color == 'danger' {
            color: $light-pink;
          }
        }
      }
    }
  }
}
</style>
