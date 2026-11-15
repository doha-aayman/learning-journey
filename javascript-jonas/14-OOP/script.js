"use strct";

///////////////////////////////////////
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
  console.log(this.fullName);
};

doha.calcAge();
jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === person.prototype);
console.log(person.prototype.isPrototypeOf(jonas));
console.log(person.prototype.isPrototypeOf(person));

person.prototype.species = "homo sapiens";

console.log(jonas.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

//inheritance
const student = function (firstName, birthYear, course) {
  person.call(this, firstName, birthYear, course);
  this.course = course;
};

student.prototype = Object.create(person.prototype);

student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new student("mike", 2020, "computer scince");
console.log(mike.calcAge());

///////////////////////////////////////
//ES6 Classes
/* 1. Classes are NOT hoisted
 2. Classes are first-class citizens
 3. Classes are executed in strict mode
*/

// Class expression
// const PersonCl = class {}

// Class declaration

class personCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge(params) {
    console.log(2037 - this.birthYear);
    console.log(this.fullName);
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}
const p1 = new personCl("shams Arafa", 2001);

console.log(p1.__proto__ === personCl.prototype);
console.log(p1.fullName);
console.log(p1.calcAge());
personCl.hey();


//instances
class studentCl extends personCl {
constructor(fullName , birthYear , course){
  super(fullName , birthYear)
  this.course = course;
}

introduce() {
  console.log(`My name is ${this.fullName} and i study ${this.course}`);
};
}

const mary = new studentCl('mary mar' , 2012 , 'CS');
mary.introduce();
mary.calcAge();



///////////////////////////////////////
// Object.create

const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const dody = Object.create(personProto);
dody.init("doha", 1011);
console.log(dody.calcAge());

//instances
const student1 =Object.create(personProto);
student1.init = function(firstName , birthYear ,course)
{
personProto.init.call(this , firstName ,birthYear)
this.course = course;
}

student1.introduce = function() {
  console.log(`My name is ${this.firstName} and i study ${this.course}}`);
};
const ye = Object.create(student1);
ye.init('ye' , 1990 , 'cs');

console.log(ye.introduce())

/////////////////////////////////////////////


/////////////////////////////////////////
//coding challenge#1

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.speed} km/h`);
};
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.brake();
car1.accelerate();
car2.brake();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
  this.speed += 10;
  console.log(`${this.speed} km/h`);
};

brake() {
  this.speed -= 5;
  console.log(`${this.speed} km/h`);
};

get speedUS(){
return this.speed/1.6;
}

set speedUS(speed){
this.speed = speed*1.6;
}

get speedUS(){
return this.speed/1.6;
}

}

const ford = new CarCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. 
Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
 Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
 Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
*/

/*
const EC = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EC.prototype = Object.create(Car.prototype);

EC.prototype.chargeTo = function (charge) {
  this.charge = charge;
};

EC.prototype.accelerate = function(){
  this.speed -=20;
  this.charge-=1;
  console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`)
}

const car3 = new EC('Tesla' , 120 , 23);
console.log(car3);
car3.brake();
car3.accelerate();
car3.chargeTo(90);
car3.accelerate();
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

2. Make the 'charge' property private;

3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class,
 and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class EVcl extends car {
  #charge
 constructor(make, speed, charge){
  this.#charge = charge;
  }
chargeTo(charge) {
  this.charge = charge;
  return this;
};

accelerate(){
  this.speed -=20;
  this.#charge--;
  console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`)
  return this;
}
}
*/
