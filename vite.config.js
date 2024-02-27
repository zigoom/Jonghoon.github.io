import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'',
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '/@': path.resolve(__dirname, './src'),
      '/@components': path.resolve(__dirname, './src/components'),
      '/@compositions': path.resolve(__dirname, './src/compositions'),
      '/@app_modules': path.resolve(__dirname, './src/modules'),
      '/@store': path.resolve(__dirname, './src/store'),
      '/@router': path.resolve(__dirname, './src/router'),
      '/@assets': path.resolve(__dirname, './src/assets'),
    },
    extensions: [".js"]
  },  
  // publicDir: path.resolve(__dirname, "src/assets/images"),
  // outputDir: path.resolve(__dirname, "./path"),
  // 빌드시에 vue 이동시에 경로 설정 (https://osc131.tistory.com/147)
  build: {
    // assetsInlineLimit: 0, // 모든 이미지를 별도 파일로 추출
    // assetsDir: './public/images', // 이미지 파일이 포함될 디렉토리를 지정합니다.
  },
  plugins: [vue()]
})
