
// Range.

// let h1 = document.querySelector("h1");
// let range = new Range();
// range.setStart(h1.firstChild, 0);
// range.setEnd(h1.firstChild, 6);
// window.getSelection().addRange(range);


// let h1 = document.querySelectorAll("h1");
// let range = new Range();
// // range.setStart(h1[0], 0);
// // range.setEnd(h1[2], 1);
// range.setStart(h1[0].firstChild, 10);
// range.setEnd(h1[2].firstChild, 6);
// window.getSelection().addRange(range);


// let h1 = document.querySelectorAll("h1");
// let range = new Range();
// range.setEndBefore(h1[0]);
// range.setEndAfter(h1[1]);
// window.getSelection().addRange(range);


// let h1 = document.querySelector("h1");
// let range = new Range();
// range.setStart(h1.firstChild, 0);
// range.setEnd(h1.firstChild, 6);
// window.getSelection().addRange(range);

// btn.style.cssText = `
// padding: 10px 15px;
// margin: 50px 0 20px 20px;
// font-size: 16px;
// `
// btn.addEventListener('click', () => range.deleteContents());

// text.style.cssText = `
// width: 100px;
// height: 40px;
// background: lightblue;
// font-size: 20px;
// `
// btn.addEventListener('click', () => {
//   // let res = range.extractContents();
//   // let res = range.cloneContents();

//   let a = document.createElement("a");
//   let i = document.createElement("i");
//   // a.innerHTML = "LINK ";
//   // let res = range.insertNode(a);

//   range.surroundContents(i);

//   // text.innerHTML = res.textContent;
// });


// let span = document.createElement("span");

// btn.addEventListener('click', () => {
// });

// inp.style.cssText = `
// padding: 10px;
// font-size: 18px;
// `
// h1.style.cssText = `
// width: 600px;
// margin-left: 100px;
// `
// let t = h1.innerText;
// let k = t.split('');
// inp.addEventListener('input', (event) => {
//   if (k[event.target.value.length - 1] === event.data) {
//     span.style.cssText = `
//     color: lightgreen;
//     background: rgba(0,255,0,0.1)
//     `
//     h1.innerText = t;
//     range.setStart(h1.firstChild, 0);
//     range.setEnd(h1.firstChild, event.target.value.length);
//     range.surroundContents(span);
//   }
//   else {
//     span.style.cssText = `
//     color: red;
//     background: rgba(255,0,0,0.1)
//     `
//     h1.innerText = t;
//     range.setStart(h1.firstChild, 0);
//     range.setEnd(h1.firstChild, event.target.value.length);
//     range.surroundContents(span);
//   }
// })


// Selection Events.
// let h = getSelection();
// document.onselectionchange = (e) => {
//   console.log(h.getRangeAt(0).cloneContents());
// }