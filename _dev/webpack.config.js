var path = require('path');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var TerserPlugin       = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
     watch: true ,
     entry:  { index: './dev/extension_function.js' } ,
     output: {
          path: path.resolve(__dirname, '../_extension/dist'),
          filename: './js/extension_js.js'
     } ,
     module: {
        rules: [
            {
              test: /\.(s*)css$/ ,
              use: ExtractTextPlugin.extract({
                  fallback:'style-loader',
                  use:['css-loader','sass-loader'],
              })
            }
        ]
     } ,
     plugins: [
        new CleanWebpackPlugin() ,
        new ExtractTextPlugin({ filename: './css/extension_style.css' })
     ] ,
     optimization: {
        minimize: true,
        minimizer: [ new TerserPlugin() ],
     },
};
