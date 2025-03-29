//arr = [2, 2, 2, 2, 2];
// Output: [2]
// Explanation: All the elements are 2, So only keep one instance of 2.

// Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
// Output: [1, 2, 3, 4, 5]

// Input: arr[] = [1, 2, 3]
// Output: [1, 2, 3]
// Explanation : No change as all elements are distinct.

arr = [2, 2, 2, 2, 2];

function usingSet(arr) {
  console.log(new Set([...arr]));
}

//usingSet(arr);

function usingFilter(arr) {
  console.log(arr.filter((item, index) => index === arr.indexOf(item)));
}

//usingFilter(arr);

function usingForEach() {
  let newArr = [];

  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });
  console.log(newArr);
}
usingForEach(arr);
