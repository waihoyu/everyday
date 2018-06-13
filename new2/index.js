/*
 * @Author: WaiHoYu 
 * @Date: 2018-06-12 19:12:24 
 * @Last Modified by:   WaiHoYu 
 * @Last Modified time: 2018-06-12 19:12:241 
 * @Description:     
 */

function Otaku(name, age) {
    this.name = name
    this.age = age
    this.habit = 'Games'
}

Otaku.prototype.strength = 60

Otaku.prototype.sayYourName = function() {
    console.log('I am' + this.name)
}

//new  到底做了什么呢？
// const person = new Otaku('曾凯', 18)
// person.sayYourName();
/*要返回一个新的对象
访问到Otaku，构造函数里的属性
访问到Otaku.prototype中的属性或方法。
*/





//参数1 是类 ，后几个参数...
//js  的函数参数异常灵活
//数量可以不定，形参可以不给。
//还有...  reset 运算符整合起来。
// 都会跟argument是结合起来。
function objectFactory() {
    var Constructor = [].shift.call(arguments);
    var obj = new Object();
    // console.log(obj);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj;
    // var constructor = ?
    //     var args = ? 参数
    // Array.from(arguments).forEach((item) => { console.log(item); })
}

var person = objectFactory(Otaku, '鸠摩智', 50);

//肢解动作  第一项
console.log(person);

// 其余项就是参数