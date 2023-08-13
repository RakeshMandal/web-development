const userList = [
    { firstNmae: 'Rakesh',lastName: 'Mandal',age: 29 },
    { firstNmae: 'Deepak',lastName: 'Kumar',age: 30 },
    { firstNmae: 'Dipu',lastName: 'Mandal',age: 27 },
    { firstNmae: 'Rocky',lastName: 'Rocks',age: 30 }
];
//map(),filter(),reduce()

//First Find the full name 

let fullName = userList.map(x=>x.firstNmae +" "+ x.lastName);
console.log(fullName);

// Find the similar age count

let ageCount = userList.reduce((acc,curr)=>{
   if(acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age]
   }
   else{
    acc[curr.age]=1
   }
   return acc;
}, {})
console.log(ageCount);

// Find first name who's age is less than 30

let firstNameLessAge = userList.filter(x=>x.age<30).map(x=>x.firstNmae);
console.log(firstNameLessAge);

// uding reduce method

let findFirstName = userList.reduce((acc,cur)=>{
    if(cur.age<30) {
        acc.push(cur.firstNmae)
       }
       return acc;
},[])
console.log(findFirstName)