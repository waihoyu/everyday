// 参数不限
//类数组， js  生成的怪胎
// Array.prototype.forEach
function sum(...args) {
    // console.log(args);
    let total = 0;
    // args.forEach(i => { total += i })
    // return total;
    // console.log(args);
    // let total = 0;
    // arguments.forEach(i => { total += i })
    // return total;
    // for (let i = 0; i < arguments.length; i++) {
    //     total += arguments[i];
    // }
    // console.log(total);
    // return total;
    Array.from(arguments).forEach(i => { total += i; })
    console.log(total);
}


sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);