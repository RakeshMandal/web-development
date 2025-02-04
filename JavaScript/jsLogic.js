
//finding unique and duplicate number from an array
const mixedArr = [1,2,10,3,22,10,3,0]
const uniqArr = []
const dpArr = []
//1st way (We can use Set() method)
const usingSetforUnique = new Set(mixedArr)
console.log(usingSetforUnique)
//2nd way
for(let item of mixedArr){
    if(!uniqArr.includes(item)){
        uniqArr.push(item)
        
    }
    else{
        dpArr.push(item)
    }
}
console.log(`Unique data: ${uniqArr}`)
console.log("Duplicate element:" + dpArr)
let min = mixedArr[0]
let max = mixedArr[0]
for(let i=0;i<mixedArr.length;i++){
    if(mixedArr[i]<min){
        min = mixedArr[i]
    }
    else if(mixedArr[i]>max){
        max = mixedArr[i]
    }
}
console.log(`minimum Value is:${min} and Maximum Value is:${max}`)

const booleanArray = [1, 0, 1, 1, 0, 1, 0, 0,0,0,1];
let currentDist=0
let maxDist = 0
for(let i=0;i<booleanArray.length;i++){
    if(booleanArray[i]===1){
        currentDist = 0
    }
    else{
        currentDist++;
        maxDist = Math.max(currentDist,maxDist)
    }
}
console.log(maxDist)

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P1 Resolved'), 1000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P2 Resolved'), 2000);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P3 Resolved'), 3000);
})

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('P4 Resolved'), 4000);
})

Promise.myAll = (promises) =>{
    
    return new Promise((resolve,reject)=>{
        let resolvedPromises = [];
        let count = 0;
        promises.forEach((promise,i)=>promise.then((data)=>{
            resolvedPromises[i] = data;
            count++;
            if(count===promises.length){
                resolve(resolvedPromises);
            }
        })
        .catch(reject)
        )
    })
    
}

const result = Promise.all([p1, p2, p3, p4])
result.then((data)=>console.log(data))

Promise.myAll([p1, p2, p3, p4]).then((data) => console.log('My Data is', data)).catch((err) => console.log('My REJECT data', err))

const str1 = 'hellobhai';
const str1Arr = str1.split('')
const charCount = {}
let count = 0
for(let char of str1Arr){
    if(charCount[char]){
        charCount[char]++
    }    
    else{
        charCount[char] = 1
    }
}
console.log(charCount)

const arr1 = [1,1,0,0,0,1,0,0,1]
let curDist = 0
let maxDist2 = 0
for(let item of arr1){
    if(item === 1){
        curDist = 0
    }
    else{
        curDist++
        maxDist2 = Math.max(curDist,maxDist2)
    }
}
console.log('Maximum Distance of 1 is: ', maxDist2)


let input = 'india is my country';
function reverseStr(input){
  let output=input.split(' ');
 const reversedWords = output.map((item)=>{
  const newa = item.split('').reverse().join('')
  return newa;
 })
 return reversedWords
}

let out = reverseStr(input)
console.log(out.join(' '))
const s1 = 'heh'
const s2 = s1.split('').reverse().join('')
console.log(s1===s2)
const arr =[1,2,3,4,5,6,7]
console.log(arr.slice(4,arr.length).concat(arr.slice(0,4)))



async function foo(){
    return "Hello bolo be"
}
async function bolo(){
    const data = await foo()
    console.log(data)
}
bolo()

// Two sum
const nums = [3,7,20,21,4,6,40,100]
const target = 9

const findSum = (nums,target)=>{
    let findIndex = []
    for(let item of nums){
        let diff = target-item;
        if(findIndex[item] !== undefined){
            return `[${diff},${item}]`
        }
        else{
            findIndex[diff] = item
        }
    }
}

const result2 = findSum(nums,target)
console.log(result2)

// // Input: nums = [1,2,1,3,5,6,4]
// // Output: 5

//1st way
let indexfind=0
for(let item of nums){
    if(indexfind<item){
        indexfind = item
    }
}
console.log('Max Value is:', indexfind+ " and Index is " +nums.indexOf(indexfind))

// 2nd ways

let max1=0
for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        max1 = nums.indexOf(nums[i])
    }
    
}
console.log('Max Value',max1)

// 3rd ways

const maxim =Math.max(...nums)
console.log(nums.indexOf(maxim))

function abc(){
    console.log("abc")
}
const ac = new abc()
console.log(ac)
const datas = {
    "nam":"Rakesh",
    "kam":"Padhna"
}
const {nam,kam} = datas
console.log(nam,kam)

const num1 = nums.map((itm)=>{
    return itm
})
const numc1 = num1.pop(2)
const num2 = nums.filter((itm)=>{
    if(itm%2===0){
        return itm
    }
})
const numc2 = num2.pop(2)
const num3=JSON.parse(JSON.stringify(nums))
const numc3 = num3.pop(3)
console.log("num3",num3)
console.log(nums)
console.log(num1)
console.log(num2)
class Animal{
    constructor(name){
        this.name = name;
    }
    
    speak(){
        console.log(this.name + " makes sound")
    }
}
const cat = new Animal("cat")
cat.speak()
const myList = [1, 2, 3, 4, 2, 5, 6, 2, 7];
const targetElement = 2;
const matched = []

function findOc(myList,targetElement){
    let firstIn = -1
    for(let i=0;i<myList.length;i++){
    if(myList[i] === targetElement){
            matched.push(myList.lastIndexOf(targetElement))
    }
}
return matched;
}
console.log(findOc(myList,targetElement))
console.log(myList.lastIndexOf(2))
console.log(matched)
{
    let a =20
    {
        let a =20
        console.log(a)
    }
    console.log(a)
}
console.log(a)

