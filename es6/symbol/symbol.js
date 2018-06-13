/*
 * @Author: WaiHoYu 
 * @Date: 2018-06-13 15:16:35 
 * @Last Modified by:   WaiHoYu 
 * @Last Modified time: 2018-06-13 15:16:351 
 * @Description:  js的数据类型之一    
 */

//  为js 带来 唯一值  不会重复

var s = Symbol();

console.log(typeof s);

var s1 = Symbol();

console.log(s == s1);