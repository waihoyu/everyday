new Vue({
    el: "#app",
    data: {
        name: "测试1",
        website: 'www.baidu.com',
        websiteTag: '<div>test</dive',
        x: 0,
        y: 0
    },
    methods: {
        greet: function(t) {
            return "GOOD" + t;
        },
        getmouseXY: function(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        
    }
});