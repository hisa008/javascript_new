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





var Member = function(){};

Member.prototype.sex = '男';

var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = '女';
console.log(mem1.sex + '|' + mem2.sex);

delete mem2.sex
console.log(mem1.sex + '|' + mem2.sex);