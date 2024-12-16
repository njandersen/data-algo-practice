// It is an optimization technique
// Do you have something you can cache?
// Uses caching.
// Dynamic programming is just a buzzword.
//
// Break down into subproblems and saving solutions
// Memoization is the act of caching a return value based on its params.
//
// Dynamic programming is like a combonation of divide and conquer and memoization
// 1.) Can be divided into subproblems
// 2.) Recursive Solution
// 3.)  Are there repetivive subproblems
// 4.) Memoize subproblems

// Not efficient!!!!
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function dynamicFib() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fib = dynamicFib();
console.log(fib(10));
