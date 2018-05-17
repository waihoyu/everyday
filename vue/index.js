new Vue({
    el: "#app",
    data: {
        name: "测试1",
        website: 'www.baidu.com',
        websiteTag: '<div>test</dive'
    },
    methods: {
        greet: function(t) {
            return "GOOD" + t;
        }
    }
});