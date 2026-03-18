import { validateHeaderName } from "http";

let names : string[] = ["m","j","p"];
for(let i = 0 ; i<names.length ; i++){
    console.log(`name at ${i} is ${names[i]}`);
}
names[10] = "jp";
for(let i = 0 ; i<names.length ; i++){
    console.log(`name at ${i} is ${names[i]}`);
}


/*
*/

let numArray : number[] = [1,2,3,4,5,67,8,9];
console.log(`Arrays : ${numArray}`);
let mappedArray = numArray.map(
    (value) => value * value
);
console.log(`mapped array : ${mappedArray}`);
let sum = numArray.reduce(
    (sum,curVal) => sum+curVal,0
);
console.log(`Reduce : ${sum}`);
let filteredArray = numArray.filter(
    (value) => value % 2 == 0
);