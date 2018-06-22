// import { GetPromise } from "./promise";
const Promise = require('./promise.js')
let pr = new Promise((resolve, reject) => {
    // resolve("开始执行");
    setTimeout(() => {
        reject("开始失败");
        console.log('--');
    }, 1000);

});

pr.then((data) => {
    console.log(data);
}, (err) => { console.log(err); });




//将要执行的耗时任务，封装在我们的executor里面，实例化时就开始执行。
// GetPromise.then(function() { console.log("测试成功"); });
// 2秒钟resolve的定时器  同步化
// promise
//