let a = {}

function wei() {
    this.name = "wei";
    this.test = function() {

    }
}
wei.call(a);
console.log(a);