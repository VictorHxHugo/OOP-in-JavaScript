'use strict';

///////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthyear) {
  // Instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;

  // Never do this
  // this.calcAge = function () {
  // console.log(2037- this.birthyear);
  // };
};

const victor = new Person('Victor', 1999);
console.log(victor);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(victor instanceof Person);

///////////////////////////////
// Prototypes

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthyear);
// };

// victor.calcAge();
// matilda.calcAge();

// console.log(victor.__proto__);
// console.log(victor.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(victor));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo sapiens';
// console.log(victor.species, matilda.species);

// console.log(victor.hasOwnProperty('firstName'));
// console.log(victor.hasOwnProperty('species'));

// // Object.prototype (toop of prototype chain)
// console.log(victor.__proto__.__proto__);
// console.log(victor.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

///////////////////////////////
// ES6 Classes

// class declararttion
class PersonCL {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  CalcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCL('Jessica', '1996');
console.log(jessica);
jessica.CalcAge();
jessica.greet();
