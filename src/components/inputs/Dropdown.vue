<template>
  <div
    ref="dropdown"
    class="form-dropdown w-100 position-relative rounded my-2"
    :class="{ 'form-dropdown--menu-open my-1': isMenuOpen }"
    @click="onDropdownClick"
  >
    <!-- @keydown="onKeyup" 搜尋功能 -->
    <div
      ref="input"
      class="form-dropdown__control border rounded"
      :class="[
        {
          'bg-white': !disabled,
          'form-dropdown__control--disabled cursor-not-allowed': disabled,
          'px-2 py-1': selectType === 'single',
          'px-1': selectType === 'multiple',
        },
      ]"
      @mousedown.prevent
    >
      <div v-if="selectType === 'multiple'" class="d-flex">
        <div v-if="multiValue.length > 0">
          <Tag
            v-for="(option, i) in multiValue"
            :key="i"
            :value="option"
            :color="color"
            :delete-btn="deleteBtn"
            :disabled="disabled"
            @delete="
              onOptionClick(
                multiValue.filter(item => item.value !== option.value)
              )
            "
          >
            {{ option.text }}
          </Tag>
        </div>
        <div v-else>{{ placeholder }}</div>
      </div>

      <span
        v-else
        class="t5"
        :class="{
          'text-danger': selectType === 'single' && !disabled,
          'text-gray-darker': disabled,
        }"
      >
        {{ controlFieldText }}
      </span>
    </div>

    <transition name="fade" :duration="100">
      <div
        v-show="isMenuOpen && selectOptions.length > 0"
        class="form-dropdown__menu w-100 position-absolute border rounded zindex-dropdown bg-white overflow-scroll"
        :style="{ maxHeight: menuHeight }"
      >
        <div
          v-for="(option, i) in selectOptions"
          :key="i"
          class="form-dropdown__option px-3 py-1 cursor-pointer"
          :class="{
            'bg-success-subtle': hoveredOptionIndex == i,
            'form-dropdown__option__text--hover':
              hoveredOptionIndex == i && i != selectOptions.length - 1,
          }"
          @mouseover="onHover(i)"
        >
          <FormCheckbox
            v-if="selectType === 'multiple'"
            :local-value="multiValue"
            :value="option"
            @changeValue="onOptionClick"
          >
            {{ option.text }}
          </FormCheckbox>
          <div
            v-else
            class="form-dropdown__option__text"
            @click="onOptionClick([option])"
          >
            {{ option.text }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  oneOfType,
  bool,
  number,
  string,
  array,
  any,
  arrayOf,
  shape,
} from 'vue-types'
import FormCheckbox from './Checkbox.vue'
import Tag from '../utility/Tag.vue'
export default {
  name: 'UtilityTag',
  components: {
    FormCheckbox,
    Tag,
  },
  props: {
    placeholder: string().def(''),
    selectOptions: array().def([]),
    selectType: string().def('single'), //single, multiple
    multiValue: arrayOf(
      shape({
        text: string().def(''),
        value: any().def(0),
      })
    ).def([]),
    disabled: bool().def(false),
    deleteBtn: bool().def(true),
    color: string().def('white'),
    menuMaxHeight: oneOfType([number(), string()]).def(200),
  },
  data() {
    return {
      isMenuOpen: false,
      hoveredOptionIndex: 0,
    }
  },
  computed: {
    controlFieldText() {
      if (this.selectType === 'single') {
        return this.multiValue.length > 0
          ? this.multiValue[0].text
          : this.placeholder
      }
      return false
    },
    menuHeight() {
      const maxHeightString = String(this.menuMaxHeight)
      return maxHeightString.includes('px')
        ? maxHeightString
        : `${maxHeightString}px`
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
      let isFormDropdown = this.$refs['dropdown'].contains(e.target)

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
      this.$emit('change', option)
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
    box-shadow: 2px 2px 1px $black;

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

  &__control {
    &--disabled {
      background: $gray-200;
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