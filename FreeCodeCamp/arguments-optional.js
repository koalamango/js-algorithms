function addTogether() {
  var args = Array.prototype.slice.call(arguments);
  // multiple digits
  if (args.length > 1) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      if (typeof args[i] === 'number') {
        sum += args[i];
      } else {
        return undefined;
      }
    }
    return sum;
  }
  // single digit
  if (args.length === 1) {
    let d = args[0];
    if (typeof args[0] === 'number') {
      return function(arg2) {
        if (typeof arg2 === 'number') {
          return d + arg2;
        } else {
          return undefined;
        }
      }
    } else {
      return undefined;
    }
  }
}

addTogether(2,3);
addTogether(5)(7);
