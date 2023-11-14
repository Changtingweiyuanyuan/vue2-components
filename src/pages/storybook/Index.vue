<template>
  <div class="storybook p-3">
    <div>
      <router-link
        :to="{
          name: 'StorybookComponents',
          params: {
            componentsCategory: 'form',
            components: 'input',
          },
        }"
        :class="{ 'storybook--active': changeFocusComponent('input') }"
        >Form-Input</router-link
      >｜
      <router-link
        :to="{
          name: 'StorybookComponents',
          params: {
            componentsCategory: 'form',
            components: 'radio',
          },
        }"
        :class="{ 'storybook--active': changeFocusComponent('radio') }"
        >Form-Radio</router-link
      >｜
      <router-link
        :to="{
          name: 'StorybookComponents',
          params: {
            componentsCategory: 'form',
            components: 'checkbox',
          },
        }"
        :class="{ 'storybook--active': changeFocusComponent('checkbox') }"
        >Form-Checkbox</router-link
      >｜
      <router-link
        :to="{
          name: 'StorybookComponents',
          params: {
            componentsCategory: 'form',
            components: 'dropdown',
          },
        }"
        :class="{ 'storybook--active': changeFocusComponent('dropdown') }"
        >Form-Dropdown</router-link
      >｜
      <router-link
        :to="{
          name: 'StorybookComponents',
          params: {
            componentsCategory: 'utility',
            components: 'tag',
          },
        }"
        :class="{ 'storybook--active': changeFocusComponent('tag') }"
        >Utility-Tag</router-link
      >
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
    color: $primary;
  }
}
</style>
