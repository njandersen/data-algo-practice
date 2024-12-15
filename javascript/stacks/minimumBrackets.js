// given a string only containing round brackets and lowercase chars
// remove the least amount of brackets so the stsring is valid.
//
// A string is considered valid if it is empty or if there
// are brackets they all close

//Test Cases:
// "lee(t(c)o)de)"   lee(t(c)ode) or leet(t(co)de)
// "a)bc(d)" --> "abc(d)"
// "(ab(c)d" --> "ab(c)d" or "(abc)d"
// "))((" --> ""

// We know if we encounter a letter we need to push it into
// our stack.

function minimumBrackets(s) {
  if (s.length < 1) {
    return "";
  }

  const arr = s.split("");
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    }

    if (arr[i] === ")" && stack.length) {
      stack.pop();
    } else if (arr[i] === ")") {
      arr[i] = "";
    }
  }

  while (stack.length) {
    const currIndex = stack.pop();
    arr[currIndex] = "";
  }

  return arr.join("");
}

const test1 = "a)bc(d)";
const test2 = "lee(t(c)o)de)";
const test3 = "(ab(c)d";
const test4 = "))((";
const result = minimumBrackets(test2);
console.log("result", result);
