function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  console.log(args, 'args');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer(["tree", "hamburger", 53], "tree", 53);
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// ===
// ES6 Better solution
// ===
function destroyer2(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}
