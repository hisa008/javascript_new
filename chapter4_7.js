// function escapeHtml(str){
//     if(!str){
//         return '';
//     }
//     str = str.replace(/&/g, '&amp;');
//     str = str.replace(/</g, '&lt;');
//     str = str.replace(/>/g, '&gt;');
//     str = str.replace(/"/g, '&quot;');
//     str = str.replace(/'/g, '&#39;');
//     return str;
// }

// function e(templates, ...values){
//     let result = '';
//     for(let i = 0, len = templates.length; i < len; i++){
//         result += templates[i] + escapeHtml(values[i]);
//     }
//     return result;
// }

// let name = '<"Mario" & \'Luigi\'>';
// console.log(e`こんにちは、${name}さん！`);

// var y = 'Global';
// function outerFunc(){
//     var y = 'Local Outer';

//     function innerFunc(){
//         var z = 'Loval Inner';

//         console.log(z);
//         console.log(y);
//         console.log(x);
//     }
//     innerFunc();
// }
// outerFunc();

// function closure(init){
//     var counter = init;

//     return function(){
//         return ++counter;
//     }
// }

// var myClosure = closure(1);

// console.log(myClosure());
// console.log(myClosure());
// console.log(myClosure());

function closure(init){
    var counter = init;

    return function(){
        return ++counter;
    }
}

var myClosure1 = closure(1);
var myClosure2 = closure(100);

console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure2());
console.log(myClosure1());