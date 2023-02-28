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