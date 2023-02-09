// Number

// 1).
// Number - biz har doim matemtik ifodalar bilan ishlaganimizda numberlarga duch kelamiz.
// Numberning ko'rinishi turli hil bo'ladi ya'ni 2,53,6,8,4 ko'rinishidagi raqamlar bu butun sonlardir.
// 1.34, 23.4, 5.1 ko'rinishidagi sonlar esa haqiqiy sonlar ya'ni kasr sonlar deb aytiladi.
// Bu sonlar manfiy yoki musbat bo'lish ham mumkin, buning darqi yoq.
// JavaScriptda Number o'zi alohida bitta data type hisoblanadi, ya'ni Primitive data type turiga kiradi.
// let num1 = 273; //int - butun son
// let num2 = 2.4; //float - kasr son
// let num3 = 1e5; // e ning vazifasi 1 dan keyin shuncha nol borligini anglatadi.
// let num4 = 100_000_000_000; // past chiziqning vazifasi faqat shu sonni o'qish uchun, ko'zga yordam beradi. Shu holos.

// 2). Math metodlari 
// console.log(Math.PI); // matematik o'zgarmas raqam PI=3.141592653589793;

// console.log(Math.abs(25)); 
// console.log(Math.abs(-25)); // abs - sonning absolute qiymatini ya'ni modulini chiqarib beradi;

// console.log(Math.floor(1.574)); // floor - sonning butun qismini kichik son tarafga yaxlitlaydi. Sonning kasr qismi 0 dan farqli bo'lsa albatta va faqat butun qismini qaytaradi natijaga.

// console.log(Math.ceil(2.4546)); // ceil - sonning butun qismini katta son tarafga yaxlitlaydi. Sonning kasr qismi 0 dan  farqli bo'lsa albatta va faqat sonning burun qismini qaytaradi natijaga.

// console.log(Math.round(2.5346));
// console.log(Math.round(2.4468)); // round - sonning kasr qismi >= 5 dan bo'lsa shu sonni kattasi tomon ko'taradi va natijaga butun qismini qaytaradi, Agar sonning kasr qismi < 5 bo'lsa u holda sonni kichikga tortadi ya'ni kichik son tarafga yaxlitlaydi va natijaga sonning butun qismini chiqaradi.

// console.log(Math.trunc(3.958));
// console.log(Math.trunc(-3.193)); // trunc - har doim son manfiy bo'ladimi, musbat bo'ladimi farqi yo'q faqat butun qismini natijaga qaytaradi.

// console.log(Math.random()); // random - har doim 0 va 1 orasidagi tasodifiy sonlarni natijaga qaytarib beradi.

// console.log(Math.min(1,2,4,3,6,7,4,3,2,5,6,8,9)); // min - bir nechta berilgan sonlar ichidan eng kichigini natijaga qaytarib beradi.

// console.log(Math.max(3,5,4,7,9,6,1,34,46,23,54,38)); // max - bir nechta sonlar ichidan eng katta sonni natijaga qaytarib beradi.

// console.log(Math.pow(2,5)); // pow - bu method ikkita qiymat qabul qiladi yani birinchisi son, ikkinchi berilgan qiymat esa shu sonning darajasini bildiradi. Ya'ni berilgan sonni darajaga ko'tarib beradi.

// console.log(Math.sign(5));
// console.log(Math.sign(-5));
// console.log(Math.sign(0)); // sign - bu method har doim 1, -1, 0 qiymat qaytaradi.Agar berilgan son musbat bo'lsa Natija: 1; Agar berilgan son manfiy bo'lsa Natija: -1; agar berilgan son 0 ga teng bo'lsa Batija: 0; qaytaradi.

// 3). Number methodlari
// - toString() methodi har doim bizga raqamni stringga aylantirib beradi, data typei ham string bo'lib qoladi.
// let num = 5b
// console.log(num.toString()); // natija: stringda 5 chiqadi.
// Bundan tashqari toString() methodining yana bir xususiyati har qanday musbat sonni binary ko'rinishiga o'tkazib beradi.
// console.log(num.toString(2)); //natija: 101;

// - ti1Fixed() methodi berilgan kasr sonni kerakli qismini kesib olinsin desak shu sonni butun qismidan tashqari kasr qismini biz bergan qiymatga teng qilib kesib beradi va shu sonni stringga aylantirib qo'yadi.
// let a = 2.46484
// console.log(a.toFixed(3)); // Natija: 2.464
// Agar berilgan kasr son butun qismi 0 ga yeng bo'lsa 0 ni ignor qiladi va nuqtadan keyin qymatga teng son chiqarib beradi.
// let c = 0.35674;
// console.log(c.toFixed(3)); // Natija: 0.356 chiqadi.

// - toPrecision() methodi berilgan kasr sonni butun qismini qo'shib sanaganda biz bergan qiymatda kesib olinsin desak shu ikkovi teng bo'ladi.Ya'ni qiymatga 3 bersak kasr sonni butun qismidan sanay boshlaydi va 3 tagacha sonni kesib natijaqa qaytaradi.
// let b = 2.645357
// console.log(b.toPrecision(5)); //Natija: 2.6453; chiqadi.
// Agar berilgan kasr son butun qismi 0 ga yeng bo'lsa 0 ni ignor qiladi va nuqtadan keyin qymatga teng son chiqarib beradi.
// let c = 0.35674;
// console.log(c.toPrecision(3)); // Natija: 0.356 chiqadi.

// - paseInt() bu method numberning default mathodi isoblanadi. Biz kiritgan sonning faqat butun qismini qaytaradi.Undan tashqari binary ko'rinishidagi sonlarni desimal ko'rinishiga o'tkazib beradi.
// console.log(parseInt(2.444647)); // Natija: 2;
// console.log(parseInt('100110101001',2)); // Natija: 2473;
// let a = 2473;
// console.log(a.toString(2)); //Natija: 100110101001;

// -parseFloat() bu sonning kasr qismini ham natijaga chiqaradi.
// console.log(parseFloat(4.7356483));

// 4). isNAN
// isNaN bu bizga har doim true yoki false qiymatlarini qaytaradi.
// Ya'ni isNaN degani (in - mi degani, NaN - not a number degani), berilgan qiymat number emasmi degan savolni bildiradi.
// console.log(isNaN(2)); // false;
// console.log(isNaN("2")); // false;
// console.log(isNaN("2s")); // true;