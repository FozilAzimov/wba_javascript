// Homework 

// 1). Errorni aniqlang
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     this.name = name;
//     this.created = Date.now()
//   }
// }

// let rabbit = new Rabbit("Assalomu alaykum")
// console.log(rabbit.name);

// ======================================================

// Bu xolatda xatolik Rabbit extends Animal ga bo'lganida constructor ichida ( super() ) methodni yozib ketish shart.

// To'g'rilangan holati

// class Animal {
//   constructor(name) {
//     this.name = name
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super();
//     this.name = name;
//     this.created = Date.now()
//   }
// }

// let rabbit = new Rabbit("Assalomu alaykum")
// console.log(rabbit.name, rabbit.created);


// 2). Errorni aniqlang
// class Rabbit extends Object {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let rabbit2 = new Rabbit("Rab");

// console.log(rabbit2.hasOwnProperty('name')); 

// =======================================================

// Bu holatda biz Rabbit class ichidagi construktor ichiga super() keywordini yozishimiz kerak.

// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit2 = new Rabbit("Rab");

// console.log(rabbit2.hasOwnProperty('name')); 