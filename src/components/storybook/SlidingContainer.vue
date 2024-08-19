<template>
  <transition name="slide-up" :duration="duration">
    <div v-if="show" class="sliding-container w-100 border border-2 border-bottom-0 rounded-top border-dark py-3"
      :style="{ '--background-color': backgroundColor }">
      <div class="container">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'StorybookTemplate',
  props: {
    show: VueTypes.bool.def(false),
    duration: VueTypes.number.def(600),
    backgroundColor: VueTypes.string.def(''),
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.sliding-container {
  z-index: $zindex-fixed;
  background: var(--background-color, $white);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 50vh;
  overflow-y: scroll;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: 1s transform ease-in-out;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave {
  transform: translateY(0%);
}
</style>
