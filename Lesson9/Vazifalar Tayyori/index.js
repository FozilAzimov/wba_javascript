// Qo'shimcha masalalar ishlanishi.

// 1).
// let user = [
//   { id: 2, name: 'Umar', age: 25 },
//   { id: 1, name: 'Foziljon', age: 22 },
//   { id: 4, name: 'Mahmud', age: 30 },
//   { id: 3, name: 'Azimjon', age: 24 },
//   { id: 5, name: 'Behruz', age: 23 },
//   { id: 7, name: 'Muhammad', age: 20 },
//   { id: 6, name: 'Shoyatbek', age: 32 },
//   { id: 8, name: 'Abdulloh', age: 21 },
// ]
// function func(s) {
//   if (!s.localeCompare("id")) return user.sort((a, b) => a.id - b.id);
//   else if (!s.localeCompare("age")) return user.sort((a, b) => a.age - b.age);
//   else if (!s.localeCompare("name")) return user.sort((a, b) => a.name.localeCompare(b.name));
//   else return "Hato qiymat kiritdingiz."
// }
// console.log(func('age'));

// 2).
// let user = [
//   { id: 2, name: 'Umar', age: 25 },
//   { id: 1, name: 'Foziljon', age: 22 },
//   { id: 4, name: 'Mahmud', age: 30 },
//   { id: 3, name: 'Azimjon', age: 24 },
//   { id: 5, name: 'Behruz', age: 23 },
//   { id: 7, name: 'Muhammad', age: 20 },
//   { id: 6, name: 'Shoyatbek', age: 32 },
//   { id: 8, name: 'Abdulloh', age: 21 },
// ]
// let func = (p) => {
//   return (user.map((value, index) => {
//     value[p] = index;
//     return value;
//   }))
// }
// console.log(func("status"));