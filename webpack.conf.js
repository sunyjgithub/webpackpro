var path=require('path');
module.exports={
    entry:{
        app:'./index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: "dist/"
    },

    module: {
        rules: [
            {
                test:/\.js$/,
                /*use:'babel-loader',*/
                use: {
                    loader: "babel-loader",
                    options: {
                        presets:[
                            ['babel-preset-env',{
                                 targets:{
                                     browsers:['>1%','last 2 versions']
                                 }
                            }]
                        ]
                    }
                },
                exclude:/node_modules/

            }

        ]
    }

}