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
        DESCRIPTION:
          '輸入框發生改變時觸發，此方法可接收輸入框的值(有需要獲取才使用)',
      },
      INPUT_EVENT: {
        NAME: 'inputEvent',
        DESCRIPTION:
          '輸入框發生改變時觸發，此方法可接收輸入框的事件(有需要獲取才使用)',
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
/>
    `,
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
          'radio發生改變時觸發，此方法可接收radio的值(回傳值型態依照傳入value的型態)',
      },
    },
    PREFORMATTED_CODE: `
import FormRadio from '@/components/inputs/Radio.

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
        DESCRIPTION: '預設值，若帶object 需指定「value」key',
        DEFAULT: '""',
      },
      LOCAL_VALUE: {
        NAME: 'localValue',
        TYPE: 'array',
        DESCRIPTION: 'v-model的值，若帶object 需指定「value」key',
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

範例 ⑴
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

範例 ⑵
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
  FORM_DROPDOWN: {
    PROPERTIES: {
      SELECT_OPTIONS: {
        NAME: 'selectOptions',
        TYPE: 'array',
        DESCRIPTION: '下拉選單的選項<br>組成為[{value: "", text: ""}]',
        DEFAULT: '[]',
      },
      MULTI_VALUE: {
        NAME: 'multiValue',
        TYPE: 'array',
        DESCRIPTION: '下拉選單中 已被選取的值<br>組成為[{value: "", text: ""}]',
        DEFAULT: '[]',
      },
      SELECT_TYPE: {
        NAME: 'selectType',
        TYPE: 'string',
        DESCRIPTION: '下拉選單的類型<br>可選擇single、multiple',
        DEFAULT: '"single"',
      },
      PLACEHOLDER: {
        NAME: 'placeholder',
        TYPE: 'string',
        DESCRIPTION: '下拉選單尚未被勾選的預設文字',
        DEFAULT: '""',
      },
      DISABLED: {
        NAME: 'disabled',
        TYPE: 'boolean',
        DESCRIPTION: '是否disabled',
        DEFAULT: 'false',
      },
      DELETE_BTN: {
        NAME: 'deleteBtn',
        TYPE: 'boolean',
        DESCRIPTION: 'selectType為multiple時，標籤是否出現刪除按鈕',
        DEFAULT: 'true',
      },
      COLOR: {
        NAME: 'color',
        TYPE: 'string',
        DESCRIPTION:
          '單選為被選取文字顏色 多選為標籤顏色<br>可選擇primary、secondary、success、info、warning、danger、light、dark、gray-dark',
        DEFAULT: '"white"',
      },
      MENU_MAX_HEIGHT: {
        NAME: 'menuMaxHeight',
        TYPE: 'number/string',
        DESCRIPTION: '下拉選單menu高度',
        DEFAULT: '"200"',
      },
    },
    EMITS: {
      CHANGE_VALUE: {
        NAME: 'change',
        DESCRIPTION: '下拉選單發生改變時，此方法可接收下拉選單被選取的值',
      },
    },
    PREFORMATTED_CODE: `
import FormDropdown from '@/components/inputs/Dropdown.vue';

範例 ⑴
<FormDropdown
  :select-options="singleDropdownOptions"
  :placeholder="'單選'"
  :multi-value="singleDropdownValue"
  disabled
  @change="singleDropdownChange"
/>

data() {
  return {
    singleDropdownValue: [],
    singleDropdownOptions: [
      { text: 'text1', value: 'value1' },
      { text: 'text2', value: 'value2' },
      { text: 'text3', value: 'value3' },
    ]
  }
}
methods: {
  singleDropdownChange(value) {
    this.singleDropdownValue = value;
  }
}

範例 ⑵
<FormDropdown
  :select-options="multipleDropdownOptions"
  :placeholder="'多選'"
  :select-type="'multiple'"
  disabled
  :multi-value="multipleDropdownValues"
  @change="multipleDropdownChange"
/>

data() {
  return {
    multipleDropdownValues: [],
    multipleDropdownOptions: [
      { text: 'text1', value: 'value1' },
      { text: 'text2', value: 'value2' },
      { text: 'text3', value: 'value3' },
    ],
  }
}
methods: {
  multipleDropdownChange(value) {
    this.multipleDropdownValues = value;
  }
}
    `,
  },
  UTILITY_TAG: {
    PROPERTIES: {
      VALUE: {
        NAME: 'value',
        TYPE: 'bool/number/string/array/object',
        DESCRIPTION: 'tag資料，若帶object 需指定「value」key',
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
        DESCRIPTION:
          '標籤顏色，可選擇primary、secondary、success、info、warning、danger、light、dark、gray-dark',
        DEFAULT: '"warning"',
      },
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
