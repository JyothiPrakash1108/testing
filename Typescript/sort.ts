/*
 sort the array
 */
 var num : number[] = [8,2,5,1,4,9,7,6,3];
 for(var i = 0; i < num.length-1 ;i++){
    for(var j = 0 ; j < num.length-i ; j++){
        if(num[j] > num[j+1]){
            var temp = num[j];
            num[j] = num[j+1];
            num[j+1] = temp;
        }
    }
 }
 console.log(num);