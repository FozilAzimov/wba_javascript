// Homework

// 1 - misol
// let browser = "Chrome";
// switch (browser) {
//   case "Chrome": console.log(`Sizning browseringiz ${browser}`);
//     break;
//   case "Firefox": console.log(`Sizning browseringiz ${browser}`);
//     break;
//   case "Safari": console.log(`Sizning browseringiz ${browser}`);
//     break;
//   case "Opera": console.log(`Sizning browseringiz ${browser}`);
//     break;
//   default: console.log("Siz kiritgan qiymat noto'g'ri");
// }

// 2-misol
// let a = 2;
// let b = 3;
// if (a == 0) console.log(a);
// else if(a==1)console.log(a);
// else if(a==2||b==3) console.log(`${a},${b}`);
// else console.log("Qiymat hato");

// 3-misol
// let a = 3;
// while(a){
//   console.log(a--); //=> bunda natija: 3,2,1 chiqadi va 0ga kelganda condition false natija qaytaradi va loop o'z ishini tugatadi;
// }

// 4-rasm
// let i = 0;
// while(++i<5) console.log(i); // Natija 1,2,3,4 chiqadi 5 ga o'tkanda condition false qaytaradi va loop o'z ishini tugatadi;

// 5-misol
// let i = 0;
// while(i++<5) console.log(i); //Bunda Natija 1,2,3,4,5 chiqadi. chunki step 5 ni chiqarib keyin 1 qo'shadi.

// 6-misol
// for(let i=0; i<3; i++)console.log(`number ${i}`); // Natija number 0, number 1, number 2 chiqadi. Forda step scope ichidagi codening barchasi ishlab bo'lgandan so'ng qo'shadi;
// let a = 10;

// 7-misol
// let num = 100; //Bu qatorda num ning qiymati 20 ga teng bo'ladi;
// for (let i = 2; i <= num; i++) {  // bunda esa loop ishlaydi. birinchi i=2 bo'ladi va numdan kichikigi tekshiriladi va keyingi qatorga o'tadi.
//   x = true; // Bu qatorda x o'zgarunchini qiymatini true deb olamiz.
//   for (let j = 2; j < i; j++) { // Bu qatorda loop ishlaydi va j ning qiymatini 2 deb oladi va i>j ni tekshiradi. Yuqorida ining qiymati 2 edi. 2 hech qachon 2 dan katta bo'lmaydi shuning uchun loop o'z ishini tugatadi.
//     if (i % j == 0) {
//       x = false;
//       break;
//     }
//   }
//   if (x) console.log(i); // bu qatorda x ning qiymati true bo'lgani uchun consolga 2 qiymatni chiqaradi.
// }
// Buu sikl yana boshiga qaytadi va i ning qiymatini 1 ga oshiradi.
// i=3 bo'ladi. Va shu holatda yuqorida aytganimdek dastur 47-line ga keladi.
//yana i>j ekanligini tekshiradi va true natija oladi. Undan so'ng sikl scope ichiga kiradi va if shrtini tekshiradi.
//shart 3%2==0 tekshiradi va false natija oladi.if scope ichiga kirmaydi. 47-line dagi loopga yana qaytadi va j nibg qiymati bittaga oshadi.
//j=3 ga teng bo'lib qoladi.loop endi i>j ligini tekshiradi va false natija oladi va loop o'z ishini tugatadi.
//x ning qiymati hali ham true ekanligidan consolega i ning qiymati chiqadi yani 3.
// dastur yana boshiga qaytadi. i ning qiymati 4 bo'ladi. x qiymati true. j=2 holatida i>j tekshiriladi va true natija oladi.
//loop scope ichi ishlaydi va if sharti tekshiriladi. i%j==0 shart true natija qaytaradi va if scope ichidagi codelar ishlaydi.
//Shunda x ning qiymati false bo'ladi. break keyin loop ishini tugatadi.
// keyingi code if x ning qiymati false bo'lgani uchun ining scope ichidagi code ishlamaydi.
// Xullas shu holatda sikl aylanaveradi. Bizga 100 gacha bo'lgan prime(tub son) larni chiqarib beradi.
