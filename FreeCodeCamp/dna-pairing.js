function pairElement(str) {
  let arr = str.toString().split("");
  let newArr = [];
  arr.map( x => {
    switch(x) {
      case 'A':
        newArr.push(["A", "T"]);
      break;
      case 'T':
        newArr.push(["T", "A"]);
      break;
      case 'C':
        newArr.push(["C", "G"]);
      break;
      case 'G':
        newArr.push(["G", "C"]);
      break;
    }
  });
  return newArr;
}

pairElement("ATGCG");

// ====
// Better solution
// ====

function pairElement2(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

pairElement2("GCG");
