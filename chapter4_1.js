// function getTriangle(base, height){
//     return base * height / 2;
// }

// console.log('三角形の面積:' + getTriangle(5, 2));

// var getTriangle = new Function('base', 'height', 'return base * height / 2;');
// console.log('三角形の面積:' + getTriangle(5, 2));

// var scope = 'グローバル';
// function getValue(){
//     var scope = 'ローカル';
//     return scope;
// }

// console.log(getValue());
// console.log(scope);

// if(false){
//     i = 5;
// }else{
//     i = 10;
// }
// window.alert(i);

// (function(){
//     var i = 5;
//     console.log(i);
// }).call(this);

// console.log(i);

// function test(){
//     var i = 5;
//     console.log(i);
// }

// console.log(i);

// {
//     var i = 5;
//     console.log(i);
// }

// console.log(i);

// switch(x){
//     case 0:
//         let value = 'x:0';
//     case 1:
//         let value = 'x:1';
// }

// var scope = 'Global Variable';

// function checkScope(){
//     var scope = 'Local Variable';

//     var f_lit = function(){return scope; };
//     console.log(f_lit());

//     var f_con = new Function('return scope;');
//     console.log(f_con());
// }

// checkScope();
