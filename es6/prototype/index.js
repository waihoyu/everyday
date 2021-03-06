/*
 * @Author: WaiHoYu 
 * @Date: 2018-06-01 14:22:16 
 * @Last Modified by:   WaiHoYu 
 * @Last Modified time: 2018-06-01 14:22:161 
 * @Description:     
 */

let obj = { a: 1 }
    // console.log("a" in obj)
    // console.log("toString" in obj)

function hasPrototypeProperty(o, name) {
    // 它的原型链才会有的
    return name in o && !o.hasOwnProperty(name);
}
// console.log(hasPrototypeProperty(obj, 'toString1'));

/* 函数是对象 Object 是函数生成的 */
function Person(name) {
    this.name = name;
}
// js 几乎所有的函数都有一个prototype 属性，指针一样，指向一个对象， 属性或方法的集合
Person.prototype.getName = function() {
    return this.name
}
Person.prototype = {
    getName1: function() {
        console.log(this.name + "2323");
        return this.name;
    }
}

/* js 原型式继承
constructor Person name + books 属性
prototype  Person的方法链 + 方法链(自身方法)
一 让子类拥有父类的所有属性
*/

function Author(name, books) {
    /* 新的构造函数 */
    // 函数
    Person.call(this, name);
    this.books = books;
}
// console.log(Person.prototype.constructor);

Author.prototype.getBooks = function() {
    return this.books
}

extend(Author, Person);

function extend(subClass, superClass) {
    // 第三者
    let F = function() { this.na = "test" }; // 空的构造函数
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    console.log(subClass.prototype.prototype);
    subClass.prototype.constructor = subClass;
    console.log(subClass.prototype);
}

let test = new Author('雨果', ['悲惨世界']);
// test.getName1();

// Author.prototype = {}

const author = new Author('雨果', ['悲惨世界']);

/* prototype 入口？ js 把所有对象其实是由function构造的
函数都有的属性 */

/* 实例 instance p1 p2 都有自身属性name 
由 Person 构建函数 this.name = 

 */