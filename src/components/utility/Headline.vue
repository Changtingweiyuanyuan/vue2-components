<template>
  <div class="headline d-flex flex-wrap position-relative">
    <div
      v-if="superscript"
      class="headline__superscript d-flex align-items-center justify-content-center flex-1 text-white w-100 mt-1 p-2"
      :class="backgroundColor"
    >
      {{ superscript }}
    </div>
    <p class="m-2 h1 text-uppercase">{{ text }}</p>
  </div>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "UtilityHeadline",
  props: {
    text: VueTypes.string.def(""),
    superscript: VueTypes.string.def(""),
    superscriptBackgroundColor: VueTypes.string.def("bg-black"),
  },
  computed: {
    backgroundColor() {
      const className = this.superscriptBackgroundColor.substr(0, 2) === "bg" ? this.superscriptBackgroundColor : `bg-${this.superscriptBackgroundColor}`;
      return !!this.superscript && !!this.superscriptBackgroundColor ? className : "";
    }
  }
};
</script>

<style lang="scss" scoped>
.headline {
  border-top: 2px solid $black;
  border-bottom: 2px solid $black;

  &::before,
  &::after {
    content: "";
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
}
</style>
