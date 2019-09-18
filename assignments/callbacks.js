// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.



/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/







const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

const items2 = ['Book', 'Paper'];

const items3 = ['Code'];





function getLength(arr, cb) {  
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}




/***** TEST 1  *****/
/*******************/
function result(callback){
  return `Test 1A: This array length is ${callback}!`;
}

const test1a = getLength(items3, result);

console.log(test1a);




// /***** TEST 2  *****/
// /*******************/
const test1b = getLength(items, callback => `Test 1B: This array length is ${callback}!`);
console.log(test1b);














function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);   
}

const test2 = last(items, callback => `Array's last element is ${callback}!`);
//  console.log(test2);

// CONCISE TEST
// last( items, (last) => { console.log(last); } );






















function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
const test3 = sumNums(4, 7, item => `Sum is ${item}!`);
// console.log(test3);

// CONCISE TEST
// sumNums( 4, 7, (sumNums) => { console.log(sumNums); } );





function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
const test4 = multiplyNums(10, 3, item => `Product is ${item}`);
// console.log(test4);

// CONCISE TEST
// multiplyNums( 10, 3, (multiplyNums) => { console.log(multiplyNums); } );



function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.  
  if(list.includes(item))
    return cb(true);  
  else
    return cb(false); 
}
const test5 = contains('yo-yo', items, item => item);
// console.log(test5);

// CONCISE TEST
// contains( 'yo-yo', items, (contains) => { console.log(contains); } );



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  
  return cb(Array.from(new Set(array)));
}
const test6 = removeDuplicates(['A','A','B','C','A','D','D','E','A','A','B','F'], item => `Unique Array is now ${item}`);
// console.log(test6);
