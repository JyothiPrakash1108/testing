/*
 reverse a string 
*/
console.log(`-----Reverse a string-----`);
var str : string = "TypeScript";
let ansStr : string = "";
for(let i = str.length ; i>= 0 ; i--){
    ansStr= ansStr + str.charAt(i);
}
console.log(`Reversed string : ${ansStr}`);
