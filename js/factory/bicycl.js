console.log('工厂模式');
// 函数属于对象
// 函数是一等对象

var Bicycle = function (brand) {
    this.brand = brand || '凤凰';
    this.buy = function buy() { };
}

//原型凤凰....
// 二维码
// 手机支付
// js 继承关系;
// 共享单车，完全颠覆了自行车
//类，简单的只有一个构造函数;
//js 本身并没有类，只是用的人多了，给了这个实现。
//js 只有对象 Object原型对象的始祖。
//原型
//js 不需要传统继承，只要有个参照物就可以实现原型继承。
//js  字符串 数字  布尔值 undefined null 

//复杂类型 object <-  prototype array function json

Bicycle.prototype = {
    sellBicycle: function (model) {
        var bicycle = null;
        switch (model) {
            case 'Giant':
                bicycle = new Giant();
                break;
            case 'Speedster':
                bicycle = new Speedster();
                break;
            case 'YouTu':
                bicycle = new YouTu();
            default:
                break;
        }
        console.log('卖车了');
        return bicycle;
        // 卖车，  商店  很多的车  维修人员  仓库人员
        //面向对象们;
    }
}
//雷速达
var Speedster = function () {
    console.log('Speedster');

}
Speedster.prototype = {

}
//
var Giant = function () {
    console.log(Giant);
}
Giant.prototype = {

}
var YouTu = function(){

}
YouTu.prototype = {

}


var bicycle = new Bicycle('永久');

//console.log(bicycle.sellBicycle());
console.log(Giant);