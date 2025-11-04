function greet(name:string, title?:string){
if(title){
    return `Good Morning ${title} ${name}`;
}
    return `Hello${name}`;
}

console.log(greet("Tushar","Kumar"));


function sum(name:string,role:string="warrior"){
    return `${name} is a ${role}`
}
console.log(sum("Tushar","Superman"));
