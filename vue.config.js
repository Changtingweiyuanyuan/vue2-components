const { defineConfig } = require("@vue/cli-service");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("node_modules", path.resolve(__dirname, "./node_modules"))
      .set("assets", resolve("src/assets"))
      .set("router", resolve("src/route/router"))
      .set("components", resolve("src/components"))
      .set("scss", resolve("src/scss"))
      .set("public", resolve("src/public"))
      .set("utility", resolve("src/utility"))
      .set("pages", resolve("src/pages"));
  },
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        additionalData: '@import "@/scss/base";',
      },
    },
  },
});
