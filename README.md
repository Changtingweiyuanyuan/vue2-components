# vue2-components


### 於專案中套用vue2-components
1. 專案中 package.json
加入 `"vue2-components": "git+ssh:git@github.com:Changtingweiyuanyuan/vue2-components.git"`

1. 專案中 webpack config 加入，即檔案中可使用套件 `vue2-components` 制定變數
    
    ```markdown
    css: {
      loaderOptions: {
        sass: {
          additionalData: `@import "vue2-components.styles/global.variables.scss";`,
        },
      },
    },
    ```
    
    根據 sass-loader版本不同 config的key name也會不同
     若版本為 8.x，`additionalData` 需要改成 `prependData`，程式碼請參考[官方文件](https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders)
    
2. 專案中 App.vue 加入 `@import '@/scss/global.import.scss';`

1. 為開發方便 可於webpack config 設定引用路徑(視需求決定)
    
    ```markdown
    .set("@vue2-components", "@/../node_modules/vue2-components/src")
    .set(
      "vue2-components.styles",
      "@/../node_modules/vue2-components/src/scss"
    )
    .set(
      "vue2-components.components",
      "@/../node_modules/vue2-components/src/components"
    );
    ```
    

1. `yarn`

---

### 於專案中更新vue2-components

1. `yarn cache clean`
2. `yarn upgrade vue2-components --latest -f`
3. `yarn`
4. `yarn serve`

---

### vue2-components storybook

1. `yarn`
2. `yarn serve` 可查看目前已釋出及尚未釋出元件及storybook
