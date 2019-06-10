var arr=[1,2,3,2,2,4,4,5,5];
for (var i=0;i<arr.length;i++) {
    console.log(arr[i]);
    for(var j=i+1;j<arr.length;j++){
        console.log("---->"+arr[j]);
        if (arr[i] == arr[j]){
            arr.splice(j,1);
            j--;//使j自减
        }
    }
}
console.log(arr);

// var arr1 =[1,2,2,2,3,3,3,4,5,6],
//     arr2 = [];
// for(var i = 0,len = arr1.length; i< len; i++){
//     if(arr2.indexOf(arr1[i]) < 0){
//         arr2.push(arr1[i]);
//     }
// }
// document.write(arr2); // 1,2,3,4,5,6