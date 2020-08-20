// var Member = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Member.prototype.getName = function(){
//     return this.lastName + '' + this.firstName;
// }

// var mem = new Member('太郎', '山田');
// console.log(mem.getName());





// var Member = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var mem = new Member('太郎', '山田');

// Member.prototype.getName = function(){
//     return this.lastName + '' + this.firstName;
// }

// console.log(mem.getName());





// var Member = function(){};

// Member.prototype.sex = '男';
// var mem1 = new Member();
// var mem2 = new Member();

// console.log(mem1.sex + '|' + mem2.sex);
// mem2.sex = '女';
// console.log(mem1.sex + '|' + mem2.sex);
// mem1.sex = '女';
// console.log(mem1.sex + '|' + mem2.sex);





// var Member = function(){};

// Member.prototype.sex = '男';

// var mem1 = new Member();
// var mem2 = new Member();

// console.log(mem1.sex + '|' + mem2.sex);
// mem2.sex = '女';
// console.log(mem1.sex + '|' + mem2.sex);

// delete mem2.sex
// console.log(mem1.sex + '|' + mem2.sex);






// var Member = function(){};

// Member.prototype.sex = '男';

// var mem1 = new Member();
// var mem2 = new Member();

// console.log(mem1.sex + '|' + mem2.sex);
// // mem2.sex = undefined;
// delete Member.prototype.sex
// console.log(mem1.sex + '|' + mem2.sex);





// var Member = function(){};

// Member.prototype.sex = '男';
// var mem = new Member();
// mem.sex = undefined;

// for(var key in mem){
//     console.log(key + ":" + mem[key]);
// }





// var Member = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Member.prototype = {
//     getName : function(){
//         return this.lastName + '' + this.firstName;
//     },
//     toString : function(){
//         return this.lastName + this.firstName;
//     }
// }





var Area = function(){};

Area.version = '1.0';

Area.triangle = function(base, height){
    return base * height/2;
}

Area.diamond = function(width, height){
    return width * height/2;
}

console.log('Areaクラスのバージョン:' + Area.version);
console.log('三角形の面積:', Area.triangle(5, 3));

var a = new Area();
console.log('菱形の面積:' + Area.diamond(10, 2));