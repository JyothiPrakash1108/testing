/*
remove duplicate vowels
*/
function isChar(val : string) : boolean{
    var char = val[0];
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true;
    }
    return false;
}
var str = "correspondence";
var ans = "";
var freq_vowels : number[] = new Array(26).fill(0);
for(var i = 0 ; i<str.length ; i++){
    var char = str[i];
    if(isChar(char)){
        var idx = str.charCodeAt(i) - 97;
        freq_vowels[idx] = freq_vowels[idx] +1;
    }
}
for(var i = 0;i<str.length;i++){
    var char = str[i];
    if(isChar(char)){
        var idx = str.charCodeAt(i) - 97;
        if(freq_vowels[idx] > 1){
            continue;
        }
        ans = ans.concat(str[i]);
    }
    else{
        ans = ans.concat(str[i]);
    }
}
console.log(ans);