let user = {
    name:"Rakesh",
    address:{
        personal:{
            city:"Madhubani",
            area:"Kanharpatti"
        },
        office:{
            city:"Bangalore",
            area:{
                landmark:"HSR Layout"
            }
        }
    }
}

let finalObj = {};
let magic = (user,parent)=>{
    for(let key in user){
        if(typeof user[key] === 'object'){
            magic(user[key],parent+"_"+key);
        }
        else{
            finalObj[parent+"_"+key]=user[key];
        }

    }

}
magic(user,'user');
console.log(finalObj)