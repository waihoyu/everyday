;
(function() {
    // 'use strict'
    var o = {}
    Object.defineProperty(o, 'a', {
        configurable: true,
        value: 7,
        writable: false,
        // get: function() { return 7 }
    })
    console.log(o.a)
    o.a = 25

    console.log(Object.keys(o))
})()

function Archiver() {
    var temperature = null
    var data = {
        age: 19,
        name: '雨'
    }

    Object.defineProperty(this,
        'temperature', {
            get: function() {
                console.log('get!')
                return temperature
            },
            set: function(value) {
                temperature = value
            }
        })

    // for (const key in data) {
    //     Object.defineProperty(data, key, {
    //         get: function() {
    //             console.log("get!")
    //             return data[key]
    //         },
    //         set: function(newVal) {
    //             console.log("set!")
    //             data[key] = newVal
    //         }
    //     })
    // } 
    data.age = 20
}

let a = new Archiver()
a.temperature = 35
console.log(a.temperature)