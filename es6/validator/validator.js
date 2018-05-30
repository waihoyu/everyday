/*
 * @Author: WaiHoYu 
 * @Date: 2018-05-30 19:50:49 
 * @Last Modified by: WaiHoYu
 * @Last Modified time: 2018-05-31 00:12:47
 */
/**
 *策略模式
 */

const strategies = {
    isNonEmpty: function(value, errorMsg) {
        // console.log(errorMsg)
        if (value.trim() === '') {
            return {
                data: false,
                msg: errorMsg
            }
        } else {
            return {
                status: true
            }
        }
    },
    minLength: function(value, len, errorMsg) {
        if (value.trim().length < len) {
            return {
                status: false,
                msg: errorMsg
            }
        } else {
            return {
                status: true
            }
        }
    },
    maxLength: function(value, len, errorMsg) {
        if (value.trim().length > len) {
            return {
                status: false,
                msg: errorMsg
            }
        } else {
            return {
                status: true
            }
        }
    },
    isMobilePhone: function(value, errorMsg) {
        if (!/1[3456789][0-9]{9}/.test(value)) {
            return {
                status: false,
                msg: errorMsg
            }
        } else {
            return { staus: true }
        }
    },
    isEmail: function() {}
}

function Validator() {
    this.cache = []
}
Validator.prototype = {
    add: function(dom, rule, errorMsg) {
        let ary = rule.split(':')
        this.cache.push(function() {
            let strategy = ary.shift()
            ary.unshift(dom.value)
            ary.push(errorMsg)
            return strategies[strategy].apply(dom, ary)
        })
    },
    start: function() {
        for (let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
            let msg = validatorFunc()
            if (msg) {
                return msg
            }
        }
    }
}