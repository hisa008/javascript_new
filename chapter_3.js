// var str = "WINGSプロジェクト";
// window.alert(str.substring(5,-2));
// window.alert(str.slice(5,-2));

// window.alert(Number.MAX_SAFE_INTEGER + 2);

// var data = [2, 3, 4, 5];
// data.forEach(function(value, index, array){
//     window.alert(array * array);
// });
// var result = data.map(function(value, index, array){
//     return index * index;
// });

// window.alert(result);

// var data = [4, 9, 16, 25];
// var result = data.some(function(value, index, array){
//     return value % 2 === 0;
// });

// if(result){
//     window.alert('3の倍数');
// }else{
//     window.alert('3の倍数ではない');
// }

// var ary = [5, 25, 10];
// window.alert(ary.sort());
// window,alert(ary.sort(function(x, y){
//     return y - x;
// }));

// let m = new Map();
// m.set('dog', 'ワンワン');
// m.set('cat', 'ニャー');
// m.set('mouse', 'チュー');

// for (let key of m.keys()){
//     window.alert(key);
// }

// for (let value of m.values()){
//     window.alert(value);
// }

// for (let [key, value] of m){
//     window.alert(key);
// }

// var dat = new Date(2017, 4, 15, 11, 40);
// window.alert(dat.toLocaleString());

// var data1 = new Date(2017, 4, 15);
// var data2 = new Date(2017, 5, 20);
// var diff = (data2.getTime() - data1.getTime()) / (1000 * 60 * 60 * 24);
// window.alert(diff);

// var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
// var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
// str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！';
// var result = str.match(p);
// for (var i = 0, len = result.length; i < len; i++){
//     window.alert(result[i]);
// }

// var p = /^[0-9]{1,}/g;
// var str = '101匹のワンチャン。\n7人の小人';
// var result = str.match(p);

// window.alert(result);

// let str = '叱ります';
// window.alert(str.match(/^.ります$/gu));

// var p = /[w-]/gi;

// var str1 = 'www';
// var str2 = 'a';

// window.alert(p.test(str1));
// window.alert(p.test(str2));

// window.alert(str1.match(p));
// window.alert(str2.match(p));

// var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;

// var str = 'サポートサイトはhttp://www.wings.msn.to/です。';

// window.alert(str.replace(p, 'チンパン'));
// window.alert(str);

// var p = /[\/\.\-]/gi;

// window.alert('2016/12/04'.split(p));
// window.alert(p);