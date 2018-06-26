// //泡一杯咖啡，talk in  js
// // 流程
// // 把水煮沸
// // 用水冲泡咖啡
// // 把咖啡倒进杯子
// // 加糖和牛奶
// // 语义转化为代码
// // 方法 methods
// // boilWater()
// // brewCoffeeGriends()
// // pourIncup()
// // addSuguarAndMilk()

// var Coffee = function() {


// }
// Coffee.prototype.boilWater = function() {
//     console.log('把水煮沸');
// }
// Coffee.prototype.brewCoffeeGriends = function() {
//     console.log('用沸水泡咖啡')
// }
// Coffee.prototype.pourIncup = function() {
//     console.log('把咖啡倒进杯子')
// }
// Coffee.prototype.addSuguarAndMilk = function() {
//     console.log('加糖和牛奶')
// }
// Coffee.prototype.init = function() {
//     this.boilWater();
//     this.brewCoffeeGriends();
//     this.pourIncup();
//     this.addSuguarAndMilk();
// }

// var coffee = new Coffee();
// coffee.init();



// // 泡杯茶
// // 把水烧开
// // 用沸水浸泡茶叶
// // 把茶水倒进杯子
// // 加柠檬

// var tea = function() {

// }


// /** 
//  * abstract class 一切皆抽象
//  * boilwater 共同点
//  * steepTeaBag   brewCoffeeGriends
//  * 抽象出来方法
//  * 用水泡（饮品）brew  点到为止
//  * 共同点  不同点
//  * 把咖啡倒进杯子  把茶水倒进杯子
//  * 倒进杯子 pourInCup()
//  * 加糖和牛奶，加柠檬 addCondiments()
//  */

// //  优化方法，给抽象类
// // 抽象类 模版模式，

// function Beverage() {

// }
// Beverage.prototype.boilWater = function() {
//     console.log('把水煮沸');
// }
// Beverage.prototype.brew = function() {}

// Beverage.prototype.pourIncup = function() {}

// Beverage.prototype.addCondiments = function() {}

// Beverage.prototype.init = function() {
//     this.boilWater();
//     this.brew();
//     this.pourIncup();
//     this.addCondiments();
// }

// var Coffee = function() {};
// Coffee.prototype = new Beverage();

// Coffee.prototype.brew = function() {
//     console.log('用沸水浸泡咖啡');
// }
// Coffee.prototype.pourIncup = function() {
//     console.log('将咖啡倒进杯子');
// }
// Coffee.prototype.addCondiments = function() {
//     console.log('加糖和牛奶');
// }

// var Tea = function() {}
// Tea.prototype = new Beverage();

// // 覆盖父类方法 brew 接口 interface;

// Tea.prototype.brew = function() {
//     console.log('用沸水浸泡茶叶');
// }
// Tea.prototype.pourIncup = function() {
//     console.log('将茶水倒进杯子');
// }
// Tea.prototype.addCondiments = function() {
//     console.log('加柠檬');
// }

// var coffee = new Coffee();
// coffee.init();

// var tea = new Tea();
// tea.init();

// js way 模版模式

// 何为模版，大体的结构已确定，4步，动作概念都有
// 差异点，继承，抽象类来实现

// js 可以更优雅， 差异点， 不就是个参数吗？

//可以看看  阿里的设计模式  

var Beverage = function(param) {
    var boilWater = function() {
        console.log('把水煮沸');
    }
    var brew = param.brew || function() {
        throw new Error('必须传brew方法');
    }
    var pourInCup = param.pourInCup || function() {
        throw new Error('必须传递pourInCup方法');
    }
    var addCondiments = param.addCondiments || function() {
        throw new Error('必须传递addCondiments方法')
    }
    var F = function() {}

    F.prototype.init = function() {
        console.log('F----');
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }
    return F;
}

var Coffee = Beverage({
    brew: function() {
        console.log('用沸水泡咖啡1');
    },
    pourInCup: function() {
        console.log('把咖啡倒进杯子1');
    },
    addCondiments: function() {
        console.log('加糖和牛奶1');
    }
});

var coffee = new Coffee()
coffee.init();