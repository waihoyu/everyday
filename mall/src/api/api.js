import { wxRequest } from "@/utils/wxRequest";
// 套路-> 架构
const apiMall = 'https://sujiefs.com/';
//高阶函数
const wxJsCode2Session = (params) => wxRequest(params, `${apiMall}/api/wechat/jscode2session`);

export default {
    wxJsCode2Session
}