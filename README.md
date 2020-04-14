## 开发环境
webpack-dev-server 在内存中构建运行webpack打包后的文件 不会输出
webpack 命令有输出 output

loader 可以通过option {outputPath: 'images'}

css 通过 css-loader 打包到js文件中

style-loader 创建<style>标签

## 生产环境
MiniCssExtractPlugin.loader替代style.loader
从打包后的js中提取css mini-css-extract-plugin