// es6 class 只是语法糖
function Person(name) {
    this.name = name;
}

Person.prototype = {
    getName: function() {
        return this.name;
    }
}


function Author(name, books) {
    Person.call(this, name);
    this.books = books;
}


extend(Author, Person);

Author.prototype.getBooks = function() {
    return this.books;
}


function extend(subClass, superClass) {
    var F = function() {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    // console.log(subClass.prototype.getBooks());
}

let a = new Author('test', 'TTT');

console.log(a.getBooks());

function Foo() {

}

var Boo = { name: 'Boo' };

Foo.prototype = Boo;

var f = new Foo();

// __proto__ 指向构造该对象的构造函数的原型