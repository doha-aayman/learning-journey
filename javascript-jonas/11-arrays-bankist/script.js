"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



/////////////////////////////////////////////////

// let arr = ['a' , 'b' , 'c' , 'd' , 'e', 'f' ]
// //slice
// console.log(arr.slice(2));
// console.log(arr);
// console.log(arr.slice(1,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-2));
// console.log(arr.slice(2));

// //splice
// //arr.splice(start, deleteCount)

// // arr.splice(2);
// // console.log(arr);

// // arr.splice(-1);
// // console.log(arr);

// arr.splice(0,2);
// console.log(arr);

// //reverse
// const arr2 =['j', 'i', 'h', 'k', 'l'];
// console.log(arr2.reverse());
// console.log(arr2);

// //concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr , ...arr2]);

// //join
// console.log(letters.join(' - '))

//-------------------------------------------------------------------------------------------------

// at method

const arr = [23, 1, 55];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

//-------------------------------------------------------------------------------------------------

//forEach dont have break or continue
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`movement ${i + 1}: you deposited${mov}`);
  } else {
    console.log(`movement ${i + 1}: you deposited${Math.abs(mov)}`);
  }
  //console.log(arr);
});

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`movement ${i + 1}: you deposited${mov}`);
  } else {
    console.log(`movement ${i + 1}: you deposited${Math.abs(mov)}`);
  }
}

//in map
currencies.forEach(function(val , key , mapp)
{
  console.log(`${key} : ${val}`);
}) 

//in set
// Set has 'key' in forEach just to match Map's parameter order and avoid confusion.
const newSet = new Set([7,7,76,5,3,2,5,3]);
newSet.forEach(function(val , key , mapp)
{
  console.log(`${key} : ${val}`);
}) 

//-------------------------------------------------------------------------------------------------


























