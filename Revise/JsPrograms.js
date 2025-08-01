// 1. Count the character from a string
/*
let str = "Hello How Are You Sir?";
function countChar(str){
    let count={}
    for(let char of str){
       count[char] = count[char] ? count[char]+1 : 1;
        // if(count[char]){
        //     count[char]++
        // }
        // else{
        //     count[char]=1
        // }
    }
    return count

}
let result = countChar(str)
console.log(result);
*/


/*
// find unique element fron an array
const arr = [1, 10, 4, 2, 5, 2, 4];
const unique = arr.filter((item, index, array) => {
  return array.indexOf(item) === array.lastIndexOf(item);
});

console.log(unique); // Output: [1, 10, 5]

// 2. Find Unique and Remove Duplicate from an Array
let arr = [1,10,4,2,5,2,4];
// 1at way
const arr = [1, 10, 4, 2, 5, 2, 4];

const withoutDuplicates = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

console.log(withoutDuplicates); // Output: [1, 10, 4, 2, 5]

// 2nd way
const FindUniqueAndRemoveDuplicate=(arr)=>{
    let Unique=[]
    let Duplicate=[]
    for(let item of arr){
        if(!Unique.includes(item)){
            Unique.push(item)
        }
        else{
            Duplicate.push(item)
        }
    }
    // return Unique
    return Duplicate

}
const result =FindUniqueAndRemoveDuplicate(arr);
console.log(result);
*/

// 3. Write a Function to check that string is Palindrom or not
/*
// 1st way to iterate whole string
let str = "malayal";

function FindPalindrom(str){
    let reverseStr = '';
    for(let i = str.length-1;i>=0;i--){
        reverseStr+= str[i]
    }
    if( str === reverseStr){
        console.log("This String is Palindrom");
        
    }
    else{
        console.log("This is not Palindrom!");
        
    }

}
const result = FindPalindrom(str)

// 2nd way iterate half of the string

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            console.log("Not Palindrome");
            return;
        }
    }
    console.log("Palindrome");
}

isPalindrome("malayalam"); // ✅ Palindrome
isPalindrome("hello");     // ❌ Not Palindrome
*/

// 4. Write a Function to sort an Array ( Bubble Sort Algorithm....)
/*
let arr = [10,4,3,50,20,1,5];
// let sortArray = arr.sort((a,b)=>a-b);
// console.log(sortArray);
function sortArray(arr){
    for(let i=0;i<=arr.length;i++){
        for(let j=0;j<=arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

}
const result = sortArray(arr)
console.log(arr);
*/

// 5. Flatten Array
/*
let arr = [1,[2,3,[4,5],[6,7]]];

function FlattenArray(arr){
    let result = [];
    arr.forEach((element) => {
        if(Array.isArray(element)){
            result = result.concat(FlattenArray(element))
        }
        else{
            result.push(element)
        }
        
    })
    return result;

}
const flatArray = FlattenArray(arr);
console.log(flatArray)
*/

// 6. flatten Object
/*
let user = {
    name: 'John',
    address: {
      personal: {
        city: 'London',
        area: 'UK',
      },
      office: {
        city: 'AmsterDam',
        area: {
          landmark: 'NeetherLands',
          place: {
            continent: 'Europe',
          },
        },
      },
    },
  };

    let result ={}
    function flattenObject(input,parent){
        for(let item in input){
            if(item && typeof input[item] === 'object'){
                flattenObject(input[item],parent+"_"+item)
            }   
            else{
                result[parent+"_"+item] = input[item]
            }
        }
    return result
    }
    let flatt = flattenObject(user,"user")
    console.log(flatt)
  */

// 7. reverse word on same position
/*
let str = 'Hello Ji Kya Haal Chal Hai'
function reverseOnSame(str){
    let newStr = str.split(" ").map((item)=>{
        return item.split('').reverse().join('')
    })
return newStr
}
console.log(reverseOnSame(str))
*/

