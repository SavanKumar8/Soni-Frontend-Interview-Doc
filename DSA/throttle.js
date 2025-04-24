const button = document.getElementById("clickButton");

//using throttle

//case 1
function throttle(fn, delay) {
  let shouldCall = true;

  return function (...args) {
    if (!shouldCall) return;
    fn(...args);
    shouldCall = false;
    setTimeout(() => {
      shouldCall = true;
    }, delay);
  };
}

// function test() {
//   console.log(arguments);
// }

// const test1 = () => {
//   console.log(arguments);
// };
// test1();

// case 2

// function throttle2(fn, delay) {
//   let lastCall = 0;

//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall > delay) {
//       lastCall = now;
//       fn(...args);
//     }
//   };
// }
count = 0;
const clickMeButton = () => {
  console.log(" button clicked...", count++);
};

button.addEventListener("click", throttle(clickMeButton, 2000));

function callThis(city, state) {
  console.log(`${this.name},${city}, ${state}`);
}
//callThis.call({ name: "savan" }, ["pune", "MH"]);
//callThis.apply({ name: "savan" }, ["pune", "MH"]);

//pollyfill of bind - it return the function which we can call later

Function.prototype.myBind = function (context, ...args1) {
  let functionCall = this;
  return function (...args2) {
    console.log(functionCall.apply(context, [...args1, ...args2]));
  };
};

const result = callThis.myBind({ name: "savan" }, "Rehlu", "Shahpur - HP");
result();
