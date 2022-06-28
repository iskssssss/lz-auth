const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置服务器
  devServer: {
    // port: 6661,
    // open: true,
    // https: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
