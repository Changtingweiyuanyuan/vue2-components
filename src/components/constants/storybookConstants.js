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
        DESCRIPTION: '錯誤提示文字',
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
            DESCRIPTION: '輸入框發生改變時，此方法可接收輸入框的值',
        },
        INPUT_EVENT: {
            NAME: 'inputEvent',
            DESCRIPTION: '輸入框發生改變時，此方法可接收輸入框的事件',
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
})
