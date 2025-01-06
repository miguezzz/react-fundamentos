// webpack é um empacotador de módulos para aplicações JavaScript
// quem executa o webpack é o node, então o webpack.config.js é um arquivo node (usar require/exports)
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'), // arquivo de entrada (arquivo onde está o ReactDOM.createRoot)
  output: {
    path: path.resolve(__dirname, 'build'), // vai pra pasta build
    filename: 'bundle[hash].js', // nome do arquivo de saída
  },
  plugins: [
    // plugin serve para adicionar funcionalidades ao webpack
    new HtmlWebpackPlugin({
      // plugin para gerar o arquivo html na pasta build
      template: path.resolve(__dirname, 'public', 'index.html'), // mesmo diretório, pasta public, arquivo index.html
    }),
    new CleanWebpackPlugin(), // plugin para limpar a pasta build
  ],
  module: {
    // module serve para configurar como o webpack vai lidar com os arquivos
    rules: [
      // As rules definem como tipos específicos de arquivos serão processados, transformando-os em módulos que podem ser importados no código.
      {
        test: /\.js$/, // testa se o arquivo termina com .js
        exclude: /node_modules/, // arquivos node_modules já são transpilados antes de serem publicados
        use: 'babel-loader', // usar o babel-loader para transpilar os terminados em .js para uma versão compatível com naveadores
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // habilita o CSS Modules
            },
          },
          'sass-loader',
        ], // usar o style-loader para injetar o css no html e o css-loader para cuidar das importações de css (ordem importa)
      },
    ],
  },
  devServer: {
    // configuração do servidor de desenvolvimento
    port: 3000,
  },
};
