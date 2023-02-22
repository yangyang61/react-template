import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import viteImagemin from 'vite-plugin-imagemin'
import svgr from 'vite-plugin-svgr'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  const currentEnv = loadEnv(mode, process.cwd())
  console.log('当前模式', command)
  console.log('当前环境配置', currentEnv) //loadEnv即加载根目录下.env.[mode]环境配置文件
  return defineConfig({
    plugins: [
      react(),
      svgr(),
      viteImagemin({
        // 无损压缩配置，无损压缩下图片质量不会变差
        optipng: {
          optimizationLevel: 7,
        },
        // 有损压缩配置，有损压缩下图片质量可能会变差
        pngquant: {
          quality: [0.8, 0.9],
        },
        // svg 优化
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
      AutoImport({
        imports: ['react', 'mobx', 'react-router-dom'],
        dts: './src/auto-imports.d.ts',
        dirs: ['src/store'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        },
      }),
      WindiCSS(),
      createSvgIconsPlugin({
        iconDirs: [path.join(__dirname, 'src/assets/icons')],
      }),
      vitePluginImp({
        // 支持不太好暂时不用
        // libList: [
        //   {
        //     libName: '@arco-design/mobile-react',
        //     style: (name) => {
        //       return [
        //         // 加载框架的主要样式文件 index.less
        //         '@arco-design/mobile-react/lib/style/index.less',
        //         // 根据name值按需加载相关组件样式
        //         `@arco-design/mobile-react/lib/${name}/style/index.less`,
        //       ]
        //     },
        //   },
        // ],
      }),
    ],
    //项目部署的基础路径,
    base: currentEnv.VITE_PUBLIC_PATH,
    mode: mode,
    resolve: {
      //别名
      alias: [
        { find: '@', replacement: resolve(__dirname, './src') },
        { find: '@components', replacement: resolve(__dirname, './src/components') },
        { find: '@store', replacement: resolve(__dirname, './src/store') },
        { find: '@views', replacement: resolve(__dirname, './src/views') },
        { find: '@assets', replacement: resolve(__dirname, './src/assets') },
        { find: '@hooks', replacement: resolve(__dirname, './src/hooks') },
      ],
    },
    //服务
    server: {
      //自定义代理---解决跨域
      proxy: {
        // 选项写法
        '/api': {
          target: 'http://xxxxxx.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        sass: {
          javascriptEnabled: true,
        },
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
      },
    },
    //构建
    build: {
      // outDir: `dist_${format(new Date(), 'yyyyMMdd_HHmm')}`, //输出路径  新增打日期包
      //构建后是否生成 source map 文件
      sourcemap: mode != 'production',
      // esbuild 打包更快，但是不能去除 console.log，去除 console 使用 terser 模式
      minify: 'esbuild',
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //     drop_debugger: false,
      //   },
      // },
    },
  })
}
