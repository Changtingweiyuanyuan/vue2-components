<template>
  <div id="app">
    <router-link class="router-link" to="/">Intro</router-link>
    <router-link class="router-link" to="/demo">Demo</router-link>
    <router-link class="router-link" to="/storybook">Storybook</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style lang="scss">
@import '@/scss/global.import.scss';
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  .router-link {
    margin: 0 10px;
  }
}
</style>
