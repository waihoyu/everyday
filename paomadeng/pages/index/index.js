//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        circleList: [],
        awardList: [],
        colorCircleFirst: '#FFDF2F',
        colorCircleSecond: '#FE4D32',
        colorAwardDefault: '#F5F0FC',
        colorAwardSelect: '#ffe400',
        indexSelect: 0,
        isRunning: false,
        timer: null,
        status: 'START',
        imageAward: [
            '../../assets/images/1.jpg',
            '../../assets/images/2.jpg',
            '../../assets/images/3.jpg',
            '../../assets/images/4.jpg',
            '../../assets/images/5.jpg',
            '../../assets/images/6.jpg',
            '../../assets/images/7.jpg',
            '../../assets/images/8.jpg',
        ]
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function() {
        var awardList = [];
        var topAward = 25;
        var leftAward = 25;
        for (let index = 0; index < 8; index++) {
            if (index == 0) {
                topAward = 50;
                leftAward = 50;
            } else if (index < 3) {
                topAward = topAward;
                leftAward = leftAward + 166.6666 + 35;
            } else if (index < 5) {
                leftAward = leftAward;
                topAward = topAward + 150 + 35;
            } else if (index < 7) {
                leftAward = leftAward - 166.66666 - 35;
                topAward = topAward;
            } else if (index < 8) {
                leftAward = leftAward;
                topAward = topAward - 150 - 35;
            }
            var imageAward = this.data.imageAward[index];

            awardList.push({
                topAward,
                leftAward,
                imageAward
            })
        }
        // console.log(awardList);
        this.setData({
            awardList
        })

        let leftCircle = 7.5;
        let topCircle = 7.5;
        var circleList = [];
        for (let index = 0; index < 24; index++) {
            if (index == 0) {
                topCircle = 15;
                leftCircle = 15;
            } else if (index < 6) {
                topCircle = 7.5;
                leftCircle = leftCircle + 102.5;
            } else if (index == 6) {
                topCircle = 15;
                leftCircle = 620;
            } else if (index < 12) {
                topCircle = topCircle + 94;
                leftCircle = 620;
            } else if (index == 12) {
                topCircle = 565;
                leftCircle = 620;
            } else if (index < 18) {
                topCircle = 570;
                leftCircle = leftCircle - 102.5;
            } else if (index == 18) {
                topCircle = 565;
                leftCircle = 15;
            } else if (index < 24) {
                topCircle = topCircle - 94;
                leftCircle = 7.5;
            }
            circleList[index] = {
                leftCircle,
                topCircle,
            }
        }
        this.setData({
                circleList
            })
            // setInertval
        setInterval(() => {
            if (this.data.colorCircleFirst == '#F44D32') {
                this.setData({ colorCircleFirst: '##ffdf2f', colorCircleSecond: '#F44D32' })
            } else {
                this.setData({ colorCircleFirst: '#F44D32', colorCircleSecond: '#ffdf2f' })
            }
        }, 500)
    },
    startGame() {
        // console.log(this.data.isRunning);
        if (!this.data.isRunning) {
            this.setData({
                isRunning: true,
                indexSelect: 0,
                status: 'STOP'
            })
            this.data.timer = setInterval(() => {
                // console.log(this.data.indexSelect)
                if (this.data.indexSelect >= 7) {
                    this.setData({
                        indexSelect: -1
                    })
                }
                let cur = this.data.indexSelect + 1;
                this.setData({
                    indexSelect: cur
                })
            }, 80)
        } else {
            clearInterval(this.data.timer);
            this.setData({
                isRunning: false,
                status: 'RESTART'
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
    },

})