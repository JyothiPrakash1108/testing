/*
unique vowels
*/
function isVowel(val : string) : boolean{
    var char = val[0];
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true;
    }
    return false;
}
var str = "correspondence";
var count = 0;
var freq_vowels : number[] = new Array(26).fill(0);
for(var i = 0 ; i<str.length ; i++){
    var char = str[i];
    if(isVowel(char)){
        var idx = str.charCodeAt(i) - 97;
        freq_vowels[idx] = freq_vowels[idx] +1;
    }
}
for(var i = 0;i<str.length;i++){
    var char = str[i];
    if(isVowel(char)){
        var idx = str.charCodeAt(i) - 97;
        if(freq_vowels[idx] <= 1){
            count = count +1;
        }
    }
    
}
console.log(count);