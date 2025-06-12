import { defineConfig, loadEnv, type PluginOption } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import pxtovw from "postcss-px-to-viewport-8-plugin";
import autoprefixer from "autoprefixer";

import { visualizer } from 'rollup-plugin-visualizer'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


const loder_h5 = pxtovw({
  unitToConvert: "px",
  viewportWidth: 750,
  unitPrecision: 3,
  propList: ["*"],
  viewportUnit: "vw",
  fontViewportUnit: "vw",
  selectorBlackList: [".ignore", ".hairlines", ".cochattip"],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: /(\/|\\)(node_modules|web)(\/|\\)/,
});
const loder_web = pxtovw({
  unitToConvert: "px",
  viewportWidth: 1920 / 1.2,
  unitPrecision: 16,
  propList: ["*"],
  viewportUnit: "vw",
  fontViewportUnit: "vw",
  selectorBlackList: [".ignore", ".hairlines", ".cochattip"],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: /(\/|\\)(node_modules|h5)(\/|\\)/,
});

// https://vitejs.dev/config/
/**
 * command: build / serve
 * mode: development / production /staging
 */
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // env: { VITE_BASE_URL: 'http://stag', VITE_BASE_TITLE: '测试vite' }
  // const env = loadEnv(mode, process.cwd())
  // console.log(env, mode, command)

  // dev/build公共配置
  const BASE_CONFIG = {
    base: './',
    plugins: [
      vue(),
      // visualizer({
      //   open: true,
      //   gzipSize: true,
      //   brotliSize: true,
      // }) as PluginOption
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    css: {
      postcss: {
        plugins: [autoprefixer, loder_h5, loder_web],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        "@components": path.resolve(__dirname, "src/components"),
      }
    }
  }

  // 开发/生产配置区分
  if (command === 'serve') {
    return {
      // dev 独有配置
      server: {
        host: true,
        port: 3000,
        proxy: {
          // 选项写法
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          },
        }
      },
      ...BASE_CONFIG
    }
  } else {
    // command === 'build'
    return {
      // build 独有配置
      build: {
        outDir: mode === 'production' ?
          'dist/prod' :
          'dist/test',
        rollupOptions: {
          output: {
            // https://rollupjs.org/configuration-options/#output-manualchunks
            manualChunks(id) {
              if (id.includes('echarts')) {
                return 'echarts'
              } else if (id.includes('axios') || id.includes('crypto-js') || id.includes('vconsole')) {
                return 'axios-cryptoJS-vConsole'
              }
            },
          }
        }
      },
      ...BASE_CONFIG
    }
  }
})
