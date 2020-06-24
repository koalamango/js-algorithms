function steamrollArray() {
  let flat = [];
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] instanceof Array) {
        // Recursion
        flat.push.apply(
          flat,
          steamrollArray.apply(this, arguments[i]));
        } else {
          flat.push(arguments[i]);
        }
    }
  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
