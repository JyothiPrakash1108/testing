let time : string = "9:30";
let hrSec : string[] = time.split(":");

let hr : number = Number(hrSec[0]);
let min : number = Number(hrSec[1]);

if(hr <= 9 && min <=30){
    if( hr == 9 && min == 30){
        console.log("ON TIME");
    }
    else{
        console.log("EARLY");
    }
}
else if( hr >= 9){
    console.log("LATE");
}