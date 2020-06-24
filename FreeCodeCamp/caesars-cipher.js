function rot13(str) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let regex = /^[A-Z]+$/;
  let arr = str.toUpperCase().split("");
  arr.map( (value, index) => {
    if (regex.test(value)) {
      // Get current position
      let curr = alphabet.indexOf(value);
      // Shift 13 (total length: 26)
      let shift = (curr + 13) % 26;
      // Assign value back;
      arr[index] = alphabet.charAt(shift);
    }
  });
  console.log(arr.join(""), 'arr');
  str = arr.join("");
  return str;
}

rot13("SERR PBQR PNZC");
