function truthCheck(collection, pre) {
  let flag = true;
  Object.keys(collection).map((x) => {
    if (!collection[x].hasOwnProperty(pre) ||
       collection[x][pre] === null ||
       !collection[x][pre]) {
          flag = false;
    }
  });
  return flag;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
