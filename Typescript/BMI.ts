let weight : number = 40;
let height : number = 1.64;

let bmi = weight / (height*height);

if(bmi < 18.5){
    console.log("UNDERWEIGHT");
}
else if( bmi > 18.5 && bmi <= 25){
    console.log("NORMAL WEIGHT");
}
else if( bmi >= 25 && bmi < 30){
    console.log("OVER WEIGHT");
}
else if( bmi > 30){
    console.log("OBESITY");
}