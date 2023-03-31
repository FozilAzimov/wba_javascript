// function clicked() {
//   console.log("click");
// }
// function mousedown() {
//   console.log("mousedown");
// }
// function mouseover() {
//   console.log("mouseover");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => clicked());
// btn.addEventListener("mousedown", () => mousedown());
// btn.addEventListener("mouseover", () => mouseover());


// let btn = document.querySelector("button");

// function onclick() {
//   console.log("onclick");
// }
// function onmousedown() {
//   console.log("onmousedown");
// }
// function onmouseover() {
//   console.log("onmouseover");
// }
// function onmouseup() {
//   console.log("onmouseup");
// }

// btn.addEventListener('click', onclick);
// btn.addEventListener('mousedown', onmousedown);
// btn.addEventListener('mouseover', onmouseover);
// btn.addEventListener('mouseup', onmouseup);

// function box(e) {
//   // e.stopPropogation()  // O'tkazib yuboradi. O'zidan keyingilarni ishlatadi
//   // e.stopImmediatePropagation(); //O'zidan keyingilarni to'xtatadi
//   console.log("box");
// }
// function parent(e) {
//   // e.stopPropogation()  // O'tkazib yuboradi. O'zidan keyingilarni ishlatadi
//   // e.stopImmediatePropagation(); //O'zidan keyingilarni to'xtatadi
//   console.log("parent");
// }
// function child(e) {
//   // e.stopPropogation() // O'tkazib yuboradi. O'zidan keyingilarni ishlatadi
//   // e.stopImmediatePropagation(); //O'zidan keyingilarni to'xtatadi
//   console.log("child");
// }
// let target;
// table.onclick = function (e) {
//   if (target) target.classList.remove("red");
//   target = e.target;
//   target.classList.add("red")
// }

// link.onclick = function (e) {
//   e.preventDefault();
// }

// btn.onclick = function (e) {
//   e.preventDefault();
// }


// text.addEventListener('contextmenu', () => {
//   alert("heyyy");
// })

// text.oncopy = function () {
//   alert("NO Copy");
//   return false;
// }

// function func(e) {
//   span.textContent = e.target.value;
// }

// mouse.addEventListener('mousemove', (e) => {
//   mouse.style.background = `rgb(${e.y},${e.x},${e.x})`
// })

// mouse.addEventListener('mousemove', (e) => {
//   if (e.ctrlKey) mouse.style.background = `rgb(${ e.y }, ${ e.x }, ${ e.y })`
// })
// mouse.addEventListener('mousemove', (e) => {
//   if (e.ctrlKey && e.altKey) mouse.style.background = `rgb(${ e.y }, ${ e.x }, ${ e.y })`
// })

// let sc = document.querySelector("#parent");
// sc.addEventListener('scroll', (e) => {
//   if (e.target.scrollTop + e.target.clientHeight + 50 > e.target.scrollHeight) {
//     sc.append(e.target.innerText);
//   }
// })

// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.forms.Form1);

// console.log(document.forms.Form.elements[0]);
// console.log(document.forms.Form.elements.parol);

// let form = document.forms.Form;
// console.log(form.name);

// console.log(sel.value = "ru");
// console.log(sel.selectedIndex = 2);