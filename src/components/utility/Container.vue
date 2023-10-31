<template>
  <div class="container position-relative my-4 p-4">
      <div class="container__title h2 position-absolute px-2 text-uppercase" :style="{ '--background-color': backgroundColor }">{{ title }}</div>
      <slot name="content"></slot>
  </div>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "UtilityContainer",
  props: {
    title: VueTypes.string.def(""),
    backgroundColor: VueTypes.string.def("")
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 2px solid $black;
  border-width: 2px 0;
  z-index: 1;

  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 100%;
    background: linear-gradient( to bottom, $black 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 65%, $black 100% );
    top: 0;
    left: 0;
  }
  &::after {
    left: unset;
    right: 0;
  }

  &__title {
    top: -20px;
    left: 36px;
    white-space: nowrap;

    &::after {
      content: "";
      background: var(--background-color, $white);
      height: 6px;
      width: 100%;
      left: 0;
      top: 16px;
      position: absolute;
      z-index: -1;
    }
  }
}
</style>
