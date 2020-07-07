const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    
    module.exports = {
      entry: './src/index.js', // Elegimos nuestro punto de entrada
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      }, // Añadimos nuestro punto de salida 
      resolve: {
        extensions: ['*', '.mjs', '.js', '.svelte'],
      }, // Añadimos el soporte para las extensiones que utiliza svelte
      module: {
        rules: [
          {
            test: /\.js?$/, 
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          }, // Creamos la regla para nuestros archivos JS
          {
            test: /\.svelte$/,
            exclude: /node_modules/,
            use: {
              loader: 'svelte-loader'
            }
          }, // Utilizamos svelte-loader para trabajar con los archivos .svelte 
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html',
          filename: './index.html',
        })
      ] // utilizamos este plugin para añadir el recurso compilado al documento HTML
    };