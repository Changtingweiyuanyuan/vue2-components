<template>
  <!-- <transition :name="`fade-${directionType}`" :duration="duration"> -->
  <transition name="fade" :duration="duration">
    <div
      v-if="show"
      class="affix-bar position-fixed d-flex align-items-center position-relative w-100 p-3"
      :class="backgroundColor"
    >
      <div :style="affixBarStyle">
        <div :class="containerClassName">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "UtilityAffixBar",
  props: {
    affixBarDisplay: VueTypes.bool.def(true),
    containerClassName: VueTypes.string.def("container"),
    offsetTop: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(""),
    paddingX: VueTypes.oneOfType([VueTypes.number, VueTypes.string]).def(0),
    superscriptBackgroundColor: VueTypes.string.def("bg-white"),
    transition: VueTypes.bool.def(true),
  },
  data() {
    return {
      show: VueTypes.bool.def(false),
      scrollX: VueTypes.number.def(0),
    };
  },
  computed: {
    duration() {
      return this.transition ? 250 : 0;
    },
    affixBarStyle() {
      const paddingX =
        this.paddingX === "string" ? this.paddingX : `${this.paddingX}px`;
      return {
        padding: `0 ${paddingX}`,
        marginLeft: `-${this.scrollX}px`,
      };
    },
    backgroundColor() {
      const className = this.superscriptBackgroundColor.substr(0, 2) === "bg" ? this.superscriptBackgroundColor : `bg-${this.superscriptBackgroundColor}`;
      return this.superscriptBackgroundColor.length ? className : "";
    }
  },
  mounted() {
    this.show = false;
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    affixBarDisplay() {
      this.handleScroll();
    }
  },
  methods: {
    handleScroll() {
      this.show = this.affixBarDisplay && window.pageYOffset >= Number(this.offsetTop);
      this.scrollX = window.pageXOffset;
    },
  },
};
</script>

<style lang="scss" scoped>
.affix-bar {
  min-height: 44px;
  top: 0;
  left: 0;
  border-bottom: 2px solid $black;
  z-index: $zindex-fixed;

  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    left: 0;
    bottom: 2px;
    background: $black;
  }

  // .fade-enter-active,
  // .fade-leave-active {
  //   transition: transform 0.25s ease-out, opacity 0.25s;
  // }
  // .fade-enter,
  // .fade-leave {
  //   opacity: 0;
  //   transform: translateY(-40px) translateZ(0);
  // }

  .fade-enter-to,
  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active,
  .fade-enter-active {
    transition: opacity 0.5s;
  }
  .fade-leave-to,
  .fade-enter {
    opacity: 0;
  }
}
</style>
