function getFibonacci(n) {
    const fib = [0, 1];
    while (fib.length < n) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib.slice(0, n);
  }
  

  console.log(getFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  