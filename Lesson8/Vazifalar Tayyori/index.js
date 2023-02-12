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