//8. remove duplicate
// let employees=[
//     {id:"20",name:"B"},
//     {id:"10",name:"A"},
//     {id:"30",name:"C"},
//     {id:"10",name:"X"},
//     {id:"50",name:"E"},
//     ];
 //1st apporoach
// using Map
/*
let uniqueEmp = new Map()
function uniqEmployee(input){
input.forEach((item)=>uniqueEmp.set(item.id,item))
return [uniqueEmp.values()]
}
console.log(uniqEmployee(employees));
*/
/* 2nd apporoach (O(n2) time complexity):
function removeDp(arr){
    let result = arr.filter((item,index)=>(
        index === arr.findIndex((obj)=>(
            obj.id === item.id
            ))
    ))
    return result
  
   
}
console.log(removeDp(employees))
*/
// 3rd apporoach using Set and filter complexcity (O(n) time complexity):
/*
function findUniqeEmp(arr){
    let uniqEmp = new Set()
    return arr.filter(item=>{
        if(!uniqEmp.has(item.id)){
            uniqEmp.add(item.id)
            return true
        }
        else{
            return false
        }
    })

}
console.log(findUniqeEmp(employees));
*/

// 9. deep copy
/*
let obj = {
    name: "Chokhe",
    age: 31,
    status: "Single",
    wantTo:{
        paisa: "Paisa",
        ladki: "Ladki",
        needToDo:{
            paisaAnd: true
        }
    }
};

function deep(input){
    if(input === null || typeof input !== 'object') return input;
    let initialValue = Array.isArray(input)?[]:{}
    return Object.keys(input).reduce((acc,key)=>{
        acc[key] = deep(input[key])
        return acc
    },initialValue)

}
let obj2 = deep(obj)
obj2.wantTo.ladki = "Thai"
console.log(obj)
console.log(obj2);
// 2nd approach
let obj3 = JSON.parse(JSON.stringify(obj))
obj3.wantTo.paisa="Rupees"
console.log(obj3);
*/

// 10. Two Sum
/*
let arr = [1,2,3,4,10,6]
let target = 9;
function findSum(arr,target){
    let findIndex ={}
    for(let item of arr){
        let diff = target - item
        if(findIndex[item] !== undefined){
            return `{${diff},${item}}`
        }
        else{
            findIndex[diff] = item
        }
    }

}
console.log(findSum(arr,target));
*/

// 11. find Max
/*
let nums = [2,1,3,5,6,4]
let indexfind=nums[0]
for(let item of nums){
    if(indexfind<item){
        indexfind = item
    }
}
console.log('Max Value is:', indexfind+ " and Index is " +nums.indexOf(indexfind))
*/
// 11. find Min
/*
let nums = [2,1,3,5,6,4]
let indexfind=nums[0]
for(let item of nums){
    if(indexfind>item){
        indexfind = item
    }
}
console.log('Min Value is:', indexfind+ " and Index is " +nums.indexOf(indexfind))
*/

/*

let arr = [2,1,3,5,6,4]
function find(arr){
    let max = arr[0]
    let min = arr[0]
    let second = -Infinity
    for(let item of arr){
        if(max<item){
           second = max
            max = item
            
        }else if(second<max && second<item){
            second = item
        }
        if(min>item){
            min=item
        }
    }
    return `Max ${max} Min ${min} Second ${second}`
}
console.log(find(arr))

*/


// 12. count Items
/*
let obj = [{
    name:"Apple", count:3
},
{
    name:"Apple", count:4
},
{
    name:"Orange", count:2
},
{
    name:"Orange", count:7
}
];

function countItems(input){
    let result = {}
    for(let item of input){
        if(result[item.name]){
            result[item.name] += item.count
        }
        else{
            result[item.name] = item.count
        }
    }
    return result

}
console.log(countItems(obj))
*/

// 13. Call, Bind and Apply

