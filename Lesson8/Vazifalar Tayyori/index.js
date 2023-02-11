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

// 3).
// let truncate = (str, n) => str.slice(0,n);
// console.log(truncate("Webbrain", 3));

// 4).
// let func = (str) => +str.slice(1);
// console.log(func("$2392"));

// 5).
// let text = "Webbr@!n_2023";
// let letter=0,char=0,number=0;
// let obj = {};
// for (value of text) {
//   if (value.charCodeAt(0)>=48&&value.charCodeAt(0)<=57)number++;
//   else if(value.charCodeAt(0)>=65&&value.charCodeAt(0)<=90)letter++;
//   else if(value.charCodeAt(0)>=97&&value.charCodeAt(0)<=122)letter++;
//   else char++;
// }
// obj.letter=letter;
// obj.char=char;
// obj.number=number;
// console.log(obj);
// console.log(text.charCodeAt(0));

// 6).
// let textFristUpper=(text)=> text.split(" ").map(newName => newName[0].toUpperCase()+newName.slice(1)).join("");
// console.log(textFristUpper("assalomu alaykum hammaga"));