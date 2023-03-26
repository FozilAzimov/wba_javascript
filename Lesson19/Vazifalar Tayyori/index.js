
let body = document.querySelector("body");
body.style.cssText = `
display: flex;
justify-content: center;
font-family: sans-serif;
`
let parent = document.createElement("div");
body.prepend(parent);
parent.style.cssText = `
width: 800px;
border: 2px solid #000;
padding: 0 20px;
background: lightblue;
padding-bottom: 30px;
`
let title = document.createElement("h1");
parent.prepend(title);
title.innerText = "Form";
title.style.cssText = `
text-align: center;
margin: 30px 0;
`
let dataForm = document.createElement("form");
parent.append(dataForm);
dataForm.setAttribute("action", "#")
dataForm.style.cssText = `
border-bottom: 2px solid #000;
margin-bottom: 10px;
`
let firstNameInp = document.createElement("input");
dataForm.prepend(firstNameInp);
firstNameInp.setAttribute("type", "text");
firstNameInp.setAttribute("placeholder", "Your firstname");
firstNameInp.setAttribute("required", true);
firstNameInp.style.cssText = `
width: 100%;
padding: 8px 0 8px 10px;
margin: 10px 0;
font-size: 16px;
border: none;
outline: none;
border-radius: 5px;
`
let lastNameInp = document.createElement("input");
firstNameInp.after(lastNameInp);
lastNameInp.setAttribute("type", "text");
lastNameInp.setAttribute("placeholder", "Your lastname");
lastNameInp.setAttribute("required", true);
lastNameInp.style.cssText = `
width: 100%;
padding: 8px 0 8px 10px;
margin: 10px 0;
font-size: 16px;
border: none;
outline: none;
border-radius: 5px;
`
let submit = document.createElement("button");
lastNameInp.after(submit);
submit.setAttribute("onclick", "setData()")
submit.innerText = "Submit";
submit.style.cssText = `
padding: 8px 40px;
font-size: 16px;
font-weight: bold;
margin: 10px auto 30px auto;
display: block;
border-radius: 5px;
border: none;
background: rgb(1,35,255,3);
color: white;
`
let table = document.createElement("table");
dataForm.after(table);
table.setAttribute("border", "1");
table.style.cssText = `
width: 100%;
border-collapse: collapse;
margin-top: 30px;
`
let tr = document.createElement("tr");
table.prepend(tr);
let th = document.createElement("th");
tr.prepend(th);
th.innerText = "ID";
th.style.cssText = `
padding: 8px 0;
width: 5%
`
let th1 = document.createElement("th");
th.after(th1);
th1.innerText = "FirstName";
th1.style.cssText = `
padding: 8px 0;
width: 38%
`
let th2 = document.createElement("th");
th1.after(th2);
th2.innerText = "LastName";
th2.style.cssText = `
padding: 8px 0;
width: 38%
`
let th3 = document.createElement("th");
th2.after(th3);
th3.innerText = "Update and Delete";
th3.style.cssText = `
padding: 8px 0;
width: 19%
`

function* getId() {
  let id = 0;
  while (1) {
    yield ++id;
  }
}
let generator = getId();

function setData() {
  let id = generator.next().value;
  if (firstNameInp.value && lastNameInp.value) {
    let tr = document.createElement("tr");
    table.append(tr);
    let td = document.createElement("td");
    tr.prepend(td);
    td.innerText = `${ id }`;
    td.style.cssText = `
padding: 8px 0;
text-align: center;
`
    let td1 = document.createElement("td");
    td.after(td1);
    td1.innerText = `${ firstNameInp.value }`;
    td1.style.cssText = `
padding: 8px 0 8px 10px;
  `
    let td2 = document.createElement("td");
    td1.after(td2);
    td2.innerText = `${ lastNameInp.value }`;
    td2.style.cssText = `
padding: 8px 0 8px 10px;
  `
    firstNameInp.value = null;
    lastNameInp.value = null;
    let crudBtn = document.createElement("div");
    tr.append(crudBtn);
    crudBtn.style.cssText = `
    position: relative;
    `
    let btnUpdate = document.createElement("button");
    crudBtn.prepend(btnUpdate);
    btnUpdate.innerText = "Update";
    btnUpdate.style.cssText = `
    position: absolute;
    top: -35px;
    right: 74px;
    top: 0;
    padding: 7px 5px;
    background: rgba(0,0,255,0.5);
    color: white;
    font-weight: bold;
    `
    let btnDelete = document.createElement("button");
    btnUpdate.after(btnDelete);
    btnDelete.addEventListener("click", () => del(id))
    btnDelete.innerText = "Dalete";
    btnDelete.style.cssText = `
    position: absolute;
     top: -35px;
    right: 9px;
    top: 0;
    padding: 7px 5px;
    background: rgba(255,0,0,0.5);
    color: white;
    font-weight: bold;
    `
  }
  else {
    alert("Iltimos Foydalanuvchi ma'lumotlarini to'liq kiriting!")
  }
  function del(id) {
    let a = document.querySelectorAll("tr");
    a[id].innerText = '';
  }
}
