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
