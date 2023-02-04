// 1).
// Function - haqida.
// Function nima uchun ishlatiladi deganda, Biz dasturlashda hajmi jihatidan katta bo'lgan,
// codelar yozishimiz va uni kerak bo'lgan joyda qayta-qayta ishlatishimizga ehtiyoj tug'ladi.
// shu codelarni bittta function ichiga solib qo'ysak bizga kerak bo'lgan qaytda ko'p qatorli codelarni qayta yozishimiz emas
// shu function nameni chaqirsak bas. Bizga bir xil natija qaytarib turaveradi.
// shundan bilsak bo'ladiki Functionlarni biz codelarimiz soddalashishi uchun qollar ekanmiz.

// 2).
// decloration, expression, arrow functions haqida.
// Birinchi bo'lib function decloration haqida gaplashamiz. Bu funcsiyaning bir qulay tarafi functiondan oldin ham uni chaqirsak bo'ladi.
// Har doimgidek ishlayveradi. hunki function decloration JavaScriptning enjini orqali ishlaydi.
// Strukturasi:
// function func(parametr, ...){
//   code ...
// }
// func(value);
// shu ko'rinishda bo'ladi. Birinchi function kalit so'zi yoziladi va function name beriladi va yonidan oddiy qavs qo'yiladi.
// Oddiy qavs ichida parametrlar beriladi. Undan so'ng gullik qavs yani scope yoziladi va shu scope ichida bir necha qatorlik code lar yoziladi.
// Bu funksiyadan yuqoridami pastdami farqi yo'q functiya namei chaqiriladi va chaqirilgan paytda value biriktiriladi. Bu xususiyat faqat Function Declorationda bor holos.
// Misol:
// func("Foziljon");

// function func(name){
//   console.log(name); // Natija Foziljon chiqadi.
// }

// Endi Function expression haqida gaplashamiz.
// Function expressionning Strukturasi:
// let func2 = function(parametr, ...){
//   code ...
// }
// func2(value);
// Bunda birinchi veriablega function name elon qilinadi va teng belgisidan so'ng function kalit so'z yoziladi va yonidan oddiy qavs qo'yilado.
// Bu oddiy qavs ichida bir nechta parametrlar berildi. Undan so'ng gullik qavs ochiladi va shuni ichiga code lar yoziladi. Undan so'ng function pastida function namei value berilib chaqiriladi.
// agar funcsiyaga parametr berilmasa function namei chaqirilganda value berilmaydi.Har doim function expressionda function namei functiondan pastda chaqirilishi shart.
// Aks holada ReferenceError: Cannot access "func2" before initialization degan hato qaytaradi.
// Misol:
// func2("Azimov");
// let func2 = function(surname){
//   console.log(surname);  // Natija Cannet access "func2" before initialization chiqadi.
// }

// Ana endi arrow function haqida gaplashamiz.
// Arrow => nayza degan ma'noda nayzali funksiya deyiladi. Bu funcsiya yozilishi jihatidan sodda ko'rinishga ega.
// Strukturasi: 
// let func3 = (parametr, ...)=>{
//   code ...
// }
// func3(value);
// arrow functionda agar gulli qavs(scope) yozilmasdan natija chiqariladigan bo'lsa avtomatik shunatijani return qiladi bu funcsiya.
// let func4 = (name)=> name;
// console.log(func4("Foziljon")); // shu holatda name ni return qilmasak ham u avtomatik return qiladi. Ko'p qatorli codelarda bu ishlamaydi.
// Hamma functionlaring ichida eng ko'p qo'llaniladigani bu Arrow functiondir.

// 3).
// Bu uchta functionsning bir-biridan farqi.
// Function declorationda funksiyadan oldin shu funksiyani chaqirib ishlatsa bo'ladi.
// Function expressionda birinchi veriable yaratib shu veriblega funcsiya biriktiriladi.
// Arrow functionda yozilishi jihatidan sodda, ()=>{} va code 1 qatorlik bo'lsa avtomatik return qiladi qiymatlarni.

