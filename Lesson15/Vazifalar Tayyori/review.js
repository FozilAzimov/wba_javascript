// let obj = {
//   id: 1,
//   name: "webbrain",
//   surname: "academy",
//   get getfull() {
//     console.log(this.name, this.surname);
//   },
//   set getfull(value) {
//     this.name = value.name;
//     this.surname = value.surname;
//   }
// }

// obj.getfull = { name: "Eshmat", surname: "Toshmatov" };

// obj.getfull;

// Class ==> JavaScriptga oldinlari funcsiya tushinchasi kirib kelmasdan oldin manashu constractive class lardan foydalanib ketilgan.
// Project larda hozir class lar ishlatilinmaydi bularni o'rnini alternative sifatida functionlardan foydalaniladi.
// Class lar ham huddi Objectlarga o'xshab ishlaydi.

// class Users {
//   getfull(value){
//     console.log(value);
//   }
// }

// let obj1 = new Users();


// obj1.getfull("webbrain academy")

// class Users {
//   constructor(value) {
//     console.log( value);
//   }
//   count = 0;
//   getfull() {
//     console.log(++this.count);
//   }
// }

// let obj1 = new Users("webbarin");
// let obj2 = new Users("Digital One");

// // obj1.getfull()
// // obj1.getfull()
// // obj1.getfull()
// // obj2.getfull()

// class Users {
//   constructor(value) {
//     this.value = value;
//   }
//   name = 'Fozilljon';
//   getfull() {
//     console.log(this);
//     console.log(this.value);
//   }
// }

// let obj1 = new Users("webbarin");
// let obj2 = new Users("Digital One");

// obj1.getfull()
// obj2.getfull()


// class Users {
//   get getfull() {

//   }
//   set getfull(title) {
//     console.log(title);
//   }
// }

// let obj1 = new Users();

// obj1.getfull = "Foziljon Azimov";


// class Users {
//   ["full"+"name"](value){
//     console.log(value);
//   }
// }

// let obj = new Users();

// obj.fullname("Azimov Foziljon")

// Class larning yaxshi hususiyatidan biri bu meros olish hisoblanadi (Inheritence).


// class Tezlik {
//   getSpeed(tezlik) {
//     console.log(`tezligi ${tezlik}km ga teng.`);
//   }
// }

// class Bori extends Tezlik {
//   getName(value) {
//     console.log(`${value}ning 2 ta qulog'i bor.`);
//   }
// }
// class Tulki extends Tezlik {
//   getName(value) {
//     console.log(`${value}ning 2 ta qulog'i bor.`);
//   }
// }

// class Ot extends Tezlik {
//   getName(value) {
//     console.log(`${value}ning 2 ta qulog'i bor.`);
//   }
// }
// let bori = new Bori();
// let tulki = new Tulki();
// let ot = new Ot();


// bori.getName("Bo'ri");
// bori.getSpeed(12);
// console.log("===============");
// tulki.getName("Tulki");
// tulki.getSpeed(12);
// console.log("===============");
// ot.getSpeed(15)
// ot.getName("Ot")

// Manashu holatda qanday qilib Bori(),Tulki(),Ot() larning __proto__ siga Teazlik() ma'lumotlari qo'shilib qoldi, o'tgan darsdan biz __proto__ ni yaxshi bilamiz. Huddi shu holatda ishlaydi. Asli birlashgan lekin consoleda ko'rinmaydi.

// class Tezlik {
//   parent(){
//     console.log("Bu ma'lumotlat parent methoddan kelmoqda!");
//   }
//   getSpeed(tezlik) {
//     console.log(`tezligi ${tezlik}km ga teng.`);
//   }
// }

// class Bori extends Tezlik {
//   getName(value) {
//     console.log(`${value}ning 2 ta qulog'i bor.`);
//   }
// }
// class Tulki extends Tezlik {
//   getName(value) {
//     console.log(`${value}ning 2 ta qulog'i bor.`);
//   }
// }

// class Ot extends Tezlik {
//   child(){
//     console.log("Bu ma'lumotlat child methoddan kelmoqda!");
//   }
//   getName(value) {
//     this.child();
//     super.parent();
//     console.log(`${value}ning 2 ta qulog'i bor.`);
//   }
// }
// let bori = new Bori();
// let tulki = new Tulki();
// let ot = new Ot();

// ot.getName()

// Biz manashu holatdagidek parent ma'lumotlarini olish uchun (super) kalit so'zdan foydalanamiz.


// class Tezlik {
//   constructor(name){
//     this.name = name
//   }
//   getSpeed(tezlik) {
//     console.log(`${this.name}ning tezligi ${tezlik} km ga teng.`);
//   }
// }

// class Bori extends Tezlik {
//   constructor(name) {
//     super(name);
//   }
// }

// let bori = new Bori("Bo'ri")

// bori.getSpeed(12)


// class Teazlik {
//   constructor(name) {
//     console.log(name);
//   }
// }

// class Bori extends Teazlik {}

// let tezlik = new Teazlik("Quyon")
// let bori = new Bori("Bori")


// class Teazlik {
//   constructor(name) {
//     console.log(name);
//   }
// }

// class Bori extends Teazlik {
//   constructor(...args) {
//     super(...args);
//   }
// }

// let tezlik = new Teazlik("Quyon")
// let bori = new Bori("Bori")