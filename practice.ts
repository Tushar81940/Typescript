let n:number = 1;
let m:number = 2;
function sum2(n:number,m:number){
    return n+m;
}

// console.log(sum2(3,4));


let array1 = [1,2,3,4,5];
let array2:(number|string|boolean)[] = [1,"tushar","2",true];  //With union of type 
let array3 = [1,"2","tushar",false];
// Print each element directly using for...of
for(let item of array2){
    console.log(item);
}   