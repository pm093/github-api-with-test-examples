var webpack = require('webpack');
var path = require('path');


module.exports={
  entry:path.join(__dirname,'/src/index.js'),
  output:{
    path:path.join(__dirname,'build'),
    filename:'bundle.js',
    publicPath:'/'
  },
  devtool:'eval',
  module:{
   rules:[
     {
       test:/\.jsx?$/,
       loader:'babel-loader',
       exclude:path.join(__dirname,'node_modules')
     },
     {
       test:/\.css$/,
       loaders:['style-loader','css-loader']
     }
   ]
 },
 devServer: {
  historyApiFallback: true,
  contentBase: __dirname + '/public', // `__dirname` is root of the project
 },
}
