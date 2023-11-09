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
        >Form-Checkbox</router-link
      >｜
      <router-link
        :to="{
          name: 'StorybookComponents',
          params: {
            componentsCategory: 'utility',
            components: 'tag',
          },
        }"
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
}
</script>

<style scoped></style>