/*
let obj = {
    name:"Rakesh",
    whatIsDoing: "Searching Job",
    need:{
        knowledge: "Knowledge",
        money: "Money",
        trip: "Trips"
    }
}

function getDetails(priority){
    console.log(`My name is ${this.name} and ${this.whatIsDoing} for ${this.need.knowledge}, ${this.need.money} and ${this.need.trip} in ${priority}`);
}
getDetails.call(obj,"Immediate");
getDetails.apply(obj,["Immediate"]);
let bindFunction = getDetails.bind(obj,"Immediate");
bindFunction()
*/

// 14. Promises
/*
let p1 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej("Promise 1 is Reject... OK!")
    }, 100);
});
let p2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res("Promise 2 is Resolved... OK!")
    }, 300);
});
let p3 = new Promise((res,rej)=>{
    setTimeout(() => {
        rej("Promise 3 is Reject... OK!")
    }, 200);
});

// all(),allSetteled(),race(),any()
Promise.all([p1,p2,p3])
.then(data=>console.log(data))
.catch(err=>console.error(err));
Promise.allSettled([p1,p2,p3])
.then(data=>console.log(data))
.catch(err=>console.error(err));
Promise.race([p1,p2,p3])
.then(data=>console.log(data))
.catch(err=>console.error(err));
Promise.any([p1,p2,p3])
.then(data=>console.log(data))
.catch(err=>console.error(err))
*/

// 15.  Find the Maximum Profit from Stock Prices
/*
function maxProfit(prices) {
    let minPrice = prices[0]; // Step 1: Track lowest price
    let maxProfit = 0;       // Step 2: Track maximum profit

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Update min price
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice); // Update max profit
        }
    }
    return maxProfit;
}

// Example usage:
    const prices = [7, 1, 5, 3, 6, 4];
console.log("Max Profit:", maxProfit(prices)); // Output: 5
*/

// 16.  sort the list of array of object

/*
let obj = [
    {
        name:"Rakesh",
        id:100
    },
    {
        name:"Kumazr",
        id:10
    },
    {
        name:"Deepak",
        id:101
    },
    {
        name:"Rocky",
        id:1
    }
    ]
    let sortedList = obj.sort((a,b)=>a.id-b.id)
    console.log(sortedList)
*/

// 17. i/p let str = 'i am a developer'
// o/p I Am A Developer
/*
let str = 'i am a developer'
let firstCharCaps = str.split(' ').map(word=>word[0].toUpperCase() + word.slice(1)).join(' ')
console.log(firstCharCaps)
*/

// 18. Check Number is Prime or Not
/*
function checkPrime(number){
    if(number<2) return false
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i===0) return false
    }
    return `Number ${number} is Prime`
}
console.log(checkPrime(10))
*/

// 19. const arr =[1,2,3,4,5];
// output:- [120,60,40,30,24]
/*
const arr =[1,2,3,4,5];
function getProduct(arr){
let result = []
for(let i=0;i<arr.length;i++){
let product = 1
for(let j=0;j<arr.length;j++){
if(j !== i){
product *= arr[j]
}
}
result.push(product)
}
return result;
}
console.log(getProduct(arr))
*/

// 20. //add(2)(3)
//add(2,3)
/*
function add(a,b){
    if(b){
         return a+b
       }
   return function(c){
           return a+c
       }
   
}
console.log(add(2)(3))
*/

// 21. Compare two array and find unique element from these array

