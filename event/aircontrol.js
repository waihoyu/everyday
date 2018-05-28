/**
 * 实现统一的接口
 */

//  电视机的遥控
const TV = {
    open: function() {
        console.log("打开电视");
    },
    close: function() {
        console.log("关闭电视");
    }
};
// 空调的遥控
const AirConditional = {
    open: function() {
        console.log("打开空调")
    },
    close: function() {
        console.log("关闭空调");
    }
}