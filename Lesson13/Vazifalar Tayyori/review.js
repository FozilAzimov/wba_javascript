
// scope, old var, new Function(), closure, IIFE, NFE, global object(window, globalThis, global), function object, setTimeout(), setInterval(), call(), apply(), bind();

// 1). JavaScriptda 3 xil scope mavjud. global scope, locale scope, block scope.

// 1.
// global scope


// 2.
// function func(){

// locale scope

// }

// 3.
// {
//   block scope
// }

// Manashu scope bizga var va let veriablelarini farqlashga xizmat qiladi.


// 2).
// closure - nima? Bu savolga javob bersam : bir funcsiya ichida veriable declare qilingan va shu funcsiya ichida boshqa bir funcsiya mavjud. nested funcsiyada tashqi veriableni ishlatilishiga closure (cloje) deyiladi.
// Misol:
// function func(){
//   let name = "webbrain";
//   function getfunc(){
//     console.log(name);
//   }
//   getfunc();
// }
// func();

// 3).
// JavaScriptda oldinlari 'var' veriabledan foydalanilgan.
// var biz bilamiz global veriable hisoblanadi. Ya'ni scope ichida declare qilingan bo'lsa ham tashqarida chaqirilsa natija to'g'ri chiqaveradi.


// 4).
// IIFE - nima? Bunga javob beradigan bo'lsam (Immidiately Invoked Function Expression)deyiladi. Bunda varni global emas locale veriable holatiga o'tkazish uchun ishlatilgan.
// Misol:

// (function(){
//   var a=5;
//   console.log(a);
// })();

// 5).
// Function Object.
// Biz funcsiya orqali objectga  key lar biriktirishimiz mumkin. Undan tashqari funcsya orqali object qiymatini olishimiz mumkin.

// Sodda misol:
// let obj = {};
// let func = () => {
//   obj.name = 'webbrain';
// }
// func();
// console.log(obj.name);

// O'rta misol:
// let moment = ()=>{
//   moment.locale=()=>{
//     console.log(Date.now());
//   }
// }
// moment();
// moment.locale();

// 6).
// JavaScriptda global object tushinchasi mavjud.
// - window --> bu faqat DOM bilan ishlatiladi.
// - globalThis --> bu faqat javascriptda ishlaydi.
// - global --> bu faqat node js bilan ishlaydi.
// Bu global objectlar javascriptda nima element mavjud bo'lsa hammasi shuni ichida joylashadi.

// 7).
// NFE - (Named Function Expression) deyiladi. Bu NFE ishlatilishidan maqsad ma'lum funcsiyaga qo'shimcha name biriktirishdir. Ya'ni funcsiya agar recursion bo'lsa shu recursiya haqida ma'no anglatib turadi. Yangi name faqat shu funcsiya ichida ishlaydi.
// Misol:
// let func = function calc(n) {
//   if (n <= 1) return n;
//   console.log(n);
//   calc(n - 1);
// }
// func(5);

// 8).
// new Function() funcsiya konstruktori bilan yaratiladi. Hamma codelar oddiy qavs ichidagi qo'shtirnoq orqali yoziladi.
// Bu sintaksis juda noqulay hisoblanadi va struktura juda yomon.

// let func = new Function(`console.log('salom')`);
// func();


// 9).
// JavaScript dasturlash tili single sred ya'ni bir vaqtda faqat bitta vazifani bajara oladi. setTimeout() va setInterval() javascript metodlari emas, bular browser tomonidan qo'shilgan funcsiyalar hisoblanadi.
// Undan tashqari JavaScript sinxron dasturlash tili bo'lib bir ishni tugatmay keyingi navbatdagi ishni bajarishga o'tib ketadi.
// Biz buni asinxron ya'ni bir ish tugamaguncha boshqa ishga o'tib ketmasligi ya'ni shu ishni tugatguncha kutishini amalga oshirishimiz uchun bizga --> setTimeout(colback function, time) mavjud.
// setTimeout(colback function, time) bu ikki parametr oladi. Biz hamma ishni colback ichida yozsak, time da esa shuish qancha vaqt kutilishini belgilay olamiz. Time har doim millisecundda beriladi.

// Sintacsis:
// setTimeout(()=>{

// },1000);

// Misol:
// console.log("Assalomu");
// setTimeout(()=>{
//   console.log("Azizlar!");
// },2000);
// console.log("alaykum");
// setTimeout() bizga asinxron jarayonni vujudga keltirib bergani uchun va javascrpt metodi emas balki browser tomonidan kiritilgan funcsiya bo'lgani uchun time qiymatini 0 qilib qo'ysangiz ham eng ohirgi bajariladigan jarayon hisoblanadi.

// setInterval(colback function, time);
// buning ham strukturasi setTimeoutga oxshaydi. Lekin bu belgilangan time oralig'ida doimiy ishlaydi ya'ni Infinity bo'lib qoladi.
// buni ko'proq soat yaratishlarda ishlatiladi.

// 10).
// call(), apply(), bind();
// Bularni ishlatishdan maqsad - contextga qiymat biriktirish, uni update qilish uchun ishlatiladi.
// Sintacsis:

// call()
// let obj = {
//   name: 'webbrain',
//   age: 22,
// }
// function func(title) {
//   console.log(this.name, this.age, title);
// }
// func.call(obj, "IT Center");

// apply()
// let obj = {
//   year: 2001,
//   status: "Talaba",
// }
// let func = function (id, fullname) {
//   console.log(id, this.year, this.status, fullname);
// }
// func.apply(obj, [1, "Azimov Foziljon"])

// bind();
// let obj = {
//   id:2,
//   name:"Webbrain",
//   surname:"Academy",
//   status:"IT Center",
// }
// function func(n){
//   console.log(this.id, this.name, this.surname, this.status,n);
// }
// func.bind(obj,5)();