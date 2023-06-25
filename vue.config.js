const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   publicPath: '/portfolio/',
//   outputDir: 'docs'
// }

module.exports = {
  publicPath: './'
};