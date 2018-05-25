/**
 * 泡泡糖
 * @param {*} name 
 */
function Player(name) {
    this.name = name;
    this.enemy = null;
}

Player.prototype.win = function() {
    console.log(`${this.name} win!!`);
}

Player.prototype.lose = function() {
    console.log(`${this.name} lose!!`);
}

const playerFirst = new Player("Hanney");
const playerSecond = new Player("Jim");

playerFirst.enemy = playerSecond;
playerSecond.enemy = playerFirst;