for(var i =0;i<4;i++){
    function clos(i){
        setTimeout(()=>{
        console.log(i)
    },i*1000)
        
    }
    clos(i)
}
const a11 = [1,2,3,4,5,6]
Array.prototype.myMap = function (callback){
    let rsultArr = []
    for(let i=0; i<this.length;i++){
        rsultArr.push(callback(this[i]))
    }
    return rsultArr
}
const r15 = a11.myMap((item)=>{
    return item*2
})
console.log(r15)
const jrntr = ['a','e','i','o','u','n']
//output 2nd element u
let length = jrntr.length
console.log(jrntr[length-2])
console.log(3+"3")
console.log(3-"3")
console.log(typeof(String))

/*** Polyfills .....**/
// 1. ForEach
Array.prototype.myForEach = function(callback){
for(let i=0;i<this.length;i++){
    callback(this[i])
}    
}
const arr =[1,2,3,4,5,6]
arr.myForEach((dta)=>{
    console.log(dta*2)
})

// 2 Map()
Array.prototype.myMap = function(callback){
    let nayaArray = []
    for(let i=0;i<this.length;i++){
        nayaArray.push(callback(this[i]))
    }
    return nayaArray;
}

const arr = [1,2,3,4,5]
const result = arr.myMap((item)=>{
    return item*3
})
console.log(result)

// 3. Filter

Array.prototype.meraFilter = function(callback){
    let nayaArray = []
    for(let i=0;i<this.length;i++){
        if(callback(this[i])){
            nayaArray.push(this[i])
        }
    }
    return nayaArray
}

const arr = [1,2,3,4,5,6]
const result = arr.meraFilter((item)=>{
    return item>3
})
console.log(result)

// 4. Reduce

Array.prototype.myReduce = function(cb,iv){
    let acc = iv === undefined ? undefined : iv;
    for(let i =0;i<this.length;i++){
        if(acc !== undefined){
            acc = cb.call(undefined,acc,this[i],i,this)
        }
        else{
            acc = this[i]
        }
    }
    return acc;
}
const arr = [1,2,3,4,5]
const result = arr.myReduce((acc,cur)=>{
  return acc+cur
})
console.log(result)

Call()
const obj = {
    fName : 'Rakesh',
    lName : 'Kumar'
}
function getName(jila){
    console.log(`First name is : ${this.fName} and last name is: ${this.lName} from ${jila}`)
}
getName.call(obj,"Madhubani","Biha","India")

//polyfill call()
Function.prototype.myCall = function(context,...args){
    if(typeof(this) !== "function"){
        throw new Error("Not Callable....")
    }
    context.myFn = this;
    context.myFn(...args)
}
getName.myCall(obj,"Madhubani")

//allpy()

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
getName.myApply(obj,["Madhubani"])

//bind()

Function.prototype.myBind = function(context,...args){
    if(typeof(this) !== "function"){
        throw new Error("Not Callable....")
    }
    context.myFn = this;
  return function(...args1){
        context.myFn(...args, ...args1)
  }
}
let result = getName.myBind(obj)
result("Madhubani")

const p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("Promise1")
    },200)
});
const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("Promise2")
    },100)
});
const p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("Promise3")
    },300)
});

Promis.all()
Promise.myPromiseAll = (promiseArr) => {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedPromises = 0;
        promiseArr.forEach((promise, index) => {
            promise
                .then((data) => {
                    results[index] = data;
                    completedPromises++;

                    if (completedPromises === promiseArr.length) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
};
 Promise.myPromiseAll([p1,p2,p3]).then((data)=>
    console.log(data))
    .catch(err=>console.log(err))


//Promise.race():-it,s not depends on the resolve or reject what ever first will come it will return that one

Promise.myRace =(promises)=>{
    return new Promise((res,rej)=>{
        promises.forEach((promise)=>{
            promise.then(data=>res(data))
            .catch(err=>rej(err))
        })
    })
    
}
 Promise.myRace([p1,p2,p3]).then((data)=>
    console.log(data))
    .catch(err=>console.log(err))

// Canclable Promise
function casilablePromise(promise){
    let isCanceled = false;
  const promisObject =  new Promise((res,rej)=>{
      promise.then((data)=>{
          if(!isCanceled){
              res(data)
          }
      }).catch(err=>{
          if(!isCanceled){
              rej(err)
          } 
      })
        
    })
    promisObject.cancel = function(){
        isCanceled=true;
    }
    return promisObject;
}

const result = casilablePromise(p3)
result.then(console.log)
setTimeout(()=>{
  result.cancel(console.log) 
},299)

allsetteled

Promise.myPromiseAllSetteled = (promeArr)=>{
    const promises = promeArr.map((promise)=>{
        return promise.then((data)=>{
            return{
            status:"Resolved",
            value:data
        }
        })
        .catch((error)=>{
            return{
                reason:error,
                status:"Rejected"
            }
        })
    })
    return Promise.all(promises)
}
Promise.myPromiseAllSetteled([p1,p2,p3]).then(data=>console.log(data))
.catch(error=>console.log(error))

any()

Promise.myPromiseAny = (proArray) =>{
    let errors = [];
    return new Promise((res,rej)=>{
        proArray.forEach((promise,index)=>{
            promise.then((data)=>{
                res(data)
            })
            .catch(error=>{
                errors[index] = error;
                if(index === proArray.length - 1){
                    rej(new AggregateError(errors,"All promises are Rejected..."))
                }
            })
        })
    })
}

Promise.myPromiseAny([p1,p2,p3]).then(data=>console.log(data))
.catch(err=>console.log(err))

