
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

// Proxy

// let obj = {
//   name: "webbrain",
//   email: "webbrain@academy",
//   _stir: 12345,
//   start: 1,
//   end: 10,
// }


// Proxy:--> get(), set(), ownKeys(), has() methodlari bor.

// let proxy = new Proxy(obj, {
//   get(target, prop) {
//     return target[prop]
//   }
// })

// console.log(proxy.name);

// Biz get() methoddidan foydalanib obj ning malumotlarini ayrimlarini bloklab qo'yishimiz mumkin.
// let proxy = new Proxy(obj, {
//   get(target, prop) {
//     return prop === "_stir" ? "no data" : target[prop]
//   }
// })
// console.log(proxy._stir);


// Biz set() methoddidan foydalanib obj ning valuelarini update qila olmaydigan qilishimiz mumkin.
// let proxy = new Proxy(obj, {
//   set(target, prop, value) {
//     if (prop === "_stir") return false;
//     else if (prop === "name") return false;
//     else {
//       target[prop] = value;
//       return true;
//     }
//   }
// })
// proxy.name = "Academy";
// proxy._stir = 98765
// console.log(proxy.name);


// Bunda ownKeys() methoddidan foydalanib biz obj dagi keylarni shartimifa mos kelmaganini obj dan chiqarib yuborishimiz mumkin.
// let proxy = new Proxy(obj, {
//   ownKeys(target) {
//     return Object.keys(target).filter(value => !value.startsWith("_"))
//   }
// })
// console.log(Object.keys(proxy));
// console.log(Object.values(proxy));
// console.log(Object.entries(proxy));

// for (key in proxy) {
//   console.log(key);
// }
// console.log("=================");
// for (key in proxy) {
//   console.log(proxy[key]);
// }


// has() methiddidan foydalanib biz berilgan son obj ichidagi kerakli keyning valuesi orasidami yoki yo'qligini bilib olamiz.
// let proxy = new Proxy(obj, {
//   has(target, prop) {
//     return prop >= target.start && target.end >= prop;
//   }
// })
// console.log(11 in proxy);
// console.log(10 in proxy);
// console.log(1 in proxy);
// console.log(0 in proxy);

// Reflect. (set, get, ownKeys, has) hammasi Proxy ning soddalashtirilgan varianti hisoblanadi.
// Reflect.set(obj, "age", 4)
// console.log(obj);
// console.log(Reflect.get(obj, "name"));
// console.log(Reflect.ownKeys(obj));
// console.log(Reflect.has(obj, "name"));
// console.log(Reflect.has(obj, "_stir"));
// console.log(Reflect.has(obj, "age"));


// object ichidagi function qiymati boshqa veriablega biriktirilsa, functionning reference uziladi.
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