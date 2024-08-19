<template>
  <div class="demo">
    <div class="demo__bootstrap-components position-relative">
      <div class="container d-flex align-items-center position-relative">
        <img
          src="@/assets/moon.png"
          class="demo__bootstrap-components__image img-fluid"
        />
        <div>
          <div
            class="demo__bootstrap-components__title"
            data-storke="Overrides"
          >
            <span class="demo__bootstrap-components__title--text"
              >Overrides</span
            >
          </div>
          <div
            class="demo__bootstrap-components__title"
            data-storke="Bootstrap"
          >
            <span class="demo__bootstrap-components__title--text"
              >Bootstrap</span
            >
          </div>
          <div
            class="demo__bootstrap-components__title"
            data-storke="components"
          >
            <span class="demo__bootstrap-components__title--text"
              >components</span
            >
          </div>
        </div>
      </div>
      <div
        class="demo__bootstrap-components__block position-relative pb-2 mb-4"
      >
        <div class="container">
          <div class="p-2">
            <h3 class="component-title text-white">bootstrap button</h3>
            <div class="d-flex flex-wrap gap-2">
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
            <h3 class="component-title text-white mb-4">
              bootstrap radio/checkbox
            </h3>
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
        </div>
      </div>
    </div>

    <div class="demo__released-component position-relative">
      <div
        class="container d-flex align-items-center flex-row-reverse position-relative"
      >
        <img
          src="@/assets/painter-alien-.png"
          class="demo__released-component__image img-fluid"
        />
        <div>
          <div class="demo__released-component__title" data-storke="Released">
            <span class="demo__released-component__title--text">Released</span>
          </div>
          <div class="demo__released-component__title" data-storke="components">
            <span class="demo__released-component__title--text"
              >components</span
            >
          </div>
        </div>
      </div>
      <div class="demo__released-component__block position-relative pb-2 mb-4">
        <div class="container">
          <div class="p-2">
            <h3 class="component-title text-black">
              <span
                class="border rounded-pill text-white shadow-sm cursor-pointer py-1 px-2"
                @click="
                  toggleStorybookDisplay({
                    componentsCategory: STORYBOOK_CATEGORY.UTILITY,
                    components: STORYBOOK_COMPONENTS.TAG,
                  })
                "
                >tag</span
              >
            </h3>
            <Tag
              value="1"
              @click="tagOnClick"
              @delete="deleteTag"
              :delete-btn="true"
            >
              tag
            </Tag>
            <Tag value="1" :color="'primary'" :delete-btn="true"> tag </Tag>
            <Tag value="1" :color="'secondary'" :delete-btn="true"> tag </Tag>
            <Tag value="1" :color="'success'" :delete-btn="true"> tag </Tag>
            <Tag value="1" :color="'info'" :delete-btn="true"> tag </Tag>
            <Tag value="1" :color="'danger'" :delete-btn="true"> tag </Tag>
            <Tag value="1" :color="'white'" :delete-btn="true"> tag </Tag>
            <Tag value="1" :color="'dark'" :delete-btn="true"> tag </Tag>
            <Tag value="1" :color="'gray-dark'" :delete-btn="true"> tag </Tag>
            <br />
            <Tag value="2" @click="tagOnClick" disabled> disabled tag </Tag>
            <Tag value="3" @click="tagOnClick" clicked> default tag </Tag>
          </div>
          <br />

          <div class="p-2">
            <h3 class="component-title text -black">
              <span
                class="border rounded-pill text-white shadow-sm cursor-pointer py-1 px-2"
                @click="
                  toggleStorybookDisplay({
                    componentsCategory: STORYBOOK_CATEGORY.FORM,
                    components: STORYBOOK_COMPONENTS.DROPDOWN,
                  })
                "
                >dropdown</span
              >
            </h3>

            <FormDropdown
              :select-options="singleDropdownOptions"
              :placeholder="'單選測試'"
              :color="'success'"
              :multi-value="singleDropdownValue"
              :invalid="singleDropdownValue.length == 0"
              @change="singleDropdownChange"
            />
            <FormDropdown
              :select-options="multipleDropdownOptions"
              :placeholder="'多選測試'"
              :select-type="'multiple'"
              :multi-value="multipleDropdownValues"
              :invalid="multipleDropdownValues.length == 0"
              :invalid-text="'此選項不得為空'"
              :max="3"
              @change="multipleDropdownChange"
            />
          </div>
          <br />

          <div class="p-2">
            <h3 class="component-title text-black">
              <span
                class="border rounded-pill text-white shadow-sm cursor-pointer py-1 px-2"
                @click="
                  toggleStorybookDisplay({
                    componentsCategory: STORYBOOK_CATEGORY.FORM,
                    components: STORYBOOK_COMPONENTS.RADIO,
                  })
                "
                >radio</span
              >
            </h3>
            <div class="d-flex gap-3 align-items-center">
              <FormRadio
                v-model="inputs.radioValue"
                value="1"
                :color="'danger'"
                @change="radioChange"
              >
                1
              </FormRadio>
              <FormRadio
                v-model="inputs.radioValue"
                value="2"
                :color="'success'"
                @change="radioChange"
              >
                2
              </FormRadio>
              <FormRadio
                v-model="inputs.radioValue"
                :value="3"
                :checked="true"
                @change="radioChange"
              >
                3
              </FormRadio>
              <FormRadio
                v-model="inputs.radioValue"
                :value="4"
                :disabled="true"
                @change="radioChange"
              >
                4
              </FormRadio>
            </div>
          </div>
          <br />

          <div class="p-2">
            <h3 class="component-title text-black">
              <span
                class="border rounded-pill text-white shadow-sm cursor-pointer py-1 px-2"
                @click="
                  toggleStorybookDisplay({
                    componentsCategory: STORYBOOK_CATEGORY.FORM,
                    components: STORYBOOK_COMPONENTS.CHECKBOX,
                  })
                "
                >checkbox</span
              >
            </h3>
            <div class="d-flex gap-3 align-items-center">
              <FormCheckbox
                v-model="inputs.checkboxValueList"
                value="1"
                :true-value="'correct 1'"
                :false-value="'incorrect 1'"
                :color="'info'"
                @changeValue="checkboxChange"
              >
                1
              </FormCheckbox>
              <FormCheckbox
                v-model="inputs.checkboxValueList"
                value="2"
                :true-value="'correct 2'"
                :false-value="'incorrect 2'"
                :color="'warning'"
                @changeValue="checkboxChange"
              >
                2
              </FormCheckbox>
              <FormCheckbox
                v-model="inputs.checkboxValueList"
                value="3"
                :true-value="'correct 3'"
                :false-value="'incorrect 3'"
                :disabled="true"
                @changeValue="checkboxChange"
              >
                3
              </FormCheckbox>
              <FormCheckbox
                v-model="inputs.checkboxValueList"
                value="4"
                :true-value="'correct 4'"
                :false-value="'incorrect 4'"
                @changeValue="checkboxChange"
              >
                <!-- :disabled="true" -->
                4
              </FormCheckbox>
            </div>
            <div class="d-flex gap-3 align-items-center">
              <FormCheckbox
                v-for="(card, index) in inputs.checkboxCardList"
                v-model="inputs.checkboxCardValueList"
                :key="index"
                :value="card"
                @changeValue="checkboxCardChange"
                @changeEvent="checkboxChangeEvent"
              >
                {{ card.name }}
              </FormCheckbox>
            </div>
          </div>
          <br />

          <div class="w-100 p-2">
            <h3 class="component-title text-black">
              <span
                class="border rounded-pill text-white shadow-sm cursor-pointer py-1 px-2"
                @click="
                  toggleStorybookDisplay({
                    componentsCategory: STORYBOOK_CATEGORY.FORM,
                    components: STORYBOOK_COMPONENTS.INPUT,
                  })
                "
                >input</span
              >
            </h3>
            <FormInput
              v-model="inputs.inputValue"
              :placeholder="'default input'"
              :clearable="true"
              @inputValue="inputChange"
              @inputEvent="inputEventHandler"
            />
            <FormInput
              v-model="inputs.inputValueDisabled"
              disabled
              :background-transparent="true"
            />
            <FormInput
              v-model="inputs.inputValueReadonly"
              :readonly="true"
              :placeholder="'readonly input'"
              :background-transparent="true"
            />
            <FormInput
              v-model="inputs.inputValueInvalid"
              :placeholder="'invalid input'"
              :invalid="!!inputs.inputValueInvalid"
              :invalid-animation="true"
              :clearable="true"
              :background-transparent="true"
            >
            </FormInput>
          </div>
          <br />
        </div>
      </div>
    </div>

    <div class="demo__not-yet-released-component position-relative">
      <div class="container d-flex align-items-center position-relative">
        <img
          src="@/assets/lay-down-alien.png"
          class="demo__not-yet-released-component__image img-fluid"
        />
        <div>
          <div
            class="demo__not-yet-released-component__title"
            data-storke="Not yet"
          >
            <span class="demo__not-yet-released-component__title--text"
              >Not yet</span
            >
          </div>
          <div
            class="demo__not-yet-released-component__title"
            data-storke="released"
          >
            <span class="demo__not-yet-released-component__title--text"
              >released</span
            >
          </div>
          <div
            class="demo__not-yet-released-component__title"
            data-storke="components"
          >
            <span class="demo__not-yet-released-component__title--text"
              >components</span
            >
          </div>
        </div>
      </div>
      <div
        class="demo__not-yet-released-component__block position-relative pb-2"
      >
        <div class="container">
          <div class="w-100 p-2">
            <h3 class="component-title text-white">headline</h3>
            <headline
              :title-text="'Gaza Ministry of Health report describes crumbling health system'"
              :title-position="'end'"
              :superscript-text="'headline'"
              :superscript-background-color="'success'"
              :superscript-position="'end'"
            />
            <br />
            <headline
              :title-text="'Gaza Ministry of Health report describes crumbling health system'"
              :superscript-text="'headline'"
            />
          </div>
          <br />

          <div class="w-100 p-2">
            <h3 class="component-title text-white">paragraph</h3>
            <paragraph :text="text" :text-size="'xs'" />
            <paragraph :text="text" :text-size="'sm'" />
            <paragraph :text="text" :text-size="'md'" />
            <paragraph
              :text="text"
              :text-size="'lg'"
              :first-letter-shadow-color="'#91AD70'"
            />
          </div>
          <br />

          <div class="p-2">
            <h3 class="component-title text-white">ordered list</h3>
            <ordered-list :contents="options" />
          </div>
          <br />

          <div class="w-100 p-2">
            <h3 class="component-title text-white">container</h3>
            <container :title="'container'" :background-color="'#7e9fba'">
              <template #content>{{ text }}</template>
            </container>
          </div>
          <br />

          <div class="p-2">
            <h3 class="component-title text-white">affix bar</h3>
            affix bar status:
            <button
              type="button"
              focus
              class="btn btn-info"
              @click="uiState.affixBarDisplay = true"
            >
              <!-- @click="uiState.affixBarDisplay = !uiState.affixBarDisplay" -->
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
          <br />
        </div>
      </div>
    </div>

    <SlidingContainer
      :show="uiState.storybookDisplay"
      :backgroundColor="'#99eadb'"
    >
      <StorybookTemplate
        :components="storybook.components"
        :componentsCategory="storybook.componentsCategory"
        @closeStorybook="uiState.storybookDisplay = false"
      />
    </SlidingContainer>
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
import Tag from '@/components/utility/Tag.vue'
import FormDropdown from '@/components/inputs/Dropdown.vue'
import SlidingContainer from '@/components/storybook/SlidingContainer.vue'
import StorybookTemplate from '@/components/storybook/Template.vue'
import {
  STORYBOOK_CATEGORY,
  STORYBOOK_COMPONENTS,
} from '@/components/constants/storybookConstants'

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
    Tag,
    FormDropdown,
    SlidingContainer,
    StorybookTemplate,
  },
  data() {
    return {
      uiState: {
        affixBarDisplay: false,
        storybookDisplay: false,
      },
      text: `A "daily emergency report" created by Gaza's Hamas-run Health Ministry described an emergency medicine system that's on the edge of failure. According to the figures in the document, which could not be independently verified, 57 medical workers in the system had been killed, 25 ambulances had been taken out of service, and 15,273 people had been injured in the conflict. The document, provided to NBC News by Dr. Medhat Abbas, a director at al-Shifa Hospital in Gaza City, included detailed charts and figures that describe overcrowded hospitals' struggling with dwindling resources.`,
      options: [
        {
          title: 'title1',
          content: 'content1content1content1content1content1content1',
          url: 'demo',
          urlText: '看更多',
        },
        {
          title: 'title2',
          content: 'content2content2content2content2content2content2',
          url: 'demo',
        },
        {
          title: 'title3',
          content: 'content3content3content3content3content3content3',
        },
        {
          title: 'title4',
          content: 'content4content4content4content4content4content4',
        },
        {
          title: 'title5',
          content: 'content5content5content5content5content5content5',
        },
      ],
      inputs: {
        radioValue: '',
        FormDropdownValue: [],
        checkboxValueList: [4],
        checkboxCardValueList: [{ name: 'easy card', value: '100' }],
        checkboxCardList: [
          { name: 'credit card', value: '50' },
          { name: 'easy card', value: '100' },
          { name: 'traffic card', value: '200' },
        ],
        inputValue:
          'default input & with placeholder & background white & clearable button',
        inputValueDisabled:
          'disabled input & without placeholder & background transparent',
        inputValueReadonly:
          'readonly input & with placeholder & background transparent',
        inputValueInvalid: '',
      },
      singleDropdownValue: [],
      singleDropdownOptions: [
        { text: 'text1', value: 'value1' },
        { text: 'text2', value: 'value2' },
        { text: 'text3', value: 'value3' },
      ],
      multipleDropdownValues: [
        { text: 'text1', value: 'value1' },
        { text: 'text2', value: 'value2' },
      ],
      multipleDropdownOptions: [
        { text: 'text1', value: 'value1' },
        { text: 'text2', value: 'value2' },
        { text: 'text3', value: 'value3' },
        { text: 'text4', value: 'value4' },
        { text: 'text5', value: 'value5' },
        { text: 'text6', value: 'value6' },
        { text: 'text7', value: 'value7' },
      ],
      storybook: {
        components: '',
        componentsCategory: '',
      },
      STORYBOOK_CATEGORY,
      STORYBOOK_COMPONENTS,
    }
  },
  methods: {
    radioChange(changeValue) {
      console.log('radio onChange value', changeValue)
    },
    checkboxChange(checkedValue) {
      console.log('checked value', checkedValue) // = this.inputs.checkboxValueList
    },
    checkboxCardChange(checkedValue) {
      console.log('checked value', checkedValue)
    },
    checkboxChangeEvent(checkedEvent) {
      console.log('checked event', checkedEvent)
    },
    inputChange(inputValue) {
      console.log('onInput value', inputValue)
    },
    inputEventHandler(inputEvent) {
      console.log('onInput event', inputEvent)
    },
    tagOnClick(tagValue) {
      console.log('tag on click', tagValue)
    },
    deleteTag(tagValue) {
      console.log('tag on click delete btn', tagValue)
    },
    singleDropdownChange(option) {
      if (!option) return
      this.singleDropdownValue = option
    },
    multipleDropdownChange(option) {
      if (!option) return
      this.multipleDropdownValues = option
    },
    toggleStorybookDisplay({ componentsCategory, components }) {
      if(this.uiState.storybookDisplay) return;
      this.uiState.storybookDisplay = true
      this.storybook.componentsCategory = componentsCategory
      this.storybook.components = components
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/scss/global.import.scss';
$image-dimensions: clamp(120px, calc(100vw / 5), 280px);
$image-cross-height: 66px;

.demo {
  background: $custom-blue;
  &__bootstrap-components,
  &__released-component,
  &__not-yet-released-component {
    .container {
      z-index: 1;
    }
    &__image {
      width: $image-dimensions;
      height: $image-dimensions;
    }
    &__title {
      @include concert-font('sm');
    }
    &__block {
      z-index: 0;
      padding-top: $image-cross-height;
      transform: translate(0, -$image-cross-height);
      background-image: url('assets/grid.png');
      background-color: $custom-red;
      border-bottom: 2px solid $custom-black;
      .component-title {
        text-shadow: 2px 2px 0 $custom-black;
      }
    }
  }
  &__released-component {
    &__block {
      background-color: $custom-light-yellow;
      .component-title {
        text-shadow: none;
        span {
          background: #22479f;
        }
      }
    }
  }
  &__not-yet-released-component {
    &__block {
      background-color: $custom-gray;
    }
  }
}
</style>
