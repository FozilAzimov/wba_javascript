// let user = {
//   id: 1,
//   name: "Azimjon",
//   age: 22
// }
// let {id, name, age} = user;
// console.log(user.age, age);

// let user = {
//   id: 1,
//   name: "Azimjon",
//   age: 53,
//   child:{
//     id:2,
//     name:"Foziljon",
//     age:22
//   }
// }
// let {id, name, age,child:{id:newId, name:newName,age:newAge}} = user;
// console.log(age, newAge);

// let user = {
//   id: 1,
//   name: "Azimjon",
//   age: 53,
//   child: {
//     id: 2,
//     name: "Foziljon",
//     age: 22
//   }
// }
// let func = ({ id, name, age, child: { id: newId, name: newName, age: newAge } }) => {
//   console.log(`User: ${id},${name},${age} Child:${newId},${newName},${newAge}`);
// }
// func(user)

// let user = {
//   id: 1,
//   name: "Azimjon",
//   age: 53,
//   child:{
//     id:2,
//     name:"Foziljon",
//     age:22
//   }
// }
// Object.entries(user).map(([key,value])=>{
//   console.log(key);
// })
// console.log("============================");
// Object.entries(user).map(([key,value])=>{
//   console.log(value);
// })

// let arr = [1,2,3,4,5,6,7,8,9,0];
// let [a,b,d, ...r] = arr;
// console.log(...r);

// let date = new Date();
// console.log(date);
// console.log(date.getMilliseconds()); //millisekund
// console.log(date.getSeconds()); //sekund
// console.log(date.getMinutes()); //minut
// console.log(date.getHours()); // soat
// console.log(date.getDate()); //bugungi sana
// console.log(date.getDay()); //hafta kuni
// console.log(date.getMonth()); //oy
// console.log(date.getFullYear()); //yil

// let arr = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
// let date = new Date();
// console.log(arr[date.getDay()]);

// JSON
// .json file dasturlashda nima uchun kerak bo'ladi deganda asosan dasturlash tillari o'rtasida ma'lumot almashinisha uchun juda qulay hisoblanadi.
// Bu ma'lumotlar asosan object va array dan tashkil topgan bo'ladi.Bu .json file juda yengil, va barcha dasturlash tillari tushinadigan file hisoblanadi.
// BeckEnd va FrontEnd o'rtasida barcha transferlar json file orqali amalga oshiriladi.

// let obj = {
//   id: 1,
//   name: "Foziljon",
//   surname: "Azimov",
//   age: 22,
//   status: "Student"
// }
// localStorage.setItem("nomi",JSON.stringify(obj,["name","age"],30))
// let res = localStorage.getItem("nomi");
// console.log(JSON.parse(res));
// console.log(JSON.stringify(obj,["name","age"],10));