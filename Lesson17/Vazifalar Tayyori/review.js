// function* getData() {
//   let name = yield 1;
//   // console.log(name);
//   let surname = yield 2;
//   // console.log(surname);
//   let status = yield 3;
//   // console.log(status);
// }

// let res = getData();
// let result = getData();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// console.log(res.next().value);
// console.log(res.next().value);
// console.log(res.next().value);

// console.log(res.next().done);
// console.log(res.next().done);
// console.log(res.next().done);

// console.log(res.next());
// console.log(res.next("webbrain"));
// console.log(res.next("academy"));
// console.log(res.next("IT Center"));

// console.log(res.return());
// console.log(res.throw());

// console.log(result.next());
// console.log(result.next());


// function* getData() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// let res = getData();

// 1).
// for (value of res) {
//   console.log(value);
// }

// 2).
// console.log([...res]);


// Bu generator function ishlatilmagan holati;
// let users = [
//   { id: 1, name: "webbrain1" },
//   { id: 2, name: "webbrain2" },
//   { id: 3, name: "webbrain3" },
//   { id: 4, name: "webbrain4" },
//   { id: 5, name: "webbrain5" },
//   { id: 6, name: "webbrain6" },
// ];

// let del = (id) => {
//   let res = users.filter(value => value.id !== id)
//   users = res;
// }

// let add = (user) => {
//   users = [...users, { id: users.length + 1, name: user }]
// }
// add("Gulbashakar");
// del(5);
// add("Gulbashakar");
// add("Gulbashakar");
// add("Gulbashakar");
// console.log(users);
// del(7);


// Bu generator function ishlatilgan holatda to'g'ri ishlaydi. Bu aniq proectlarda ko'p ishlatiladi.
// let users = [
//   { id: 1, name: "webbrain1" },
//   { id: 2, name: "webbrain2" },
//   { id: 3, name: "webbrain3" },
//   { id: 4, name: "webbrain4" },
//   { id: 5, name: "webbrain5" },
//   { id: 6, name: "webbrain6" },
// ];
// function* getData() {
//   let id = users.length;
//   while (1) {
//     yield id += 1;
//   }
// }
// let res = getData();

// let del = (id) => {
//   let res = users.filter(value => value.id !== id)
//   users = res;
// }

// let add = (user) => {
//   users = [...users, { id: res.next().value, name: user }]
// }
// add("Gulbashakar");
// del(5);
// add("Gulbashakar");
// add("Gulbashakar");
// add("Gulbashakar");
// del(7);
// console.log(users);


// function* getGen(param) {
//   for (value of param) yield value;
// }

// let res = getGen([1, 2, 3, 9, 4, 8, 6, 7]);

// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());