let charCount = 0;
let findCountGivenChar = (str) =>{
    for(let i=0; i<str.length;i++){
        if(str[i] === 'a'){
         charCount++;
        }
    }

}
const str = "whatisyournamebeta";
findCountGivenChar(str);
console.log("Count of the Given Char:",charCount)