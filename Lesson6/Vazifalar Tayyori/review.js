// Object haqida

// 1).
// Object - sodda qilib aytadigan bo'lsam o'zida bir qancha ma'lumot saqlab turadigan container desak to'g'ri bo'ladi;
// Objectlarda har doim key va value dan tashkil topgan bo'ladi.

// 2).
// Objectni yaratishning ikki yo'li mavjud, ya'ni gullik qavs yozish orqali va konstruktor orqali;
// 1-si:  let obj1 = {};
// 2-si:  let obj2 = new Object();

// 3).
// Biz objectlarni qiymatini 2 usulda natijaga chiqarishimiz mumkin. Ular:
// 1-si: . nuqta orqali;
// let obj = {
//   name: "Foziljon",
//   surname: "Azimov",
//   age: 22
// }
// console.log(obj.name, obj.surname, obj.age);

// 2-si: [] kvadrat qavs orqali chiqarishimiz mumkin. Kvadrat qavs orqali objectning qiymatini chiqarishimiz daynamic usul diyiladi;
// Bu usulda kvadrat qavs ichida qo'shtirnoq ichiga biz objectdagi key nomini yozamiz. Shunda bizga valueni natijaga qaytaradi.
// Agar kvadrat qavs ichifa key yozib uni qo'shtirnoq ichiga olmasak u objectdan tashqaridagi veriable deb tushinadi va shu veriable qiymatini object key lari orasidan qidira boshlaydi;
// Undan tashqari biz key nomi ikki va undan ortiq bo'g'inli bo'lsa bemalol kvadrat qavsdan foydalanib buni ishlatib ketsak bo'ladi.
// Va yana shuki agar key nomi raqam bo'lsa ham huddi shu qavs yordamida natija chiqaramiz. Bunda kvadrat qavs ichida shu raqam yoziladi.String ichiga olsak ham olmasak ham farqi yoq raqamda;
// let obj = {
//   name: "Foziljon",
//   surname: "Azimov",
//   age: 22,
//   "full Name":"Azimov Foziljon",
//   7:false,
// }
// console.log(obj["name"]);
// // daynamic usuli
// let user = "surname";
// console.log(obj[user]);
// console.log(obj["full Name"]);
// console.log(obj[7]);
// console.log(obj["7"]);

// 4).
// Biz ko'p xollarda bizga kerakli key shu object ichida bormi yoki yo'qligini tekshirish uchun ,,in'' dan foydalanamiz.Bu har doim true yoki false natija qaytaradi; 
// let obj = {
//   name: "Foziljon",
//   surname: "Azimov",
//   age: 22
// }
// console.log("name" in obj); //true
// console.log("age" in obj); //true

// 5).
// Biz objectga ma'lumot qo'sha olamiz, o'zgartira olamiz va o'chirib tashlay olamiz;
// let obj = {};
// console.log(obj); // {}
// obj.name = "Webbrain";
// obj.surname = "Academy";
// console.log(obj); // {name:"Webbrain", surname: "Academy"}
// obj.name = "IT Center";
// console.log(obj); // {name: "IT Center", surname: "Academy"}
// delete obj.name;
// console.log(obj); // {surname: "Academy"}

// 6).
// Bizda bitta object bor. Shu object keylari va valuelarini alohida chiqarish kerak bo'lib qoladi.
// Shunda bizga ,for in, yordamga keladi.
// let obj = {
//   name:"Foziljon",
//   surname:"Azimov",
//   age:22,
//   status:"Talaba"
// }
// for(key in obj){
//   console.log(`${key}, ${obj[key]}`);
// }
// Shu holatda biz key larini chiqaradigan bo'lsak for in dagi keyga murojaat qilamiz,
// agar value kerak bo'lsa for in dagi obj[key] ga murojaat qilamiz;

// 7).
// Objectlarda Object.assign() metodi va spread operatori mavjud.
// Bular asosan bir nechta objectlarni bitta object ko'rinishiga olib keladi. Lekin sintaksis xar xildir;
// let obj1 = {
//   name:'Toshmat',
//   age: 20
// }
// let obj2 = {
//   name:'Eshmat',
//   age: 23
// }
// let obj3 = {
//   name:'Nurmat',
//   age: 25
// }

// 1-si: Object.assign() metodi orqali ko'ramiz;

