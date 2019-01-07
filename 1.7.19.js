// Prompt:
// Given an array of integers, return a new array such that each element at
// index i of the new array is the product of all the numbers in the original array except the one at i.
//
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be [2, 3, 6].
//
// Follow-up: what if you can't use division?

const convertArr = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let c = 0; c < arr.length; c++) {
      if (c !== i) {
        product *= arr[c];
      }

    }
    result.push(product);
  }

  return result;
};

const test = [1, 2, 3, 4, 5];

console.log(convertArr(test));

// this solution takes O(n2) time (exponential, double nested for loop) so would not be good scaling
// definitely a naive solution. Takes O(n) space, just making a copy array the same
// length as the original array.
