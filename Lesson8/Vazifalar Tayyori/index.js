// Homework


// raqam - 48, ... 57
// harfKatta - 65,...90
// harfKichik - 97,...122

// 1).
// let func = (str1,str2)=>{
//   switch(str1.localeCompare(str2)){
//     case -1:console.log("teng emas");
//     break;
//     case 1:console.log("Qisman teng");
//     break;
//     default:console.log("teng");
//   }
// }
// func("webbrain","webbrain!")

// 2).
// let text = "Webbrain";
// text = text.toLowerCase();
// let newMp = new Map();
// for (value1 of text) {
//   count = 0;
//   for (value2 of text) if (value1 === value2) count++;
//   newMp.set(value1, count);
// }
// console.log(newMp);

// 2-misolning Optimal yechimi
// let text = "Webbrain";
// text = text.toLowerCase();
// let newObj = {};
// for (value of text) {
//   if (value in newObj) newObj[value]++;
//   else newObj[value] = 1;
// }
// console.log(newObj);

// 3).
// let truncate = (str, n) => str.slice(0,n);
// console.log(truncate("Webbrain", 0));

// 4).
// let n = "@536$63^!5352",str = "";
// for (i of n) if (!isNaN(i)) str += i;
// console.log(+str);

// 5).
// let text = "Webbr@!n_2023";
// let obj = { letter: 0, char: 0, number: 0 };
// for (value of text) {
//   if (value.charCodeAt(0) >= 48 && value.charCodeAt(0) <= 57) obj.number++;
//   else if (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90) obj.letter++;
//   else if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122) obj.letter++;
//   else obj.char++;
// }
// console.log(obj);

// 5-misolning soddaroq ishlanish yo'li
// let text = "Webbr@!n_2023";
// let textLower = text.toLocaleLowerCase();
// let obj = { letter: 0, char: 0, number: 0 };
// for(value of textLower){
//   if(value.toUpperCase()!==value.toLowerCase())obj["letter"]++;
//   else if(!isNaN(value))obj["number"]++;
//   else obj["char"]++;
// }
// console.log(obj);

// 6).
// let textFristUpper=(text)=> text.toLowerCase().split(" ").map(newName => newName[0].toUpperCase()+newName.slice(1)).join(" ");
// console.log(textFristUpper("assalomu alayku hammaga"));

// Qo'shimcha misollar
// let str = 'Webbrain';
// let newStr = str.split(" ").join("").toLowerCase();
// let obj = {};
// for (value of newStr) {
//   if (value in obj) obj[value]++;
//   else obj[value] = 1;
// }
// console.log(obj);
// Natija: { w: 1, e: 1, b: 2, r: 1, a: 1, i: 1, n: 1 }

// Berilgan: '123'
// let n = '123',uch = n % 0b1010;
// (uch === 0b1001)?console.log((n - 0b1001).toString()):console.log((+n + 0b0001).toString());
//Natija: '124'

// 1).
// let a = -5.678;
// console.log(Math.round(a)); // -6
// console.log(Math.floor(a)); // -6
// console.log(Math.trim(a)); // -5
// console.log(Math.sign(a)); // -1
// console.log(parseInt(a)); // -5

// 2).
// let title = "name";
// let obj = {
//   name:"webbrain",
//   title:"IT Center",
//   [title]:"webbrain academy",
//   title,
// }
// console.log(obj[title]); //webbrain academy
// console.log(obj.title); //name
// console.log(obj.name); //webbrain academy

// 3).
// console.log('webbrain' || true); // webbrain
// console.log('webbrain' && true); // true
// console.log('webbrain' ?? true); // webbrain
// console.log('===================');
// console.log(null || 'webbrain'); // webbrain
// console.log(null && 'webbrain'); // null
// console.log(null ?? 'webbrain'); // webbrain

// 4).
// console.log(eval([1,2,3,4,5,6,7,8,9].join('+')));

// 5).
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = arr.filter((a, b) => a % 2 === 0);
// console.log(res);

// 6).
// let arr = [1, 8, 9];
// let num = +arr.join("");
// var bir = parseInt(num / 100);
// var ikki = parseInt(num / 10) % 10;
// var uch = num % 10;
// if (uch === 9) {
//   num++;
//   var bir = parseInt(num / 100);
//   var ikki = parseInt(num / 10) % 10 - 1;
//   var uch = num % 10;
//   console.log([bir, ikki, uch]);
// }
// else{
//   num++;
//   var bir = parseInt(num / 100);
//   var ikki = parseInt(num / 10) % 10;
//   var uch = num % 10;
//   console.log([bir, ikki, uch]);
// }

// 7).
// let obj = {
//   id: 1, name: "Umar", age: 20,
//   child: {
//     id: 1, name: "Salim", age: 25,
//     child: {
//       id: 1, name: "Alim", age: 16,
//       child: {
//         id: 1, name: "Vali", age: 18,
//         child: {
//           id: 1, name: "Murod", age: 15,
//           child: {
//             id: 1, name: "Maqsad", age: 22,
//             child: {
//               id: 1, name: "Hayyom", age: 17,
//             }
//           }
//         }
//       }
//     }
//   }
// }
// while (1) {
//   if (obj) {
//     if (obj.age >= 18) console.log(`ismi: ${obj.name}, yoshi: ${obj.age}`);
//   }
//   else break;
//   obj = obj.child;
// }