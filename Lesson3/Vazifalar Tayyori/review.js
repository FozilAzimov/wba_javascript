// Homework
// Conditional branching "if, ?", Nullish coalescing operator "??";

// 1) if else;
// let text = "Fizz";
// if(text === "FizzBuzz"){
//   console.log("Natija FizzBuzz");
// }
// else if(text === "Fizz"){
//   console.log("Natija Fizz");
// }
// else if(text === "Buzz"){
//   console.log("Natija Buzz");
// }
// else{
//   console.log("Noto'g'ri qiymat kiritdingiz!");
// }

// 2) ternary operator;
// let text = "Assalom";
// text === "FizzBuzz" 
// ? console.log("Natija FizzBuzz")
// : text === "Fizz"
// ? console.log("Natija Fizz")
// : text === "Buzz"
// ? console.log("Natija Buzz")
// : console.log("Noto'g'ri qiymat kiritdingiz!");

// 3) Nullish;
// Nullish (??) huddi Logical operatordagi OR (||) ga o'xshab ishlaydi,
// lekin nullishdagi belgi ikkita so'roq bo'ladi va bu tekshirub turi null va undefined qiymatlarda false,
// qolgan qiymatlarda true qiymat qaytaradi;

// let a = true;
// console.log(a ?? null); //=> Natija true

// let a = false;
// console.log(a ?? null); //=> Natija false

// let a = true;
// console.log(a ?? undefined); //=> Natija true

// let a = false;
// console.log(a ?? undefined); //=> Natija false