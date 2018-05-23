// menu/menu.js
const MENU_WIDTH_SCALE = 0.82
const FAST_SPEED_SECOND = 300
const FAST_SPEED_DISTANCE = 5;
const FAST_SPEED_EFF_Y = 50;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        ui: {
            menuWidth: 0,
            windowWidth: 0,
            offsetLeft: 0,
            tStart: true
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        try {
            let res = wx.getSystemInfoSync();
            this.windowWidth = res.windowWidth;
            this.data.ui.menuWidth = this.windowWidth * MENU_WIDTH_SCALE;
            this.data.ui.windowWidth = this.windowWidth;
            this.data.ui.offsetLeft = 0;
            console.log(this.data.ui.menuWidth);
            this.setData({
                ui: this.data.ui,
            })
        } catch (error) {

        }

    },
    handlerAvatarTap: function(e) {
        let { ui } = this.data;
        if (ui.offsetLeft == 0) {
            ui.offsetLeft = ui.menuWidth;
            this.setData({
                ui: ui
            })
        }
    },
    handlerStart: function(e) {
        // 开始的点
        console.log('11')
        let { clientX, clientY } = e.touches[0];
        this.tapStartX = clientX;
        this.tapStartY = clientY;
        this.tapStartTime = e.timeStamp;
        this.startX = clientX;
        this.data.ui.tStart = true;
        this.setData({
            ui: this.data.ui,
        })
    },
    handlerMove: function(e) {
        let { clientX } = e.touches[0];
        let { ui } = this.data;
        let offset = this.startX - clientX;
        this.startX = clientX;
        ui.offsetLeft -= offsetX;
        if (ui.offsetLeft <= 0) {
            ui.offsetLeft = 0;
        } else if (ui.offsetLeft >= ui.menuWidth) {
            ui.offsetLeft = ui.menuWidth;
        }
        let { ui } = this.data;
        ui.offsetLeft = e.offsetLeft;
        this.setData({
            ui: ui
        })
    },
    handlerCancel: function(e) {

    },
    handlerEnd: function(e) {
        //结束的点

    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})