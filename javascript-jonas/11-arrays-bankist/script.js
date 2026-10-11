"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "premium",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "basic",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "standaed",
};
const accounts = [account1, account2, account3, account4];

// let arr = ['a' , 'b' , 'c' , 'd' , 'e', 'f' ]
// //slice
// console.log(arr.slice(2));
// console.log(arr);
// console.log(arr.slice(1,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-2));

// //splice
// arr.splice(start, deleteCount)

// arr.splice(4);
// console.log(arr);

// arr.splice(-1);
// console.log(arr);

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

// //-------------------------------------------------------------------------------------------------

// // at method

// const arr = [23, 1, 55];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// //-------------------------------------------------------------------------------------------------
// //forEach doesnt have break or continue but has return as continue

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`movement ${i + 1}: you deposited${mov}`);
//   } else {
//     console.log(`movement ${i + 1}: you deposited${Math.abs(mov)}`);
//   }
//   //console.log(arr);
// });

// for (const [i, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`movement ${i + 1}: you deposited${mov}`);
//   } else {
//     console.log(`movement ${i + 1}: you deposited${Math.abs(mov)}`);
//   }
// }

// //in map
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function(val , key , mapp)
// {
//   console.log(`${key} : ${val}`);
// })

// //in set
// // Set has 'key' in forEach just to match Map's parameter order and avoid confusion.
// const newSet = new Set([7,7,76,5,3,2,5,3]);
// newSet.forEach(function(val , key , mapp)
// {
//   console.log(`${key} : ${val}`);
// })

// //-------------------------------------------------------------------------------------------------
// //map

// // Use map() to return a new modified array
// const eurToUsd = 1.1;

// const movementsUsd = movements.map(function(mov){
//   return mov * eurToUsd;
// })

// // const movementsUsd = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

// const movementsDescriptions = movements.map((mov , i) =>
// `movement ${i+1} : you ${mov>0?'deposited':'withsrew'} ${Math.abs(mov)}`
// );

// console.log(movementsDescriptions);

// //-------------------------------------------------------------------------------------------------
// //filter

// const deposits = movements.filter(mov => mov>0)

// console.log(deposits);

// //-------------------------------------------------------------------------------------------------
// //reduce

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// //-------------------------------------------------------------------------------------------------
// //findindex , findlast , find , findlastIndex

// const latestLargeMovementIndex = movements.findLastIndex(
//   (mov) => Math.abs(mov) > 1000,
// );
// console.log(latestLargeMovementIndex);

// //-------------------------------------------------------------------------------------------------
// //some , every

// btnLoan.addEventListener("cilkc", function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);
//   if (
//     amount > 0 &&
//     currentAccount.movements.some((mov) => mov > amount * 0.1)
//   ) {
//     // add movememnt
//     currentAccount.movements.push(amount);

//     //updateUI
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = "";
// });

// //-------------------------------------------------------------------------------------------------
// //flat , flatmap

// const arrflat = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arrflat.flat);

// const arrFlatDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrFlatDeep.flat(2));

// //-------------------------------------------------------------------------------------------------
// //grouping array
// const groupedByActivity = Object.groupBy(accounts, (acc) => {
//   const movmentCount = acc.movements.length;
//   if (movmentCount >= 8) return "very active";
//   if (movmentCount >= 4) return "active";
//   if (movmentCount >= 1) return "moderate";
//   return "inactive";
// });

// const groupedAccuunts = Object.groupBy(accounts, (acc) => acc.type);
// const groupedAccuunts1 = Object.groupBy(accounts, ({type}) => type);

// //-------------------------------------------------------------------------------------------------
// //creating , filling
// const arrFilling = [1,2,3,4,5,6,7];
// console.log(new Array())

// //-------------------------------------------------------------------------------------------------
// array methods practice

// //1
// const bankDepositSum = accounts
//   .flatMapmap((mov) => mov.movements)
//   .filter((mov) => mov > 0)
//   .reduce((sum, mov) => sum + mov, 0);

// //2
// const numDeposits1000 = accounts
//   .flatMapmap((mov) => mov.movements)
//   .filter((mov) => mov >= 1000);

// //2_1
// const numDeposits1000_1 = accounts
//   .flatMapmap((mov) => mov.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : cur), 0);

// console.log(numDeposits1000.length);

// //3
// const { deposit, withdeawals } = accounts
//   .flatMapmap((mov) => mov.movements)
//   .reduce(
//     (sums, cur) => {
//       cur >= 0 ? (sums.deposit += cur) : (sums.withdeawals += cur);
//       return sums;
//     },
//     { deposit: 0, withdeawals: 0 },
//   );

// //4
// const convertTitileCase = function (title) {
//   expections = ["a", "an", "the", "but", 'and' , "or", "on", "in", "in", "with"];
//   return title
//     .toLowerCase()
//     .split(' ')
//     .map((cur) => {
//       word = true;

//       expections.forEach((element) =>
//         element === cur ? (word = false) : word);

//       return word ? cur[0].toUpperCase() +cur.slice(1) : word;
//     }).join('');
// };
// //-------------------------------------------------------------------------------------------------

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
 For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old,
  and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array,
 and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const juliaDogs = julia.slice(1, -2);

// function checkDogs(juliaD, kateD) {
//  const allDogs = juliaDogs.concat(kateD);

//   allDogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i+1} is still puppy, and is ${dog} years old`);
//     }
//   });
// }

// checkDogs(juliaDogs, kate);

// //-------------------------------------------------------------------------------------------------

///////////////////////////////////////
// Coding Challenge #2 and #3

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula:
 if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];

// //1
// const calcHumanAge =function(ages){
// const humanYears= ages.map(age => (age <= 2) ? 2*age : 16+ age*4);
// }

