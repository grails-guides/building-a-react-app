//tag::garageEntry[]
var path = require('path');

module.exports = {
    entry: {
        index: './src/main/webapp/app/app.js', // <1>
        garage: './src/main/webapp/app/garage.js' // <2>
    },
    //end::garageEntry[]
    //tag::outputSection[]
    output: {
        path: './grails-app/assets/javascripts',
        publicPath: '/assets/',
        filename: 'bundle-[name].js' // <1>
    },
    //end::outputSection[]
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src/main/webapp'),
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url?limit=10000&prefix=assets/!img'
            }
        ]
    }
};

