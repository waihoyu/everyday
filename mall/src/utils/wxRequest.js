/*
 * @Author: WaiHoYu 
 * @Date: 2018-06-05 19:23:18 
 * @Last Modified by:   WaiHoYu 
 * @Last Modified time: 2018-06-05 19:23:181 
 * @Description:    统一小程序wx.request 请求 
 * 函数 url params get post
 */
import wepy from 'wepy';
import util from '@/utils/util';
import md5 from '@/utils/md5'
// @params json query 传查询参数 method 方法
const API_SECRET_KEY = 'www.mall.cycle.com';
const TIMESTAMP = util.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());
const wxRequest = async(params = {}, url) => {
    let data = params.query || {};
    data.sign = SIGN;
    data.time = TIMESTAMP;
    let res = await wepy.request({ url: url, method: params.method || "GET", data: data, header: { 'Content-Type': 'application/json' } });
    return res;
}
module.exports = {
    wxRequest
}