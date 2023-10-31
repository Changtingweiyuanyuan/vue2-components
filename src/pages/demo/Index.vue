<template>
  <div class="demo p-3">
    <h2>headline</h2>
    <headline
      :text="'Gaza Ministry of Health report describes crumbling health system'"
      :superscript="'headline'"
      :superscript-background-color="'bg-primary'"
    />
    <br>
    <headline
      :text="'Gaza Ministry of Health report describes crumbling health system'"
      :superscript="'headline'"
    />
    <br>

    <h2>paragraph</h2>
    <paragraph :text="text" />
    <paragraph :text="text" :first-letter-shadow-color="'#91AD70'" />
    <br>

    <h2>affix bar</h2>
    affix bar status: <button type="button" class="btn btn-secondary" @click="uiState.affixBarDisplay = !uiState.affixBarDisplay">
      {{ uiState.affixBarDisplay }}
    </button>
    <affix-bar
      :affix-bar-display="uiState.affixBarDisplay"
      :offset-top="100"
      :padding-x="28"
      :transition="false"
      :container-class-name="'container'"
    >
      <div>affix bar slot</div>
    </affix-bar>
    <br><br>

    <h2>ordered list</h2>
    <ordered-list  :contents="options"/>
    <br>

    <div class="p-6">
      <h2>container</h2>
      <container :title="'container'">
        <template #content>{{ text }}</template>
      </container>
    </div>
    <br>
  </div>
</template>

<script>
import Headline from "@/components/utility/Headline.vue";
import Paragraph from "@/components/utility/Paragraph.vue";
import Container from "@/components/utility/Container.vue";
import AffixBar from "@/components/utility/AffixBar.vue";
import OrderedList from "@/components/utility/OrderedList.vue";

export default {
  name: "DemoPage",
  components: {
    Headline,
    Paragraph,
    Container,
    AffixBar,
    OrderedList
  },
  data() {
    return {
      uiState: {
        affixBarDisplay: false
      },
      text: `A "daily emergency report" created by Gaza's Hamas-run Health Ministry described an emergency medicine system that's on the edge of failure. According to the figures in the document, which could not be independently verified, 57 medical workers in the system had been killed, 25 ambulances had been taken out of service, and 15,273 people had been injured in the conflict. The document, provided to NBC News by Dr. Medhat Abbas, a director at al-Shifa Hospital in Gaza City, included detailed charts and figures that describe overcrowded hospitals' struggling with dwindling resources.`,
      options: [{title: 'title1', content: 'content1content1content1content1content1content1', url: 'demo'}, {title: 'title2', content: 'content2content2content2content2content2content2'}, {title: 'title3', content: 'content3content3content3content3content3content3', url: 'demo'}, {title: 'title4', content: 'content4content4content4content4content4content4'}, {title: 'title5', content: 'content5content5content5content5content5content5', url: 'demo'}]
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/bootstrap/type";
.demo {}
</style>