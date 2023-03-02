// Homework

// 1).
// let func = (n) => n <= 1 ? n : n + func(--n);
// console.log(func(100));

// 2.1).
// let func = (n) => n === 1 ? n : n * func(--n);
// console.log(func(5));

// 2.2).
// let func = (n) => n <= 1 ? n : func(n - 1) + func(n - 2);
// console.log(func(7));

// 3).
// let webbrain = {
//   frontend: [
//     { cours: "react", price: 120 },
//     { cours: "veu", price: 110 },
//     { cours: "angular", price: 100 },
//   ],
//   beckend: [
//     { cours: "java", price: 120 },
//     { cours: "php", price: 110 },
//     { cours: "nodejs", price: 100 },
//   ],
//   mobile: {
//     android: [
//       { cours: "android", price: 120 },
//       { cours: "flutter", price: 110 },
//     ],
//     ios: [
//       { cours: "ios", price: 120 },
//       { cours: "flutter", price: 110 },
//     ],
//   },
// }

// let func = (data) => {
//   if (Array.isArray(data)) {
//     return data.reduce((sum, cur) => sum + cur.cours, 0);
//   }
//   else {
//     let res = 0
//     for (value of Object.values(data)) {
//       res += func(value);
//     }
//     return res;
//   }
// }
// console.log(func(webbrain));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// let func = (data) => {
//   console.log(data.value);
//   if(data.next) func(data.next);
// }
// func(list);...