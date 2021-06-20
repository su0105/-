
module.exports = {
   
    outputDir: "dist", // where to put static assets (js/css/img/font/...) 
    // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    lintOnSave: false,
    // 使用带有浏览器内编译器的完整构建版本
    runtimeCompiler: false, 
    // babel-loader默认会跳过`node_modules`依赖. 
    // 通过这个选项可以显示转译一个依赖
    transpileDependencies: [
        /* string or regex */
    ], 
    // 是否为生产环境构建生成sourceMap?
    productionSourceMap: false,
     // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},

    configureWebpack: () => {},
    // CSS 相关选项
    css: {
        // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
        // 也可以是传递给 extract-text-webpack-plugin 的选项对象
        extract: true, // 允许生成 CSS source maps?
        sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
        loaderOptions: {}, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
        modules: false,
    }, 

    parallel: require("os").cpus().length > 1, 
    pwa: {},

    devServer: {
        open: process.platform === "darwin",
        disableHostCheck: false,
        host: "127.0.0.1",
        port: 8000,//访问端口
        https: false,//编译失败时刷新页面
        hot:true,//开启热加载
        hotOnly: false,
        proxy: null, //设置代理
        before: app => {}
    }, 

    // 第三方插件配置
    pluginOptions: {
        // ...
    }
};