// 4).
// Return bilan yozilgan functionning return bilan yozilmagan functiondan farqi borligi haqida.
// Functionda return ishlatmay natijani console.log() orqali chiqaradigan bo'lsak bu natijani shunchaki consolga chiqarib beradi.
// funcsiyadan tashqarida bu qiymatni yana boshqa maqsadlada ishlata olmaymiz. Ishlatsak is not defined Error beradi.
// shu natijani biz function scope ichida return bilan qaytarsak bu qaytargan qiymatni biz scope tashqarisida ham foydalansak bo'ladi.
// Misol:
// Returnsiz yozilsa
// function funcName(age){
//   console.log(age);
// }
// funcName(22); //Bu yerda to'g'ri ishlayni va natija : 22 chiqadi.
// console.log(age); // Lekin bu yerda ReferenceError: "age" is not defined  degan natija qaytadi.
// Return bilan yozilsa
// function funcName(status){
//   return status;
// }
// a = funcName("Talaba");
// console.log(a);
// console.log(`Foziljon hozirda ${a}`); //Natija Foziljon va Foziljon hozirda talaba degan malumotlarni aytarib beradi.

// 5).
// inner va outer veriables haqida
// Agar functiondan tashqarida veriable elon qilib uni function ichida chaqiradigan bo'lsak shu veriable outer veriable hisoblanadi.
// agar function ichida veriable elon qilib uni function ichida chaqiradigan bo'lsak bu inner veriable hisoblanadi.

// 6).
// Shadow veriable haqida
// Shadow veriable deganda agar biz funcsiyadan tashqarida va funcsiya icharisida bir xil namega ega bo'lgan veriable elon qilsak ichkaridagi veriable tashqaridagi veriablening shadowi hisoblanadi.
// Funcsiya scopening ichi Lokal, tashqarisi Global hisoblanadi.
// Misol:

// let name = "Foziljon";
// function func(){
//   let name = "Webbrain";
//   console.log(name);
// }
// func() //Bunda natija Webbrain  chiqadi.
// Bu holatda function birinchi bo'lib Lokal xotirada name degan veriable bormi deb tekshiradi. Agar bor bo'lsa shuni batijaga chiqaradi.
// Agar yo'q bo'lsa Global xotirani tekshiradi. Global xotirada name nomli veriable bo'lsa shuning qiymatini natijaga chiqaradi.

// 7).
// Parametrning Defoult qiymati haqida
// Bu holat 5 xil yo'l bilan bajarsa bo'ladi.
// 1 - function scope ichida if else dan foydalanib qiymat bersak bo'ladi;
// Misol:
// function func1(name){
//   if(!name) console.log("no data");
//   else console.log(name);
// }
// func1()
// 2 - function scope ichida ternary operatori orqali qiymat beriladi.
// Misol:
// function func1(name) {
//   !name?console.log("no data"):console.log(name);
// }
// func2();
// 3 - function scope ichida OR(||) Logicial operatori orqali qiymat bersak bo'ladi.
// Misol:
// function func3(age){
//   console.log(age||22);
// }
// func3();
// 4 - function scope ichida Nullish(??) operatori orqali qiymat bersak bo'ladi.
// Misol:
// function func4(age){
//   console.log(age??22);
// }
// func4();
// 5 - function kalit so'zidan keyin yoziladgan oddiy qavs ichida function parametrlari berilari va shu holatda ularga qiymat biriktirilib ketiladi.
// Misol:
// function func5(name = "Foziljon", surName = "Azimov", age = 22) {
//   console.log(`Name: ${name},
// Surname: ${surName},
// Age: ${age}
//   `);
// }
// func5();

// 8).
// Hoisting haqida gaplashamiz
// Hosting deganda biz elon qilgan veriable va functionlarni file ning eng yuqorisiga olib chiqib qo'yishimiz tushiniladi(Function decloration bundan mustasno).
// Maqsad shuki Errorkarni keltirib chiqarmaslik.

// 9).
// Clean code haqida gaplashamiz
// Clean code deganda biz darrow ko'z oldimizga qiladigan ishi haqida Ma'no anglatuvchi name vazifasini bajaradi.
// Misol uchun biz biror talabaning GPA sini hisoblovchi function yosak shu function nameni calcFunc() deb nomlasak bu hisob kitob ma'nosini beradi.
// Yoki getFunc() desak qandaydir qiymatni qaytaruvchi function ekanligini anglatib turadi.
// Bularga: get, calc, create, camel case holatida yozish(surName, userName, ...).