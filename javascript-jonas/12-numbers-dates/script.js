const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

console.log(Number.parseInt("20px"));
console.log(Number.parseInt("p20px"));
console.log(Number.parseInt("20.5px"));

console.log(Number.parseFloat("20.5px"));

console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20.5px"));
console.log(Number.isNaN(20 / 0));

console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20.5px"));
console.log(Number.isFinite(20 / 0));

console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(2, 3, 4, 44, 5, 6));
console.log(Math.max(2, 3, 4, "44", 5, 6));
console.log(Math.max(2, 3, 4, "44px", 5, 6));

console.log(Math.min(2, 3, 4, 44, 5, 6));
console.log(Math.min(2, 3, 4, "44", 5, 6));
console.log(Math.min(2, 3, 4, "44px", 5, 6));

console.log(Math.PI * Number.parseFloat("10px") ** 2);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));

console.log(Math.trunc(23.3));
console.log(Math.trunc(23.9));

console.log(Math.floor(-23.3));
console.log(Math.trunc(-23.3));

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.234).toFixed(2));

//create a date
const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("december 24 , 2020"));
console.log(new Date(account1.movementsDates[3]));

console.log(new Date(2038, 2, 18, 17, 5, 41));
console.log(new Date(2038, 2, 18, 17));

//beginning /epoch time / unix time
console.log(new Date(0));
console.log(new Date(24 * 60 * 60 * 1000));

// working with date

const future = new Date(2037, 10, 19, 15, 23, 7);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

future.setFullYear(2024);
console.log(future.toISOString());

const ingredients = ["olives", "spinach"];

//setTimeOut
const pizzaTimer = setTimeout(
  () => {},
  (ing1, ing2) => console.log(`here is your pizza with ${ing1} , ${ing2}`),
  3000,
  ...ingredients,
);

if(ingredients.includes("spinach")) clearTimeout(pizzaTimer);

//setInterval
// setInterval(function(){
//   console.log(new Date());
// },1000)


