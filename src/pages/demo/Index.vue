<template>
  <div class="demo p-3">
    <div class="p-2">
      <h2>bootstrap button</h2>
      <div class="d-flex gap-2">
        <button class="btn btn-primary">button</button>
        <button class="btn btn-secondary">button</button>
        <button class="btn btn-success">button</button>
        <button class="btn btn-info">button</button>
        <button class="btn btn-warning">button</button>
        <button class="btn btn-danger">button</button>
        <button class="btn btn-dark">button</button>
        <button class="btn btn-link">button</button>
      </div>
    </div>
    <br />
    <div class="p-2">
      <h2>bootstrap radio/checkbox</h2>
      <div class="d-flex gap-2">
        <input class="form-check-input" type="checkbox" value="1" />
        <input
          class="form-check-input check-success"
          type="checkbox"
          value="2"
          checked
        />
        <input
          class="form-check-input check-info"
          type="checkbox"
          value="2"
          checked
        />
        <input
          class="form-check-input check-danger"
          type="checkbox"
          value="2"
          checked
        />
        <input
          class="form-check-input check-danger"
          type="checkbox"
          value="2"
          disabled
          checked
        />
        <input
          class="form-check-input"
          name="radioDefault"
          type="radio"
          value="1"
          disabled
        />
        <input
          class="form-check-input"
          name="radioDefault"
          type="radio"
          value="2"
          disabled
          checked
        />
      </div>
    </div>
    <br />

    <div class="p-2">
      <h2>radio</h2>
      <FormRadio v-model="inputs.radioValue" value="1"> 1 </FormRadio>
      <FormRadio v-model="inputs.radioValue" value="2"> 2 </FormRadio>
      <FormRadio v-model="inputs.radioValue" :value="3"> 3 </FormRadio>
      <FormRadio v-model="inputs.radioValue" :value="4"> 4 </FormRadio>
    </div>
    <br />

    <div class="p-2">
      <h2>checkbox</h2>
      <FormCheckbox
        :local-value="inputs.checkboxValue"
        value="1"
        @change="checkboxChange"
      >
        1
      </FormCheckbox>
      <FormCheckbox
        :local-value="inputs.checkboxValue"
        :disabled="true"
        :checked="true"
        value="2"
        @change="checkboxChange"
      >
        2
      </FormCheckbox>
      <FormCheckbox
        :local-value="inputs.checkboxValue"
        :disabled="true"
        :value="3"
        @change="checkboxChange"
      >
        3
      </FormCheckbox>
      <FormCheckbox
        :local-value="inputs.checkboxValue"
        :value="4"
        @change="checkboxChange"
      >
        4
      </FormCheckbox>
    </div>
    <br />

    <div class="w-100 p-2">
      <h2>input</h2>
      <FormInput
        v-model="inputs.inputValue"
        :placeholder="'default input'"
        :clearable="true"
      />
      <FormInput
        v-model="inputs.inputValueReadonly"
        :placeholder="'readonly input'"
        disabled
      />
      <FormInput
        v-model="inputs.inputValueInvalid"
        :placeholder="'invalid input'"
        :invalid="true"
        :invalid-text="text"
        :background-transparent="true"
        @input="inputChange"
        @inputEvent="inputEventHandler"
      >
      </FormInput>
    </div>
    <br />

    <div class="w-100 p-2">
      <h2>headline</h2>
      <headline
        :text="'Gaza Ministry of Health report describes crumbling health system'"
        :superscript="'headline'"
        :superscript-background-color="'bg-primary'"
      />
      <br />
      <headline
        :text="'Gaza Ministry of Health report describes crumbling health system'"
        :superscript="'headline'"
      />
    </div>
    <br />

    <div class="w-100 p-2">
      <h2>paragraph</h2>
      <paragraph :text="text" />
      <paragraph :text="text" :first-letter-shadow-color="'#91AD70'" />
    </div>
    <br />

    <div class="p-2">
      <h2>affix bar</h2>
      affix bar status:
      <button
        type="button"
        focus
        class="btn btn-secondary"
        @click="uiState.affixBarDisplay = !uiState.affixBarDisplay"
      >
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
    </div>
    <br /><br />

    <div class="p-2">
      <h2>ordered list</h2>
      <ordered-list :contents="options" />
    </div>
    <br />

    <div class="w-100 p-2">
      <h2>container</h2>
      <container :title="'container'">
        <template #content>{{ text }}</template>
      </container>
    </div>
    <br />
  </div>
</template>

<script>
import Headline from '@/components/utility/Headline.vue'
import Paragraph from '@/components/utility/Paragraph.vue'
import Container from '@/components/utility/Container.vue'
import AffixBar from '@/components/utility/AffixBar.vue'
import OrderedList from '@/components/utility/OrderedList.vue'
import FormRadio from '@/components/inputs/Radio.vue'
import FormCheckbox from '@/components/inputs/Checkbox.vue'
import FormInput from '@/components/inputs/Input.vue'

export default {
  name: 'DemoPage',
  components: {
    Headline,
    Paragraph,
    Container,
    AffixBar,
    OrderedList,
    FormRadio,
    FormCheckbox,
    FormInput,
  },
  data() {
    return {
      uiState: {
        affixBarDisplay: false,
      },
      text: `A "daily emergency report" created by Gaza's Hamas-run Health Ministry described an emergency medicine system that's on the edge of failure. According to the figures in the document, which could not be independently verified, 57 medical workers in the system had been killed, 25 ambulances had been taken out of service, and 15,273 people had been injured in the conflict. The document, provided to NBC News by Dr. Medhat Abbas, a director at al-Shifa Hospital in Gaza City, included detailed charts and figures that describe overcrowded hospitals' struggling with dwindling resources.`,
      options: [
        {
          title: 'title1',
          content: 'content1content1content1content1content1content1',
          url: 'demo',
        },
        {
          title: 'title2',
          content: 'content2content2content2content2content2content2',
        },
        {
          title: 'title3',
          content: 'content3content3content3content3content3content3',
          url: 'demo',
        },
        {
          title: 'title4',
          content: 'content4content4content4content4content4content4',
        },
        {
          title: 'title5',
          content: 'content5content5content5content5content5content5',
          url: 'demo',
        },
      ],
      inputs: {
        radioValue: '1',
        checkboxValue: ['2'],
        inputValue: 'default input value',
        inputValueReadonly: 'readonly input value',
        inputValueInvalid: 'invalid input value',
      },
    }
  },
  watch: {
    test(nv, ov) {
      console.log('new value', nv)
      console.log('old value', ov)
    },
  },
  methods: {
    checkboxChange(checkedValue) {
      console.log('checked', checkedValue)
    },
    inputChange(inputValue) {
      console.log('onInput', inputValue)
    },
    inputEventHandler(inputEvent) {
      console.log('onInput event', inputEvent)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/bootstrap/type';
.demo {
}
</style>
