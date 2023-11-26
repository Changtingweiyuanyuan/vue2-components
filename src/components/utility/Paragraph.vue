<template>
  <div class="paragraph d-flex flex-wrap">
    <p
      class="paragraph__text text-black"
      :class="fontSizeRelatedData[textSize].textFontSizeClassName"
      :style="{
        '--text-shadow-color': ensureHexColorFormat,
        '--first-letter-font-size':
          fontSizeRelatedData[textSize].firstLetterFontSize,
        '--first-letter-line-height':
          fontSizeRelatedData[textSize].firstLetterLineHeight,
      }"
    >
      {{ text }}
    </p>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'UtilityParagraph',
  props: {
    text: VueTypes.string.def(''),
    textSize: VueTypes.string.def('md'),
    firstLetterShadowColor: VueTypes.oneOfType([
      VueTypes.number,
      VueTypes.string,
    ]).def(''),
  },
  data() {
    return {
      HexColorStartCharacter: '#',
      fontSizeRelatedData: {
        xs: {
          textFontSizeClassName: 't7',
          firstLetterFontSize: '40px',
          firstLetterLineHeight: '34px',
        },
        sm: {
          textFontSizeClassName: 't5',
          firstLetterFontSize: '50px',
          firstLetterLineHeight: '48px',
        },
        md: {
          textFontSizeClassName: 't4',
          firstLetterFontSize: '60px',
          firstLetterLineHeight: '52px',
        },
        lg: {
          textFontSizeClassName: 't2',
          firstLetterFontSize: '80px',
          firstLetterLineHeight: '68px',
        },
      },
    }
  },
  computed: {
    ensureHexColorFormat() {
      const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
      const color =
        String(this.firstLetterShadowColor).charAt(0) ===
        this.HexColorStartCharacter
          ? this.firstLetterShadowColor
          : `#${this.firstLetterShadowColor}`
      return hexColorRegex.test(color) ? color : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.paragraph {
  word-wrap: break-word;

  p {
    &:first-letter {
      float: left;
      font-size: var(--first-letter-font-size, 60px);
      line-height: var(--first-letter-line-height, 52px);
      font-weight: bold;
      text-shadow: 4px 0 0px var(--text-shadow-color, $white);
      padding-right: 12px;
      padding-left: 4px;
    }
  }
}
</style>
