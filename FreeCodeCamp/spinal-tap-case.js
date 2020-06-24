function spinalCase(str) {
  // Replace underscore and space to dash
  let arr = str.replace(/\s+|_+|--+/g, "-").split("");
  let newArr = [];
  // Find uppercase then insert dash
  arr.map((value, index) => {
    // Start from 1, do nothing with first character
    if (index > 0) {
      // Find uppercase then insert dash
      if ((/[A-Z]/g).test(value) &&
          arr[index - 1] !== '-') {
          value = ("-").concat(value);
      }
    }
    newArr.push(value);
  });
  return newArr.join("").toLowerCase();
}

spinalCase("AllThe-small Things");
spinalCase("The_Andy_Griffith_Show");
