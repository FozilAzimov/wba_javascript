
// Curry function.

// let sum = (param1) => {
//   return (param2) => {
//     if (param2) return sum(param1 + param2);
//     console.log(param1);
//   }
// }

// sum(1)(2)(3)();

// 1-ta'rif:  Curry function deb mavjud function bir boshqa functionni return qilsa manashu function curry function deb aytiladi.
// 2-ta'rif:  Curry function deb mavjud function chaqirilishida bir nechta marta chaqirilsa ya'ni sum()()()().... shu ko'rinishda bo'lsa curry function deb aytiladi;





// let obj = {
//   id: 1,
//   name: "webbrain",
//   surname: "academy",
//   age: 4,
//   status: "IT Center",
//   getRes(fullName) {
//     console.log(fullName, this.id, this.name, this.surname, this.age, this.status);
//   }
// }

// let newGet = obj.getRes;
// newGet.call(obj, "Azimov Foziljon");