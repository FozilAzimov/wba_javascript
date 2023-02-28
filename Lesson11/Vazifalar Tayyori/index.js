// Homework           

//        Format Dates

// 1).
// let moment = (format) => {
//   let arr = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
//   let date = new Date();
//   format === "MMMM Do YYYY, h:mm:ss a" ? console.log(`${arr[date.getMonth()]} ${date.getDate()}th ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} pm`) : console.log("Noto'g'ri ma'lumot kiritdingiz");
// }
// moment("MMMM Do YYYY, h:mm:ss a");

// 2).
// let moment = (format) => {
//   let arr = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];
//   let date = new Date();
//   format === "dddd" ? console.log(arr[date.getDay()]) : console.log("Noto'g'ri ma'lumot kiritdingiz");
// }
// moment("dddd");

// 3).
// let moment = (format) => {
//   let arr = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
//   let date = new Date();
//   format === "MMM Do YY" ? console.log(`${arr[date.getMonth()].slice(0,3)} ${date.getDate()}th ${date.getFullYear()%100}`) : console.log("Noto'g'ri ma'lumot kiritdingiz");
// }
// moment("MMM Do YY");

// 4).
// let moment = (format)=>{
//   let date = new Date()
//   "YYYY [escaped] YYYY"===format?console.log(`${date.getFullYear()} escaped ${date.getFullYear()}`):console.log("Noto'g'ri ma'lumot kiritdingiz");
// }
// moment("YYYY [escaped] YYYY")

// 5).
// let moment = (symbol)=>{
//   let date = new Date();
//   console.log(`${date.getFullYear()}${symbol}${date.getMonth()+1}${symbol}${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}+05:00`);
// }
// moment(".");


//       Multiple Locale Support
// 1).
// let moment = (format)=>{
//   let date = new Date();
//   format==="LT"?console.log(`${date.getHours()}:${date.getMinutes()} PM`):console.log("Iltimos to'g'ri format kiriting");
// }
// moment("LT");

// 2).
// let moment = (format)=>{
//   let date = new Date();
//   format==="LTS"?console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} PM`):console.log("Iltimos to'g'ri format kiriting");
// }
// moment("LTS");

// 3).
// let moment = (format, symbol) => {
//   let date = new Date();
//   if (format === "L") {
//     if (String(date.getMonth()).length === 1 && String(date.getDate()).length === 1) {
//       console.log(`0${date.getMonth() + 1}${symbol}0${date.getDate()}${symbol}${date.getFullYear()}`)
//     }
//     else if (String(date.getMonth()).length === 1){
//       console.log(`0${date.getMonth() + 1}${symbol}${date.getDate()}${symbol}${date.getFullYear()}`);
//     }
//     else if(String(date.getDate()).length === 1){
//       console.log(`${date.getMonth() + 1}${symbol}0${date.getDate()}${symbol}${date.getFullYear()}`);
//     } 
//   }
//   else console.log("Iltimos to'g'ri format kiriting");
// }
// moment("L", "-");

// 4).
// let moment = (format,symbol)=>{
//   let date = new Date();
//   format==="l"?console.log(`${date.getMonth()+1}${symbol}${date.getDate()}${symbol}${date.getFullYear()}`):console.log("Iltimos to'g'ri format kiriting");
// }
// moment("l","-");

// 5).
// let moment = (format) => {
//   let arr = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
//   let date = new Date();
//   if (format === "LL") {
//     if (String(date.getDate()).length === 1) {
//       console.log(`${arr[date.getMonth()]} 0${date.getDate()}, ${date.getFullYear()}`);
//     }
//     else console.log(`${arr[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`);
//   }
//   else console.log("Iltimos to'g'ri format kiriting");
// }
// moment("LL");

// 6).
// let moment = (format) => {
//   let arr = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
//   let date = new Date();
//   format === "ll" ? console.log(`${arr[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()}`) : console.log("Iltimos to'g'ri format kiriting");
// }
// moment("ll");

// 7).
// let moment = (format) => {
//   let arr = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
//   let date = new Date();
//   if (format === "LLL") {
//     if (String(date.getDate()).length === 1) {
//       console.log(`${arr[date.getMonth()]} 0${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`);
//     }
//     else console.log(`${arr[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`);
//   }
//   else console.log("Iltimos to'g'ri format kiriting");
// }
// moment("LLL");

// 8).
// let moment = (format) => {
//   let arr = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
//   let date = new Date();
//   format === "lll" ? console.log(`${arr[date.getMonth()].slice(0,3)} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`) : console.log("Iltimos to'g'ri format kiriting");
// }
// moment("lll");

// 9).
// let moment = (format) => {
//   let arrM = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
//   let arrK = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
//   let date = new Date();
//   if (format === "LLLL") {
//     if (String(date.getDate()).length === 1) {
//       console.log(`${arrK[date.getDay()]}, ${arrM[date.getMonth()]} 0${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`);
//     }
//     else console.log(`${arrK[date.getDay()]}, ${arrM[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`);
//   }
//   else console.log("Iltimos to'g'ri format kiriting");
// }
// moment("LLLL");

// 10).
// let moment = (format) => {
//   let arrM = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]
//   let arrK = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"]
//   let date = new Date();
//   format === "llll" ? console.log(`${arrK[date.getDay()].slice(0, 3)}, ${arrM[date.getMonth()].slice(0, 3)} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} PM`) : console.log("Iltimos to'g'ri format kiriting");
// }
// moment("llll");