function a() {
    this.name = "a";
    this.action = function() {
        console.log('this is action');
    }
}

function b() {
    this.name_b = "b";
}

b.prototype.add_b = function() {
    // this.name_b = 'c';
    console.log('this is b.prototype  add_b ' + this.name_b);
    return;
}
a.prototype.add = function() {
    console.log('this is a.prototype  add');
}


a.prototype = b.prototype;

let test = new a();
test.add_b();

let test_b = new b();

test_b.add_b();


console.log(test_b.prototype);