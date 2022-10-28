const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your solution here
  let stack = new Stack();

  //Populate our stack with our string character;
  for (let i = 0; i < sentence.length; i++) {
    stack.push(sentence[i]);
  }
  let reverseString = "";
  while (stack.top !== null) {
    reverseString += stack.pop();
  }
  return sentence === reverseString;
};

module.exports = isPalindrome;
