// Function statement aka Function Declearation

function fun(){
    console.log('fun is getting...')
}

//Function Expression

var funExpress = function(){
    console.log('Function Expression getting')
}

//Anonymous Function :- Function without name is known as Anonymous Function
// function(){

// }

//Named Function Expression

var nameFunExpress = function NameHehe(){
    console.log("Named Function Expression getting")
}
//parms and argument

function abc(parm1,parm2){
console.log();
}
abc(2,3);
//2,3 is the arguments

//First class Function:- First class function is a function which have capability to use a function as a value or return a function 
//1
function firstClass(){
    return function(){

    }
}
//2
function firClass(){
}
firClass(function(){})


//Difference bitween Function Decleartion and Function Expression
//:- There is one difference Function Decleartion is going to hoisted but  Function Expression is not hoisted

a(); // it is going to hoisted
//b(); // it is going to throw the error that b is not a function
function a(){

}
var b = function(){

}
// callback function:- callback function also known as firstclass function
// when a function pass inside a function as a value known as callback function

setTimeout(function(){
console.log("function(){} is a callback function")  
})
//
function mainFun(callBackFunction){
    console.log("We are passing a function as a callbacj function")
    callBackFunction()
}
mainFun(function callBackFunction(){
    console.log("CallBack Function..")
})