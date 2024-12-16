// Given a string, find the length of tthe longest
// substring without repeatinng characters.
// "abccabb"
// is the substring contiguous?
// Yes look for substring not subsequence
// Does case sensitivity matter?
// No.
//
// Test cases:
// "abccabb" -> 3
// "cccccc" -> 1
// ""      -> 0
// "abcbda" -> 4

// Sliding window:
// Form a window over some portion of sequential data, then
// move that window throughout the data tto caputre different parts of it.

// Brute Force Approach:
function bruteLongestSubstring(s) {
  if (s.length <= 1) return s.length;
  let longest = 0;

  for (let left = 0; left < s.length; left++) {
    let seenChars = {};
    let currLength = 0;
    for (let right = left; right < s.length; right++) {
      const currChar = s[right];
      if (!seenChars[currChar]) {
        currLength++;
        seenChars[currChar] = true;
        longest = Math.max(longest, currLength);
      } else {
        break;
      }
    }
  }
  return longest;
}

// Optimal Approach:
function optimalLongestSubstring(s) {
  if (s.length <= 1) return s.length;

  const seenChars = {};
  let longest = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const currChar = s[right];
    const prevChar = seenChars[currChar];
    if (prevChar >= left) {
      left = prevChar + 1;
    }
    seenChars[currChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

//const string = "abccabb";
//const string = "cccccc";
//const string = "";
const string = "abcbda";
const result1 = bruteLongestSubstring(string);
console.log("brute force result: ", result1);
