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

// 2. Find Unique and Remove Duplicate from an Array
/*
let arr = [1,10,4,2,5,2,4];

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

// 15. 