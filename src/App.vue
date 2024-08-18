<template>
  <div id="app">
    <div class="header p-5">
      <div>
        <router-link class="router-link text-white" to="/">Intro</router-link>
        <router-link class="router-link text-white" to="/demo">Demo</router-link>
        <router-link class="router-link text-white" to="/storybook">Storybook</router-link>
      </div>
      <div>
      </div>
    </div>
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
  background: $custom-tiffany-green;
  .header {
    background: $custom-blue;
  }
}
</style>
