// let a:object = {
//     b:'x'
// }                              
// a.b;                    //Property 'b' does not exist on type 'object'.ts(2339)

// let a = {
//  b: 'x'
// }                         // {b: string}
// a.b                       // string
// let b = {
//  c: {
//  d: 'f'
//  }
// } 

// let a: {b: number} = {
//  b: 12
// } 

let c: {
 firstName: string
 lastName: string
} = {
 firstName: 'john',
 lastName: 'barrowman'
}
class Person {
 constructor(
 public firstName: string, // public is shorthand for
 // this.firstName = firstName
 public lastName: string
 ) {}
}
c = new Person('matt', 'smith') 
console.log(c)