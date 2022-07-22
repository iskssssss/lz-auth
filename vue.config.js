const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack")
const path = require("path")

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Log: [path.resolve(__dirname, './src/tool/console/Log.js'), 'default'], // 定义的全局函数类
      })
    ]
  }
})
