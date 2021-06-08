const path = require('path')

//entry -> output(one big js file)

module.exports = { // configuration export
    mode:'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'), // absolute path to the file below
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test:/\.s?css$/,
                use:[  // provide array of loaders
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

// loader customize behavior a webpack