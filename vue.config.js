const { defineConfig } = require('@vue/cli-service')
const path = require("path");  //상대 결로를 위한 패스

module.exports = defineConfig({
    transpileDependencies: true
})
module.exports = {
    chainWebpack:config=>{
      config.plugins.delete('prefetch'); //prefetch 삭제
    }
  }
module.exports = {
    //뭔가 다른 설정들
    publicPath: './', //해당 설정을 추가 해줍니다. 상대경로인 ./ 로 설정 합니다.
    assetsDir: './', //만약 css, js, img 등 어셋 경로가 다를 경우 해당 경로도 수정 해야 합니다.
    outputDir: path.resolve(__dirname, "./path") // 빌드시에 vue 이동시에 경로 설정 (https://osc131.tistory.com/147)
    // outputDir: "./docs",
}
  