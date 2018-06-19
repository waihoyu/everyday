/*
 * @Author: WaiHoYu 
 * @Date: 2018-06-13 15:16:35 
 * @Last Modified by:   WaiHoYu 
 * @Last Modified time: 2018-06-13 15:16:351 
 * @Description:  JS的数据类型之一    
 */
//  为js 带来 唯一值  不会重复


// var s = Symbol();
// console.log(typeof s);
// var s1 = Symbol();

// var sym = Symbol("My symbol");
// console.log(sym);
// console.log(typeof sym);
// console.log(String(sym) == sym);
// console.log(s == s1);
// var s3 = new String("99");
// console.log(s3.toString());
// var str2 = "2";
// console.log(String(s3));




var mySymbol = Symbol();
var a = {
    "delay": 1000,
    "delay": 2000,
    [mySymbol]: "Hello"
}
// console.log(a[mySymbol]);

var sym = Symbol();
// a[sym] = { value: "你好" };

// console.log(a);
// const objectSymbols = Object.getOwnPropertySymbols(a);
// console.log(objectSymbols);


[].forEach.call(a, (key) => {
    console.log(1);
})
// console.log(a.forEach);

// [1, 2, 3].forEach.call(["a", "b", "c"], function(item, i, arr) {
//     console.log(i + ": " + item);
// });

Object.defineProperty(a, sym, { value: "你好" });
console.log(a[sym]);