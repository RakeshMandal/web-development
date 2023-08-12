// so here is the problem with var
for(var i =0; i<=3;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
//expected output: 0 1 2 3 
//coming output: 4 4 4 4
//so here are the solutions

// 1st solution using let instead of var

for(let i=0;i<=3;i++){
    setTimeout(() => {
        console.log(i)
    }, 1000);
}

//2nd solution using clouser

for(var i =0; i<=3; i++){
    function getExact(i){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }
    getExact(i)
}