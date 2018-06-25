/*
 * @Author: WaiHoYu 
 * @Date: 2018-06-25 15:07:21 
 * @Last Modified by:   WaiHoYu 
 * @Last Modified time: 2018-06-25 15:07:211 
 * @Description: 观察者模式
 */

function observer(value) {
    //严格性检查  如果它为空，
    if (!value || typeof value != 'object') {
        return
    }
    // console.log(Object.keys(value));
    for (const key in value) {
        defineReactive(value, key, value[key])
    }
}

function defineReactive(_v, _k, _va) {
    Object.defineProperty(_v, _k, {
        enumerable: true, //可遍历的
        configurable: true,
        get: function reactiveGetter() {
            console.log('it is getting the value')
            return _va
        },
        set: function reactiveSetter(newVal) {
            if (newVal === _va) return
            _va = newVal
            cb(newVal);
            console.log('it is setting the value')
        }
    })
}

function cb(val) {
    console.log('视图更新了，新的值应该为  ' + val);
}
class Vue {
    constructor(options) {
        this._data = options.data
        console.log(this._data)
        observer(this._data)
        console.log(this._data)
    }
}

// 发布订阅者模式是vue,数据相应的核心，一对多的关系
let o = new Vue({
    data: {
        test: 'I am test',
        name: 'zk'
    }
})

o._data.test = 'hello,test'
o._data.test = 'hello,test'
console.log(o._data.test);