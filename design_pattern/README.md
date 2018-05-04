# Design_pattern
## 常用的设计模式
> 1、模版模式
<hr>

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
<hr>

> 2、代理模式

```java 
int a; 
int b; 
```  

<hr>

> 3、工厂模式



