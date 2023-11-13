<template>
  <div
    class="form-dropdown w-100 position-relative rounded my-2"
    :class="{ 'form-dropdown--menu-open my-1': isMenuOpen }"
    @click="onDropdownClick"
  >
    <!-- @focus="onFocus" -->
    <!-- @keydown="onKeyup" 搜尋功能 -->
    <div
      ref="input"
      class="form-dropdown__control border rounded px-2 py-1"
      :class="[{ 'form-dropdown__control--disabled': disabled }]"
      @mousedown.prevent
    >
      <span class="h4">
        {{ controlFieldText }}
      </span>
    </div>

    <transition name="fade" :duration="100">
      <div
        v-show="isMenuOpen && selectOptions.length > 0"
        class="form-dropdown__menu w-100 position-absolute border rounded zindex-dropdown bg-white"
      >
        <div
          v-for="(option, i) in selectOptions"
          :key="i"
          class="form-dropdown__option px-3 py-1"
          :class="{
            'bg-success-subtle': hoveredOptionIndex == i,
            'form-dropdown__option__text--hover':
              hoveredOptionIndex == i && i != selectOptions.length - 1,
          }"
          @mouseover="onHover(i)"
          @click="onOptionClick(option)"
        >
          <span class="form-dropdown__option__text">{{ option.text }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { bool, string, array, any, arrayOf, shape } from 'vue-types'
export default {
  name: 'UtilityTag',
  props: {
    placeholder: string().def('placeholder'),
    selectOptions: array().def([]),
    selectType: string().def('single'),
    multiValue: arrayOf(
      shape({
        text: string().def(''),
        value: any().def(0),
      })
    ).def([]),
    listShow: bool().def(true),
    disabled: bool().def(false),
    //   highLight: bool().def(false),
    //   deleteBtn: bool().def(false),
    //   color: string().def('warning'),
  },
  data() {
    return {
      isMenuOpen: false,
      hoveredOptionIndex: 0,
    }
  },
  computed: {
    controlFieldText() {
      console.log('multiValue', this.multiValue)
      return this.multiValue.length > 0
        ? this.multiValue[0].text
        : this.placeholder
    },
  },
  watch: {
    isMenuOpen(newValue) {
      if (newValue) {
        document.addEventListener('click', this.clickHandler)
      } else {
        document.removeEventListener('click', this.clickHandler)
      }
    },
    selectOptions() {
      console.log(this.selectOptions)
      this.hoveredOptionIndex = -1
    },
  },
  mounted() {},
  destroyed() {
    document.removeEventListener('click', this.clickHandler)
  },
  methods: {
    clickHandler(e) {
      let isFormDropdown = document
        .querySelector('.form-dropdown')
        .contains(e.target)

      if (!isFormDropdown) {
        this.isMenuOpen = false
      }
    },
    onDropdownClick() {
      if (!this.disabled) {
        this.isMenuOpen = !this.isMenuOpen
      }
    },
    onOptionClick(option) {
      this.$emit('change', [option])
    },
    onFocus() {
      console.log('on focus')
      if (!this.disabled) {
        this.isMenuOpen = !this.isMenuOpen
      }
    },
    onBlur() {
      console.log('on blur')
      this.isMenuOpen = false
    },
    // onKeyup(e) {
    //   console.log('onKeyup', e)
    //   if (!this.listShow) return
    // switch (e.key) {
    //   case 'ArrowUp':
    //     e.preventDefault()
    //     if (this.hoveredOptionIndex > 0) {
    //       this.hoveredOptionIndex = this.hoveredOptionIndex - 1
    //       // this.detectScroller()
    //     }
    //     break
    //   case 'ArrowDown':
    //     e.preventDefault()
    //     if (this.hoveredOptionIndex < this.selectOptions.length - 1) {
    //       this.hoveredOptionIndex = this.hoveredOptionIndex + 1
    //       // this.detectScroller()
    //     }
    //     break
    //   case 'Enter':
    //     if (!this.isMenuOpen) return
    //     if (this.hoveredOptionIndex < 0) return
    //     // this.$emit('select', this.selectOptions[this.hoveredOptionIndex])
    //     this.selectValue = this.multiValue
    //     // this.orderHoverStatus(false)
    //     this.hoveredOptionIndex = -1
    //     break
    //   case 'Escape':
    //     this.$emit('select', null)
    //     // this.orderHoverStatus(false)
    //     this.hoveredOptionIndex = -1
    //     break
    //   default:
    //     break
    // }
    // },
    onHover(i) {
      this.hoveredOptionIndex = i
    },
  },
}
</script>

<style lang="scss" scoped>
.form-dropdown {
  &--menu-open {
    border-top: 1px $black solid !important;
    border-bottom: 1px $black solid !important;

    &::before {
      content: '';
      height: 2px;
      width: 100%;
      background: $black;
      position: absolute;
      left: 0px;
      top: -4px;
    }
  }

  &__menu {
    top: calc(100% + 1px);
    box-shadow: 2px 2px 1px $black;
  }

  &__option {
    &__text {
      &--hover {
        border-bottom: 1px solid $black;
      }
    }
  }
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-to,
.fade-enter {
  opacity: 0;
}
</style>
