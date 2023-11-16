<template>
  <div class="storybook p-3">
    <div class="d-flex flex-wrap align-items-center gap-2">
      <router-link
        v-for="(component, i) in components"
        :key="i"
        :to="{
          name: 'StorybookComponents',
          params: {
            componentsCategory: component.category,
            components: component.name,
          },
        }"
        class="btn btn-success"
        :class="{
          'storybook--active': changeFocusComponent(component.name),
        }"
      >
        {{ component.category }}-{{ component.name }}
      </router-link>
    </div>
    <br />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'StorybookName',
  data() {
    return {
      components: [
        {
          category: 'form',
          name: 'input',
        },
        {
          category: 'form',
          name: 'radio',
        },
        {
          category: 'form',
          name: 'checkbox',
        },
        {
          category: 'form',
          name: 'dropdown',
        },
        {
          category: 'utility',
          name: 'tag',
        },
      ],
      focusComponent: 'input',
    }
  },
  methods: {
    changeFocusComponent(component) {
      return component === this.$route.params.components
    },
  },
}
</script>

<style lang="scss" scoped>
.storybook {
  &--active {
    filter: drop-shadow(2px 2px 1px black);
  }
}
</style>
