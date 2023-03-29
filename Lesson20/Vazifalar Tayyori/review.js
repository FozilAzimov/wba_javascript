// let parent = document.querySelector(".box");

// console.log(parent.clientHeight);
// console.log(parent.clientWidth);

// console.log(parent.offsetWidth);
// console.log(parent.offsetHeight);
// console.log(parent.offsetLeft);
// console.log(parent.offsetTop);

// console.log(parent.scrollHeight);
// console.log(parent.scrollTop);

// function func() {
//   if (parent.offsetHeight === parent.scrollHeight) {
//     parent.style.height = '200px';
//   }
//   else {
//     parent.style.height = `${ parent.scrollHeight }px`;
//   }
// }

// let func = () => {
//   parent.scroll(0, parent.scrollHeight);
// }
// let func = () => {
//   parent.scrollTo(0, 300);
// }
// let func = () => {
//   parent.scrollBy(0, 100);
// }

// console.log(window.scrollY);
// console.log(window.scrollX);

// function func(e) {
//   console.log('Salom',e.pageX, e.pageY);
// }

// function func(e) {
//   console.log(e.inneText);
// }

// let div = document.querySelector(".parent");
// console.log("Width", div.clientWidth);
// console.log("Height", div.clientHeight);

// console.log(div.clientLeft);
// console.log(div.clientTop);

// console.log(div.offsetWidth);
// console.log(div.offsetHeight);
// console.log(div.offsetLeft);
// console.log(div.offsetTop);

// console.log(div.scrollTop);
// console.log(div.scrollLeft);
// console.log(div.scrollHeight);
// console.log(div.scrollWidth);

// function func() {
//   div.scroll(0, div.scrollHeight / 2)
// }

// div.scrollTo(0, div.scrollHeight)

// function func() {
//   console.log(window.scrollY);
//   console.log(window.scrollX);
// }

// function func(i) {
//   console.log(i.target);
// }
// function func1(i) {
//   console.log(i);
// }


// import { users } from './data.js';
// let data = users;

// function del(id) {
//   let res = data.filter(v => v.id !== id);
//   data = res;
//   console.log(data);
//   data.innerHTML = null;
//   readData();
// }

// function readData() {
//   data.forEach(value=> {
//     let btn = document.createElement("button");
//     btn.innerHTML = "Delete";
//     btn.addEventListener("click", () => del(value.id));
//     let h2 = document.createElement("h2");
//     h2.innerText = `${ value.name }`;
//     h2.append(btn);
//     div.append(h2);
//   })
// }
// readData();

// parent.addEventListener("click", () => func())

// function func() {
//   parent.style.background = "red";
// }