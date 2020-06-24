function smallestCommons(arr) {
  let range = [];
  // sort array
  arr.sort(function(a, b){return b - a});
  for (let i = arr[0]; i >= arr[1]; i--) {
    range.push(i);
  }
  var quot = 0;
  var loop = 1;
  var n;

  do {
    quot = range[0] * loop * range[1];
    for (n = 2; n < range.length; n++) {
      if (quot % range[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== range.length);
  return quot;
}

smallestCommons([5,1]);
smallestCommons([13,1]);
