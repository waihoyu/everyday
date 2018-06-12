class PUreFullPage {
    constructor(options) {
        // 1.手动计算page的告诉
        // #pureFullPage 高度
        this.container = document.getElementById('pureFullPage');

        this.viewHeight = document.documentElement.clientHeight;

        console.log(this.viewHeight);
        console.log(this.container);
        // this.pages = options
        // console.log(this.pages.pages)
        // let arr = this.pages.pages
        // let arr1 = []
        this.init();
    }
    init() {
            this.container.style.height = `${this.viewHeight}px`;
            const handleMouseWheel = utils.throttle(this.scrollMouse, this, 1000);
            // this.scrollMouse  方法 负责滚动 执行太频繁
            // throttle 在规定时间里只执行一次
            // 重新返回一个函数，handleMouseWheel ,闭包
            // 将this.scrollMouse 封到内部
            // this 函数执行的作用域  
            // 1000 delay  推迟执行
            if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
                document.addEventListener('mousewheel', handleMouseWheel, false)
            } else {
                document.addEventListener('DOMMouseScroll', handleMouseWheel, false)
            }
            // 事件监听  浏览器嗅探
            // mousewheel
            // firefox DOMMouseScroll

        }
        //滚轮事件处理函数
    scrollMouse() {
        console.log(this.container);
    }
}

// window.onload = function() {
//     console.log('test')
//     let pure = document.getElementById('pureFullPage')
//     pure.style.top = '1472px'
// }