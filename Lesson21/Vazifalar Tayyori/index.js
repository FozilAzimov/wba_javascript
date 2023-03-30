
// 1-mashq boshlanishi

// let parent = document.querySelector(".parent");
// let koptok = document.querySelector(".koptok");

// let nuqta = "................................................................";
// for (let i = 0; i <= 7; i++) {
//   parent.append(`${ nuqta }\n`);
// }

// function func(e) {
//   let parentKordinata = e.target.getBoundingClientRect();

//   let top = e.clientY - parentKordinata.top - parent.clientTop - koptok.clientHeight / 2;
//   let left = e.clientX - parentKordinata.left - parent.clientLeft - koptok.clientWidth / 2;

//   if (top < 0) top = 0;

//   if (left < 0) left = 0;

//   if (left + koptok.clientWidth > parent.clientWidth) {
//     left = parent.clientWidth - koptok.clientWidth;
//   }

//   if (top + koptok.clientHeight > parent.clientHeight) {
//     top = parent.clientHeight - koptok.clientHeight;
//   }

//   koptok.style.left = left + 'px';
//   koptok.style.top = top + "px";
// }

// 1-mashq tugashi


// 2-mashq boshlanishi
// let strelka = document.querySelector("img");
// let ul = document.querySelector("ul");

// function func() {
//   ul.classList.toggle("hidden");
//   strelka.classList.toggle("str");
// }
// 2-mashq tugashi



// 3-mashq boshlanishi
// let parent = document.querySelectorAll(".child");
// for (let child of parent) {
//   child.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
//   child.firstChild.onclick = () => child.remove();
// }
// 3-mashq tugashi



// 4-mashq boshlanishi
// let parent = document.querySelector(".parent");
// let i = 1;
// for (let list of parent.querySelectorAll("li")) {
//   list.style.position = "relative";
//   i++;
// }

// let width = 100;
// let count = 4;
// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li");
// let position = 0;
// parent.querySelector('.lef').onclick = function () {
//   position += width * count;
//   position = Math.min(position, 0);
//   console.log(position);
//   ul.style.marginLeft = position + 'px';
// }
// parent.querySelector('.rig').onclick = function () {
//   position -= width * count;
//   position = Math.max(position, -width * (li.length - count));
//   console.log(position);
//   ul.style.marginLeft = position + 'px';
// }
// 4-mashq tugashi