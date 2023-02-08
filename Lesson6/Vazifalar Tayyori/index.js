// Homework

// 1).
// let user = {}; //Bu lineda yangi user nomli object yaratildi;
// user.name = "John"; //bu lineda user objectiga ma'lumot qo'shildi;
// user.surname = "Smith"; //bu lineda user objectiga ma'lumot qo'shildi;
// user.name = "Pete"; //bu lineda object malumoti o'zgartirildi;
// delete user.name; //bu lineda user objectidan name malumoti o'chirildi.
// console.log(user); // Va natija consolega chiqarildi;

// 2).
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for(key in salaries){
//   sum+=salaries[key];
// }
// console.log(sum);

// 3).
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// }
// for (key in menu) {
//   typeof menu[key] === "number" ? console.log(menu[key] * 2) : console.log(menu[key]);
// }

// 4).
// let obj = {
//   id: 1,
//   name: "WebBrain"
// }
// for(key in obj)console.log(key);

// 5).
// let obj = {
//   id: 1,
//   name: "WebBrain"
// }
// for (key in obj) {
//   if(typeof obj[key] === "number")console.log(key);
// };

// 6).
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false
// }
// for(key in obj){
//   if(typeof obj[key]==="boolean")console.log(`${key}:${obj[key]},`);
// }

// 7).
// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false
// }
// function Search(obj, str) {
//   for(key in obj){
//     if(obj[key] === str)console.log(`Key = ${key},\nValue = ${obj[key]}`);
//   }
// }
// Search(obj, 'WebBrain')

// 8).
// let obj = {
//   id: 1,
//   name: "atirgul",
//   color: "qizil",
//   count: 10,
//   price: "10$"
// }
// function searchValue(obj, value){
//   for(key in obj){
//     if(obj[key]===value)console.log(`Key = ${key},\nValue = ${obj[key]}`);
//   }
// }
// searchValue(obj, "qizil"); //=> atirgul, qizil;

// 9).
// let person = {
//   id: 1,
//   name: 'Odil',
//   age: 78,
//   child: {
//     id: 1,
//     name: 'Ali',
//     age: 48,
//     child: {
//       id: 1,
//       name: 'Umar',
//       age: 20
//     }
//   }
// }
// let {age:newAge1, child:{age}, child:{child:{age:newAge2}}} = person;
// console.log(newAge1+age+newAge2);

// 10).
// let obj = {
//   id: 1, name: 'Usmon', job: 'developer'
// }
// let obj2 = structuredClone(obj);
// obj2.name = "Foziljon";
// console.log(obj);
// console.log(obj2);

// 11).
// let obj = {
//   name: "Foziljon",
//   age: 22
// }
// let func = (a) => obj.surname = a;
// func("azimov");
// console.log(obj);

// 12).
// let obj = {
//   id: 1,
//   name: 'Usmon',
//   job: 'developer',
//   practice: 1
// }
// if(obj.practice>1)console.log("Qabul qilindi");
// else console.log("Ming bor uzur");

// 13).
// let obj = {
//   id: 1,
//   name: 'Usmon',
//   job: 'developer',
//   practice: 1,
//   talaba: true
// }
// "talaba" in obj ? obj.kiridit = true:obj.kiridit="olinmadi";
// console.log(obj);

// 14).
// let obj = {
//   id: 1,
//   name: 'Usmon',
//   age: 34,
//   year: 1990
// }
// if ((2023 - obj.year) === obj.age) console.log("Ma'lumot to'g'ri");
// else console.log("Ma'lumot hato");

// 15).
// let obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }
// for(key in obj){
//   if(typeof obj[key] === "object") console.log(true);
// }

// 16).
// let person = {
//   id: 1,
//   name: 'Umar',
//   surname: 'Ismoilov',
// }
// person.ielts = 5.5;
// console.log(person);
// person.ielts >= 5.5 ? console.log("Qabul qilindi") : console.log("Qayta topshirish kerak");
// person.student = true;
// console.log(person);
// if (person.student) {
//   person.parol = person.id + parseInt(Math.random() * 10);
// }
// console.log(person);
// let personFunc=(parol,personName)=>{
//   if(person.name===personName&&person.parol===parol)console.log("Hush kelibsiz");
//   else console.log("Parol yoki name xato");
// }
// personFunc(5,"Umar");