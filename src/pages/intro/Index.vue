<template>
  <div class="intro pb-12">
    <div class="intro__main-visual p-3" data-storke="VUE2 COMPONENTS">
      <span class="intro__main-visual--text"> VUE2 COMPONENTS </span>
    </div>
    <div>
      <div class="intro__readme container" data-storke="README">
        <span class="intro__readme--text"> README </span>
        <div class="intro__readme__block border border-3 bg-white p-3">
          <h3>於專案中套用vue2-components</h3>
          <div>
            1. 專案中 package.json 加入
            <pre
              class="text-danger border rounded p-1">"vue2-components": "git+ssh:git@github.com:Changtingweiyuanyuan/vue2-components.git"</pre>
          </div>
          <div>
            2. 專案中 webpack config 加入，即檔案中可使用套件
            <pre class="text-danger border rounded p-1">vue2-components</pre>
            制定變數<br>
            <pre class="text-danger border rounded p-1">
css: {
  loaderOptions: {
    sass: {
      additionalData: `@import "vue2-components.styles/global.variables.scss";`,
    },
  },
},
            </pre>
            根據
            sass-loader版本不同 config的key name也會不同 若版本為
            8.x，additionalData 需要改成 prependData
          </div>
          <div>
            3. 專案中 App.vue 加入 
            <pre class="text-danger border rounded p-1">@import '@/scss/global.import.scss';</pre>
          </div>
          <div>
            4. 為開發方便 可於webpack config 設定引用路徑(視需求決定)
            <pre class="text-danger border rounded p-1">
.set("@vue2-components", "@/../node_modules/vue2-components/src")
.set("vue2-components.styles", "@/../node_modules/vue2-components/src/scss") 
.set( "vue2-components.components", "@/../node_modules/vue2-components/src/components" );
            </pre>
          </div>
          <div>
            5. 
            <pre class="text-danger border rounded p-1">yarn</pre>
          </div>
          <h3>於專案中更新vue2-components</h3>
          <pre class="text-danger border rounded p-1">yarn cache clean</pre>
          <pre class="text-danger border rounded p-1">yarn upgrade vue2-components --latest -f</pre>
          <pre class="text-danger border rounded p-1">yarn</pre>
          <pre class="text-danger border rounded p-1">yarn serve</pre>
          <h3>vue2-components storybook</h3>
          <pre class="text-danger border rounded p-1">yarn</pre>
          <pre class="text-danger border rounded p-1">yarn serve</pre>
          點選元件 title 可查看元件的使用方式
          <img src="@/assets/storybookSample.png" class="intro__readme--storybook-sample" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroPage',
}
</script>

<style scoped lang="scss">
@import '@/scss/global.import.scss';
$background-height: 1024px;
$title-margin-top: 34cqh;
$title-margin-left: map-get($spacers, 8);
$storybook-sample-width: 50px;

.intro {
  container-type: inline-size;

  &__main-visual {
    height: $background-height;
    background-image: url('assets/background.png');
    background-position: top;
    background-size: cover;
    container: main-visual / size;
    @include concert-font;

    &--text {
      top: $title-margin-top;
      left: $title-margin-left;
    }

    &::before {
      top: $title-margin-top;
      left: $title-margin-left;
      margin: $spacer;
    }
  }

  &__readme {
    @include concert-font;

    &__block {
      border-radius: $border-radius-xxl;
      border-color: $custom-black !important;
      background-image: url('assets/grid.png');
    }

    &--storybook-sample {
      width: $storybook-sample-width;
    }
  }
}</style>
