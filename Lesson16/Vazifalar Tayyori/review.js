
// try catch    =================================
// try {
//   console.log(obj);
// } catch (error) {
//   console.log("Xatolik mavjud")
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
//   console.log(error);
// }


// Collback function    =================================
// let obj = null;
// console.log("Boshlanish");
// function getData(collFunc) {
//   setTimeout(() => {
//     obj = { name: "webbrain" };
//     collFunc();
//   }, 1000)
// }
// getData(info);

// function info() {
//   console.log(obj);
//   console.log("Tugash");
// }

// Collback hell    =================================
// let obj = null;
// console.log("Boshlanish");
// function getData(collFunc) {
//   setTimeout(() => {
//     let obj = () => {
//       console.log({ name: "webbrain" });
//     }
//     collFunc(obj);
//   }, 1000)
// }
// getData(info);

// function info(coll) {
//   coll();
//   console.log(obj);
//   console.log("Tugash");
// }

// Promise =====================================
// console.log("Boshlanish");
// let func = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Date.now() % 2 === 0) {
//       resolve(`Muammo hal bo'ldi, ${Date.now()}`);
//     }
//     else {
//       reject(`Qayta urinib ko'ring, ${Date.now()}`);
//     }
//   }, 1000)
// })

// func.then((res) => console.log(res)).catch((error) => console.log(error));
// console.log("Tugash");

// console.log("Boshlanish");
// let func = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let obj = { name: "webbrain" };
//     if (Date.now() % 2 === 0) {
//       resolve(obj);
//     }
//     else {
//       reject(`Qayta urinib ko'ring, ${Date.now()}`);
//     }
//   }, 0)
// })

// func
//   .then((res) => () => console.log(res))
//   .then((res) => res())
//   .catch((error) => console.log(error));
// console.log("Tugash");


// async await =====================================
// console.log("Boshlanish");
// let func = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Date.now() % 2 === 0) {
//       resolve(`Muammo hal bo'ldi, ${Date.now()}`);
//     }
//     else {
//       reject(`Qayta urinib ko'ring, ${Date.now()}`);
//     }
//   }, 1000)
// })

// func.then(res => res).catch(error => error);

// let get = async () => {
//   let data = await func;
//   console.log(data);
//   console.log("Tugash");
// }
// get();