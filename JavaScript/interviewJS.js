//1. diff. b/w not defined,undefined and null
console.log("Example of not defined: - ",a); //output: Uncaught ReferenceError: a is not defined
var a; // output: undefined
var a = null; // null:- null is assignment value, where we can assign any variable to null.
// 2. type of undefined and null
console.log(typeof null) // object
console.log(typeof undefined) // undefined

//3. Promises Example

let data = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Promises Resolved")
    }, 1000);
})
.then(data=>{
console.log(data)
})


//4. What is closure:-> A closure is an inner function that has access to the outer function's variables and parameters

const parentFuc = () =>{
    let pVariable = 10;
    const childFuc = () =>{
        console.log(pVariable)
    }
    childFuc()
}
parentFuc()

//5. What is prototype inheritance:-> Prototype inheritance in javascript is the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class

let parentP = {
    name: 'What',
    age: 10000
}
let chilC = {
    _proto_:parentP
}
console.log(chilC._proto_);

// 6. What is deep copy and shallow copy
let shallowC = {
    name: "Shallow",
    age: 102,
    add:{
        village:"Madhubani"
    }
}
//shallow Copy
let shallowNew1 = {...shallowC};
shallowNew1.name='ShallowNew1';
//shallowNew1.add.village="JanakPur"
console.log(shallowNew1)
console.log(shallowC)

//deep copy

let deepC = JSON.parse(JSON.stringify(shallowC));
deepC.name='ShallowNew1';
deepC.add.village="JanakPur"
console.log(deepC)
console.log(shallowC)

// 7. What is Set in JS:-> we are using Set for not allowing the duplicate value 

let exaM = [1,2,3,4,5,4,2,1];
let setEx = new Set(exaM)
console.log(exaM)
console.log(setEx);

// 8. What is spread and rest operator:->

// spread operator:-> It is a collection of all remaining elements (hence, the name rest, as in “the rest of the elements”) into an array.

let myName = ['Deepak','Kumar','Mandal'];
const[firstName, ...fulName] = myName;
console.log(firstName);
console.log(fulName);
// spread operator
let secondName = ['Rakesh','Mandal']
let bothName = [...myName, ...secondName]
console.log(bothName);

// 9. Write JS code to get unique elements from array without using set

let dupArr = [1,2,3,4,5,67,4,3,2];
let uniArr = []
let du = []
for(let i=0; i<dupArr.length;i++){
    if(!uniArr[dupArr[i]]){
       uniArr.push(dupArr[i])
    }
    else{
        du.push(dupArr[i])
    }

}
console.log(uniArr)

// 10. What is generator function:-> 

function* generatorFun(){
yield 10;
yield 20;
yield 30;
}
const gF = generatorFun();
console.log(gF.next().value)
console.log(gF.next().value)
console.log(gF.next().value)

// 11. What is callback hell, async and await

// callback hell:-> 
function callBackExample(){
    return function callBack1(){
        return function callBack2(){
            return function callBack3(){
                return function callBack4(){
                    return function callBack5(){

                    }
                }
            }
        }
    }
}

// promises

let prom1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promises Are Resolved:-")
    }, 2000);
})
let prom2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Promises Are Not Resolved:-")
    }, 2000);
})
// let newP = prom1.then(data=>{
//     console.log(data)
// })
// .catch(error=>{
//     console.log(error)
// })
// let newP1 = prom2.then(data=>{
//     console.log(data)
// })
// .catch(error=>{
//     console.log(error)
// })

//async await

async function asyncAwaitFuc(){
    try{
        let asyAwaiF1 = await prom1;
    console.log("Async Await Example",asyAwaiF1);
    let asyAwaiF2 = await prom2;
    console.log("Async Await Example",asyAwaiF2)
    }
    catch(error){
        console.log("Error is:- ", error)
       
    }

}
asyncAwaitFuc();

// 12. Filter, map and reduce in JS

// map:-> use to create new array of exiting array

let mapE = [1,2,3,4,5];
let doubleE = mapE.map((ele)=>{return ele*2});
console.log("Map Example:",doubleE);

//filter:-> we can apply condition on each and every element
let filtE = mapE.filter((e)=>{
    if(e%2 === 0){
        return e
    }
})
console.log("Filter Example",filtE);

// reduce:-> its reduce the array into a single value;

let reduceE = mapE.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log("Example of Reduce:",reduceE);

// 13

let input = [function() {}, new Object(), [], {},NaN, Infinity, undefined, null, 0]

// output = { function: 1, object: 4, number: 3, undefined: 1 }
let typeCount = {}
let typeCheck = (input)=>{
    for(let i=0;i<input.length;i++){
        let val = input[i];
        let vType = typeof val;
        if(vType === 'object' && vType === null){
            vType = 'null'
        }
        if(typeCount[vType]){
            typeCount[vType]++
        }
        else{
            typeCount[vType]=1
        }
    }
}
typeCheck(input)
console.log("Count type of",typeCount)

// function currying
// we can achieved currying in two ways
// (1). by bind method, (2). by closure

let currExample = function(a,b){
console.log(a*b)
}

let bindEx = currExample.bind(this,2)
bindEx(10);

let closeExam = function(a){
    return function(b){
        console.log(a*b);
    }
}
let exClose = closeExam(10);
exClose(20);

//sum(1)(2)(3)(4).................()
let sum1 = function(a){
    return function(b){
        if(b){
            return sum1(a+b)
        }
        return a;
    }
}
console.log(sum1(1)(2)(3)(40)())
// 2nd way, with arrow function
let sum = a => b => b ? sum(a+b) : a;
console.log(sum(1)(2)(3)(40)())