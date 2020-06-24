function dropElements(arr, func) {
  let newArr = arr.slice();
  let flag = 0;
  for (let i = 0; i < newArr.length; i++) {

    // Find first true value
    if(func(newArr[i])) {
      newArr.splice(0, i);
      break;
    } else {
      flag++;
    }
  }
  // If not any true value
  if(flag === arr.length) {
    newArr = [];
  }
  return newArr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;});
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
