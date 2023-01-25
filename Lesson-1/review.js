//  JavaScript: veriable, data types;

// 1. veriable: var, let, const;
// 2. data types: String, Number, Bigint, Undifined, Null, Blean, Symbol, Object;

// veriable nima o'zi: veriable - o'zida turli xil qiymatlarni saqlab turuvchi hisoblanadi. Buning qiymati chegaralanmagan;
// var => bunda bitta qiymat belgilab pastdan yana shu name bilan qiymat belgilansa ikkinchi qiymatni o'zlashtirib olavaradi.
// Misol: 
// var a = 10;
// var a = 20;
// console.log(a);  => manashunda a ning qiymti avtomatik ravishda 20 bo'ladi.

// let => bunda var singari bitta nameli veriablega qiymat berib bo'lmaydi.
// Misol:
// let b = 10;
// let b = 20; => ERROR
// console.log(b);

// const => bu o'zining nomi bilan constanta hisoblanadi. Bitta qiymat biriktirilgandan so'ng uni o'zgartirib bo'lmaydi.
// const c = 10;
// const c = 20; Error
// console.log(c);

// Data types
// 1. String '', "", ``;
// let text1 = "Azimov Foziljon";
// let text2 = 'Azimov Foziljon';
// let text3 = `Azimov Foziljon
// Toshkent Davlat Transport Unversitetida o'qiydi`;
// console.log(typeof text1, typeof text2, typeof text3);
// console.log(text1, text2, text3);
// let a = 'Foziljon';
// console.log(`Assalomu alaykum. Men Azimov ${a}.`)

// 2. Number
// let num = 10;
// console.log(typeof num, num);

// 3. Bigint
// let num = 9007199254740992;
// console.log(num);
// num++;
// console.log(num); => num qiymati o'zgarmaydi
// let num1 = 9007199254740992n;
// console.log(num1);
// num1++;
// console.log(num1); => bunda qiymat o'zgaradi. chunki oxiriga n harfini qo'shib qo'yiladi;

// 4. Undefined
// let a;
// console.log(a);

// 5. Null
// let b = null; => biz beckend dan keladigan lekin 
// hali qiymat aniq bo'lmagan veriableni null ga tenglab ketamiz;
// let b = null
// b = `Ma'lumot keldi`
// console.log(b);

// 6. Boolean
// true yoki false
// 1.true, 1, rost, ha => hammasi bir ma'noni bildiradi
// 1.false, 0, yolg'on, yo'q => hammasi bir ma'noni bildiradi
// let a = true;
// let b = false;
// console.log(typeof a, a);
// console.log(typeof b, b);

// 7. Symbol
// let a = Symbol('text');
// console.log(typeof a, a);
// let b = Symbol('text');
// let c = Symbol('text');
// console.log(b==c);
// console.log(b===c);
// Natija: false;

// 8. Object
// Object => 3 ga bo'linadi
// 1. array => []
// 2. object => {}
// 3. function => ()

// Biz bu data types larni 2 guruhga ajratamiz
// 1. Primitive => string, number, bigint, symbol, bolean, null, undifined;
// 2. non-Primitive => Object: array, object, function;