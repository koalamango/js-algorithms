function myReplace(str, before, after) {
  let arr = [];
  let obj = str.split(" ");
  // Check if 'before' is uppercase
  let isUpperCase = (/^[A-Z]/).test(before.split("")[0]);
  // Process after if above is true
  if (isUpperCase) {
    let word = after.split("");
    word[0] = word[0].toUpperCase();
    after = word.join("");
  }
  console.log(obj, 'before obj')
  Object.keys(obj).map((x) => {
    if (obj[x] === before) {
      obj[x] = after;
    }
    arr.push(obj[x]);
  });
  str = arr.join(" ");
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("Let us get back to more Coding", "Coding", "algorithms");
