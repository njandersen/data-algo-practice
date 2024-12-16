// Given 2 strings S and T return if they equal when
// both are types out. Any '#' that appears in the string
// counts as a backspace

// S: "ab#c" T: "az#c"
// "ac"    "ac" They match

// verify constrainst: two empty strings are equal. Case sensitivity matters.

// Test cases:
// S: "ab#z" T: "az#z" true
// S: "abc#d" T: "acc#c" false
// S: "x#y#z#" T: "a###" true
// S: "a###b"  T: "b" true
// S: "Ab#z" T: "ab#z" false

// Brute force approach:
// loop over s and t. Add it to a new string. If you come across a # remove the last char
// and dont add the # repeat. Then compare two strings to see if they are equal

function buildArr(string) {
  let builtArr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "#") {
      if (builtArr.length > 0) {
        builtArr.pop();
      }
    } else {
      builtArr.push(string[i]);
    }
  }

  return builtArr;
}

// Brute Force Solution:
function bruteTypedStrings(s, t) {
  //O(a + b)
  const string1Arr = buildArr(s); // O(a)
  const string2Arr = buildArr(t); // O(b)

  console.log(string1Arr);
  console.log(string2Arr);

  if (string1Arr.length !== string2Arr.length) {
    return false;
  }

  return string1Arr.every((element, index) => element === string2Arr[index]);
}

function optimalTypedStrings(s, t) {
  let ptr1 = s.length - 1;
  let ptr2 = t.length - 1;

  while (ptr1 >= 0 || ptr2 >= 0) {
    if (s[ptr1] === "#" || t[ptr2] === "#") {
      if (s[ptr1] === "#") {
        let steps = 2;
        while (steps > 0) {
          ptr1--;
          steps--;
          if (s[ptr1] === "#") {
            steps = steps + 2;
          }
        }
      }
      if (t[ptr2] === "#") {
        let steps = 2;
        while (steps > 0) {
          ptr2--;
          steps--;
          if (t[ptr2] === "#") {
            steps = steps + 2;
          }
        }
      }
    } else {
      if (s[ptr1] !== t[ptr2]) {
        return false;
      } else {
        ptr1--;
        ptr2--;
      }
    }
  }
  return true;
}

const s = "ab#z";
const t = "az#z";
//const s = "abc#d";
//const t = "acc#c";
//const s = "x#y#z#";
//const t = "a###";
//const s = "a###b";
//const t = "b";
//const s = "Ab#z";
//const t = "ab#z";
const result = bruteTypedStrings(s, t);
const result2 = optimalTypedStrings(s, t);
console.log("brute force result: ", result);
console.log("optimal result: ", result2);
