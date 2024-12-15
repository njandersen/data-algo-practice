// You will almost never see questions that call for stacks and queues.
// They are used for solving subproblems within a problem.
// Will help solve a specific kind of prolem.
// Like problems dealing with the order of retrival of data.

// Given a string containing only parentheses, determine if is is valid.
// The string is valid if all parentheses close.

// Test Cases:
// ""       true
// "{([])}" true
// "{([]"   false
// "{[(])}" false
// "{[]()}" true
//
// we need to keep track of first and last.
// we need to compare current to the next. If they close keep going.
// Finally at the end compare first and last and if they are equal as in they close then
// return true.

function validParentheses(s) {
  const right = "})]";
  const parens = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];

  if (s.length === 0) {
    return true;
  }

  if (right.includes(s[0]) || s.length === 1) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      let curr = s[i];

      if (parens[last] !== curr) return false;
    }
  }

  return stack.length === 0;
}
