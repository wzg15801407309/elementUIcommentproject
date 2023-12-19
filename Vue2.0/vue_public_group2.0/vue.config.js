const { defineConfig } = require('@vue/cli-service');
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 全局less变量存储路径
        path.resolve(__dirname, './src/assets/css/base.less'),
      ]
    }
  }
})