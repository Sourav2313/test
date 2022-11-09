// const { count } = require("console");

// count vowels = {a, e, i, o, u}
// // string = "Sourav Banerjee"

// function countVowel(str){
//     let count = 0;
// }

// for(let letter of str.toLowerCase()){
//     if( vowels.includes(letter))
//     count++;
// }

// return count;
// const string = prompt ( "Sourav Banerjee")
// const result = constVowel(string);
// console.

function FizzBuzz(){

    for (var i = 1; i < 101; i++) {
        if (i % 15 == 0) console.log("FizzBuzz");
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i);
    }

}