const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js" //The final output file (All js are combined and formed into a single output file)
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/, //Loads loader for all files that ends with .js
        exclude: /node_modules/ //Helps us to exclude a given set of files as we need not run babel for these files as they are already productionr ready
      },
      {
        test: /\.s?css$/, // This supports scss and css files
        use: ["style-loader", "css-loader", "sass-loader"] // We can use "use" when we want to supply more than one loader
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true // This tells dev-server to send .html file for all 404
  }
};