// Function.prototype.test = function () {
//   console.log('日志打印')
// }
// console.log(Object.defineProperties.__proto__.__proto__)

let f = {}

console.log(f.constructor);

var str = 'abc';
console.log(str.constructor); // => function String 构造函数
var o = {};
console.log(o.constructor); // => function Object 构造函数

// 2.自定义对象多层继承 ：constructor返回最先调用的构造函数
function People(name) {
    this.name = name; // s对象初始化时，先调用People构造函数，再调用Student构造函数
    console.log('People调用');
}

function Student(age) {
    this.age = age;
    console.log('Student调用');
}
Student.prototype = new People(); // 设置Student的原型为People对象

var s = new Student(22);
console.log(s.constructor); // => function People 构造函数