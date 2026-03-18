/*
remove  alphabets that are repeating 
*/
var str : string = "correspondence";
var freq : number[] = new Array(26).fill(0);
var ans : string = "";
for(var i = 0 ; i<str.length;i++){
    var idx = str.charCodeAt(i) - 97;
    freq[idx] = freq[idx] +1;
}
for(var i = 0 ; i <str.length ; i++ ){
    var idx = str.charCodeAt(i) - 97;
    if(freq[idx] == 1){
        ans = ans.concat(str[i]);
    }
}
console.log(ans);