<template>
  <div class="demo">
    <h2>headline</h2>
    <headline
      :text="'Gaza Ministry of Health report describes crumbling health system'"
      :superscript="'Israel-Hamas war live updates'"
    ></headline>
    <h2>paragraph</h2>
    <paragraph :text="text"></paragraph>
    <paragraph :text="text" :first-letter-shadow-color="'#91AD70'"></paragraph>
  </div>
</template>

<script>
import Headline from "@/components/newspaper/Headline.vue";
import Paragraph from "@/components/newspaper/Paragraph.vue";

export default {
  name: "DemoName",
  components: {
    Headline,
    Paragraph,
  },
  data() {
    return {
      text: `A "daily emergency report" created by Gaza's Hamas-run Health Ministry described an emergency medicine system that's on the edge of failure. According to the figures in the document, which could not be independently verified, 57 medical workers in the system had been killed, 25 ambulances had been taken out of service, and 15,273 people had been injured in the conflict. The document, provided to NBC News by Dr. Medhat Abbas, a director at al-Shifa Hospital in Gaza City, included detailed charts and figures that describe overcrowded hospitals' struggling with dwindling resources.`,
    };
  },
};
</script>

<style scoped>
.demo {
  width: 500px;
}
</style>
