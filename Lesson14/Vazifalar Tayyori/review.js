// let obj = {
//   name: "webbrain",
//   age: 4
// }
// console.log(Object.defineProperty(obj, "name", { value: undefined }));
// console.log(Object.defineProperty(obj, "name", { writable: false }));
// console.log(Object.defineProperty(obj, "age", { configurable: false }));
// console.log(Object.defineProperty(obj, "name", { enumerable: false }));

// obj.name = "Academy";

// for(k in obj){
//   console.log(k);
// }

// delete obj.age;

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// console.log(Object.getOwnPropertyDescriptor(obj, "age"));
// console.log(obj);

// let obj = { name: "webbrain", age: 4 }
// Object.preventExtensions(obj)  // (no add)
// Object.isExtensible(obj)  // Object.preventExtensions(obj) ning aksi hisblanadi.
// Object.seal(obj)  // (no delete, no add)
// Object.isSealed(obj)  // Object.seal(obj) ning aksi hisoblanadi.
// Object.freeze(obj);  // (no delete, no add, no update)
// Object.isFrozen(obj)  // Object.freeze(obj) ning aksi hisoblanadi.
// delete obj.name;
// obj.year = 2019;
// obj.age = 5
// console.log(obj);





// let getPow = () => fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json()).then(res => console.log(res));

// let getCachad = (func) => {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       console.log(cache.get(x));
//     }
//     else {
//       let res = func(x);
//       console.log("new data");
//       cache.set(x, res);
//     }
//   }
// }

// getPow = getCachad(getPow);
// getPow(1);


// let obj = {
//   name: "Foziljon",
//   getFunc() {
//     return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(res => res.json()).then(res => console.log(res));
//   },
// }

// let getCalc = function (func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       console.log(cache.get(x));
//       return cache.get(x);
//     }
//     else {
//       let res = func.call(this);
//       return cache.set(x, res);
//     }
//   }
// }
// obj.getFunc = getCalc(obj.getFunc);


// let obj1 = { name: "webbrain", age: 4 }
// let obj2 = { year: 2019, status: "IT Center" }
// console.log(Object.assign(obj1, obj2));

// obj1.__proto__=obj2;
// obj1.status = "IT"
// console.log(obj1.status);
// console.log("year" in obj1);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Array.prototype.remove = function (a, b) {
//   let res = this.filter(v => a !== v && b !== v);
//   console.log(res);
// }

// arr.remove(5,9);