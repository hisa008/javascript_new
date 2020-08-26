// class Member{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getName(){
//         return this.lastName + this.firstName;
//     }
// }

// let m = new Member('太郎', '山田');
// // let m = Member('太郎',  '山田');

// console.log(m.getName()); 





// class Member{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get firstName(){
//         return this._firstName;
//     }  

//     set firstName(value){
//         this._firstName = value;
//     }

//     get lastName(){
//         return this._lastName;
//     }

//     set lastName(value){
//         this._lastName = value;
//     }

//     getName(){
//         return this.lastName + this.firstName;
//     }
// }

// let m = new Member('太郎', '山田');
// console.log(m.getName());
// console.log(m.lastName());





// class Area{
//     static getTriangle(base, height){
//         return base * height/2;
//     }
// }

// console.log(Area.getTriangle(10, 5));