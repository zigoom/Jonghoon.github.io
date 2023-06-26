const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
});
module.exports = {
    publicPath: "/portfolio/",
    outputDir: "docs",
};
// module.exports = {
//   publicPath: '',
// };

// // development(개발 모드), production(배포 모드) 분기를 주어 번들링
// module.exports = {
//   // 환경 변수들은 process.env 객체에 정의되어 있다.
//   // NODE_ENV -> 앱이 실행되는 모드 3개의 기본 모드가 있다. ("development", "production", "test")
//   publicPath: process.env.NODE_ENV === 'production'
//   ? ''
//   : '/'
// };

// module.exports = {
//   //뭔가 다른 설정들
//   publicPath: './', //해당 설정을 추가 해줍니다. 상대경로인 ./ 로 설정 합니다.
//   assetsDir: './', //만약 css, js, img 등 어셋 경로가 다를 경우 해당 경로도 수정 해야 합니다.
//   //뭔가 다른 설정들
//   }

// const path = require("path");
// module.exports = {
//   outputDir: path.resolve(__dirname, "./path")

//    //   assetsDir: "./"
//    //   asset 파일 위치 설정 
// }

// module.exports = {
//   publicPath: '/portfolio/',
//   outputDir: 'docs'
// }

// module.exports = {
//   publicPath: './'
// };
// module.exports = {
// 	publicPath: '',
// }