// //2
// const allGogs= function(dogs){
//   return dogs.filter(function(age){
//     const humanAge = (age <= 2) ? 2*age : 16+ age*4;
//     return humanAge >=18;
//   })
// }

// //3
// const avr = function(data){
//   return Math.abs((data.reduce((sum,val) => sum += val)) / data.length);
// }
// console.log(avr(data1));

// //
// const calcAverageHumanAge =function(ages){
// const humanAges= ages.map(age => (age <= 2) ? 2*age : 16+ age*4);

// const adults = humanAges.filter(age => age>=18);

// return (adults.reduce((sum,val) => sum + val) , 0) / adults.length;
// }

// const calcAverageHumanAge2 =function(ages){
// const humanAges= ages.map(age => (age <= 2) ? 2*age : 16+ age*4)
// .filter(age => age>=18)
// .reduce((acc,age,i,arr) => acc + age / arr.length , 0)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"

2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)

3. Create an array "allActivities" of all the activities of all the dog breeds

4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). 
HINT: Use a technique with a special data structure that we studied a few sections ago.

5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do,
 in a unique array called "swimmingAdjacent".

6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const breeds = [
//   {
//     breed: "German Shepherd",
//     averageWeight: 32,
//     activities: ["fetch", "swimming"],
//   },
//   {
//     breed: "Dalmatian",
//     averageWeight: 24,
//     activities: ["running", "fetch", "agility"],
//   },
//   {
//     breed: "Labrador",
//     averageWeight: 28,
//     activities: ["swimming", "fetch"],
//   },
//   {
//     breed: "Beagle",
//     averageWeight: 12,
//     activities: ["digging", "fetch"],
//   },
//   {
//     breed: "Husky",
//     averageWeight: 26,
//     activities: ["running", "agility", "swimming"],
//   },
//   {
//     breed: "Bulldog",
//     averageWeight: 36,
//     activities: ["sleeping"],
//   },
//   {
//     breed: "Poodle",
//     averageWeight: 18,
//     activities: ["agility", "fetch"],
//   },
// ];

// //1
// const huskyWeight = breeds.find((mov) => mov.breed === "Husky").averageWeight;
// console.log(huskyWeight);

// //2
// //me
// const dogBothActivities = breeds.find(
//   (mov) =>
//     mov.activities.includes("running") && mov.activities.includes("fetch"),
// );
// console.log(dogBothActivities.breed);

// //3
// const allActivities = [...new set(breeds.flatMap((mov) => mov.activities))];

// //5
// const swimmingAdjacent = [
//   ...new set(
//     breeds
//       .filter((mov) => mov.activities.includes("swimming"))
//       .flatMap((mov) => mov.activities)
//       .filter((activitie) => activitie !== "swimming"),
//   ),
// ];

// //6
// console.log(
//   breeds.flatMap((mov) => mov.averageWeight).reduce((sum, mov) => sum + mov, 0),
// );

// //6
// console.log(breeds.every((mov) => mov.averageWeight > 10));

// //7
// console.log(breeds.some((mov) => mov.activities.length >= 3));

// //8
// console.log(
//   Math.max(
//     ...breeds
//       .filter((mov) => mov.activities.includes("fetch"))
//       .map((mov) => mov.averageWeight),
//   ),
// );

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion 
(recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before,
 so think about how you can do this without creating a new array).

2. Find Sarah's dog and log to the console whether it's eating too much or too little.
 HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much (ownersTooMuch)
 and an array with all owners of dogs who eat too little (ownersTooLittle).

4. Log a string to the console for each array created in 3., like this: 
"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much,
 too little or the exact amount of food, based on the recommended food portion.

 9. Group the dogs by the number of owners they have

10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10).
 Basically, the current portion should be between 90% and 110% of the recommended portion.

 
 GOOD LUCK 😀
 TEST DATA:
 const dogs = [
   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
   { weight: 8, curFood: 200, owners: ['Matilda'] },
   { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
   { weight: 18, curFood: 244, owners: ['Joe'] },
   { weight: 32, curFood: 340, owners: ['Michael'] },
 ];
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1
dogs.forEach((dog) => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2
function eatingStatus(dog, ownerName) {
  if (dog.curFood > dog.recFood) console.log("much");

  if (dog.curFood < dog.recFood) console.log(`low`);
  else console.log("recommended");
}

console.log(
  `Sarah's dog eats too ${eatingStatus(dogs.find((dog) => dog.owners.includes("Satah")))}`,
);

//3
const ownerType = Object.groupBy(dogs, (dog) =>
  dog.curFood > dog.recFood ? "ownersTooMuch" : "ownersTooLittle",
);

const ownersTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMapmap((dog) => dog.owner);

const ownersTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMapmap((dog) => dog.owner);

//4
console(`${ownersTooMuch.join(and)}'s dogs eat too much!`);
console(`${ownersTooLittle.join(and)}'s dogs eat too much!`);

//5
dogs.some((dog) => dog.curFood === dog.recFood);

//6
dogs.every((dog) => dog.curFood === dog.recFood);

const checkEatingOkay = dog =>
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

//7

const okay = dogs.filter(dog => checkEatingOkay(dog)); 

//8
ownersNum = Object.groupBy(dogs, (dog) => {
  if (dog.curFood > dog.recFood) return "too-much";
  if (dog.curFood > dog.recFood) return "too-little";
  else return "recommended";
});

//9
ownersNum = Object.groupBy(dogs, (dog) => {
  if (dog.owners.length == 1) return "one";
  if (dog.owners.length == 2) return "two";
  if (dog.owners.length == 3) return "three";
});

//10
dogs.toSorted((a,b) => a.recFood - b.recFood);