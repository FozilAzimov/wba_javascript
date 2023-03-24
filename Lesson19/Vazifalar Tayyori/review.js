// DOM (Document Object Model) - html dagi barcha elementlarni olib ular ustida har qanday amallarni bajarsa bo'ladi.

// window.alert("hey DOM");
// alert("webbrain");

// console.log(window.innerHeight, window.innerWidth)
// console.log(document.title = "DOM");
// console.log(window.location);
// console.log(window.history);
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.host);

// console.log(document);
// console.log(window);

// let ul = document.getElementsByTagName("ul")[0];
// let body = document.getElementsByTagName("body")[0];
// let h1 = document.getElementsByTagName("h1")[0];
// console.log(ul.children);
// console.log(ul.childNodes);

// console.log(ul.parentNode);
// console.log(ul.parentElement);
// console.log(body.firstElementChild);
// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling.firstElementChild.lastElementChild);


// Seletors - js dan turip html elementlarini tutib olish.


// getElementsByTagName()
// getElementsByClassname()
// getElementById()
// getElementsByName()
// querySelector()
// querySelectorAll()

// console.log(document.getElementsByTagName("li"));
// console.log(typeof document.getElementsByTagName("li"));
// console.log(Array.isArray(document.getElementsByTagName("li")));

// console.log(document.getElementsByClassName("parent"));
// console.log(document.getElementsByName("newName"));
// console.log(document.getElementById("title"));

// let h1 = document.getElementsByTagName("h1")[0];
// h1.style.color = "red";
// h1.style.background = "yellow";

// h1.style.cssText = `
// color: blue;
// font-family: sans-serif;
// background: maroon;
// `

// let parent = document.querySelector(".parent")
// parent.style.background = "red";
// parent.style.color = "white";

// let all = document.querySelectorAll("li");
// let arr = Array.from(all);
// arr.forEach((value, index) => {
//   if (!(index % 2)) value.style.cssText = `
//   background: lightblue;
//   color:red;
//   `
// })

// let a = document.querySelector("#title");

// title.style.color = "red";


// let li = document.querySelector("li");
// let h1 = document.querySelector("h1");
// console.log(li.innerHTML);
// console.log(li.innerText);
// console.log(li.textContent);

// li.innerHTML = "<button>Button</button>"
// li.innerText = "<button>Button</button>"
// li.textContent = "<button>Button</button>"

// h1.hidden = true;
// h1.hidden = false;

// h1.setAttribute("id", "red")
// console.log(h1.getAttribute("class"));
// console.log(h1.getAttribute("id"));
// h1.classList.add("red");
// h1.removeAttribute("id")
// h1.removeAttribute("class")

// let getToggle = () => {
//   title.classList.toggle("red");
// }

// let ul = document.querySelector("ul");
// function setList() {
//   let li = document.createElement("li");
//   li.innerHTML = 6;
//   li.classList.add("list");
//   // ul.append(li);
//   // ul.prepend(li);
//   // ul.after(li);
//   // ul.before(li);
// }
