//closure: ->closure is function with it's lexical environment 
//normal example
function outre(){
    var a= 1000;
    function inner(){
        console.log(a)
    }
}
//
function z(){
    var b =900;
    function x(){
        var a =15;
        function y(){
            console.log(a, b)
        }
        a=100;
        y();
    }
    x();
}
z()
//using with settimeout
function a(){
for(let i=1;i<=5;i++){
    function closerExample(x){
        setTimeout(() => {
        console.log(x)
        }, x*1000);
    }
    closerExample(i)
}
}
a()

//uses with constructor
function ConstCloser(){
    var counter =0;
    this.incrementFunction = function(){
        counter++;
        console.log(counter)
    }
    this.decrementFunction = function(){
        counter--;
        console.log(counter)
    }
}
var ccIncDec = new ConstCloser();
ccIncDec.incrementFunction();
ccIncDec.incrementFunction();
ccIncDec.incrementFunction();
ccIncDec.decrementFunction()
