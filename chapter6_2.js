// var current = new Date();
// var result = document.getElementById('result');
// result.textContent = current.toLocaleString();





// var list = document.getElementsByTagName('a');

// for(var i = 0, len = list.length; i < len; i++){
//     console.log(list.item(i).href);
// }
// window.alert(list[2].href);





// var current = new Date();
// var nam = document.getElementsByName('time');
// nam[0].value = current.toLocaleTimeString();





// var list = document.getElementsByClassName('you');
// for(var i = 0, len = list.length; i < len; i++){
//     console.log(list.item(i).href);
// }





// var list = document.querySelectorAll('#list .external');
// for(var i = 0, len =list.length; i < len; i++){
//     console.log(list.item(i).href);
// }





// //<select id="food">を取得
// var s = document.getElementById('food');
// //<select>要素は以下の子ノードを取得
// var opts = s.childNodes;

// for(var i = 0, len = opts.length; i < len; i++){
//     var opt = opts.item(i);

//     if(opt.nodeType === 1){
//         console.log(opt.value);
//     }
// }





// var s = document.getElementById('food');

// // var child = s.firstChild;

// // while(child){
// //     if(child.nodeType === 1){
// //         console.log(child.value);
// //     }
// //     child = child.nextSibling;
// // }
// var child = s.firstElementChild;
// while(child){
//     console.log(child.value);
//     child = child.nextElementSibling;
// }





// function btn_click(){
//     window.alert("ボタンがクリックされました。");
// }





// window.onload = function(){
//     document.getElementById('btn').onclick = function(){
//         window.alert('ボタンがクリックされました。');
//     }
// }





document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btn').addEventListener('click', function(){
        window.alert('ボタンがクリックされました。');
    }, false);
}, false);