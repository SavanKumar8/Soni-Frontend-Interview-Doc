count = 0;
function getData() {
  console.log("getting data...", count++);
}

function makeDebounce(fn, delay) {
  let time;

  return () => {
    clearTimeout(time);
    let context = this;
    let args = arguments;
    time = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
const debounceData = makeDebounce(getData, 2000);
