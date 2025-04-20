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

[1, 2, 3].myfilter((i) => console.log(i > 2));
