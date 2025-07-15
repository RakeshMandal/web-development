let obj = {
    name: "Rakesh",
    whatIsDoing: "Searching Job",
    need: {
        knowledge: "Knowledge",
        money: "Money",
        trip: "Trips"
    }
}

function getDetails(priority) {
    console.log(`My name is ${this.name} and ${this.whatIsDoing} for ${this.need.knowledge}, ${this.need.money} and ${this.need.trip} in ${priority}`);
}

// 1. call Polyfill
/*
Function.prototype.myCall=function(context,...args){
    if(typeof this !== "function"){
        throw Error("It is not Callable...OK!")
    }
    context.myFun = this
    context.myFun(...args)

}
getDetails.myCall(obj,"Immediate")
*/

// 2. apply Polyfill
/*
Function.prototype.myApply = function(context,...args){
    if(typeof this !== 'function'){
        throw Error("This is not a function... OK!")
    }
    if(!Array.isArray(...args)){
        throw Error("Second arguments should be an Array... OK")
    }
    context.myFun = this
    context.myFun(...args)

}
getDetails.myApply(obj,["Immediate"]);
*/

// 3. bind Polyfill
/*
Function.prototype.myBind = function(context,...args){
    if(typeof this !== 'function'){
        throw Error("This is not a function");
    }
    context.myFun = this
    return function(...args2){
        context.myFun(...args,...args2)
    }

}
let binDaata = getDetails.myBind(obj,"Immediate")
binDaata();
*/

// 4. map Polyfill

let arr = [1, 2, 3, 4, 10, 5, 30];
/*
Array.prototype.myMap = function(cb){
    let result=[]
    for(let i=0;i<=this.length;i++){
        result.push(cb(this[i]))
    }
    return result
}

let newArr = arr.myMap(item=> item*3 )
console.log(newArr)
*/

// 5. filter Polyfill
/*
Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i])){
            result.push(this[i])
        }
    }
    return result
}

let evenNum = arr.myFilter(item=>item%2 !== 0);
console.log(evenNum)
*/

// 5. reduce Polyfill

/*
Array.prototype.myReduce = function(cb,iv){
    let acc = iv === undefined ? undefined : iv;
    for(let i=0;i<arr.length;i++){
        if(acc !== undefined){
            acc = cb.call(undefined,acc,this[i],i)
        }
        else{
            acc = this[i]
        }
    }
    return acc
}

let addAll = arr.myReduce((acc,cur)=>acc+cur)
console.log(addAll);
*/

// 6. Promise.all() Polyfill

let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 1 is Resolve... OK!")
    }, 100);
});
let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 2 is Resolved... OK!")
    }, 300);
});
let p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise 3 is Resolve... OK!")
    }, 200);
});

Promise.myAll = (arr) => {
    let result = []
    let completedPromise = 0;
    return new Promise((resolve, reject) => {
        arr.forEach((promise, index) => {
            promise.then((data) => {
                result[index] = data
                completedPromise++
                if (completedPromise === arr.length) {
                    resolve(result)
                }
            })
                .catch(err => reject(err))
        })
    })

}

Promise.myAll([p1, p2, p3])
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Polyfill for JSON.stringify


