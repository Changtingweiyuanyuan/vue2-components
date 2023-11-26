<template>
  <div class="headline d-flex flex-wrap position-relative">
    <div
      v-if="superscriptText"
      class="headline__superscript d-flex align-items-center flex-1 text-white w-100 mt-1 p-2 t4 rounded"
      :class="superscriptClassName"
    >
      {{ superscriptText }}
    </div>
    <div
      class="headline__title m-2 h1 w-100 text-uppercase text-black"
      :class="titleClassName"
    >
      {{ titleText }}
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'UtilityHeadline',
  props: {
    titleText: VueTypes.string.def(''),
    titlePosition: VueTypes.string.def('start'),
    superscriptText: VueTypes.string.def(''),
    superscriptBackgroundColor: VueTypes.string.def('black'),
    superscriptPosition: VueTypes.string.def('center'),
  },
  computed: {
    titleClassName() {
      const position = `text-${this.titlePosition}`
      return position
    },
    superscriptClassName() {
      const backgroundColor = `bg-${this.superscriptBackgroundColor}`
      const position = `justify-content-${this.superscriptPosition}`
      return `${backgroundColor} ${position}`
    },
  },
}
</script>

<style lang="scss" scoped>
.headline {
  border-top: 2px solid $black;
  border-bottom: 2px solid $black;

  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background: $black;
    margin-top: 2px;
  }
  &::after {
    position: absolute;
    align-self: flex-end;
    margin-bottom: 2px;
  }

  &__superscript {
    background: $black;
  }
}
</style>
