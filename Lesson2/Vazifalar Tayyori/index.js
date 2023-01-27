//Homework

// Prefix and Postfix;
// let a = 1, b = 1;
// let c = ++a; // Bunda c ning qiymati a + 1 ga teng bo'ladi. c = 2;
// let d = b++; // Bunda d ning qiymati b ning o'ziga  teng bo'ladi.
// b ikkinchi marta consolega chiqarilsa keyin uning qiymati 2 ga teng bo'ladi;

// console.log(c);
// console.log(d);

//Assinment result;
// let a = 2;
// let x = 1 + (a *= 2); // Bunda x ning qiymati 5 ga teng bo'ladi.
// Chunki arifmetikada qavsning ichi birinchi bajariladi va natijasi 4 bo'ladi,
// unga 1 qo'shilib x ning qiymati 5 ga teng bo'ladi;
// console.log(x);

//Type conversion;
// console.log(""+1+0); // Bunda birinchi bo'sh stringga 1 ni qo'shadi va natija stringda 1 boladi va keyingi qadam stringdagi 1 ga 0 ni qo'shsa 1 bilan 0 ni yonma yon qilib qo'yib beradi. Data type string bo'lib qoladi. Natija: 10;
// console.log(""-1+0); // Bunda bo'sh stringdan 1 ni ayrilsa -1 chiqadi va keyingi qadamda -1 ga 0 ni qo'shadi va Data type Number bo'ladi. Natija: -1;
// console.log(true + false); // Bunda true = 1, false = 0 bo'lgani uchun Natija: 1; Data type Number bo'ladi.
// console.log(6 / "3"); // numberni string ichida raqamga bo'lsa, ko'paytirsa, ayrisa huddi arifmetikad qanday bo'lsa shunday bajaradi. Faqat qo'shishida shu qiymatlarni yonma-yin qo'yib beradi. Bunda data type number bo'ladi. Natija: 2;
// console.log("2" * "3"); // Bunda ham huddi bitta yuqoridagi singari ishlaydi. Natija: 6;
// console.log(4 + 5 + "px"); // Bunda 4 bilan 5 ni bir-biriga qo'shadi va keyingi qadamda number bilan string qo'shilgani uchun ularni yonma-yon qo'yib beradi. Natija: 9px;

// Comparisons;
// console.log(5>4); // 5 soni 4 dan katta bo'lgani uchun Natija: true;
// console.log("apple">"pineapple"); // Stringlarda string ichidagi birinchi keluvchi qiymatlarni taqqoslaydi va ularning askitablesiga qarab natijani chiqaradi. Bu misolda Natija: false;
// console.log("2">"12"); // Bunda string ichidagi qiymatlarning birinchi tartibda kelganlarini taqqoslaydi. Natija: true;
// console.log(undefined == null); // Bunda undefined ham null ham qiymati mavjud bo'lmaganligi uchun teng hisoblanadi. ikkita tenglik qiymatini tekshiradi holos. Natija: true;
// console.log(undefined === null); // Bunda uchta tenglik ishlatilgan. Uchta tenglik qiymatidan tashqari bularning data typelarini ham tekshiradi, undefinedning data type undefined, nullning data type O'zi asli null lekin console da object chiqdi. Natija: false;
// console.log(null == "\n0\n"); // ikkita tenglik faqat qiymatini tekshirgani uchun null qiymati mavjud emas, keyingi qiymat 0 ga eng. Natija: false;
// console.log(null === +"\n0\n"); // uchta tenglikda ham qiymat, ham data type tekshiriladi. Natija: false;