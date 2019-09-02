const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //This property defines where the application starts
  entry: "./src/index.js",
  //This property defines the file path and the file name which will be used for deploying the bundled file
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  devServer: {
    //webpack to serve the app in development
    stats: "minimal", //reduces the info it writes to command line
    overlay: true, //overlay any errors that occur in browser
    historyApiFallback: true, //all requests are sent to index.html
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
    //these last three lines are due to a bug open in Chrome - once resolved can remove these three
  },
  // Setup plugin to use a HTML file for serving bundled js files
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", //where to find HTML template
      favicon: "src/favicon.ico" //where to find favicon
    })
  ],
  //Setup loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, //how to find our JS files
        exclude: /node_modules/,
        use: ["babel-loader"] //run babel
      },
      {
        test: /(\.css)$/, //how to find our CSS files
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
