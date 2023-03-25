let body = document.querySelector("body");
body.style.cssText = `
margin: 0;
padding: 0;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
`
let labelFirst = document.createElement("label");
labelFirst.innerText = "FirsName:";
labelFirst.setAttribute("for", "nameF");
let labelLast = document.createElement("label");
labelLast.setAttribute("for", "nameL");
labelLast.innerText = "LastName:";

labelFirst.style.cssText = `
font-size: 18px;
`
labelLast.style.cssText = `
font-size: 18px;
`


let inputFistname = document.createElement("input");
inputFistname.setAttribute("type", "text");
inputFistname.setAttribute("id", "nameF");
inputFistname.style.cssText = `
width: 350px;
height: 24px;
font-size: 16px;
margin-right: 5px;
`
let inputLastname = document.createElement("input");
inputLastname.setAttribute("type", "text");
inputLastname.setAttribute("id", "nameL");
inputLastname.style.cssText = `
width: 350px;
height: 24px;
font-size: 16px;
margin-right: 5px;
`
let btn = document.createElement("button");
btn.innerText = "Add";
btn.setAttribute("onclick", "setData()")
btn.style.cssText = `
padding:4px 10px;
`
let div = document.createElement("div");
div.style.cssText = `
width: 800px;
margin-top: 50px;
display: flex;
`


let divInp = document.createElement("div");
divInp.style.cssText = `
width: 800px;
display: flex;
justify-content: space-between;
margin-top: 50px;
`

let table = document.createElement("table");
table.setAttribute("border", true)
table.style.cssText = `
width: 50%;
border-collapse: collapse;
`
let table2 = document.createElement("table");
table2.setAttribute("border", true)
table2.style.cssText = `
width: 50%;
border-collapse: collapse;
`
let tr = document.createElement("tr");
let th = document.createElement("th");
th.innerText = "FirstName";
th.style.cssText = `
font-size: 18px;
padding: 5px 0;
`
let tr2 = document.createElement("tr");
let th2 = document.createElement("th");
th2.innerText = "LastName";
th2.style.cssText = `
font-size: 18px;
padding: 5px 0;
`

let leftDiv = document.createElement("div");
let rightDiv = document.createElement("div");

leftDiv.style.cssText = `
width: 200px;
display: flex;
align-items: center;
`
rightDiv.style.cssText = `
width: 200px;
display: flex;
align-items: center;
`

leftDiv.prepend(inputFistname);
leftDiv.prepend(labelFirst);

rightDiv.prepend(inputLastname)
rightDiv.prepend(labelLast);


divInp.prepend(leftDiv);
divInp.append(rightDiv);

body.prepend(divInp);
divInp.append(btn);

body.append(div);
div.prepend(table)
div.append(table2)
table.prepend(tr);
tr.prepend(th);
table2.prepend(tr2);
tr2.prepend(th2);


console.log(body);

function* setId() {
  let id = 1;
  while (1) {
    yield id++;
  }
}
let generator = setId();

function dataDel(dataID) {
  console.log(dataID);
}

function setData() {
  let id = generator.next().value;
  if ((inputFistname.value && inputLastname.value)) {
    let tr = document.createElement("tr");
    table.append(tr);
    let td = document.createElement("td");
    tr.prepend(td);
    td.innerHTML = `<label>${ id }. </label> ${ inputFistname.value }`;
    td.style.cssText = `
    padding-left: 10px;
    font-size: 20px;
    `
    inputFistname.value = null;

    let tr2 = document.createElement("tr");
    table2.append(tr2);
    let td2 = document.createElement("td");
    tr2.prepend(td2);
    td2.innerHTML = `<label>${ id }. </label> ${ inputLastname.value }`;
    td2.style.cssText = `
    padding-left: 10px;
    font-size: 20px;
    position: relative;
    `
    inputLastname.value = null;

    let btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.setAttribute("onclick", `${ dataDel(id) }`);
    btnDelete.style.cssText = `
    position: absolute;
    right: 0;
    `
    td2.append(btnDelete);
  }

}