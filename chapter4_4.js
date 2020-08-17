// function showMessage(value,name){
//     console.log(value,name);
// }

// showMessage();
// showMessage('山田');
// showMessage('山田','鈴木');

// function showMessage(value){
//     if(arguments.length !== 1){
//         throw new Error('引数が間違っています:' + arguments.length);
//     }
//     console.log(value);
// }

// try{
//     showMessage('山田','鈴木');
// }catch(e){
//     window.alert(e.message);
// }

// function getTriangle(base, height){
//     if(base === undefined){
//         base = 1;
//     }else if(height === undefined){
//         height = 1;
//     }
//     return base * height/2;
// }

// console.log(getTriangle(5));

// var showMessage = new Function('msg', 'console.log(msg);');
// showMessage(3);

// function sum(){
//     var result = 0;

//     for(var i = 0, len = arguments.length; i < len; i++){ //5回ループ
//         var tmp = arguments[i]; //1 3 5 7 9
//         if(typeof tmp !== 'number'){
//             throw new Error('引数が数値ではありません:' + tmp);
//         }
//         result += tmp; //1 4 9 16 25
//     }
//     return result;
// }

// try{
//     console.log(sum(1, 3, 5, 7, 9));
// }catch(e){
//     window.alert(e.message);
// }

// function printf(format){
//     for(var i = 0, len = arguments.length; i < len; i++){
//         var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');
//         format = format.replace(pattern, arguments[i]);
//     }
//     console.log(format);
// }

// printf('こんにちは、{0}さん。私は{1}です。','大谷','山田');

// function getTriangle(args){
//     if(args.base === undefined){
//         args.base = 1;
//     }
//     if(args.height === undefined){
//         args.height = 1;
//     }
//     return args.base * args.height/2;
// }

// console.log(getTriangle({base:5, height:4}));

// function multi( b = 5, a = b){
//     return a * b;
// }

// console.log(multi());

// function required(){
//     throw new Error('引数が不足しています');
// }

// function hoge(value = required()){
//     return value;
// }

// hoge();

// function sum(...nums){
//     console.log(nums);
//     let result = 0;
//     for(let num of nums){
//         if(typeof num !== 'number'){
//             throw new Error('指定値が数値ではありません' + num);
//         }
//         result += num;
//     }
//     return result;
// }

// try{
//     console.log(sum(1,3,5,7,9));
// }catch(e){
//     window.alert(e.message);
// }

