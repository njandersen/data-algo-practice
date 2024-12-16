// Given a string, determine if it is a pallindrome,
// considering only alphanumeric chars and ingnoring
// case sensitivity.

function palindrome(s) {
  const clean = s.replace(/[^A-Z0-9]+/gi, "").toLowerCase();

  const reversed = clean.split("").reverse().join("");

  return clean === reversed;
}

const string = "A man, a plan, a canal: Panama";
const result1 = palindrome(string);
console.log(result1);
