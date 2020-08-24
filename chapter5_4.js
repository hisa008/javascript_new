// function Triangle(){
//     var _base;
//     var _height;


//     var _checkArgs = function(val){
//         return(typeof val === 'number' && val > 0);
//     }

//     this.setBase = function(base){
//         if(_checkArgs(base)){
//             _base = base;
//         }
//     }
//     this.getBase = function(){
//         return _base;
//     }

//     this.setHeight = function(height){
//         if(_checkArgs(height)){
//             _height = height;
//         }
//     }
//     this.getHeight = function(){
//         return _height;
//     }
// }

// Triangle.prototype.getArea = function(){
//     return this.getBase() * this.getHeight()/2;
// }

// var t = new Triangle();
// t._base = 10;
// t._height = 2;
// console.log('三角形の面積:' + t.getArea());

// t.setBase(10);
// t.setHeight(2);
// console.log('三角形の底辺:' + t.getBase());
// console.log('三角形の高さ:' + t.getHeight());
// console.log('三角形の面積:' + t.getArea());





// function Triangle(){
//     var _base;
//     var _height;

//     Object.defineProperty(
//         this,
//         'base',
//         {
//             get: function(){
//                 return _base;
//             },
//             set: function(base){
//                 if(typeof base === 'number' && base > 0){
//                     _base = base;
//                 }
//             }
//         }
//     );

//     Object.defineProperty(
//         this,
//         'height',
//         {
//             get: function(){
//                 return _height;
//             },
//             set: function(height){
//                 if(typeof height){
//                     if(typeof height === 'number' && height > 0){
//                         _height = height;
//                     }
//                 }
//             }
//         }
//     );
// }

// Triangle.prototype.getArea = function(){
//     return this.base * this.height/2;
// }

// var t = new Triangle();
// t.base = 10;
// t.height = 2;
// console.log('三角形の底辺:' + t.base);
// console.log('三角形の高さ:' + t.height);




// var Wings = Wings || {};

// Wings.Member = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Wings.Member.prototype = {
//     getName : function(){
//         return this.lastName + '' + this.firstName;
//     }
// }

// var mem = new Wings.Member('太郎', '山田');
// console.log(mem.getName());





function namespace(ns){
    var names = ns.split('.');
    var parent = window;

    for(var i = 0, len = names.length; i < len; i++){
        parent[names[i]] = parent[names[i]] || {};
        parent = parent[names[i]];
    }
    return parent;
}

var my = namespace('Wings.Gihyo.Js.MyApp');
my.Person = function(){};
var p = new my.Person();
console.log(p instanceof Wings.Gihyo.Js.MyApp.Person);