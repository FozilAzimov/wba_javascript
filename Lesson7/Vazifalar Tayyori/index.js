// Homework

// 1).
// let num = 5;
// let bin = num.toString(2);
// console.log(bin);
// let bir = 0;
// let nol = 0;
// for(value of bin){
//   switch(value){
//     case '1': bir++;
//     break;
//     default:nol++;
//   }
// }
// console.log(`bir: ${bir} ta bor, nol: ${nol} ta bor`);

// 2).
// let calcFunc = (max,min)=>Math.abs(max-min);
// console.log(calcFunc(20,29));

// 3).
// console.log(parseInt(5.474)); // 5; parseInt() - bu Number constuktorining default methodi hisoblanadi va u har doimsonning butun qismini qaytaradi.
// console.log(Math.trunc(5.574)); // 5; Math.trunc() - bu Math ning methodi hisobladi, har doim faqat sonning butun qismini qaytaradi.
// console.log(Math.ceil(5.574)); // 6; Math.ceil() - bu Math ning methodi hisobladi, har doim sonni yuqoriga qarab to'ldiradi. Ya'ni o'zidan katta eng kichik butun songa aylantiradi.
// console.log(Math.floor(5.574)); // 5; Math.floor() - Math ning methodi hisobladi, har doim sonni o'zidan kichik eng katta butun songa aylantiradi.

// 4).
// let randomInteger = (min, max) => parseInt(min + Math.random() * (max - min));
// console.log(randomInteger(1, 50));

// 5). String mavzusidagi savol: Berilgan stringda nechta katta harf nachta kichik harf qatnashganini chiqaring.
// let text = `MashSgsJsYnsWq`; // Bu code faqat bir bo'g'inli so'zlar uchun o'rinlidir.
// let maxRes = 0, minRes = 0;
// for (value of text) value === value.toUpperCase() ? maxRes++ : minRes++;
// console.log(`Katta harflar ${maxRes} ta, Kichik harflar ${minRes} ta`);


// Math mathodlarini ruchnoy yozilgan holati

// Math.abs()
// 1-usul
// let abs = (a)=>{
//   if(a<0) return -a;
//   else return a;
// }
// console.log(abs(-5));
// 2-usul
// let abs = (a) => a < 0 ? -a : a;
// console.log(abs(-5));

// Math.round()
// let a = 3.1;
// if (a > 0 && parseInt(a * 10 % 10) >= 5) console.log(parseInt(a) + 1);
// else if (a > 0 && parseInt(a * 10 % 10) < 5) console.log(parseInt(a));
// else if (a < 0 && parseInt(a * 10 % 10) < -5) console.log(parseInt(a) - 1);
// else if (a < 0 && parseInt(a * 10 % 10) >= -5) console.log(parseInt(a));

// Math.floor()
// let num = -2.654;
// if(num>=0)console.log(parseInt(num));
// else console.log(parseInt(num)-1);

// Math.ceil()
// let num = 2.654;
// if(num>=0)console.log(parseInt(num+1));
// else console.log(parseInt(num)+1);

// Math.trunc
// let t = 0.453;
// console.log(parseInt(t));
// console.log(Math.trunc(t));

// Math.max()
// let nums = [1,2,3,5,6,7,8,9,29];
// let max = 0;
// for(value of nums){
//   if(value>max){
//     max=value;
//   }
// }
// console.log(max);

// Math.min()
// let nums = [4, 25, 3, 5, 6, 7, 8, 9, 29];
// let min = nums[0];
// for (index in nums) {
//   if (nums[index] < min) min=nums[index];
// }
// console.log(min);

// Math.pow()
// let calcFunc = (a,b)=>pow = a**b;
// console.log(calcFunc(2,5));

// Math.sign()
// let getFunc = (a)=>{
//   if(a>0)console.log(1);
//   else if(a==0)console.log(0);
//   else if(a<0)console.log(-1);
//   else if(a===false)console.log(0);
//   else if(a===true)console.log(1);
//   else console.log(NaN);
// }
// getFunc(0)