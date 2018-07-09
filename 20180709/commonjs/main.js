//main.js
var example = require('./example.js');
var addNum = {
    "x":10,
    "y":5
}
console.log( example )//查看example输出的对外模块接口；
console.log( example.n )//1;
console.log( example.sayHello("Jack") )// "Hello~ Jack";
console.log( example.addFn(addNum) ) //15;