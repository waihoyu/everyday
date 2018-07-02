## learn vue router module
网站由网页组成，超链接
web app、mobile、native app (ios android)
多页应用，很多页面，会跳转，重新刷新页面


缺点
- 用户体验极差
    每次点链接  都要等待http请求及响应
    整个页面的刷新，页面白一下
    如果传输时间大于0.5秒，会看到明显的白屏
    
- 相同的html 片段重复被下载
  1.preventDefault a 
  2.href attribute
  3.jquery ajax  动态得到html内容
  4. p content img src 
  5. $('').content()
  6. $('').src('')

SPA single page application
单页应用
- 页面的状态，可以对应  路由

SPA 解决了用户体验的问题，但却带来另一个及其严重的问题

浏览记录没有了。
history 
如何为每个状态改变，（路由状态） 产生了一个url （路由），并且生成一次浏览记录
让SPA的访问，更像传统的请求
location 浏览器地址栏上的操作可以使用了

- 一个页面对应多个页面状态，每个页面状态都会有一个router路由 （地址 state数据，又会对应一个组件）

vue 单页面开发 就变成了router 响应 匹配响应组件显示，再一直组件化的过程








