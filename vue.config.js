const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack")
const path = require("path")

module.exports = defineConfig({
  publicPath: '/',
  outputDir: 'lzAuth',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  parallel: undefined,
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Log: [path.resolve(__dirname, './src/tool/console/Log.js'), 'default'], // 定义的全局函数类
      })
    ]
  },
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = '编程日志'
          return args
        })
  }
})
