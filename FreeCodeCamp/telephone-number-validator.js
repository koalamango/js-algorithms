function telephoneCheck(str) {
  // list all regex rules
  const startOfString = "^";
  const threeDigits = "[0-9]{3}";
  const threeDigitsWithOptionalSpace = "((" + threeDigits + ")|(\\(" + threeDigits + "\\)))"
  const fourDigits = "[0-9]{4}";
  const optionalPrefix = "(1( )?)?";
  const optionalSpaceHyphen = "[ \\-]?";
  const endOfString = "$";
  // Concat regex
  let regex = new RegExp(startOfString +
    optionalPrefix +
    threeDigitsWithOptionalSpace +
    optionalSpaceHyphen +
    threeDigits +
    optionalSpaceHyphen +
    fourDigits +
    endOfString);

  return result = regex.test(str);
}

telephoneCheck("555-555-5555");
