//import 'babel-polyfill'
//import Promise from 'babel-runtime/core-js/promise'

//es6模块话规范
import sum from './src/sum';

window.Promise = Promise;

//commonjs规范
var minus=require('./src/minus');


//amd规范
require(['./src/multi'],function (multi) {
    console.log(multi(2,12));
})


console.log(sum(100,200));

console.log(minus(300,200));

let func=()=>{

}
const NUM=45;

let array=[1,2,4];
array.includes(8);
let arrayB=array.map(item=>{
    return item *2
});
console.log(new Set(arrayB))

var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
        console.log('执行完成');
        resolve('随便什么数据');
    }, 2000);
});

p.then(()=>{
    alert("cheng gong huidiao")
})


