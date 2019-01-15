// This problem was asked by Twitter.
//
// Implement an autocomplete system. That is, given a query string s and a set of
// all possible query strings, return all strings in the set that have s as a prefix.
//
// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
//
// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

const autoComplete = (arr, query) => {
  const arrHash = {};

  arr.forEach(entry => {
    let firstChar = entry[0];
    if (arrHash[firstChar]) {
      arrHash[firstChar].push(entry);
    } else {
      arrHash[firstChar] = [entry];
    }
  });

  for (let key in arrHash) {
    if (key === query[0]) {
      let currArr = arrHash[key];
      return currArr.filter(word => word.slice(0, query.length) === query);
    }
  }
};

const testArr = ["dog", "deer", "deal"];
const testQuery = "de";

console.log(autoComplete(testArr, testQuery));
