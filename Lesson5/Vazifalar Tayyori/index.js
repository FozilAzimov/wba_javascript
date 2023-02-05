// Homework

// 1).
// for(let i=0; i<3; i++){
//   console.log(`number ${i}!`);
// }

// let i=0;
// while(i<3){
//   console.log(`number ${i}!`);
//   i++;
// }

// 2).
// function checkAge(age){
//   if(age>18){
//     return "Ro'yxatdan o'tishingiz mumkin"
//   }
//   else{
//     return "Siz ro'yxatdan o'ta olmaysiz?"
//   }
// }
// console.log(checkAge(22));

// 3).
// 1-yechim.
// let cheskAge = (age)=> age>18?true:'Ota-Onanggizdan ruxsat so'radizmi?';
// console.log(cheskAge(20));
// 2-yechim.
// let cheskAge = (age) => age > 18 || 'Ota-Onanggizdan ruxsat so`radizmi?';
// console.log(cheskAge(10));

// 4).
// function minNum(a,b){
//   if(a<b) return a;
//   else return b;
// }
// console.log(minNum(-8,5));

// 5).
// function powNum(a,b){
//   return a**b;
// }
// console.log(powNum(3,2));
// console.log(powNum(3,3));
// console.log(powNum(1,100));

// 6).
// let ask=(a, b, c) => {
//   if (a) b();
//   else c();
// }
// ask(
//   "Do you agree?",
//   ()=> console.log("You agreeed"),
//   ()=> console.log("You canceled the execution.")
// );

// 7).
// n soni berilgan (n  uch xonali son deb hisoblang).
// Shu son Armstrong raqami hisoblanadimi yoki yo'qmi ?
// Agar Armsrong raqami bo'lsa  konsolga  true bo'lmasa false chiqaring.
// Armstrong raqam.  n = 153  agar (1*1*1) + (5*5*5) + (3*3*3) = 153.
// 3 xonali sonlar ichidan Armsrong raqamini chiqarib bering;
// for (let i = 100; i < 1000; i++) {
//   let calcFunc = () => {
//     let numLenght = i.toString().length;
//     let bir = parseInt(i / 100);
//     let ikki = parseInt(i / 10) % 10;
//     let uch = i % 10;
//     let sum = (bir ** numLenght + ikki ** numLenght + uch ** numLenght);
//     if(i===sum) console.log(`Armsrong raqam: ${sum}`);;
//   }
//   calcFunc();
// }

// 8).
// n soni berilgan. Berilgan sonning factarialini hisoblang.
// Masalan: 5 ning factoriali   1*2*3*4*5 = 120;  
// let factFunc=(n)=>{
//   let res=1;
//   for(let i=1;i<=n;i++){
//     res *=i
//   }
//   return res;
// }
// console.log(factFunc(5));

// 9).
// n soni berilgan. Berilgan birinchi n ta  fibanatchi ketma ketligining yig'indisini toping.
// Masalan: fibanachi ketmaketligi:  0 1 1 2 3 5 8 13 .... 
// function fibFunc(n){
//   let fib_1 = 0;
//   let fib_2 = 1;
//   let sum = 0;
//   for(let i=2; i<n;i++){
//     sum = sum+fib_1+fib_2;
//     let temp = fib_1;
//     fib_1=fib_2;
//     fib_2+=temp;
//   }
//   return sum;
// }
// console.log(fibFunc(10));

// 10).
// a soni berilgan.
// 1 dan Shu songacha mukammal raqam bormi yoki yo'qmi shuni aniqlang.
// Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi.
// Deylik
// a = 6, uning bo'linuvchilari 1,2,3
// 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi.
// for(let j=1; j<=50; j++){
// let mukammalFunc = (a) => {
//   let sum = 0;
//   for (let i = 1; i < a; i++) {
//     if(a%i===0){
//       sum+=i
//     }
//   }
//   if(sum===a) return `${sum} - Murakkab son`;
//   else return `${a} - Murakkab son emas`;
// }
// console.log(mukammalFunc(j));
// }