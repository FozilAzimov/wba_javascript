// Class basics

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


// Class advenced

// Class ning vazifasi nima - class objectga template(shablon, struktura) yasash uchun ishlatiladi.

// class User {
// age = 0;
// getAge() {
//   console.log(++this.age);
// }
//   year = 0;
//   getYear() {
//     console.log(++this.year);
//   }
// }

// let bir = new User;
// let ikki = new User;

// age.getYear()
// age.getYear()
// year.getYear()

// static veriable nima? - static veriable classda bitta global verible yasash uchun kerak.

// class User {
// age = 0;
// getAge() {
//   console.log(++this.age);
// }
//   static year = 0;
//   getYear() {
//     console.log(++User.year);
//   }
// }

// let bir = new User;
// let ikki = new User;

// bir.getYear()
// bir.getYear()
// ikki.getYear()

// User.getYear()
// User.getYear()
// User.getYear()

// Biz class ning static method didan foydalanib ikkita bir-biriga aloqasi bolmagan constructor larni chaqirsak bizga alohida emas bitta sistema bo'lib ishlaydi.

// class salom {
//   _name = 'Foziljon';
//   #protected = "Azimov";
//   getName() {
//     console.log(this._name);
//     console.log(this.#protected);
//   }
// }

// let pro = new salom()
// console.log(pro.#protected); // Error
// pro.getName();

// Biz (_public) bo'lgan ma'lumotlarni class ichida va tashqarisida bemalol ishlata olamiz. Lekin (#protected) bo'lgan ma'lumotlarni faqat class ichida ishlata olamiz holos.

// class salom {
//   _name = 'Foziljon';
//   #protected = "Azimov";
//   get getName() {
//     console.log(this.#protected);
//   }
//   set getName(value) {
//     this.#protected = value;
//     console.log(this.#protected);
//   }
// }

// let pro = new salom();
// pro.getName;
// pro.getName = "Muhammad"
// pro.getName = "Abdulloh"

// Protected qiymatlarini gettr, settr orqali o'zgartira olamiz.

// class Arr extends Array{}

// let arr = new Array();
// console.log(arr.length);
// console.log(Array.isArray(arr));

// barcha Array methodlarini ishlatib ketsak bo'ladi.
// extends dan keyn Array yozilsa bu array xususiyatlari shu Arr ga o'tadi.
// Agar extends dan keyn Object bo'lsa object xususiyatlari o'tadi.

// class Arr extends Array { }

// let arr = new Array()
// let name1 = []
// let name2 = () => { }
// let name3 = "webbran academy"
// console.log(name1 instanceof Array);
// console.log(name2 instanceof Object);
// console.log(name3 instanceof Object);

// Bu yerda (instenceof) bir ma'lumot ikkinchi ma'lumotning copysidanmi, ya'ni o'zagidanmi degan ma'noda keladi.

// class User {
//   getName() {
//     console.log("Assalom");
//   }
// }
// let obj = {
//   getInfo() {
//     console.log("O'zbekiston");
//   }
// }
// Object.assign(User.prototype, obj);
// let add = new User()
// add.getName()

// Bu yerda class blan objectni birlashtiradi prototype.