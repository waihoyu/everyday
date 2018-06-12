const utils = {
    // 帮忙method执行的次数在规定时间内只有一次
    // method 执行时 函数内this PureFullPage
    throttle(method, context, delay) {
        //args?
        //返回函数就是等下事件执行的真正函数体
        //闭包
        let wait = false;
        return function(...args) {
            //执行时，上下文环境要跟以前一样
            if (!wait) {
                method.apply(context, args);
            }
            wait = true;
        }
    }
}