<template>
  <div id="app">
    <div class="header p-5 d-flex justify-content-between">
      <div>
        <router-link class="router-link text-white" to="/">Intro</router-link>
        <router-link class="router-link text-white" to="/demo">Demo</router-link>
      </div>
      <div>
        <a :href="githubLink" target="_blank">
          <img src="@/assets/github.png" class="header--icon" />
        </a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      githubLink: 'https://github.com/changtingweiyuanyuan',
    }
  },
}
</script>

<style lang="scss">
@import '@/scss/global.import.scss';
$icon-dimensions: 30px;

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

    &--icon {
      width: $icon-dimensions;
    }
  }
}
</style>
