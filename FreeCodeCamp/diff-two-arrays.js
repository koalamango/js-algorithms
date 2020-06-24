function diffArray(arr1, arr2) {
  let newArr = [];
  // merge 2 arrays
  let tmpArr = arr1.concat(arr2);
  // loop through and filter
  for (let i = 0; i < tmpArr.length; i++) {
    let result = tmpArr.filter((x) => x === tmpArr[i]).length;
    // if there's only one
    if (result === 1) {
      newArr.push(tmpArr[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
