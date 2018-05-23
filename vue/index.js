Vue.component("greeting", {
    template: `<p>{{name}}：大家好，给<button v-on:click="changeName">改名</button></p>
    `,
    data: function() { return { name: "鹿晗" } },
    methods: {
        changeName: function() {
            this.name = "Henry";
        }
    }
});


let one = new Vue({
    el: "#vue-app-one",
    data: {
        health: 100,
        ended: false,
        name: "测试1",
        website: 'www.baidu.com',
        websiteTag: '<div>test</dive',
        x: 0,
        y: 0
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        },
        greet: function(t) {
            return "GOOD" + t;
        },
        getmouseXY: function(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    }
});

let two = new Vue({
    el: "#vue-app-two",
    data: {
        health: 100,
        ended: false,
        name: "测试1",
        website: 'www.baidu.com',
        websiteTag: '<div>test</dive',
        x: 0,
        y: 0
    },
    methods: {
        punch: function() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        },
        greet: function(t) {
            return "GOOD" + t;
        },
        getmouseXY: function(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
    }
});