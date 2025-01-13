const path = require('path')

const HtmlWebpackPlugign = require('html-webpack-plugin');

module.exports = {

    mode: 'development',

    devtool: 'eval-source-map',
    
    entry: './src/index.js',

    output:{
        path: path.resolve(__dirname, 'dist'),

        filename: 'bundle.js'
    },

    watch: false,

    module:{

        rules:[ {

            test: /\.css$/,

            use: [
                "style-loader",
                "css-loader"
            ]
        }]
    },

    plugins: [
        new HtmlWebpackPlugign({
            template: './dist/index.html',
            
        
        })
    ],
};