var path=require('path');
let webpack=require('webpack');
module.exports={
    entry:{
        first:'./src/first.js',
        second:'./src/second.js'
    },
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve(__dirname,'dist'),
        /*
     * chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
     * 比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
     * 只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
     * 或者这样require.ensure(['./greeter'],function(require){alert(11);})
     * chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
     * 注意:对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取
     * */
        chunkFilename: "xxx.js",
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
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'first', //提出的chunk名称
            //这个公共的chunk的文件名，打包到common.js中
            //如果没有设置，会用到output配置中的 [name].[hash:5].js  那么就会打包到vender.hash.js中
            filename:'common.js',

        })




    ]

}