// Homework

// 1).
// let str = "Webbrain Academy";
// let newStr=str.split(" ").join("")
// let obj = { max: 0, min: 0 }
// for (v of newStr) {
//   v === v.toUpperCase() ? obj.max++ : obj.min++;
// }
// console.log(obj);

// 2).
// let str = "WebBr@in Ac@demy";
// let res = newStr.split("").map((v,i)=>{
//   if(v==="@")v="a";
//   return v;
// })
// console.log(res.join(""));

// let str = "webbbraiiin accaddemmy";
// let newStr = "";
// let res = str.split("").filter(v=>{
//   if()newStr+=v;
// })
// console.log(newStr);

// 3).










// 4).
// 1-usul
// let str = "We66ra1n Acad4my";
// let res = str.split(" ").join("").split("").map(v => {
//   if (!isNaN(v)) return v;
// })
// console.log(+res.join(""));

// 2-usul
// let str = "We66ra1n Acad4my";
// let res = str.split(" ").join("").split("").filter(v => {
//   if (!isNaN(v)) return v;
// })
// console.log(+res.join(""));

// 5).
// let func = (str) => {
//   let res = str.split("").map(v => v.repeat(2));
//   console.log(res.join(""));
// }
// func("webbrain");

// 6).
// let func = (str) => {
//   str===(str.split("").reverse().join(""))?console.log(`so'z palindrom`):console.log(`so'z palindrom emas`);
// }
// func("ikki");

// 7).
// let func = (str1, str2) => {
//   let res1 = str1.split("").sort((a, b) => a.localeCompare(b));
//   let res2 = str2.split("").sort((a, b) => a.localeCompare(b));
//   res1.join("") === res2.join("")?console.log("teng"):console.log("teng emas");
// }
// func("web","ewb");

// 8).
// let str = "webbrain academy";
// let newStr = str.split(" ").join("");
// let obj = {};
// for (value of newStr) {
//   value in obj ? obj[value]++ : obj[value] = 1;
// }
// console.log(obj);

// 9).



// 10.1).
// let obj = {id:1, name:"webbrain",age:4};
// for(i in obj){
//   console.log(i);
// }

// 10.2).
// let obj = {
//   title:"Webbrain",
//   age:4,
//   child:{
//     age:6,
//     name:"Webbrain",
//     child:{
//       age:3,
//     }
//   }
// }
// let sum = 0;
// while(obj){
//   sum+=obj.age;
//   obj=obj.child;
// }
// console.log(sum);

// 11).
// let obj = {
//   id:1,
//   name:"webbrain",
//   offline:true,
//   online:true,
//   individual:false,
// }
// for(i in obj){
//   if(typeof obj[i] === "boolean")console.log(`${i}:${obj[i]}`);
// }

// 12.1).
// 1-usul
// let func = (num)=>{
//   let res = num.filter((v,i)=>{
//     return num.indexOf(v)===i;
//   })
//   console.log(res);
// }
// func([2, 3, 5, 3, 2, 3, 6, 8, 7, 6]);

// 2-usul
// let func = (num)=>{
//   let res = num.reduce((sum, value) => {
//     if (sum.indexOf(value)<0) sum.push(value);
//     return sum;
//   }, [])
//   console.log(res);
// }
// func([2, 3, 5, 3, 2, 3, 6, 8, 7, 6]);

// 12.2).
// let ar1 = [1,2,3];
// let ar2 = [1,2,3];
// console.log(ar1.join("")===ar2.join(""));

// 12.3).
// let arr = [1, 64, 8, 27, 64, 125];
// let res = arr.filter(v => {
//   if (!isNaN(v)) return v >= 10 && v < 100;
// });
// console.log(res);

// 13).
// let arr = [2,3,2,4,5,1,3];
// console.log(arr);
// let i = 0
// while (1) {
//   if(arr.length>1){
//     let res1 = arr.reduce((sum, curr) => {
//       if (curr > sum) {
//         sum = curr;
//       }
//       return sum;
//     }, arr[0])
//     let index1 = arr.indexOf(res1);
//     arr.splice(index1, 1);
//     //Birinchi katta son topish
  
//     let res2 = arr.reduce((sum, curr) => {
//       if (curr > sum) {
//         sum = curr;
//       }
//       return sum;
//     }, arr[0])
//     let index2 = arr.indexOf(res2);
//     arr.splice(index2, 1);
//     //Ikkinchi katta son topish
  
//     let res = Math.abs(res1 - res2);
//     res ? arr.splice(index1, 0, res) : arr;
//     console.log(arr);
//     i++;
//   }
//   else break;
// }