//addInfite(2)(3)(5)()

function addInfite(a) {
  return function (b) {
    if (b) return addInfite(a + b);
    return a;
  };
}

const add = addInfite(2)(3)(5)(10)();
console.log(add);
