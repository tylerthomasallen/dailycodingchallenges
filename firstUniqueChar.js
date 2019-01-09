// Given a string, find the first non-repeating character in it and return it's index.
// If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

const firstUniqChar = (string) => {
  let charHash = {};

  for (let i = 0; i < string.length; i++) {

    if (charHash[string[i]] || charHash[string[i]] === 0) {
      charHash[string[i]] = -1;
    } else {
      charHash[string[i]] = i;
    }

  }
  let vals = Object.values(charHash).filter(val => val >= 0);
    console.log(vals);
  return vals.length >= 1 ? vals[0] : -1;
};
