<template>
  <div class="storybook-template container">
    <div class="d-flex justify-content-between">
      <div class="storybook-template__title" :data-storke="components">
        <span class="storybook-template__title--text">{{ components }}</span>
      </div>
      <div
        class="storybook-template__close-icon cursor-pointer"
        data-storke="X"
        @click="$emit('closeStorybook')"
      >
        <span class="storybook-template__close-icon--text">X</span>
      </div>
    </div>
    <div class="storybook-template__mounting-method">
      <h3>mounting method</h3>
      <pre v-if="preformattedCode" class="bg-white rounded px-4 t5">
        {{ preformattedCode }}
      </pre>
    </div>

    <br />

    <div class="storybook-template__properties">
      <h3>properties</h3>

      <div v-if="Object.entries(properties).length > 0" class="t5">
        <div class="storybook-template__properties__th d-flex t4">
          <div class="name px-2 py-1">Name</div>
          <div class="type px-2 py-1">Type</div>
          <div class="description flex-fill px-2 py-1">Description</div>
          <div class="default px-2 py-1">Default</div>
        </div>

        <div
          v-for="(property, indexValue, index) in properties"
          :key="`${indexValue}-${index}`"
          class="storybook-template__properties__td bg-white d-flex rounded mb-1"
          :class="{
            border: index % 2 === 0,
          }"
        >
          <div class="name px-2 py-1 text-break">{{ property['NAME'] }}</div>
          <div class="type px-2 py-1 text-break">{{ property['TYPE'] }}</div>
          <div
            class="description flex-fill px-2 py-1 text-break"
            v-html="property['DESCRIPTION']"
          />
          <div class="default px-2 py-1 text-break">
            {{ property['DEFAULT'] }}
          </div>
        </div>
      </div>
    </div>

    <br />

    <div class="storybook-template__emits">
      <h3>emits</h3>

      <div v-if="Object.entries(emits).length > 0" class="t5">
        <div class="storybook-template__emits__th d-flex t4">
          <div class="name px-2 py-1">Name</div>
          <div class="description flex-fill px-2 py-1">Description</div>
        </div>

        <div
          v-for="(property, indexValue, index) in emits"
          :key="`${indexValue}-${index}`"
          class="storybook-template__emits__td bg-white d-flex rounded mb-1"
          :class="{
            border: index % 2 === 0,
          }"
        >
          <div class="name px-2 py-1">{{ property['NAME'] }}</div>
          <div class="description flex-fill px-2 py-1">
            {{ property['DESCRIPTION'] }}
          </div>
        </div>
      </div>
    </div>

    <br />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { STORYBOOK_CONSTANTS } from '@/components/constants/storybookConstants'
export default {
  name: 'StorybookTemplate',
  props: {
    components: VueTypes.string.def(''),
    componentsCategory: VueTypes.string.def(''),
  },
  data() {
    return {
      properties: {},
      emits: {},
      preformattedCode: '',
    }
  },
  mounted() {
    const { PROPERTIES, EMITS, PREFORMATTED_CODE } =
      STORYBOOK_CONSTANTS[
        `${this.componentsCategory.toUpperCase()}_${this.components.toUpperCase()}`
      ] || {}
    this.properties = PROPERTIES || {}
    this.emits = EMITS || {}
    this.preformattedCode = PREFORMATTED_CODE || ''
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global.import.scss';

.storybook-template {
  &__title,
  &__close-icon {
    @include concert-font('sm');
  }

  h3 {
    text-decoration: underline;
    font-family: 'Concert One', sans-serif;
  }

  &__properties,
  &__emits {
    &__th,
    &__td {
      .name {
        width: 15%;
      }
      .type {
        width: 30%;
      }
      .default {
        width: 15%;
      }
      .description {
        width: 40%;
      }
    }
  }
}
</style>
