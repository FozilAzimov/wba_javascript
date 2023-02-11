// String davomi...
// Biz o'tgan darsda String methodlaridan: toUpperCase(),toLowerCase(),indexOf(),lastIndexOf(),startsWith(),endsWith(),length shularni ko'rgan edik.

// padStart(), padEnd()
// let a = "Salom";
// a = a.padStart(a.length+3,".")
// console.log(a);

// let a = "Salom";
// a = a.padEnd(a.length+3,".")
// console.log(a);
// Xulosa: string qiymatini boshiga va oxiriga element qo'shib beradi, agar berilgan qiymat veriable qiymati uzunligidan katta bo'lsa.

// slice()
// let n = "123456789";
// console.log(n.slice(0,-1));
// console.log(n.slice(3,-5));
// console.log(n.slice(n.length-1));
// Xulosa: stringni kerakli jayidan kesib oladi. Har doim musbat va manfiy qiymat qabul qiladi va u index hsobida ishlaydi.
// slice() methodiga bitta qiymat berilsa shundan boshlab oxirigacha kesadi, agar ikkita qiymat berilsa birinchi qiymatdan ikkinchi qiymatgacha( ikkinchi qiymat o'zi kermaydi )kesib natijaga chiqaradi.
// Birinchi qiymat ikkinchi qiymatdan har doim katta bo'lishi shart. Aks holda qiymat chiqarmaydi.

// substring()
// let s = "123456789";
// console.log(s.substring(3,1));
// console.log(s.substring(-3,1));
// console.log(s.substring(0,5));
// console.log(s.substring(5));
// Xulosa: bitta qiymat kiritsak shundan oxirigacha kesadi, ikkita qiymat bersak birinchi qiymatdan ikkinchi qiymatgacha(ikkinchi qiymat o'zi kermaydi) kesadi.
// agar berilgan qiymatlar o'rni almashib qolsa(yani birinchisi katta, ikkinchisi kichik qiymat bo'lib qolishi) o'zi avtomatik almashtirib to'g'ri natija qaytaradi.
// qolgan kesub oluvchi methodlardan farqi shuki qiymatlar o'rni almashsa ham to'g'ri ishlaydi, Agar manfiy qiymat kiritilsa 0 - index dan boshlab ishlaydi.

// substr()
// let a = "123456789";
// console.log(a.substr(0,5));
// console.log(a.substr(3,2));
// console.log(a.substr(-3,2));
// Xulosa: buni ishlatish kerak emas chunki eskirgan methodlardan bo'lib string methodlari safidan chiqish arafasida.
// vazifasi veriable qiymatini kesib olish. Boshqalaridan farqi manfiy qiymatda ham to'g'ri ishlaydi, ikkinchi berilgan qiymat length vazifasini bajaradi ya'ni ikkinchi qiymat sonicha element kesib oladi.

// eval()
// console.log(eval("1+3+4-3")); //Natija: 5
// console.log(eval("1+3/4-3")); //Natija: -1.25
// console.log(eval("1+3+4*3")); //Natija: 16
// console.log(eval("a+b-b")); //Natija: Reference Error: a is not defined
// Xulosa: veriable qiymatida string ichida raqamlar kelsa va ular arifmetik amallar bilan yozilgan bo'lsa ularni hamma arifmetik yo'l bo'lsa ham to'g'ri ishlatib beradi.String ichida berilgan qiymat har doim raqam bo'lishi kerak.

// trim()
// let a = " Assalomu alaykum ";
// console.log(a.trim());
// console.log(a.trimEnd());
// console.log(a.trimStart());
// Xulosa: bu veriable qiymatini oldindagi va oxiridagi bo'sh joylarni o'chirib tashlaydi.trim() - boshidagi va oxiridagi; trimStart() - boshidagi; trimEnd() - oxiridagi bosh joylarni olib tashlaydi.

// split()
// let t = "webb!rain aca!demy";
// console.log(t.split());
// console.log(t.split(""));
// console.log(t.split(" "));
// console.log(t.split("!"));
// Xulosa: veriable qiymatini arrayga aylantirib beradi. Agar split("") holatida ishlatilsa har bir elementni alohida array elementi qilib ajratib beriladi.
// split() qavs ichidaga string bilaan nima yozilsa shu yozilgan element veriable qiymatida bor bolsa shuyerdan ajratib array qilib beradi;

// concat()
// let n = "12345";
// let x = "Webbrain";
// let b = 98765432;
// let bool = false;
// console.log(n.concat(x,b));
// console.log(n.concat(x,"Academy"));
// console.log(n.concat(x,123456789));
// console.log(n.concat(12345,bool,6789));
// Xulosa: bu ikki va undan ortiq qiymatlarni bitta stringga aylantirib beradi.

// String.raw``
// let h = 123456
// let t = String.raw`assalomu alaykum
// hurmatli tadbir ishtirokchilari

// ${h}

// Yaxshimisila!`
// console.log(t);
// Xulosa: bektik (``) bilan bir xil vazifani bajaradi.

// string misol: kiritilgan soz berilgan text ichida bor bo'lsa kesib olib natijaga chiqarish?
// let a = "mov";
// let text = "Azimov Foziljon";
// console.log(text.substring(text.indexOf(a),text.indexOf(a)+a.length));

// search()
// let d = "Academy"
// console.log(d.indexOf("A"));
// console.log(d.search("A"));
// console.log(d.indexOf("a"));
// console.log(d.search("a"));
// console.log(d.search(/D/i));
// console.log(d.search(/M/i));
// console.log(d.search(/DE/i));
// console.log(d.indexOf("C"));
// console.log(d.indexOf("M"));
// Xulosa: search() method ham indexOf() methodiga o'xshab berilgan qiymatni indexni chiqrib beradi. Lekin bitta farqi search() katta harfni kichik deb natijani to'g'ri chiqarib beradi.

// for of, for in
// let n = "abdefghijklmnopqrstuvxyz"
// for(value of n){
//   console.log(value);
// }
// for(value in n){
//   console.log(value);
// }
// Xulosa: Loop for of string qiyatini har bir elementini alohida chiqarib beradi, for in esa har bir element indexni chiqaradi.

// localeCompare()
// let text = "Hello";
// console.log(text.localeCompare("Hel")); // qisman to'g'ri Natija: 1;
// console.log(text.localeCompare("Hello")); // to'g'ri      Natija: 0;
// console.log(text.localeCompare("HelloWorld")); //Xato     Natija: -1;
// Xulosa: kiritilgan qiymat berilgan qiymat ichida bormi yoki qisman bormi yoki ummuman yo'qmi shuni tekshiradi.