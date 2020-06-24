function sumPrimes(num) {
  let primes = [];
  // Set each item of primes array value to true
  for (let i = 1; i <= num; i++) {
    primes[i] = true;
  }
  // 0 and 1 are false
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // multiple
    for (let j = 2; j * i <= num; j++) {
      primes[j * i] = false;
    }
  }
  // Loop through and sum up
  let sum = 0;
  Object.keys(primes).map((v,i) => {
    if (primes[v]) {
      console.log(i);
      sum += i;
    }
  });
  return sum;
}

sumPrimes(10);
sumPrimes(977);
