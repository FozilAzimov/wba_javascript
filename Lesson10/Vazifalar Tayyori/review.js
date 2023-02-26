// CRUD: Read, Creat, Delete, Update

// let user = [
//   { id: 1, name: "Foziljon", surname: "Azimov", age: 22, },
//   { id: 2, name: "Laziz", surname: "Nazarov", age: 23, },
//   { id: 3, name: "Behruz", surname: "Aliyev", age: 23, },
//   { id: 4, name: "Mahmud", surname: "Berdiyev", age: 28, },
//   { id: 5, name: "Javohir", surname: "Qarshiyev", age: 23, },
//   { id: 6, name: "Kamol", surname: "Salimov", age: 25, },
//   { id: 7, name: "Islom", surname: "Musayev", age: 23, }
// ];

// Read ->
// 1).
// let func = (p) => {
//   let res = user.filter(v =>v.surname.includes(p))
//   console.log(res);
// }
// func("ov")

// 2).
// let func = () => {
//   let res = user.sort((a,b)=> return a.name.localeCompare(b.name);)
//   console.log(res);
// }
// func()

// 3).
// let func = (id)=>{
//   let res = user.find(v=>v.id===id);
//   console.log(res);
// }
// func(5);

// 4).
// let func = (data) => {
//   let res = user.filter(value => {
//     return (value.id === data.id || value.name.includes(data.name) || value.surname.includes(data.surname) || value.age === data.age);
//   })
//   console.log(res);
// }
// func({ id: 5 });

// Delete ->
// 4).
// let func = (id1, id2, id3) => {
//   let res = user.filter(v => {
//     return (v.id !== id1 && v.id !== id2 && v.id !== id3);
//   })
//   console.log(res);
// }
// func(5, 1, 7);

// Creat ->
// 5).
// let func = (p) => {
//   let res = [...user, p];
//   console.log(res);
// }
// func({ id: user.length + 1, name: "Muhammad", surname: "Mustafoyev", age: 25 })

// Update ->
// 6).
// let func = (data) => {
//   let res = user.map(value=>data.id==value.id?{...value,[data.type]:data.value}:value);
//   console.log(res);
// }
// func({ id: 3, type: "title", value: "FrontEnd" });