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
// searchValue(obj, "qizil"); //=> atirgul, qizil