// sort() method
let unsArr = [5,3,4,1,10,200,11,34];
let sortedArr = unsArr.sort((a,b)=>{
    return a-b;
})
console.log(sortedArr)

//bubble sort
for(let i =0;i<unsArr.length;i++){
    for(j=0;j<unsArr.length;j++){
        if(unsArr[j]>unsArr[j+1]){
            let temp;
            temp=unsArr[j];
            unsArr[j]=unsArr[j+1];
            unsArr[j+1]=temp;
        }
    }
}
console.log("Sorted Array",unsArr);
