// quem executa o webpack é o node, então o webpack.config.js é um arquivo node (usar require/exports)
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.js"), // arquivo de entrada (arquivo onde está o ReactDOM.createRoot)
	output: {
		path: path.resolve(__dirname, "build"), // vai pra pasta build
		filename: "bundle[hash].js", // nome do arquivo de saída
	},
	plugins: [
		new HtmlWebpackPlugin({
			// plugin para gerar o arquivo html na pasta build
			template: path.resolve(__dirname, "public", "index.html"), // mesmo diretório, pasta public, arquivo index.html
		}),
		new CleanWebpackPlugin(), // plugin para limpar a pasta build
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, // arquivos node_modules, já são transpilados antes de serem publicados
				use: "babel-loader", // usar o babel-loader para transpilar
			},
		],
	},
};
