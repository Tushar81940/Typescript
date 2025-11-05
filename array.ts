let arr = [1, 2, 3, 4];
let arr2:(number|string|boolean)[] = [1,"tushar","2",true];  //With union of type 
let arr3 = [1,"Tushar","2",false]                 //simple declaration
// for (let i of arr) {
//   console.log(i);
// }
for (let i of arr2) {
  console.log(i);
}

for (let i of arr3) {
  console.log(i);
}
console.log(typeof arr3[3]);

// Rest Parameters 

function addNumbers(...nums: number[]) {
  let sum = 0;
  for (let n of nums) {
    sum += n;
  }
  console.log("Sum:", sum);
}

addNumbers(1, 2, 3);      // Sum: 6
addNumbers(10, 20, 30, 5); // Sum: 65

