// var Member = function(){};

// var mem = new Member();

// var Member = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getName = function(){
//         return this.lastName + '' + this.firstName;
//     }
// }

// var mem = new Member('太郎', '山田');
// console.log(mem.getName());



// var Member = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var mem = new Member('太郎', '山田');
// mem.getName = function(){
//     return this.lastName + '' + this.firstName;
// }

// console.log(mem.getName());





// var Member = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var mem = new Member('太郎', '山田');
// mem.getName = function(){
//     return this.lastName + '' + this.firstName;
// }

// console.log(mem.getName());

// var mem2 = new Member('勝利', '佐藤');
// console.log(mem2.getName());





// var data = 'Global data';
// var obj1 = {data: 'obj1 data'};
// var obj2 = {data: 'obj2 data'};

// function hoge(){
//     console.log(this.data);
// }

// hoge.call(null);
// hoge.call(obj1);
// hoge.call(obj2);




// function hoge(){
//     var args = Array.prototype.slice.call(arguments);
//     console.log(args.join('/'));
// }

// hoge('Angular', 'React', 'Backbone');

// var Member = function(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// var m = Member('タケシ', '佐藤');
// console.log(m);
// console.log(firstName);
// console.log(lastName);





var Member = function(firstName, lastName){
    if(!(this instanceof Member)){
        return new Member(firstName, lastName);
    }
    this.firstName = firstName;
}