const arr = [[[[0]], [1]], [[[2], [3]]], [[4], [5]]];

function flatterArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatterArray(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;
}
flatterArray(arr);
