/**
 * 封装常用方法
 */
//opt  没有传该传的

import * as Mock from '../utils/mock'
// Mock["list"]
const DEFAULT_REQUEST_OPTIONS = {
    url: '',
    data: {},
    header: { 'Content-Type': 'application/json' },
    methond: 'GET',
    dataType: 'json'
}
let util = {
    request(opt) {
        //用于生成对象
        let options = Object.assign({}, DEFAULT_REQUEST_OPTIONS, opt);
        let { url, data, header, method, dataType, mock = false } = options;
        return new Promise((resolve, reject) => {
            if (mock) {
                let res = {
                    statusCode: 200,
                    data: Mock[url]
                }
                console.log(res);
                resolve(res.data);
                return;
            } else {

            }
            wx.request({
                url,
                data,
                header,
                method,
                dataType,
                success(res) {
                    resolve(res.data);
                },
                fail(err) {
                    reject(err);
                }
            })
        });
    }
}

export default util

