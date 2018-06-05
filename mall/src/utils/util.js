/*
 * @Author: WaiHoYu 
 * @Date: 2018-06-05 20:52:48 
 * @Last Modified by:   WaiHoYu 
 * @Last Modified time: 2018-06-05 20:52:481 
 * @Description:  时间戳   
 */

function getCurrentTime() {
    var keep = '';
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var rand = Math.round(Math.random() * 899 + 100);
    keep = y + '' + m + '' + d + '' + h + '' + f + '' + s;
    return keep; //20160614134947
}
module.exports = {
    getCurrentTime
}