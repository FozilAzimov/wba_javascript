// 1-dars: Githubni o'rganish

// Config
// Agar yuqoridagi codelarni VS code terminalida yozib chiqsangiz siz kutgan natija bo'lmasa
// quyidgi codeni yozib undan keyin qayta urinib chiqing.
// 1. git config --global user.email "ro'yhatdan o'tgan emailni yozing" // => github registratsiyasidan o'tgan
// emailni yozasiz.
// 2. git config --global user.name "ro'yhatdan o'tgan namingizni yozing" // => github registratsiyasidan o'tgan
// nomingizni yozasiz.

// Repository - project
// Connection
// 1. git init // => VS codedagi filei githubga ulab beradi.
// 2. git remote add origin URL // => 'git remote' qismi har doim bo'lishi shart.
// Bu yerda origin va URL o'zgaradi. URL bu githubdagi repository ichidagi papka manzili.

// Push
// 1. git add . //  => bu VS codedagi barcha fileni githubga qo'shib beradi.
//Agar bitta file qo'shmoqchi bo'lsak:  git add name.js    shaklida yoziladi.
// 2. git commit -m "Mavzu haqida ma'lumot" //  => githubga file yoki papka joylaganizda
// shu papka yoki file haqida qisqacha ma'lumot berib turadigan title hisoblanadi.
// 3. git push origin master // => oxiri shu ma'lumotni githubga qo'shib beradi.
// master so'zi ayrim paytlarda main yoki boshqa bo'lishi mumkin.
//  Buni VS codeda pastki chap taraf burchak qismidan ko'rib olishimiz mumkin.

//Branch
// Branch => bu githubda filial vazifasini bajaradi.Agar yangi branch ochmoqchi bo'lsangiz
// VS code terminaliga:
// 2. git branch => qanday branch borligini chiqarib beradi.
// 3. git checkout -b branchName => yangi branchName degan branch ochib beradi.
// 4. git switch master => branchName branchdan master branchiga o'tish

//Pull
// Pull => bu 1-fileni codelarini o'zgartirib 2-filega copy qilib olish.
// 1. git pull => master branchidagi index.js fileni branchName branchidagi index.js filega copy qilish...
