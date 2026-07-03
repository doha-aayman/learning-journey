"use strict";

//Default Parameters
const bookings = [];

const createBooking = function (
  flightNum = "LH678",
  numPassengers = 6,
  price = 100,
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
};

createBooking("MM90");
createBooking("FG78", undefined, 900);
console.log(...bookings);

console.log(`----------------------------------------------------------------------------
----------------------------------------------------------------------------`);

//---------------------------------------------------------------------------------------------------------------------------------

// Argument value VS reference
// JavaScript doesn't have a ref parameter

const flight = "LH234";
const doha = {
  name: "doha ayman",
  passport: 5676358837,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "IOP54";
  passenger.name = "Ms. " + passenger.name;

  if (passenger.passport === 5676358837) {
    alert("Checked in");
  } else {
    alert("wrong passport");
  }
};
const newpassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

//checkIn(flight ,doha);
console.log(flight);
console.log(doha);

newpassport(doha);
//checkIn(flight , doha);

console.log(`----------------------------------------------------------------------------
----------------------------------------------------------------------------`);

//---------------------------------------------------------------------------------------------------------------------------------

//Higher order function
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`original string : ${str}`);
  console.log(`transformed string : ${fn(str)}`);
  console.log(`fn name ${fn.name}`);
};

transformer("doha ayman", upperFirstWord);

console.log(`----------------------------------------------------------------------------
----------------------------------------------------------------------------`);

//---------------------------------------------------------------------------------------------------------------------------------
//function returning function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const gtreeterHey = greet("hey");
gtreeterHey("Doha");
gtreeterHey("jonas");

greet("hi")("moaz");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const gtreeterHeyArr = greetArr("hey");
gtreeterHeyArr("Doha");
gtreeterHeyArr("jonas");
console.log(`----------------------------------------------------------------------------
----------------------------------------------------------------------------`);

//---------------------------------------------------------------------------------------------------------------------------------
//call and apply method

const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} 
    fligt ${this.iatacode} ${flightNum}`);

    this.booking.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: "Eurowings",
  iatacode: "EW",
  booking: [],
};

lufthansa.book(234, "doha ayman");
lufthansa.book(846, "moaz ayman");

console.log(lufthansa);

const book = lufthansa.book;
book.call(eurowings, 534, "jonas");
book.apply(eurowings, [534, "jonas"]);
console.log(eurowings);

// This doesn't work because apply() expects arguments in an array.
// book.apply(eurowings, 534, 'jonas');

console.log(`----------------------------------------------------------------------------
----------------------------------------------------------------------------`);

//---------------------------------------------------------------------------------------------------------------------------------
//bind method

const bookEW = book.bind(eurowings);
const bookLE = book.bind(lufthansa);

bookEW(4354, "moon");
bookLE(63, "fly");

const bookEW34 = book.bind(eurowings, 34);
bookEW34("mo");

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//lufthansa.buyPlane();

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
//The this keyword in an event listener refers to the element

document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const TT = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const tt = TT(0.23);
console.log(tt(100));

console.log(`----------------------------------------------------------------------------
----------------------------------------------------------------------------`);

//---------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1.
   Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
   2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'),
 which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log().
  This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option.
 Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  
  displayResults(type ='')
  {console.log(type , ...this.answers);
  }
};

const registerNewAnswer= function () {
  let answer = prompt(`${this.question} 
${this.options.join("\n")}`);

  if (answer >= 0 && answer <= 3) {
    this.answers[answer]++;
  }
  
  this.displayResults('the results is ');
};

document.querySelector(".poll").addEventListener
("click", registerNewAnswer.bind(poll));


