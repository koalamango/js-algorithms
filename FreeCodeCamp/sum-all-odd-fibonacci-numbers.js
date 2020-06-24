function sumFibs(num) {
  if (num < 2) { return 1; }
  let fib = [0, 1];
  let arr = [1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    // Odd number
    if (fib[i] % 2 !== 0 && (fib[i] <= num)) {
      arr.push(fib[i]);
    }
  }
  arr = arr.reduce((sum, i) => {
    return sum += i;
  }, 0);
  return arr;
}

sumFibs(10);
