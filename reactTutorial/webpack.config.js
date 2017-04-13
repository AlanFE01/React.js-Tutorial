var config = {
   entry: './main.js',

   output: {
      path: '/',
      filename: 'index.js',
   },
   devtool: "source-map",
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [{
         test: /\.jsx?$/,
         exclude: /(node_modules)/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: ['env', 'react', 'stage-0']
            }
         }
      }]
   }
}
module.exports = config;