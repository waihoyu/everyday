/**
 * 泡泡糖
 * @param {*} name 
 */
function Player(name, teamColor) {
    this.name = name;
    this.live = true;
    this.enemies = [];
    this.partners = [];
    this.state = 'live';
    this.teamColor = teamColor;
    this.enemyColor = null;
    this.color = teamColor;
}

Player.prototype.win = function() {
    console.log(`${this.teamColor} win!!`);
    console.log(`${this.enemyColor} lose!!`);
}

Player.prototype.lose = function() {
    console.log(`${this.teamColor} lose!!`);
    console.log(`${this.enemyColor} win!!`);
}
Player.prototype.die = function() {
    let flag = 0;
    let all_died = false;
    this.partners.forEach(partner => {
        if (partner.live) {
            all_died = false;
            // break;
        } else {
            flag++;
        }
    });
    if (flag == this.partners.length && !this.live) {
        this.lose();
    } else if (flag < this.partners.length) {
        let num = 0;
        this.enemies.forEach(enemy => {
            this.enemyColor = enemy.teamColor;
            if (!enemy.live) {
                num++;
            }
        });
        if (num == this.enemies.length) {
            this.win();
        } else {
            console.log("flighting")
        }
    } else {
        console.log("flighting")
    }
}
const players = [];

//工厂模式
function playerFactory(name, teamColor) {
    let newPlayer = new Player(name, teamColor);
    for (let index = 0; index < players.length; index++) {
        const player = players[index];
        if (player.teamColor === newPlayer.teamColor) {
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        } else {
            player.enemyColor = newPlayer.teamColor;
            newPlayer.enemyColor = player.teamColor;
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}


const redPlay1 = new playerFactory("Hanney A", "red");
const redPlay2 = new playerFactory("Jim A", "red");
const bluePlay1 = new playerFactory("Hanney a", "blue");
const bluePlay2 = new playerFactory("Jim B", "blue");
// players.push[]
redPlay1.live = false;
redPlay2.live = false;
bluePlay1.live = false;
bluePlay2.live = false;
redPlay2.die();
bluePlay2.die();
// console.log(players);