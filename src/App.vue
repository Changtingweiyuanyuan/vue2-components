<template>
  <div id="app">
    <router-link class="router-link" to="/">Intro</router-link>
    <router-link class="router-link" to="/demo">Demo</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .router-link {
    margin: 0 10px;
  }
}
</style>
