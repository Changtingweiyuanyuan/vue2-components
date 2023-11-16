<template>
  <div class="storybook-template container">
    <div class="storybook-template__mounting-method">
      <h2>
        mounting method
        <i class="bi bi-emoji-smile"></i>
      </h2>
      <pre v-if="preformattedCode" class="bg-secondary-subtle rounded">
        {{ preformattedCode }}
      </pre>
    </div>

    <br />

    <div class="storybook-template__properties">
      <h2>
        properties
        <i class="bi bi-emoji-smile"></i>
      </h2>

      <div v-if="Object.entries(properties).length > 0">
        <div class="storybook-template__properties__th d-flex t3">
          <div class="name px-2 py-1">Name</div>
          <div class="type px-2 py-1">Type</div>
          <div class="description flex-fill px-2 py-1">Description</div>
          <div class="default px-2 py-1">Default</div>
        </div>

        <div
          v-for="(property, indexValue, index) in properties"
          :key="`${indexValue}-${index}`"
          class="storybook-template__properties__td d-flex rounded mb-1"
          :class="{
            'bg-primary-subtle': index % 2 === 0,
            'bg-secondary-subtle': index % 2 === 1,
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
      <h2>
        emits
        <i class="bi bi-emoji-smile"></i>
      </h2>

      <div v-if="Object.entries(emits).length > 0">
        <div class="storybook-template__emits__th d-flex t3">
          <div class="name px-2 py-1">Name</div>
          <div class="description flex-fill px-2 py-1">Description</div>
        </div>

        <div
          v-for="(property, indexValue, index) in emits"
          :key="`${indexValue}-${index}`"
          class="storybook-template__emits__td d-flex rounded mb-1"
          :class="{
            'bg-primary-subtle': index % 2 === 0,
            'bg-secondary-subtle': index % 2 === 1,
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
import { STORYBOOK_CONSTANTS } from '@/components/constants/storybookConstants'
export default {
  name: 'StorybookTemplate',
  data() {
    return {
      properties: {},
      emits: {},
      preformattedCode: '',
    }
  },
  watch: {
    $route: {
      handler(to) {
        const { PROPERTIES, EMITS, PREFORMATTED_CODE } =
          STORYBOOK_CONSTANTS[
            `${to.params.componentsCategory.toUpperCase()}_${to.params.components.toUpperCase()}`
          ] || {}
        this.properties = PROPERTIES || {}
        this.emits = EMITS || {}
        this.preformattedCode = PREFORMATTED_CODE || ''
      },
      immediate: true,
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.storybook-template {
  &__properties,
  &__emits {
    &__th,
    &__td {
      .name {
        width: 20%;
      }
      .type {
        width: 20%;
      }
      .default {
        width: 20%;
      }
      .description {
        width: 40%;
      }
    }
  }
}
</style>
