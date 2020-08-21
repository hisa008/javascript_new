// var Animal = function(){};

// Animal.prototype = {
//     walk : function(){
//         console.log('トコトコ...');
//     }
// }

// var Dog = function(){
//     Animal.call(this);
// }

// Dog.prototype = new Animal();
// Dog.prototype.bark = function(){
//     console.log('ワンワン！');
// }

// var d = new Dog();
// d.walk();
// d.bark();





// var Animal1 = function(){};

// Animal1.prototype = {
//     walk : function(){
//         console.log('トコトコ...');
//     }
// }

// var SuperAnimal = function(){};
// SuperAnimal.prototype = {
//     walk : function(){
//         console.log('ダダダダダ！');
//     }
// }

// var Dog = function(){};
// Dog.prototype = new Animal1();
// var d1 = new Dog();
// d1.walk();

// Dog.prototype = new SuperAnimal();
// var d2 = new Dog();
// d2.walk();
// d1.walk();





// var Animal1 = function(){};
// var Hamster = function(){};
// Hamster.prototype = new Animal1();

// var a = new Animal1();
// var h = new Hamster();

// console.log(a.constructor === Animal1);  //true
// console.log(h.constructor === Animal1);  //true
// console.log(h.constructor === Hamster);  //false

// console.log(h instanceof Animal1);
// console.log(h instanceof Hamster);

// console.log(Hamster.prototype.isPrototypeOf(h));
// console.log(Animal1.prototype.isPrototypeOf(h));

var obj = {
    hoge: function(){},
    foo: function(){}
}

console.log('hoge' in obj);
console.log('piyo' in obj);
console.log('foo' in obj);
