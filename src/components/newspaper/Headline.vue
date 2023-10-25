<template>
  <div class="newspaper-headline">
    <div class="newspaper-headline__superscript">{{ superscript }}</div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import VueTypes from "vue-types";
export default {
  name: "NewspaperHeadline",
  props: {
    text: VueTypes.string.def(""),
    superscript: VueTypes.string.def(""),
  },
};
</script>

<style lang="scss" scoped>
$primary: black;
$primary-shadow: #d05a6e;

.newspaper-headline {
  font-family: "Times New Roman";
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &::before,
  &::after {
    content: "";
    height: 1px;
    flex-basis: 100%;
    background: $primary;
    margin-top: 2px;
  }
  &::after {
    align-self: flex-end;
    margin-top: 0;
    margin-bottom: 2px;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
  }

  p {
    margin: 8px;
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__superscript {
    background: $primary;
    color: #fff;
    padding: 8px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
}
</style>
