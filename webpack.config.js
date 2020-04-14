const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV = 'production' // 默认 production

// "browserslist": {
//   "production": [
//     "> 1%",
//     "ie 9"
//   ],
//   "development": [
//     "last 1 chrome version",
//     "last 1 firefox version"
//   ]
// }

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build') // 绝对路径
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // 提取css
          'css-loader',
          'postcss-loader'
        ],
        // use: ['style-loader', 'css-loader'],
        // {
        //   loader: 'postcss-loader',
        //   options:{
        //     ident: 'postcss',
        //     plugins:() =>[
        //       require('postcss-preset-env')()
        //     ]
        //   }
        // }
      },
      {
        exclude: /\.(css|js|html|less|png|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[hash:3].[ext]'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: 'assets/images/[hash:6].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的文件重命名
      filename: 'css/built.css'
    })
  ],
  mode: 'development',
  devServer: { // 内存中
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 2333,
    open: true,
    host: '192.168.205.222'
  }
}