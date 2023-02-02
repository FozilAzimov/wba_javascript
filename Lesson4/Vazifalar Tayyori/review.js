// switch case, Loop(for, while, do while)

// 1). Switch case
// switch case - bu huddi if else ga o'xshab bir nechta holatlarni tekshirib to'g'ri qiymatni olishga imkon yaratadi;
//if else dan farqi shundaki switch case har doim aniq bir qiymat kutadi; Biz if else ga o'xshab oraliq berib aniq natija chiqara olmaymiz.
// Strukturasi:
// switch(value){
//   case "value": console.log("Natija chiqadi!");
//   default:console.log("Yuqoridagi case ishlamasa oxiri default ishlaydi.");
// } 
//Bunda switch dan keyin yoziluvchi oddiy qavs ishidagi value case dan keyin tekshiriluvchi qiymatga qat'iy(===) teng bo'lsa keyin ikki nuqtadan keyin yoziluvchi code lar ishlaydi. Aks xolda ishlamaydi.

// 2). For loop
// looplar nima maqsadda ishlatiladi: Looplar asosan bir qiymatni takroriy chiqarish uchun ishlatiladi;
// Strukturasi:

// for(boshlangich nuqtasi; tugash nuqtasi; qadami){
//   code ...
// }

// looplarda tugash nuqtasi har doim true qiymat kelsa sikl ishlaydi. Agar tugash nuqtasi false qiymat qaytarsa loop o'z ishini butunlay to'xtatadi.
// for loopda oddiy qavs ichini soddalashtirish mumkin;
//for(;;){} bu holatda for scope ichida consolga nima ciqarmoqchi bo'lsangiz shi qiymat davriy chiqaveradi.(dastur buziladi.)
//for(let i=0;;){
//  console.log(i);
//  i++;
//} Bu holatda natija 0 dan boshlab cheksiz o'suvchi son chiqarib beradi;
// Shu yerda (var) va (let) veriablelarining falqi yana ko'rinadi;
// for(var i=0; i<5; i++){

// }
// console.log(i);// Bunda natija: 5 chiqadi. chunki var global veriable. Buni o'zidan pastdagi hamma joyda ishlatsak bo'ladi

// for(let j=0; j<5; j++){

// }
// console.log(j); //Bunda natija: j is not defined chiqadi. chunki let scope veriable. Faqat o'zining scope ichida ishlatsa bo'ladi.

// 3). while loop
// while loopi ning boshlangich nuqtasi whiledan oldin elon qilib qo'yiladi.Keyin while kalit so'zidan keyin oddiy qavsda condition tekshiriladi.
// While conditioni har doim true yoki false natija kutadi. True bolsa loop scope ichidagi codelar ishlaydi. False bo'lsa ishlamaydi.
// scope ichida codelar oxiriga loop qadami yozib ketiladi;
// Strukturasi:
// let a = 0;
// while(condition){
//   code ...
//   a++;
// }

// 4). do while loop
// do while loopi - for va while looplaridan bitta yaqqol farqi condition false natija qaytarsa ham dastur bir marta ishlab keyin o'z ishini tugatadi.
// Chunki do while da dastur birinchi scope ichidagi codelarni ishga tushirib bo'lganidan so'ng keyin condition tekshiriladi;
// Strukturasi:
// let b = 0;
// do{
//   code ...
//   b++;
// }while(condition); 
// qolgan holatlari while loopi bilan o'xshashdir.