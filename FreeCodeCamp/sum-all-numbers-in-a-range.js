function sumAll(arr) {
  let sum = 0;
  // sort arr
  arr.sort(function(a, b){return a - b});
  // loop from start to end
  let start = arr[0];
  let end = arr[arr.length - 1];
  for (let i = 0; i < (end - start + 1); i++) {
    sum += (start + i);
  }
  return sum;
}

sumAll([10, 5]);
