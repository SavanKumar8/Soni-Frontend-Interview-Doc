var arr = [1, 2, 3, 4, 2, 2];

//solution 1

function usingSet(arr) {
  console.log(new Set([...arr]));
}
//usingSet(arr);

//solution 2

function usingFilter(arr) {
  console.log(arr.filter((item, index) => index === arr.indexOf(item)));
}
//usingFilter(arr);

//soltuion 3

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

//soltuion 4
//this is to show on screen
function showName() {
  return "<h1>Remove duplicate array</h1>";
}
// console.log(arr);
document.body.innerHTML = showName();
