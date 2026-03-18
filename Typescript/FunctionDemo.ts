function addNumbers(){
    let n1 = 10;
    let n2 = 2;
    console.log(`addition of numbers is ${n1+n2}`);
}

function subtractNumbers(num1 : number , num2 : number){
    console.log(`subtraction of numbers is ${num1 - num2}`);
}
function multiplyNumbers(num1 : number,num2 : number) : number{
    return num1*num2;
}
function personInfo(name : string , city? : string , age?:number){
    if(age){
        console.log(`name : ${name} , city : ${city} , age : ${age}`);
    }
    else{
        console.log(`name : ${name} , city : ${city} `);
    }
}
function overLoadingDemo(arg1 : number , arg2 : number) : number;

function overLoadingDemo(arg1 : string , arg2 : string) : string;

function overLoadingDemo(arg1 : any , arg2 : any ) : any{
    if(typeof arg1 === "number" && typeof arg2 === "number"){
        overLoadingDemo(arg1,arg2);
    }
}


addNumbers();
subtractNumbers(10,2);
console.log(`multiplication of numbers if ${multiplyNumbers(10,2)}`);
personInfo('jyo','HYD',22);
personInfo('PJ','BNG');



const mult = (num1 : number , num2 : number) : void =>{
    console.log(`multiplication is ${num1* num2}`);
}
mult(10,10);