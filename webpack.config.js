const path = require("path");

module.exports = {
    entry: {
      "index": "./pages/home/index.ts",
      "flopedia": "./pages/flopedia/flopedia.ts",
      "default": "./pages/game/src/default/main.ts",
      "shapes": "./pages/game/src/shapes/main.ts",
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: "/node_modules/",
        }
      ],
    },
    resolve: {
        extensions: [".tex", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    }
}