// we need to get 2, 3, 5 but 2 at 2 times, 3 at 1 times, 5 at 3 times

function randomValue() {
  arr = [2, 2, 3, 5, 5, 5];
  let randomindex = Math.floor(Math.random() * arr.length);
  console.log(arr[randomindex]);
}
randomValue();
