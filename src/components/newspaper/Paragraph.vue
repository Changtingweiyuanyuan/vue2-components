<template>
  <div class="newspaper-paragraph">
    <p :style="{ '--text-shadow-color': firstLetterShadowColor }">{{ text }}</p>
  </div>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "NewspaperParagraph",
  props: {
    text: VueTypes.string.def(""),
    firstLetterShadowColor: VueTypes.string.def("#D05A6E"),
    // isShadowTheme: VueTypes.boolean.def(false),
  },
};
</script>

<style lang="scss" scoped>
$primary: black;
$primary-shadow: #d05a6e;

.newspaper-paragraph {
  font-family: "Times New Roman";
  display: flex;
  flex-wrap: wrap;
  word-wrap: break-word;

  p {
    font-size: 1.2rem;

    &:first-letter {
      color: $primary;
      float: left;
      font-size: 3.75rem;
      font-weight: bold;
      line-height: 50px;
      padding-right: 8px;
      padding-left: 3px;
      text-shadow: 3px 0 0px var(--text-shadow-color, $primary-shadow);
    }
  }
}
</style>
