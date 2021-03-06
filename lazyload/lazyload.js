/**
 * author WYH
 * date 2018-05-04
 * description: 实现图片的懒加载;
 */
//全局命名空间  
//服务于任何图片元素，img  幕后，再将origin_src 设置过去
// 
var LazyLoadImage = (function() {
    // 变量的冒泡查找，
    const a = 1;
    return {
        setSrc: function(ele) {
            // console.log(a);
            console.log('开始下载图片吧');
            console.log(ele);
            const url =
                ele.getAttribute('origin_src') ?
                ele.getAttribute('origin_src') : '';
            if (!url) return;
            const oImg = document.createElement('img');
            //不会影响页面，none 会离开文档流
            // opacity:0 这个会撑长页面
            document.body.appendChild(oImg);

            oImg.style.display = 'none';
            // 注册页面
            // addEventListener 新的
            // 旧的写法
            // 当设置了图片的src后，就会启动http请求，
            // 图片下载完成后，onload 注册的事件回调
            // 函数就会被执行
            //异步，同步
            oImg.onload = function() {
                    // 不会立即执行
                    // 后执行
                    //console.log('图片下载完成了')
                    ele.src = url;
                    // document.body.removeChild(oImg);
                    document.body.removeChild(this);
                }
                //先执行
                // console.log('设置src');
            oImg.src = url;
        }

    }
    // console.log('delete');
})();