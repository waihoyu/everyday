const arr = [2, 3, 10, 5, 7, 8, 9];
console.log(arr instanceof Array);
console.log(arr.toString());
console.log(typeof arr);
console.log(Object.prototype.toString.call(arr));


const zk = {
    name: "曾凯",
    toString: function() {
        for (var key in this) {
            console.log(key + ":" + this[key]);
        }
    }
}

zk.toString()
console.log(zk.toString());
// 序列化  "{name:"曾凯",habit:"交友"}"
// console.log(zk.toString());
console.log(JSON.stringify(zk));

/* 
object 来自 function(){}
构造函数有prototype属性  对象的__proto__
*/