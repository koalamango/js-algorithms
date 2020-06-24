function palindrome(str) {
  let pattern = str.toLowerCase().replace(/[_+\W]/g, '').split("");
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] !== pattern[pattern.length - i - 1]) {
      return false;
    }
  }
  return true;
}

palindrome("not a palindrome");
palindrome("0_0 (: /-\ :) 0-0");
