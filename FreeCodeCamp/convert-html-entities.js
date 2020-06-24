function convertHTML(str) {
  let regex = /[&|<|>|"|']/g;
  str.replace(regex, (x) => {
    switch(x) {
      case '&':
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
    }
  });
  return str;
}

convertHTML('Stuff in "quotation marks"');
