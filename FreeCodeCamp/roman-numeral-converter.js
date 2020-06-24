// TODO: REFACTOR!!!!
function convertToRoman(num) {
  let romans = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  };
  let newArr = [];
  let th = 0, h = 0, te = 0, s = 0;
  // get thousand
  if (num >= 1000) {
    th = Math.floor(num / 1000);
    if (th > 0) {
      num -= th * 1000;
      for (let i = 0; i < th; i++) {
        newArr.push(romans[1000]);
      }
    };
  }
  // get hundread
  if (num >= 100) {
    h = Math.floor(num / 100);
    if (h > 0) {
      switch(h) {
        case 1:
        case 2:
        case 3:
          for (let i = 0; i < h; i++) {
            newArr.push(romans[100]);
          }
        break;
        case 4:
         newArr.push(romans[100], romans[500]);
        break;
        case 5:
          newArr.push(romans[500]);
        break;
        case 6:
        case 7:
        case 8:
          newArr.push(romans[500]);
          for (let i = 5; i < h; i++) {
            newArr.push(romans[100]);
          }
        break;
        case 9:
            newArr.push(romans[100], romans[1000]);
        break;
      }
      num -= h * 100;
    };
  }
  // get ten
  if (num >= 10) {
    te = Math.floor(num / 10);
    if (te > 0) {
      switch(te) {
        case 1:
        case 2:
        case 3:
          for (let i = 0; i < te; i++) {
            newArr.push(romans[10]);
          }
        break;
        case 4:
         newArr.push(romans[10], romans[50]);
        break;
        case 5:
          newArr.push(romans[50]);
        break;
        case 6:
        case 7:
        case 8:
          newArr.push(romans[50]);
          for (let i = 5; i < te; i++) {
            newArr.push(romans[10]);
          }
        break;
        case 9:
            newArr.push(romans[10], romans[100]);
        break;
      }
      num -= te * 10;
    };
  }
  // get single
  s = num;
  if (s > 0) {
    switch(s) {
      case 1:
      case 2:
      case 3:
        for (let i = 0; i < s; i++) {
          newArr.push(romans[1]);
        }
      break;
      case 4:
        newArr.push(romans[1], romans[5]);
      break;
      case 5:
        newArr.push(romans[5]);
      break;
      case 6:
      case 7:
      case 8:
        newArr.push(romans[5]);
        for (let i = 5; i < s; i++) {
          newArr.push(romans[1]);
        }
      break;
      case 9:
          newArr.push(romans[1], romans[10]);
      break;
    }
  }
  let newStr = newArr.join("");
  return newStr;
}

convertToRoman(2);
convertToRoman(3999);
