// The Problem: https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Time Complexity: O(n)
/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function (s) {
  let splittedWord = s.split(" ");

  return splittedWord
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};

let reverseWordsTwo = function (s) {
  let res = "";
  let [l, r] = [0, 0];

  while (r < s.length) {
    if (s[r] === " ") {
      res += s.slice(l, r).split("").reverse().join("") + " ";
      l = r + 1;
    }
    r++;
  }

  res += s.slice(l, r).split("").reverse().join("");

  return res;
};

const { SimpleTest } = require("./simpleTest");
const { TimeCounter } = require("./timeCounter");

const simpleTest = new SimpleTest();

simpleTest.assert("It should reverse the string", {
  expected: "gnitset",
  target: TimeCounter.wrapper(reverseWords, "testing"),
});

simpleTest.assert("It should reverse the string", {
  expected: "gnitset",
  target: TimeCounter.wrapper(reverseWordsTwo, "testing"),
});
