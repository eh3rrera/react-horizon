var path = require('path');

module.exports = {
    entry: ["./src/app.js"],

    output: {
        filename: "dist/js/bundle.js",
        sourceMapFilename: "dist/js/bundle.map"
    },

    devtool: '#source-map',
    
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
}