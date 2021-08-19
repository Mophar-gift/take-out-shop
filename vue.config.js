const { resolve } = require('path');
const px2rem = require('postcss-px2rem')

module.exports = {
  // 配置 - postcss
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5 // 设计稿等分后的rem值：375/10
          })
        ]
      }
    }
  },
  // 配置 - 扩展名、别名的简写
  configureWebpack: {
    resolve: {
      extensions: ['.js', 'vue', '.json'],
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'components'),
      },
    },
  },
  // 配置 - 代理服务器
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
