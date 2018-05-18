//获取应用实例
const app = getApp()

Page({
    data: {
        circleList: [],
        colorCircleFirst: '#FFDF2F',
        colorCircleSecond: '#FE4D32',
        // 奖品默认颜色
        colorAwardDefault: '#F5F0FC',
        colorAwardSelect: '#ffe400',
        indexSelect: 0,
        isRunning: false,
        // 奖品选中的颜色
    },
    onLoad: function() {
        // 起始位置
        let leftCircle = 7.5;
        let topCircle = 7.5;
        var circleList = [];
        for (var i = 0; i < 24; i++) {
            // 设置了每个点的坐标值， 页面就会相应的显示
            if (i == 0) {
                topCircle = 15;
                leftCircle = 15;
            } else if (i < 6) {
                topCircle = 7.5;
                leftCircle = leftCircle + 102.5;
            } else if (i == 6) {
                topCircle = 15;
                leftCircle = 620;
            } else if (i < 12) {
                topCircle = topCircle + 94;
                leftCircle = 620;
            } else if (i == 12) {
                topCircle = 565;
                leftCircle = 620;
            } else if (i < 18) {
                topCircle = 570;
                leftCircle = leftCircle - 102.5;
            } else if (i == 18) {
                topCircle = 565;
                leftCircle = 15;
            } else if (i < 24) {
                topCircle = topCircle - 94;
                leftCircle = 7.5;
            }

            circleList[i] = {
                leftCircle,
                topCircle
            }
        }
        this.setData({
            circleList
        })
        setInterval(() => {
            if (this.data.colorCircleFirst == '#FFDF2F') {
                this.setData({
                    colorCircleFirst: '#F44D32',
                    colorCircleSecond: '#FFDF2F'
                })
            } else {
                this.setData({
                    colorCircleFirst: '#FFDF2F',
                    colorCircleSecond: '#F44D32'
                })
            }

        }, 500)

        var awardList = [];


    },
    startGame() {

    }
})