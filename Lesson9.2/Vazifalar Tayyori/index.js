// Homework

// 1).
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(eval(arr.join("+")));

// 2).
// let ar = ['webbrain', 'academy'];
// let newArr = ar.join("").toLowerCase().split("");
// let sum = "";
// let res = newArr.filter((value) => {
//   if (value !== value.toUpperCase()) sum += value;
// })
// console.log(sum.length);

// 3).
// let arr1 = [1,2,3,4,5];
// let arr2 = [1,2,3,4,5];
// console.log(arr1===arr2); // false
// console.log(arr1==arr2); // false
// console.log(arr1!=arr2); // true

// 4).
// let func = (str) => {
//   let newStr = "";
//   str.split("-").map((v, i) => i === 0 ? newStr = v : newStr += v[0].toUpperCase()+v.slice(1));
//   return newStr;
// }
// console.log(func("webbrain-academy"));

// 5).
// let users = [
//   { id: 1, year: 1998, engine: 1, name: "Tico" },
//   { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, year: 2012, engine: 2, name: "Malibu" },
//   { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ]
// 1-savol:
// let res = users.filter(value => {
//   if (value.year < 2000) return value;
// })
// console.log(res);

// 2-savol:
// let res = users.filter(value => {
//   if (value.year > 2010) return value;
// })
// console.log(res);

// 3-savol:
// console.log(users.sort((a,b)=>b.engine-a.engine));

// 4-savol:
// console.log(users.sort((a,b)=>a.year-b.year));

// 5-savol:
// console.log(users.sort((a,b)=>a.name.localeCompare(b.name)));

// 6-savol:
// let res = users.filter(value => {
//   if (value.year < 2000) return value.status = 'eski';
//   else return true;
// })
// console.log(res);

// 7-savol:
// let res = users.filter(value => {
//   if (value.year >= 2000 && value.year <= 2010) return value.status = `o'rta`;
//   else return true;
// })
// console.log(res);

// 8-savol:
// let res = users.filter(value => {
//   if (value.year > 2010 && value.year <= 2022) return value.status = `yangi`;
//   else return true;
// })
// console.log(res);

// let arr = ['olma', 'kivi', 'banan', 'ananas'];

// Savol: 1-si  --> array ichidagi harf sonini toping?

// 1-sini javobi
// function getCount(ar) {
//   let res = ar.reduce((summ, curr) => {
//     for (v of curr) summ += 1;
//     return summ;
//   }, 0)
//   console.log(res);
// }
// getCount(arr)


// Savol: 2-si  --> array ichidagi elementlarning qay birida funcsiyadan kiritilgan harf bor bo'lsa shu harf katta bo'lib qolsin.
// Natija: agar n harfi kiritilsa --> ["olma", "kivi", baNaN, aNaNas];

// 2-sini jovobi
// function getArr(ar, harf) {
//   let newArr = ar.map(v => {
//     if (v.includes(harf)) {
//       let res = v.replaceAll(harf, harf.toUpperCase());
//       return res;
//     }
//     else {
//       return v
//     }
//   })
//   console.log(newArr);
// }
// getArr(arr, "n")