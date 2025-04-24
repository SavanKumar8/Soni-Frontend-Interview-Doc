//map

// Array.prototype.myMap = function (cb) {
//   const newArr = [];
//   for (let i = 0; i <= this.length; i++) {
//     newArr.push(cb(this[i], i, this));
//   }
//   return newArr;
// };
// [1, 2, 3].myMap((i) => console.log(i + 2));

//filter

// Array.prototype.myfilter = function (cb) {
//   const newArr = [];

//   for (let i = 0; i < this.length; i++) {
//     if (cb.call(this, this[i], i)) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };
//[1, 2, 3].myfilter((i) => console.log(i > 2));

//reduce

let arr = [1, 2, 3, 4, 5];

arr.reduce((acc, cur) => {
  //console.log(acc + cur);
  return acc + cur;
}, 0);

//flatter an array
const nested = [[1, 2], [3, 4], [5]];

nested.reduce((acc, cur) => {
  console.log(acc.concat(cur));
  return acc.concat(cur);
}, []);

//count frequency
const fruits = ["apple", "banana", "apple", "orange", "banana"];

// const count = fruits.reduce((acc, cur) => {
//   acc[cur] = (acc[cur] || 0) + 1;
//   console.log(acc);
//   return acc;
// }, {});

//without reduce
// const countFruits = (fruits) => {
//   let obj = {};

//   for (let i = 0; i < fruits.length; i++) {
//     if (obj[fruits[i]]) {
//       obj[fruits[i]] += 1;
//     } else {
//       obj[fruits[i]] = 1;
//     }
//   }
//   console.log(obj);
//   return obj;
// };

// countFruits(fruits);

//reduce pollyfill