/*
let array1 = [
  { id: 1, name: "user1", age: 25 },
  { id: 2, name: "user2", age: 30 },
  { id: 3, name: "user3", age: 35 }
];
 
let array2 = [
  { id: 2, name: "user2", age: 30},
  { id: 3, name: "user3", age: 35 },    
  { id: 4, name: "user4", age: 50 }
];

// 1st way

let arr = [...array1,...array2]
function getData(arr){
    let map={}
    let count=1
    for(let item of arr){
        let id = item.id
        if(!map[id]){
            map[id] = {count,item}
        }
        else{
            map[id].count++
        }
    }
    let result=[]
    for(let id in map){
        if(map[id].count === 1){
            result.push(map[id].item)
        }
    }
    return result
}
console.log(getData(arr))

// 2nd way

let arr =  [...array1, ...array2]

function findThe(arr){
  let count ={}
  for(let item of arr){
      count[item.id] =count[item.id]?count[item.id]+1:1
  }
 return arr.filter((item)=>count[item.id]===1)
}
console.log(findThe(arr))

*/

// 22. Memoization function
/*
const memo = (fun)=>{
    const cache ={};
    return function(n){
        if(cache[n]){
            console.log("From Caching...");
            return cache[n]
        }
        console.log("Calculating...");
        const result = fun(n)
        cache[n]=result
        return result
    }
}
const squre = memo((n)=>n*n)
console.log(squre(4)); // Output: Calculating... 16
console.log(squre(4)); // Output: From cache 16
*/

// 23. currying with extra param
/*
function curry(fn) {
    const requiredArgs = fn.length;
    function curried(...args) {
      if (args.length >= requiredArgs) {
        return fn(...args);
      } else {
        return function(...next) {
          return curried(...args, ...next);
        };
      }
    }
    return curried;
  }

  function sum(a, b, c, d) {
    return a + b + c + d;
  }
  
  const curriedSum = curry(sum);
  
  console.log(curriedSum(1, 2, 3, 4));       // 10
  console.log(curriedSum(1)(2)(3)(4));       // 10
  console.log(curriedSum(1, 2)(3, 4));       // 10
  console.log(curriedSum(1)(2, 3, 4));       // 10
  console.log(curriedSum(1, 2, 3)(4));       // 10
  
*/

// 24 Three Sum problem
//console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
/*
function threeSum(arr){
    let result = new Set()
    let n = arr.length
    for(let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n;k++){
                if(arr[i]+arr[j]+arr[k] === 0){
                    let triplet = [arr[i],arr[j],arr[k]].sort((a,b)=>a-b)
                    result.add(JSON.stringify(triplet))
                }
            }
        }
    }
    return Array.from(result).map(JSON.parse)
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
*/

/*
// 25
function flattenTexts(data){
    let result=[]
  function flat(current){
      if(current.text){
          result.push(current.text)
      }
      if(current.children && current.children.length>0){
          current.children.forEach(flat)
      }
  }
  flat(data)
  return result
}

const data = {
  id: "123",
  children: [
    { id: "124", children: [], text: "Child 1" },
    { id: "125", children: [], text: "Child 2" },
    {
      id: "126",
      children: [
        { id: "124", children: [], text: "Child 44" },
        { id: "125", children: [], text: "Child 45" }
      ]
    }
  ],
  text: "Parent"
};

console.log(flattenTexts(data));
// Output: ["Parent", "Child 1", "Child 2", "Child 44", "Child 45"]

*/


/*

// 26 
function jsonStringify(val){
if(val === null) return 'null;
if(typeof val === 'string') return `${val}`;
if(typeof val === 'number' || typeof val === 'boolean') return String(val);
if(Array.isArray(val)){
return `[${val.map(jsonStringify)}]`
}
if(typeof val === 'object'){
return `Object.entries(val)
.map(([k,v])=>`"${k}":jsonStringify(v)`)
`
}
return undefined
}

console.log(jsonStringify({ name: "Alice", age: 25, likes: ["JS", "React"] }));
// Output: {"name":"Alice","age":25,"likes":["JS","React"]}
*/

/*
// 27

const arr = "aaabbbbccccaaaa";
expected output = [ 'a', 'b', 'c', 'a' ]
function unq(arr){
    let newData = []
    for(let i=0;i<arr.length;i++){
        if(i === 0 || arr[i] !== arr[i-1]){
            newData.push(arr[i])
        }
    }
    return newData
}
console.log(unq(arr))
*/

