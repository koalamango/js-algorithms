function translatePigLatin(str) {
  let vowelReg = /[aeiou]/i;
  let newStr = str.replace(/[^a-zA-Z]/g, "").split("");

  // Vowel - A, E, I, O, U
  let newArr = [];
  let extra = vowelReg.test(newStr[0]) ? "way": "ay";
  for (const index in newStr) {
    if (vowelReg.test(newStr[index])) {
      break;
    }
    if (!vowelReg.test(newStr[index])) {
      newArr.push(newStr[index]);
      delete newStr[index];
    }
  }

  return newStr.join("").toString() + newArr.join("").toString() + extra;
}

translatePigLatin("glove");
translatePigLatin("paragraphs", '2');
translatePigLatin("eight", '3');
