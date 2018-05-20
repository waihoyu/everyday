//index.js
//获取应用实例
import util from '../../utils/index';
import config from '../../utils/config';

const app = getApp()

Page({
    data: {
        // formatDate: '今日',
        hiddenLoading: false,
        hasMore: true,
        page: 1,
        pageSize: 4,
        days: 3,
        articleList: 0,
    },
    showDetail: function(e) {
        let dataset = e.currentTarget.dataset;
        console.log(dataset);
        let item = dataset && dataset.item;
        let contentId = item.contentId || 0;
        wx.navigateTo({
            url: `../details/detail?contentId=${contentId}`,
        })
    },
    onReachBottom: function() {
        if (this.data.hasMore) {
            let nextPage = this.data.page + 1;
            this.setData({
                page: nextPage
            });
            this.requestArticle();
        }
    },
    onPullDownRefresh: function(params) {
        thi.setData({
            hiddenLoading: false
        })
        this.requestArticle();
    },
    //进行封装
    requestArticle: function() {
        util.request({
            // url: "http://data.ratp.fr/api/datasets/1.0/search/?q=paris",
            url: 'list',
            mock: true,
            data: {
                tag: '微信热门',
                start: this.data.page || 1,
                days: this.data.days || 3,
                pageSize: this.data.pageSize,
                langs: 'en'
            }
        }).then(res => {
            this.setData({
                    hiddenLoading: true,
                    articleList: res.data,
                })
                // console.log(res);
        })
    },
    onShareAppMessage: function() {
        let title = config.defaultShareText || '';
        return {
            title,
            path: `/pages/index/index`,
            success: function(res) {

            },
            fail: function(res) {

            }
        }
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        this.requestArticle();


        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function(e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})