Day 1-2: HTML & CSS (Fundamentals & Layouts)
📌 Focus on:

Semantic HTML (<header>, <article>, <aside>)
Forms & Validation (<input>, <textarea>, required, pattern)
CSS Positioning & Layouts (flexbox, grid, z-index)
Responsive Design (media queries, rem, vh/vw)
CSS Animations & Transitions (@keyframes, transform)
Performance Optimization (critical CSS, lazy loading)
📌 Practice Questions:

What is the difference between em, rem, %, px, and vh/vw?
How does z-index work?
How do you center an element using grid, flexbox, and position?
What is box-sizing: border-box; and why use it?
How does @media query work in CSS?
✅ Practice: Build a Landing Page with responsive design.

✅ Day 3-4: JavaScript (Core Concepts & DSA)
📌 Focus on:

Hoisting, Closures, Execution Context
Event Delegation & Bubbling
Promises, async/await, Error Handling
Debouncing & Throttling
ES6 Features (let, const, Arrow Functions, Destructuring, Spread/Rest)
Prototype & Inheritance
Memory Management & Garbage Collection
DOM Manipulation & Optimization
Data Structures: Arrays, Objects, Maps, Sets
Algorithms: Sorting, Searching
📌 Practice Questions:

What is event delegation, and why use it?
How does JavaScript handle asynchronous operations?
How would you implement a custom bind() function?
Difference between == and ===?
Write a function to flatten a nested array.
Find the first non-repeating character in a string.
What is this keyword, and how does it work in arrow functions?
✅ Practice: Solve 10 JavaScript coding problems daily on LeetCode/HackerRank.

✅ Day 5-6: React.js (Core & Advanced Concepts)
📌 Focus on:

Functional vs Class Components
React Lifecycle Methods (useEffect, useState)   
React.memo, useCallback, useMemo (Performance Optimization)
Context API vs Redux
HOCs & Custom Hooks
Virtual DOM & Reconciliation
Server-Side Rendering (Next.js)
Error Boundaries
React Fiber & Concurrent Mode
Suspense & Lazy Loading
📌 Practice Questions:

What is React Fiber?
How does useMemo improve performance?
What is React.memo, and how does it work?
Explain the difference between useEffect dependencies [ ] vs [variable].
What are Higher-Order Components (HOC)?
How would you handle global state without Redux?
What is the difference between useReducer and useState?
✅ Practice: Build a To-Do App with React hooks & local storage.

✅ Day 7-8: Redux (State Management) & React Testing
📌 Focus on:

Why Use Redux? (Global State Management)
Redux Toolkit (RTK)
Actions, Reducers, Store, Middleware
RTK Query for API Calls
Redux with TypeScript
Unit Testing (Jest, React Testing Library)
Mocking API Calls in Jest
Writing Integration Tests for Redux Store
📌 Practice Questions:

What are the core principles of Redux?
How do you prevent unnecessary re-renders in Redux?
Difference between Redux and Context API?
What is Redux Thunk and Redux Saga?
Write a test case for a Redux action.
How do you mock API calls in Jest?
✅ Practice: Build a Redux-based E-commerce Cart with Redux Toolkit.

✅ Day 9: System Design & Performance Optimization
📌 Focus on:

Component-Based Architecture
Lazy Loading, Code Splitting
Micro-Frontends
Handling Large Lists (React Virtualization)
CDN & Caching Strategies
API Performance Optimization (useSWR, React Query)
Security (CORS, XSS, CSRF Protection)
📌 Practice Questions:

How would you design a large-scale React application?
How do you prevent re-renders in React?
What is the best way to handle real-time updates in React?
What are the advantages of Server-Side Rendering (SSR)?
How does Webpack optimize frontend performance?
✅ Practice: Design a Scalable React Architecture Diagram.

✅ Day 10: Revision;
