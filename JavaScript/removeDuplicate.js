//1st 

let dupArray = [1,2,3,410,6,10,3,4,4];
let uniqueArray = new Set(dupArray);
console.log("Duplicate: ", dupArray)
console.log("Unique Array",[...uniqueArray]);
//sort this array
console.log("unique with sorted Array",[...uniqueArray].sort((a,b)=>a-b));

// 2nd way 

let duplicateA = [];
let uniqueA =[];
for(let ch of dupArray){
    if(!uniqueA.includes(ch)){
        uniqueA.push(ch)
    }
    else{
        duplicateA.push(ch);
    }
}
console.log("Result: ",uniqueA)
console.log("Dupli Array: ",duplicateA)

//if there are duplicate value more than two ( In case Interviewer will ask then or for additional knowledge)
let dupliArr = [1,2,3,4,5,7,8,1,1,1,2,2,2,4,4,4]
//actual o/p according to upper code [1, 1, 1, 2, 2, 2, 4, 4, 4]
//expected o/p [1,2,4]
let dupresult = [];
let uniqresult = [];
for(let arr of dupliArr){
    if(!uniqresult.includes(arr)){
        uniqresult.push(arr)
    }
    else if(!dupresult.includes(arr)){
        dupresult.push(arr)
    }
}
console.log("unique Array: ", uniqresult);
console.log(" Duplicate unique Array", dupresult)