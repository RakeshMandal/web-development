//1. debounce

let counter = 0;
function getData(){
    console.log("Fetching Data...", counter++);
}
function doSomeMagic(fun,delay){
    let timer;
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fun.apply(this,arguments)
        },delay)
    }

}


const betterFunction = doSomeMagic(getData,300);

// event bubbling
// document.querySelector('#grandparent')
// .addEventListener('click',()=>{
//     console.log("GrandParent Clicked");
    
// });
// document.querySelector('#parent')
// .addEventListener('click',()=>{
//     console.log("Parent Clicked");
    
// });
// document.querySelector('#child')
// .addEventListener('click',()=>{
//     console.log("Child Clicked");
    
// });

// event capturing (2nd argument we have to make true)
// document.querySelector('#grandparent')
// .addEventListener('click',()=>{
//     console.log("GrandParent Clicked");
    
// },true);
// document.querySelector('#parent')
// .addEventListener('click',()=>{
//     console.log("Parent Clicked");
    
// },true);
// document.querySelector('#child')
// .addEventListener('click',()=>{
//     console.log("Child Clicked");
    
// },true);

// when we have to stop the Propagation we have to use e.stopPropagation();
// document.querySelector('#grandparent')
// .addEventListener('click',()=>{
//     console.log("GrandParent Clicked");
    
// },true);
// document.querySelector('#parent')
// .addEventListener('click',(e)=>{
//     console.log("Parent Clicked");
// e.stopPropagation();
    
// },true);
// document.querySelector('#child')
// .addEventListener('click',()=>{
//     console.log("Child Clicked");
    
// },true);

// Event Deligation
/** 1. redirecting to the item page 
document.querySelector('#category').addEventListener('click',(e)=>{
console.log(e.target.id)
if(e.target.tagName="LI"){
window.location.href='/'+e.target.id;
}
});

*/
/** using event deligation for upper case
 */

// document.querySelector('#form').addEventListener('click',(e)=>{
//     console.log(e)
//     if(e.target.dataset.uppercase != undefined){
//         e.target.value = e.target.value.toUpperCase();
//     }
// })

// shallow copy
// const obj1 = {
//     name:"Rakesh",
//     age:28,
//     address:{
//         city:"Madhubani",
//         state:"Bihar"
//     }
// }
// const shallowCopy1 = Object.assign(obj1)
// const shallowCopy = {...obj1}
// shallowCopy1.address.city="Harlakhi"
// console.log(shallowCopy1)
// console.log(shallowCopy)
// console.log(obj1)

// deep copy
// const deepCopy1 = JSON.parse(JSON.stringify(obj1))
// deepCopy1.address.city="Kanharpatti";
// console.log(deepCopy1);
// using loaDash library 
//const deepCopy = _.cloneDeep(obj1);

// using custome recursive function

// function customeDeepCopy(obj){
//     if(obj === null || typeof obj !== "object"){
//         return obj
//     }
//     const copy = Array.isArray(obj) ? [] : {}
//     for(let key in obj){
//         copy[key] = customeDeepCopy(obj[key])
//     }
//     return copy
// }
// let result = customeDeepCopy(obj1);
// result.address.city="Bangalore"
// console.log(result)

// map
// const arr1 = [1,2,3,4,5,6,7];
// const doubleData = arr1.map((item)=>(2*item))
// console.log(doubleData)
// polyfill for map
// Array.prototype.myMap = function(callback){
//     let result = [];
//     for(let i=0;i<=this.length-1;i++){
//         result.push(callback(this[i]))
//     }
//     return result;
// }
// const tripleData = arr1.myMap((item)=>{
//     return item*4
// })
// console.log(tripleData)

// filter
// const evenNum = arr1.filter((item)=>{
//     if(item%2===0){
//         return item
//     }
// })
// console.log(evenNum);
// polyfill of filter
// Array.prototype.myFilter=function(callback){
//     let result = [];
//     for(let i=0;i<=this.length-1;i++){
//         if(callback(this[i])){
//             result.push(this[i])
//         }
//     }
//     return result;
// }
// const oddNum = arr1.myFilter((item)=>{
//     if(item%2 !== 0){
//         return item
//     }
// })
// console.log(oddNum);

// reduce
// let arrSum = arr1.reduce((acc,cur)=>{
//     return acc+cur;
// })
// console.log(arrSum);
// reduce pollyfill
// Array.prototype.myReduce=function(callback,iv){
//     let acc = iv === undefined ? undefined : iv;
//     for(let i=0;i<=this.length-1;i++){
//         if(acc !== undefined){
//             acc = callback.call(undefined,acc,this[i])
//         }
//         else{
//             acc = this[i]
//         }
//     }
//     return acc;
// }
// let arrMul = arr1.myReduce((acc,cur)=>{
//     return acc*cur
// })
// console.log(arrMul)

///// interview Questions and Answers /////

// 1. Write a program to reverse a string without using the reverse() method.
/*
let str = 'helllo how are you sir';
let revStr = '';
for(let i=str.length-1;i>=0;i--){
    revStr+=str[i]
}
console.log(revStr);*/

// 2. What is a generator function in JavaScript? How does it work?
// :- A generator function in JavaScript is a special type of function that can be paused and resumed during execution. 
// - A generator function is declared using the function* syntax.
// - Inside the function body, the yield keyword is used to pause execution and return a value.
/*
function* generatorFun(){
    yield 1;
    yield 2;
    yield 3;
}
const numberGe = generatorFun()
console.log(numberGe.next());
*/

// 3. Explain closures in JavaScript
// :- Clouser in javascript is very powerfull concept. It contains it's scope and it's lexical scopes that means it's parents scopes.
// -- it's return even after function are executed
// -- 1. uses for encapsulation. 2. uses for make data private
// -- 1. memory leak (disadvantage)

//1. 
/*
function outer(){
    let myName = "Rakesh";
    function inner(){
        console.log(myName)
    }
    return inner
}
const result = outer()
result();
*/

//2. problem with var\
/*
for(var i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
   
}
    */

// 2. solve this proble with the help of clouser
/*
for(var i=1;i<=5;i++){
    function close(i){
     setTimeout(()=>{
         console.log(i)
     },i*1000)
    }
    close(i)
 }
*/
 // 3. solve this problem using let instead of var

 /*
 for(let i=1;i<=5;i++){
     setTimeout(()=>{
         console.log(i)
     },i*1000);
 }
     */

 // 4. What are higher-order components in React?
 // :- A Higher-Order Component (HOC) is an advanced React pattern for reusing component logic.
 //  It is a function that takes a component as its input and returns a new enhanced component.