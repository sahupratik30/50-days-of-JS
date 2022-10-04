// Return the N-th value of the Fibonacci sequence

function fibonacci(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`);
