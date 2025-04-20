const people = [
  { name: "Savan", age: 31 },
  { name: "Anshul", age: 24 },
  { name: "Sagar", age: 34 },
  { name: "Addi", age: 16 },
];

//sort by age without using sor function

function sortByAge(people) {
  let newArr = [...people];
  let temp;
  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 0; j < newArr.length - i - 1; j++) {
      if (newArr[j].age > newArr[j + 1].age) {
        temp = newArr[j];
        newArr[j] = newArr[j + 1];
        newArr[j + 1] = temp;
      }
    }
  }
  console.log(newArr);
}

sortByAge(people);
