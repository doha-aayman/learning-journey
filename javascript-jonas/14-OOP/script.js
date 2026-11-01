"use strct";

//constructor functions
const person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never to this
  // this.calcAge = function (){
  // console.log(2037-this.birthYear)
  // }
};

//instances
const doha = new person("doha", 2003);
const maaz = new person("maaz", 2006);
const jonas = new person("jonas", 1991);

console.log(doha);
console.log(doha instanceof person);

person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};


doha.calcAge();
jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === person.prototype);
console.log(person.prototype.isPrototypeOf(jonas));
console.log(person.prototype.isPrototypeOf(person));

person.prototype.species ='homo sapiens'

console.log(jonas.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));