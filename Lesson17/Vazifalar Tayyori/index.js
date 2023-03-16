// function* getGen() {
//   yield 1;
//   let id2 = yield 2;
//   let id3 = yield 3 + id2;
//   let id4 = yield id3 / 3;
// }

// let generator = getGen();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next(3));
// console.log(generator.next(9));

// function* getGen() {
//   let count = 1;
//   while (1) {
//     yield count++;
//   }
// }

// let id = getGen();

// let user = [
//   { id: id.next().value, name: "webbrain" },
//   { id: id.next().value, name: "eshmat" },
//   { id: id.next().value, name: "toshmat" },
//   { id: id.next().value, name: "academy" },
// ]

// let add = () => {
//   user.push({ id: id.next().value, name: "Gulbashakar" });
//   getData();
// }

// let del = (id) => {
//   let res = user.filter(v => v.id !== id);
//   user = res;
//   getData();
// }

// function getData() {
//   list.innerHTML = null;
//   user.forEach(value => {
//     let h2 = document.createElement("h2");
//     h2.innerHTML = `${value.id} => ${value.name} <button onclick="del(${value.id})">delete</button>`;
//     list.append(h2);
//   })
// }
// getData();

// Generator function
