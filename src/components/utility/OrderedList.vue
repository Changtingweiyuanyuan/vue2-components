<template>
  <div class="ordered-list d-flex gap-2 flex-wrap ms-3">
    <div
      v-for="(content, index) in contents"
      :key="index"
      class="ordered-list__container position-relative p-2 ps-4 border border-black rounded shadow w-100"
      :class="titleClassName"
    >
      <div
        class="ordered-list__container__prefix position-absolute text-red opacity-25"
      >
        {{ index + 1 }}
      </div>
      <div class="ordered-list__container__title t2 text-black overflow-hidden">
        {{ content.title }}
      </div>
      <div
        class="ordered-list__container__content t5 text-black overflow-hidden"
      >
        {{ content.content }}
      </div>
      <div
        v-if="content.url"
        class="ordered-list__container__url d-flex justify-content-end"
      >
        <a
          :href="content.url"
          class="t6 text-decoration-underline"
          target="_blank"
          @click="$emit('linkOnClick')"
          >{{ content.urlText ? content.urlText : 'see more' }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
export default {
  name: 'UtilityOrderedList',
  props: {
    contents: VueTypes.arrayOf(
      VueTypes.shape({
        title: VueTypes.string.def(''),
        content: VueTypes.string.def(''),
        url: VueTypes.string.def(''),
        urlText: VueTypes.string.def('see more'),
      })
    ).def([]),
    backgroundColor: VueTypes.string.def(''),
  },
  computed: {
    titleClassName() {
      return this.backgroundColor ? `bg-${this.backgroundColor}-subtle` : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.ordered-list {
  &__container {
    height: 100px;

    &__prefix {
      font-family: 'Times New Roman';
      font-weight: $font-weight-bold;
      font-size: 120px;
      transform: rotate3d(0, 1, 1, 20deg);
      z-index: 0;
      left: -12px;
      top: -40px;
    }

    &__title {
      font-family: 'Times New Roman';
      font-weight: $font-weight-bold;
      text-transform: capitalize;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__content {
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
