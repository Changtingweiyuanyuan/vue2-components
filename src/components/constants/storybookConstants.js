import { INPUT_DEFAULT_TEXT } from '../constants/inputsConstants'

export const STORYBOOK_CONSTANTS = Object.freeze({
  FORM_INPUT: {
    PROPERTIES: {
      VALUE: {
        NAME: 'value',
        TYPE: 'string',
        DESCRIPTION: '預設值',
        DEFAULT: '""',
      },
      PLACEHOLDER: {
        NAME: 'placeholder',
        TYPE: 'string',
        DESCRIPTION: '預設值欄位說明',
        DEFAULT: '""',
      },
      CLEARABLE: {
        NAME: 'clearable',
        TYPE: 'boolean',
        DESCRIPTION: '是否出現清除按鈕',
        DEFAULT: 'false',
      },
      DISABLED: {
        NAME: 'disabled',
        TYPE: 'boolean',
        DESCRIPTION: '是否disabled',
        DEFAULT: 'false',
      },
      READONLY: {
        NAME: 'readonly',
        TYPE: 'boolean',
        DESCRIPTION: '是否readonly',
        DEFAULT: 'false',
      },
      INVALID: {
        NAME: 'invalid',
        TYPE: 'boolean',
        DESCRIPTION: '是否出現錯誤提示',
        DEFAULT: '""',
      },
      INVALID_TEXT: {
        NAME: 'invalidText',
        TYPE: 'string',
        DESCRIPTION: '錯誤提示文字，數字超過100字 以 ... 替代',
        DEFAULT: INPUT_DEFAULT_TEXT.INVALID,
      },
      BACKGROUND_TRANSPARENT: {
        NAME: 'backgroundTransparent',
        TYPE: 'boolean',
        DESCRIPTION: '背景是否調整為透明色',
        DEFAULT: 'false',
      },
    },
    EMITS: {
      INPUT_VALUE: {
        NAME: 'inputValue',
        DESCRIPTION: '輸入框發生改變時觸發，此方法可接收輸入框的值',
      },
      INPUT_EVENT: {
        NAME: 'inputEvent',
        DESCRIPTION: '輸入框發生改變時觸發，此方法可接收輸入框的事件',
      },
    },
    PREFORMATTED_CODE: `
            import FormInput from "@/components/inputs/Input.vue";
            <FormInput
                v-model="input"
                type="text"
                placeholder=""
                :readonly="false"
                :disabled="false"
                :clearable="false" 
                :invalid="false"
                :invalid-text="'string'"
                :background-transparent="false"
                @inputValue="inputChange" 
                @inputEvent="inputEventHandler" 
            />`,
  },
  FORM_RADIO: {
    PROPERTIES: {
      VALUE: {
        NAME: 'value',
        TYPE: 'number/string',
        DESCRIPTION: '預設值',
        DEFAULT: '""',
      },
      //   LOCAL_VALUE: {
      //     NAME: 'localValue',
      //     TYPE: 'string',
      //     DESCRIPTION: 'v-model的值',
      //     DEFAULT: 'false',
      //   },
      CHECKED: {
        NAME: 'checked',
        TYPE: 'boolean',
        DESCRIPTION: '是否checked',
        DEFAULT: 'false',
      },
      DISABLED: {
        NAME: 'disabled',
        TYPE: 'boolean',
        DESCRIPTION: '是否disabled',
        DEFAULT: 'false',
      },
    },
    EMITS: {
      CHANGE: {
        NAME: 'change',
        DESCRIPTION:
          'radio發生改變時觸發，此方法可接收checkbox的值(回傳值型態依照傳入value的型態)',
      },
    },
    PREFORMATTED_CODE: `
            import FormRadio from '@/components/inputs/Radio.vue'

            <FormRadio 
                v-model="radio"
                value="1"
                :checked="false"
                :disabled="false"
                @change="radioChange"
            >
                1 
            </FormRadio>
    `,
  },
  FORM_CHECKBOX: {
    PROPERTIES: {
      VALUE: {
        NAME: 'value',
        TYPE: 'boolean/number/string/array/object',
        DESCRIPTION: '預設值',
        DEFAULT: '""',
      },
      LOCAL_VALUE: {
        NAME: 'localValue',
        TYPE: 'array',
        DESCRIPTION: 'v-model的值',
        DEFAULT: 'false',
      },
      TRUE_VALUE: {
        NAME: 'trueValue',
        TYPE: 'number/string',
        DESCRIPTION: '自定義回傳的true值',
        DEFAULT: '""',
      },
      FALSE_VALUE: {
        NAME: 'falseValue',
        TYPE: 'number/string',
        DESCRIPTION: '自定義回傳的false值',
        DEFAULT: '""',
      },
      DISABLED: {
        NAME: 'disabled',
        TYPE: 'boolean',
        DESCRIPTION: '是否disabled',
        DEFAULT: 'false',
      },
    },
    EMITS: {
      CHANGE_VALUE: {
        NAME: 'changeValue',
        DESCRIPTION: 'checkbox發生改變時觸發，此方法可接收checkbox的值',
      },
      CHANGE_EVENT: {
        NAME: 'changeEvent',
        DESCRIPTION: 'checkbox發生改變時觸發，此方法可接收checkbox的事件',
      },
    },
    PREFORMATTED_CODE: `
            import FormCheckbox from '@/components/inputs/Checkbox.vue';
            
        ➊
            <FormCheckbox
                v-model="checkboxList"
                value="1"
                :disabled="false"
                @changeValue="checkboxChange"
                @changeEvent="checkboxChangeEvent"
            >
                1
            </FormCheckbox>

            data() {
                return {
                    checkboxList: [],
                }
            }

        ➋
            <FormCheckbox
                v-for="(card, index) in checkboxCardList"
                v-model="checkboxValueList"
                :key="index"
                :value="card"
                @changeValue="checkboxChange"
                @changeEvent="checkboxChangeEvent"
            >
                {{ card.name }}
            </FormCheckbox>

            data() {
                return {
                    checkboxValueList: [],
                    checkboxCardList: [
                        { name: "credit card", value: "50" },
                        { name: "easy card", value: "100" },
                        { name: "traffic card", value: "200" },
                    ],
                }
            }
    `,
  },
  UTILITY_TAG: {
    PROPERTIES: {
      VALUE: {
        NAME: 'value',
        TYPE: 'bool/number/string/array/object',
        DESCRIPTION: 'tag資料',
        DEFAULT: '""',
      },
      CLICKED: {
        NAME: 'clicked',
        TYPE: 'bool',
        DESCRIPTION: '是否要傳送點擊事件',
        DEFAULT: 'false',
      },
      DISABLED: {
        NAME: 'disabled',
        TYPE: 'bool',
        DESCRIPTION: '是否disabled',
        DEFAULT: 'false',
      },
      DELETE_TN: {
        NAME: 'deleteBtn',
        TYPE: 'bool',
        DESCRIPTION: '是否出現刪除按鈕(點擊傳送事件)',
        DEFAULT: 'false',
      },
      COLOR: {
        NAME: 'color',
        TYPE: 'string',
        DESCRIPTION: '標籤顏色，可選擇primary、secondary、success、info、warning、danger、light、dark、gray-dark',
        DEFAULT: '"warning"',
      }
      //   TYPE: {
      //     NAME: 'type',
      //     TYPE: 'string',
      //     DESCRIPTION: '標籤類型',
      //     DEFAULT: '""',
      //   },
      //   SIZE: {
      //     NAME: 'size',
      //     TYPE: 'string',
      //     DESCRIPTION: '標籤大小',
      //     DEFAULT: '""',
      //   },
    },
    EMITS: {
      CLICK: {
        NAME: 'click',
        DESCRIPTION: '點擊tag時觸發，此方法可接收tag的值',
      },
      DELETE_TAG: {
        NAME: 'deleteTag',
        DESCRIPTION: '點擊刪除按鈕時觸發，此方法可接收tag的值',
      },
    },
    PREFORMATTED_CODE: `
            import Tag from '@/components/utility/Tag.vue';
            
            <Tag 
                value="1"
                :theme="success" 
                @click="oClick" 
                @deleteTag="onClickDeleteBtn" 
                :delete-btn="true"
            >
                tag
            </Tag>
    `,
  },
})
