// const fruits =  new Set<string>()
// fruits.add("mango");
// console.log(fruits);

export function findUniqueElements(arr:(string|number)[]){
    const uniqueElements = new Set(arr);
    return Array.from (uniqueElements);
}
console.log(findUniqueElements([1,2,2,3,"tushar","mango","tushar"]));