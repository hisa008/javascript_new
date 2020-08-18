// function getMaxMin(...nums){
//     return [Math.max(...nums), Math.min(...nums)];
// }

// let result = getMaxMin(10, 35, -5, 78, 0);
// console.log(result);

// let [max,min] = getMaxMin(10, 35, -5, 78, 0);
// console.log(max);
// console.log(min);

// function factotial(n){
//     if(n != 0){
//         return n * factorial(n - 1);
//     }
//     return 1;
// }

// console.log(factorial(5));

// function arrayWalk(data, f){
//     for(var key in data){
//         f(data[key], key);
//     }
// }

// function showElement(value, key){
//     console.log(key + ':' + value);
// }

// var ary = [1, 2, 4, 8, 16];
// arrayWalk(ary, showElement);

// function arrayWalk(data, f){
//     for(var key in data){
//         f(data[key], key);
//     }
// }

// var result = 0;
// function sumElement(value, key){
//     result += value;
// }

// var ary = [1, 2, 4, 8, 16];
// arrayWalk(ary, sumElement);
// console.log('合計値:', + result);

function arrayWalk(data, f){
    for(var key in data){
        f(data[key], key);
    }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(
    ary,
    function(value, key){
        console.log(key + ':' + value);
    }
);