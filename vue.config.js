const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'',

  devServer:{
    proxy:{
      '/api':{
        target: 'http://localhost:80',
        pathRewrite:{'^/api':''},
        ws:true,
        changeOrigin:true
      }
    }
  }
})
