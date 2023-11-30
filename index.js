console.log("Working with Functions");
console.log("----Part 1: Thinking Functionally----");
//Write functions with descriptive names, and clear inputs and outputs.

//a function that take an array of numbers and return the sum.
function getSum(array) {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }
  return sum;
}
console.log("the sum of the array is: ", getSum([2, 3, 4, 1, 1]));

//Take an array of numbers and return the average
const getAverage = (numArray) => getSum(numArray) / numArray.length;
console.log("The average of the array is: ", getAverage([2, 3, 4, 1, 1]));

//Take an array of strings and return the longest string.
function getLongestString(strArray) {
  let longestStringIndex = 0;
  let strLength = 0;
  for (const string of strArray) {
    if (strLength < string.length) {
      strLength = string.length;
      longestStringIndex = strArray.indexOf(string);
    }
  }
  return strArray[longestStringIndex];
}
console.log(
  getLongestString(["say", "morning", "hello", "in", "the", "afternoon"]),
);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function stringsLongerThan(stringArry, number) {
  let result = [];
  for (const string of stringArry) {
    if (string.length > number) {
      result.push(string);
    }
  }
  return result;
}
console.log(stringsLongerThan(["say", "hello", "in", "the", "morning"], 3));

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function allIntegersfrom1to(number) {
  if (number > 1) {
    console.log(number);
    allIntegersfrom1to(number - 1);
  } else {
    console.log(number);
  }
}
allIntegersfrom1to(5); //this function print all numbers in between 1 and 5.
console.log("----Part 2: Thinking Methodically----");

//Sort the array by age.
function sortByAge(objArry) {
  return objArry.sort((a, b) => a.age - b.age);
} //expected output an array of objects sorted by age

let objArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

let sortedArry = sortByAge(objArray); // sort the array of objects by age
console.log(sortedArry);

//Filter the array to remove entries with an age greater than 50.
function filterByAge(Array) {
  return Array.filter((item) => Number(item.age) <= 50);
}
let newObjArry = [...objArray];
console.log(filterByAge(newObjArry));

//Map the array to change the “occupation” key to “job” and increment every age by 1.
function mappingChange(ObjArr) {
  let newObjArr = ObjArr.map((item) => ({
    id: item.id,
    name: item.name,
    job: item.occupation,
    age: String(Number(item.age) + 1),
  }));
  return newObjArr;
}
console.log(mappingChange(objArray));

// Use the reduce method to calculate the sum of the ages.
function sumOfAge(array) {
  let sum = array.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.age),
    0,
  );
  return sum;
}
//calculate the average age
function AverageAge(array) {
  return sumOfAge(array) / array.length;
}
console.log(
  `The entries age average is: ${AverageAge(objArray)} rounded to ${Math.round(
    AverageAge(objArray),
  )} years old`,
);

console.log("----Part 3: Thinking Critically----");
//Take an object and increment its age field
function incrementAge(Object) {
  if (!Object.hasOwnProperty("age")) Object.age = 0;
  return (Object.age = Number(Object.age) + 1);
}
let obj = objArray[1];
console.log("For this object", obj);
incrementAge(obj);
console.log("testing IncrementAge function results: ", obj);
//Take an object, make a copy, and increment the age field of the copy. Return the copy.
function copyObj_incrementAge(Object) {
  let newObj = { ...Object };
  if (!newObj.hasOwnProperty("age")) newObj.age = 0;
  newObj.age = String(Number(newObj.age) + 1);
  newObj.updated_at = Date(Date.now()).toString();
  return newObj;
}
console.log(
  "original object:",
  obj,
  "test copy result:",
  copyObj_incrementAge(obj),
);

//many things to be accomplished with functions
/**This Awesome! In a week I was able to (EEE) Explore, Experiment, and Experience the magic of reusable code! I love it...Thanks to all who made this opportunity possible*/
