// let a = 1+2;
// let b = a+3;
// let c = {
//     apple:a,
//     banana:b
// }
// let d = c.apple * 4;
// console.log(d);

function squareOf(n:number){
    return n*n;
}

console.log(squareOf(3));

// let a:any = 666;
// let b:any = ['tushar'];             //use of Any it doesn't throw error because of any its good to avoid using any 
// let c=a+b;
// console.log(c);

let a: unknown = 30 // unknown
let b = a === 123 // boolean
// let c = a + 10 // Error TS2571: Object is of type 'unknown'.  
if (typeof a === 'number') {
 let d = a + 10 // number
 console.log(d);
}

let f:'john' = "john";
console.log(f);
