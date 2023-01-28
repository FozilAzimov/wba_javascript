// Homeworks
// Data types:
// 1. Number
// let num = 7;
// console.log(typeof num, num);

// 2. Bigint
// let a = 9007199254740993n;
// console.log(typeof a,a);
// let big = 9007199254740992; => 9007199254740992 bu raqam 2^53 ga teng
// console.log(big + 1); => qiymat o'zgarmaydi.
// let big = 9007199254740992n;
// console.log(big+1n); => bunda qiymat oshadi.
// 2^53 dan keyingi raqamlarni hisoblashda oxiriga n harfi qo'shib hisoblanadi.

// 3. String
// 3-xil ko'rinishi bor: '', "", ``;
// let name = "Foziljon";
// let text = `Assalomu alaykum ${name}`; //=> faqat bektikda sunday xususuiyatlar bor
// let text1 = 'Assalomu alaykum';
// let text2 = "Assalomu alaykum";
// let text3 = `Assalomu alaykum`;
// console.log(typeof text1, typeof text2, typeof text3);

// 4. Boolean
// true , false
// console.log(typeof true);
// console.log(typeof false);
// true == 1;
// false == 0
// console.log(true == 1);
// console.log(false == 0);

// 5. null
// console.log(typeof null);
// let a = null;
// console.log(a);
// a = "null ning type object";
// console.log(a);
// null => Buni qachon ishlatamiz qiymati yo'q, lekin kelishi aniq bo'lgan qiymatlarda shu qiymat o'rniga null berib ketamiz;
// console.log(typeof null);

// 6. undefined
// let num;
// console.log(num); 
// undefined => o'zgaruvchi elon qilingan, lekin unga qiymat biriktirilmgan.

// 7. Symbol
// let id1 = Symbol("name");
// let id2 = Symbol("name");
// console.log(id1==id2); => false
// console.log(id1===id2); => false
//  Symbol => Unikal qiymatlarda foydalanamiz.
// console.log(typeof Symbol());

// Yuqoridagi 7 ta data type lar - Primitive data type ga kiradi

// Bitta data type - Object non-Primitive data type turiga kiradi

// 8. Object
// Object - object, array, function
// 1. object
// let obj = {
//   name: "Foziljon",
//   surname: "Azimov",
//   age: 22
// }
// console.log(obj, typeof obj);

// 2. array
// let arr = ["JavaScript", 1995, true];
// console.log(arr , typeof arr);

// 3. function
// let func = function(){
//   console.log("Azimov Foziljon!");
// }
// func();

// Homework.

// let name = "Ilya";
// console.log(`hello ${1}`);// => hello 1.
// console.log(`hello ${"name"}`);// => hello name.
// console.log(`hello ${name}`);// => hello Ilya.

// Bularning farqi Primitive data typelar value qaytaradi, non-Primitive data typelar link qaytaradi.