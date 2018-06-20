// pub-sub  
// publish  多个 subscriber

let zk = {};
zk.peopleList = [];

// 发布者 订阅者
//作何反应？

zk.listen = function(fn) {
    this.peopleList.push(fn);

}

zk.trigger = function() {
    // 消息发出后， 所有的订阅者， 都做出了相应的反应
    // console.log("fn");
    for (let i = 0, fn; i < this.peopleList.length, fn = this.peopleList[i++];) {
        fn.apply(this, arguments);
        // console.log("exeing");
    }
}

let test = function(msg) {
    console.log(`代码执行了${msg}`);
}
let test1 = function(msg) {
    console.log(`代码执行了-2${msg}`);
}

zk.listen(test);
zk.listen(test1);
zk.listen(test);
zk.listen(test);
zk.trigger("代码执行了");