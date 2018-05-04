/**
 * 自己练习设计模式---模版模式
 * 
 */

var Fruit = function(param) {

    var buy = param.buy || function() {
        console.log('买水果！');
    }
    var sell = param.sell || function() {
        console.log('卖水果！');
    }

    var F = function() {}

    F.prototype.init = function() {
        buy();
        sell();
    }

    return F;
}

var Apple = Fruit({
    buy: function() {
        console.log('买苹果');
    },
    sell: function() {
        console.log('卖苹果');
    }
})

var a = new Apple();
a.init();