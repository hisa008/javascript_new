// var obj = new Object();
// window.alert(obj.toString());

// let pet = {
//     type: 'スノーホワイトハムスター',
//     name: 'キラ',
//     description: {
//         birth: '2014-02-15'
//     }
// };

// let pet2 = {
//     name: '山田きら',
//     color: '白',
//     description: {
//         food: 'ひまわりのタネ'
//     }
// };

// let pet3 = {
//     weight: 42,
//     photo: 'http://www.wings.msn.to/img/ham.jpg'
// };

// Object.assign(pet, pet2, pet3);

// window.alert(pet);       //なぜwindow.alertで表示されないのか？？
// console.log(pet);    
// window.alert('test');

// var obj = {x:1, y:2, z:3};
// var obj2 = new Object();
// obj2.x = 1;
// obj2.y = 2;
// obj2.z = 3;

// window.alert(obj);
// window.alert(obj2);

// console.log(obj);
// console.log(obj2);

// 'use strict';
// var pet = {type: 'スノーホワイトハムスター', name: 'キラ'};

// Object.preventExtensions(pet);
// Object.seal(pet);
// Object.freeze(pet);

// pet.name = '山田キラ';

// delete pet.type;

// pet.weight = 42;