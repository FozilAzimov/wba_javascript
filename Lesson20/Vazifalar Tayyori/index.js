// onmouseover / onmouseout ==> sichqoncha element ustiga borganda / element ustidan chiqganda.
// onmousedown / onmouseup ==> sichqoncha element ustiga bosganda / bosilgan elementni qo'yib yuborganda.
// mousemove ==> sichqoncha element ustiga borganida har bir px uchun alohida natija qaytaradi.



// let inp = document.querySelector("input");
// let data = []

// function add() {
//   data.push({ id: data.length + 1, name: `${ inp.value }` });
//   inp.value = null;
//     box.innerHTML = null;
//   redData();
// }
// console.log(data);


// function redData() {
//   if (data.length === 0) box.innerHTML = "No Data";
//   data.forEach(value => {
//     let div = document.createElement("div");
//     let btn = document.createElement("button");
//     btn.innerHTML = "Delete";
//     div.innerHTML = `${ value.id }-${ value.name }`;
//     div.append(btn);
//     box.append(div);
//     btn.addEventListener("click", () => del(value.id));
//   })
// }
// redData();

// function del(id) {
//   console.log(id);
//   let res = data.filter(val => val.id !== id);
//   data = res;
//   box.innerHTML = null;
//   redData();
//   console.log(res);
// }