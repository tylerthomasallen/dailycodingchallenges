// This problem was asked by Apple.
//
// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

const testFunc = () => {
  console.log('test function called!');
};

const setTime = (func, int) => {
  setTimeout(func, int);
};

setTime(testFunc, 1000);
