function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  let obj = Object.values(args.flat());
  obj.filter((item, index) => {
    if (obj.indexOf(item) !== index) {
      delete obj[index];
    }
  });
  arr = obj.flat();
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
uniteUnique([1, 2, 3], [5, 2, 1]);
