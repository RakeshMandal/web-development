// 1. Program to find longest word in a given sentence ?

/* 1st way*/
/*
function findLongrstWord(){
    let sentence = "Hello brother how are you?";
    let newSentence = sentence.split(" ");
    let longestWord = newSentence.sort((a,b)=>b.length-a.length)
    return longestWord[0]
}
let result = findLongrstWord()
console.log(result)
*/

/* 2nd ways */
/*
function findLongrstWord(sentence){
    let word = sentence.split(" ");
    let longestWord = word.reduce((longestWord,currentWord)=>{
        return longestWord.length > currentWord.length ? longestWord : currentWord
    })
    return longestWord
}
let sentence =  "Hello brother how are you?"
let result = findLongrstWord(sentence);
console.log(result)
*/

/* 3rd ways*/
/*
function findLongrstWord(sentence){
    let words = sentence.split(" ");
    let longestWord = '';
    for(let word of words){
        if(word.length>longestWord.length){
            longestWord = word
        }
    }
    return longestWord;
}
let sentence = "Hello brother how are you?"
let result = findLongrstWord(sentence)
console.log(result);
*/


// 2. How to check whether a string is palindrome or not ?
/*
function checkPalindrom(word){
    let newWord = ''
    for(let i=word.length-1;i>=0;i--){
        newWord+=word[i]
    }
    if(word === newWord){
        return 'String is Palindrom'
    }
    else{
        return 'String is not palindrom'
    }
}
let word = "lol"
let result =checkPalindrom(word)
console.log(result);
*/

//  3. Write a program to remove duplicates from an array ?

