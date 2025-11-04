export function calculatecost(
    price: number,
    discount : number,
    quality : number):number
     {
   return price*quality*discount;
}

function sum(num1:number, num2:number):number{
    return num1+num2;
}
console.log(sum(2,2));
function sub(num1:number, num2:number){
    return num1-num2;
}
console.log(sub(4,2));

const mul=(a:number,b:number)=>a*b;                //Arrow Function
console.log(mul(2,2));
