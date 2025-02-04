/*
1. call
2. apply
3. bind
4. forEach
5. map
6. filter
7. reduce
8. Promise.all
*/


// let obj1 = {
//     name:"Rakesh",
//     age:29,
// }
// function getDetails(jila,state){
//     console.log(`My name is ${this.name} and my age is ${this.age},I am from ${jila},${state}`)
// }
// console.log(getDetails.call(obj1,"Madhubani","Bihar"));

//1. polyfill for call
/*
Function.prototype.myCall = function(contex,...arg){
    if(typeof(this) !== 'function'){
        throw new Error("Not Callable");
 }
 contex.myFun = this;
 contex.myFun(...arg)
}
console.log(getDetails.myCall(obj1,"Madhubani","Bihar"));
*/

// console.log(getDetails.apply(obj1,["Madhubani","Bihar"]));
// 2. polyfill for apply
/*
Function.prototype.myApply = function(context,...args){
    if(typeof(this) !== "function"){
        throw new Error("Not Callable....")
    }
    if(!Array.isArray(...args)){
        throw new Error("Argument should be Array")
    }
    context.myFn = this;
    context.myFn(...args)
}
getDetails.myApply(obj1,["Madhubani","Bihar"]);
*/

// 3. polyfill for bind
/*
Function.prototype.myBind = function(context,...args){
    if(typeof this !== 'function'){
        throw new Error('this is not a function')
    }
    context.myFun = this;
    return function(...args2){
        context.myFun(...args,...args2)
    }
}
let result1 = getDetails.myBind(obj1,"Madhubani","Bihar");
result1();
*/

// let arr = [1,2,3,4,5,6,7]

// 4. polyfill for forEach
/*
Array.prototype.myForEach = function(callback){
    for(let i=0;i<=this.length;i++){
        callback(this[i])
    }
}
arr.myForEach((item)=>{
    console.log(item*3)
});
*/

// 5. polyfill for map
/*
Array.prototype.myMap= function(callback){
    let newArray = [];
    for(let i=0;i<=this.length-1;i++){
        newArray.push(callback(this[i]))
    }
    return newArray;
}
const result = arr.myMap((item)=>{
    return item*3;
})
console.log(result);
*/

// 6. polyfill for filter
/*
Array.prototype.myFilter= function(callback){
    let newArray = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            newArray.push(this[i])
        }
    }
    return newArray;
}

const result = arr.myFilter((item)=>{
    if(item%2!==0){
        return item;
    }
})
console.log(result);
*/

// 7. polyfill for reduce

/*
Array.prototype.myReduce = function(callback,iv){
    let acc = iv === undefined ? undefined : iv;
    for(let i=0;i<this.length;i++){
        if(acc !== undefined){
            acc = callback.call(undefined,acc,this[i],i)
        }
        else{
            acc = this[i]
        }
    }
    return acc;
}

const result = arr.myReduce((acc,cur)=>{
    return acc+cur
})
console.log(result);
*/

// 8. polyfill for promise.All()

let p1 = new Promise((res,rej)=>{
    res("Promise resolved 1")
});
let p2 = new Promise((res,rej)=>{
    res("Promise resolved 2")
});
let p3 = new Promise((res,rej)=>{
    res("Promise resolved 3")
});

Promise.myPromiseAll = function(promiseArr){
    let result = [];
    let count = 0;
    return new Promise((res,rej)=>{
        promiseArr.forEach((element,index) => {
            element.then((data)=>{
                result[index] = data;
                count++
                if(count === promiseArr.length){
                    res(result)
                }
            })
            .catch((data)=>rej(data))
        });
    })
}

Promise.myPromiseAll([p1,p2,p3]).then((data)=>{
    console.log(data)
})
.catch((data)=>{
    console.error(data)
})