'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// //-------------------------------------------------------------------------------------------------

// // at method

// const arr = [23, 1, 55];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// //-------------------------------------------------------------------------------------------------

// //forEach dont have break or continue or return

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

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

//-------------------------------------------------------------------------------------------------

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

// // //-------------------------------------------------------------------------------------------------

// // filter

// const deposits = movements.filter(mov => mov>0)

// console.log(deposits);

// //-------------------------------------------------------------------------------------------------

// // reduce

// const max = movements.reduce((acc , mov) => {
//   if(acc>mov)return acc;
//   else return mov;
// } , movements[0]);

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

//find

console.log(movements.find(mov => mov<0));







































