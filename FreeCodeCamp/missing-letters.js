function fearNotLetter(str) {
  // When every letter is there
  if (str.length === 26) {
    return undefined;
  }
  // Set alphabet so we got position
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newArr = [];
  let obj = str.toLowerCase().split("");
  // starting point
  let prev = alphabet.indexOf(obj[0]);
  Object.keys(obj).map((x) => {
    let curr = alphabet.indexOf(obj[x]);
    if (curr > prev) {
      if (curr - prev !== 1) {
        newArr.push(alphabet[curr - 1]);
      }
      prev = curr;
    }
  });
  newArr = newArr.join("").toString();
  return newArr;
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");
fearNotLetter("stvwx");
