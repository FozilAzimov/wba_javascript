// 2-darsda o'rgatildi: Type conversions, Basic operators, math, comporisons;

// 1. Type conversions;
// Type conversion - deganda qiymatning data typening o'zgarishiga aytiladi. Ular 3 xil bo'ladi.
// 1). console.log(Number("2")) yoki console.log(+"2"); Bunda string ichida berilgan qiymatlarni Number ga o'tkazish yo'llari. Data type number bo'ladi;
// 2). console.log(String(5)); Bu numberni Stringga aylantirishda ishlatiladi. Data type ham string bo'ladi;
// 3). console.log(Boolean(null)); Bunda "", 0, null, undefined, NaN, false shular hammasi false javob qaytaradi. Qolgan hamma qiymatlar true qaytaradi.

// 2. Basic operators, maths;
// Basic operators, maths; 
// Bularga qo'shish +, ayirish -, k'paytirish *, bo'lish /, qoldiqli bo'lish %, darajaga oshirish **, qavis (), tengliklar =, ==, ===, obrivations +=, -=, /=, *=, incriment ++, decriment --;
// Shularning har biri haqida to'liq gaplashamiz;
// 1). Qo'shish
// let a =2;
// let b =5;
// console.log(a + b); //=> 7
// 2). Ayirish
// let a =2;
// let b =5;
// console.log(b-a); //=> 3
// 3). Ko'paytirish
// let a =2;
// let b =5;
// console.log(a*b) //=> 10
// 4). Bo'lish
// let a =2;
// let b =5;
// console.log(a/b); //=> 0.4
// 5). Qoldiqli bo'lish
// let a =2;
// let b =5;
// console.log(b%a); //=> 1
// 6). Darajaga oshirish
// let a =2;
// let b =5;
// console.log(b**a); //=> 25
// 7). Qavis
// Matematikada amallarning bajarilish tartibi bor. Bularning ichida qavs birinchi bajariladigan belgidir;
// console.log(2*2*(4-5)/2-1); //=> -3
// 8). Tengliklar. JavaScriptda 3 ta tenglik bor.
// =, ==, ===; bitta tenglik qiymat o'zlashtirish uchun, ikkita tenglik taqqoslashda qiymatlarning o'zini taqqolaydi, uchta tenglik esa qiymatlarning tengligidan tashqari uning data typeni ham bir xilligini tekshiradi;
// let num1 = 5;
// num2 = num1;
// console.log(num2); //=> 5
// console.log(num1==num2); //=> true
// console.log(num1===num2); //=> true

// let num1 = 5;
// let num2 = "5";
// console.log(num2); //=> 5 data type string bo'ladi;
// console.log(num1==num2); //=> true Bunda true chiqishidan maqsad valuelari teng;
// console.log(num1===num2); //=> false Bunda false chiqishining sababi data type string;

// 3. Comparision;
// Comparision - ma'lumotlarni compare qilish doim true va false qiymat qaytaradi;
// <, >, ==, ===, <=, >=, ! compare qilish uchun ishlatiladi;
// let a = 5;
// let b = 4;
// console.log(a>b); // => true chiqadi chunki a rostdanham b dan qatiy katta
// console.log(a<b); // => false chiqadi;
// console.log(a<=b); // => false;
// console.log(a>=b); // true;
// console.log(a==b); // false;
// console.log(a===b); // false;
// console.log(a!=b); // true;
// console.log(a!==b); //true;
// String comparision
// Stringda compare qilish string ichidagi elementlarning birinchida kelganini askitableda joylashuviga qarab taqqoslaydi;
// let text1 = "Foziljon";
// let text2 = "Azimov";
// console.log(text1>text2); // => true
// console.log(text1>=text2); // => true
// console.log(text1<text2); // => false 
// console.log(text1<=text2); // => false
// console.log(text1==text2); // => false
// console.log(text1===text2); // => false
// console.log(text1!=text2); // => true
// console.log(text1!==text2); // => true
// Yuqoridagi misolga qarasak String ichidagi birinchida keluvchi harflar taqqoslanganda ya'ni "F" va "A" ni taqqoslangan;

// 4. Logical Operations;
// Logical operations ga AND(&&), OR(||), NOT(!) kiradi;
// 1). && AND bunda tekshirilayotgan ikki qiymat ham true qiymat qaytarsa natija true bo'ladi;
// Agar bittasi ham false bo'lsa natijaviy qiymat false bo'ladi;
// Agar ikki qiymat ham false bo'lsa Natijaviy qiymat false bo'ladi;
// Bundan ko'rsa bo'ladiki ikki qiymat ham true bo'lsa nayijaviysi True, boshqa holatlarda False bo'ladi;
// console.log(true && true); // => true
// console.log(true && false); // => false
// console.log(false && true); // => false
// console.log(false && false); // => false
// 2). || OR bunda ikki qiymatdan faqat bittasi true qiymat qaytarsa Natijaviy qiymat True bo'ladi;
// Agar ikki qiymat ham false bo'lsa Natijaviy qiymat False bo'ladi;
// console.log(true || true); // => true
// console.log(true || false); // => true
// console.log(false || true); // => true
// console.log(false || false); // => false
// 3). ! NOT bunda inkot=r vazifasini bajaradi. True bo'lsa False qaytaradi agar buni aksi bo'lsa False bo'lsa True qiymat qaytaradi;
// console.log(!true); // => false
// console.log(!false); // => true