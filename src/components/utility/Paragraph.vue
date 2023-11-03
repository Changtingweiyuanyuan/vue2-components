<template>
  <div class="paragraph d-flex flex-wrap">
    <p
      :style="{
        '--text-shadow-color': ensureHexColorFormat,
      }"
    >
      {{ text }}
    </p>
  </div>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "UtilityParagraph",
  props: {
    text: VueTypes.string.def(""),
    firstLetterShadowColor: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(""),
  },
  data() {
    return {
      hasBeenInput: false,
      HexColorStartCharacter: "#"
    }
  },
  computed: {
    ensureHexColorFormat() {
      const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      const color = String(this.firstLetterShadowColor).charAt(0) === this.HexColorStartCharacter ? this.firstLetterShadowColor : `#${this.firstLetterShadowColor}`;
      return hexColorRegex.test(color) ? color : '';
    }
  },
};
</script>

<style lang="scss" scoped>
.paragraph {
  word-wrap: break-word;

  p {
    &:first-letter {
      float: left;
      font-size: 3.75rem;
      line-height: 3.25rem;
      font-weight: bold;
      text-shadow: 4px 0 0px var(--text-shadow-color, $primary);
      padding-right: 12px;
      padding-left: 4px;
    }
  }
}
</style>
