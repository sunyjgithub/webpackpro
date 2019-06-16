import {commonMsg} from "./common";
import $ from 'jquery';

//通过这种方式引入的模块 将打包在xxx.js中 因为我的配置为chunkFilename: "xxx.js",
require.ensure(['./sum.js'], function(require){
    var sum = require('./sum').default;
    console.log(sum)
    console.log(sum(1,2));
});