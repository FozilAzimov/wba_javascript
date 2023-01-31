// 3-dars haqida...
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
//  Xulosa: condition har doim yoki true, yoki false qiymat qaytaradi. false qiymat qaytarsa condition blokining ichidagi codelar ishlamaydi.
// Keyingi conditionlarga tekshirish uchun o'tadi. Qay birida true qaytsa shuni bloki ishlaydi. Agar hamma conditionlar false qaytarsa oxiri else blokining ichi ishlaydi.


// 2) ternary operator;
// let text = "Assalom";
// text === "FizzBuzz" 
// ? console.log("Natija FizzBuzz")
// : text === "Fizz"
// ? console.log("Natija Fizz")
// : text === "Buzz"
// ? console.log("Natija Buzz")
// : console.log("Noto'g'ri qiymat kiritdingiz!");
// Xulosa: ternary operator ishlatilishi faqat ikkitalik tekshiruv holatlarida ishlatilsa maqsadga muvofiq bo'ladi.
// Ko'p tekshiruv holatlarida ham ishlatsa bo'ladi, lekin codelar chalkashib ketishi mumkin va bir qarashada nima vazifa qaytarishini anglab bo'lmaydi.

// 3) Nullish;
// Nullish (??) huddi Logical operatordagi AND, OR ga o'xshab ishlaydi,
// lekin nullishdagi belgi ikkita so'roq bo'ladi va bu tekshiruv turi null va undefined qiymatlarda false,
// qolgan qiymatlarda true qiymat qaytaradi;

// let a = true;
// console.log(a ?? null); //=> Natija true

// let a = false;
// console.log(a ?? null); //=> Natija false

// let a = true;
// console.log(a ?? undefined); //=> Natija true

// let a = false;
// console.log(a ?? undefined); //=> Natija false

// console.log(undefined ?? null); //=> Natija null. chunki ikkita holarham false qaytargani uchun oxirgi qiymatni natijaga chiqaradi;

// let num = 0;
// let text = "Azimov"
// console.log(num || 1); // => 1 chunki num ning qiymati false;
// console.log(1 || num); // => 1 chunki true ekanligi;
// console.log(num && 1); // => 0 chunki umumiy natija false bo'lgani uchun false o'rnida keluvchi 0 qiymatni chiqaradi;
// console.log(1 && num); // => 1 chunki ampersantdan oldinda turgan qiymat true bo'lgani uchun keyingi qitmatni tekshirmaydi;
// console.log(null ?? 1); // => 1 chunki nullishda null qiymat false bo'lgani uchun true qiymat 1 ni chiqaradi;
// console.log(undefined ?? 1); => 1 chunki nullishda undefined qiymat false bo'lgani uchun true qiymat 1 ni chiqaradi;
// console.log(text ?? 1); => Azimov chunki nullishda null va undefineddan boshqa hamma qiymatlar true qaytargani uchun
// birinchi qiymat chiqadi;