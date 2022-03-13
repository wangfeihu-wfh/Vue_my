// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  // 关闭eslint
  lintOnSave: false,
  //   运行时自动在浏览器打开
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
  },
};
