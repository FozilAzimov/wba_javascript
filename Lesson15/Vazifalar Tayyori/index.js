// Homework 

// Code ning xatoligini toping.

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

// =================================================================

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