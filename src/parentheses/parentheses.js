const Stack = require("../lib/stack");

const match = (expression) => {
  let stack = new Stack();
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      stack.push("(");
    } else {
      if (expression[i] === ")") {
        if (stack.top !== null) {
          stack.pop("(");
        } else {
          return false;
        }
      }
    }
  }
  if (stack.top === null) {
    return true;
  } else {
    return false;
  }
};

module.exports = match;
