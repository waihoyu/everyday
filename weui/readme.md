# weui 微信统一web界面   weui  在小程序里面也是通用的

## 表单 cells

> 在小程序中，使用weui 做快速开发，让小程序更快

最重要个知识点，就是mvvm  

model  就代表 Model 用户登录模块
username
password

Model 是指什么呢？  
user object 
value ="{{user.username}}"
value="{{user.password}}"

v wxml  weui  写form


vm 是指什么呢？这两者的结合体
view 不再是视图  view 是模板了 ，待compile 跟随 model  是可以进行数据绑定的

bindinput bindtap 这样的事件  将值进行改变 状态改变

vm 代表那一刻的状态。
