// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn').addEventListener('click', function(){
//         var name = document.getElementById('name');
//         console.log(name.value);
//     }, false);
// }, false);





// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('btn').addEventListener('click', function(){
//         var result = [];
//         var foods = document.getElementsByName('food');

//         for(var i = 0, len = foods.length; i < len; i++){
//             var food = foods.item(i);
//             if(food.checked){
//                 result.push(food.value);
//             }
//         }
//         window.alert(result.toString());
//     }, false);
// }, false);




// document.addEventListener('DOMContentLoaded', function(){
//     var getRadioValue = function(name){
//         var result = '';
//         var elems = document.getElementsByName(name);

//         for(var i = 0, len = elems.length; i < len; i++){
//             var elem = elems.item(i);
//             if(elem.checked){
//                 result = elem.value;
//                 break;
//             }
//         }
//         return result;
//     }

//     document.getElementById('btn').addEventListener('click', function(){
//         window.alert(getRadioValue('food'));
//     }, false);
// }, false);





// document.addEventListener('DOMContentLoaded', function(){
//     var setRadioValue = function(name, value){
//         var elems = document.getElementsByName(name);

//         for(var i = 0, len = elems.length; i < len; i++){
//             var elem = elems.item(i);
//             if(value.index === value){
//                 elem.checked = true;
//                 break;
//             }
//         }
//     }
//     setRadioValue('food', '餃子');
// }, false);




// document.addEventListener('DOMContentLoaded', function(){
//     var setCheckValue = function(name, value){
//         var elems = document.getElementsByName(name);

//         for(var i = 0, len = elems.length; i < len; i++){
//             var elem = elems.item(i);
//             if(value.indexOf(elem.value) > -1){
//                 elem.checked = true;
//             }
//         }
//     }
//     setCheckValue('food', ['餃子', '焼肉']);
// }, false);





// document.addEventListener('DOMContentLoaded', function(){
//     var getSelectValue = function(name){
//         var result = [];
//         var opts = document.getElementById(name).options;

//         for(var i = 0, len = opts.length; i < len; i++){
//             var opt = opts.item(i);
//             if(opt.selected){
//                 result.push(opt.value);
//             }
//         }
//         return result;
//     }
//     document.getElementById('btn').addEventListener('click', function(){
//         window.alert(getSelectValue('food'));
//     }, false);
// }, false);




document.addEventListener('DOMContentLoaded', function(){
    var setListValue = function(name, value){
        vat opts = document.getElementById(name);

        for(var i = 0, len = opts.length; i < len; i++){
            var opt = opts.item(i);

            if(value.indexOf(opt.value) > -1){
                var opt.selected
            }
        }
    }
})