//1. debounce
let count =0;
function getCount(){
    console.log("This is Giving Count: ", count++)
}

 function debounce(fun, delay){
    let timer
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fun.apply(this,arguments)

        },delay)
    }
}

const betterFunction = debounce(getCount,300)
