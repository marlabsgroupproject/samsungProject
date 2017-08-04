var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry : "./src/app.js",
    output : {
        path : path.join(__dirname, "/dest/"),
        filename : "app.bundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "babel-loader",
                query : {
                    presets : ["es2015","react"]
                }
            }
        ]
    }
}
