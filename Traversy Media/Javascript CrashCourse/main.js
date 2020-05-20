//Object Oriented Programming 
//Constructor Function
// function Person(firstName, lastName, dob){
//   this.firstName = firstName;
//   this.lastName - lastName;
// //  this.dob = dob; is used when no programmable function can be used 
//     this.dob = new Date(dob);
 //Methods 
//  this.getBirthYear = function(){
//      return this.dob.getFullYear();
//  }
//  this.getFullName = function(){
//      return `${this.firstName} ${this.lastName}`;
 
//  }
 //}


//Prototype
// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function(){
//     rreturn `${this.firstName} ${this.lastName}`;
// }

//Class
class Person{
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName - lastName;
    this.dob = new Date(dob); 
    }
    getBirthYear() {
     return this.dob.getFullYear();
 }
    getFullName(){
     return `${this.firstName} ${this.lastName}`;
 
 }

}
//Instantiate Object
const person1 = new Person('Goddess', 'Alleyne', '7-3-1994');

console.log(person1);
