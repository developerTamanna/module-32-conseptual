//?? **--??অপারেটর শুধুমাত্র null অথবা undefined এর সাথে কাজ করবে, অন্য যেকোনো ভ্যালুকে একটি ডিফল্ট ভ্যালু হিসেবে গ্রহণ করবে।



const name = null;
const defaultValue ='sathi';
const rest = name ?? defaultValue;
// console.log(rest)
const age = null;
const defaultValues = 34;
const result = age??defaultValue;
// console.log(result)

// ? next

let num =0;
let results = num?? 10;
console.log(results)








// ?next

// function processUserInput(input) {
//     let name = input.name ?? "Anonymous";  // যদি name না দেওয়া হয়, "Anonymous" ব্যবহার হবে।
//     let age = input.age ?? 18;  // যদি age না দেওয়া হয়, 18 ব্যবহার হবে।

//     console.log(`Name: ${name}, Age: ${age}`);
// }

// let userInput = { name: "John" };  // age দেওয়া হয়নি
// processUserInput(userInput);
// // Output: Name: John, Age: 18
   






// ?next

function processUserInput(input){
     let name = input.name?? 'Anonymous';
     let age = input.age?? 12;
     console.log(`Name: ${name}, Age: ${age}` )
}

const userInput = { name: 'sathi', age :19}
processUserInput(userInput)