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

var data = [4, 9, 16, 25];
var result = data.some(function(value, index, array){
    return value % 2 === 0;
});

if(result){
    window.alert('3の倍数');
}else{
    window.alert('3の倍数ではない');
}