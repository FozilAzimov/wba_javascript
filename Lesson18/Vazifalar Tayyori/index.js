
// 1).
// let user = {
//   id: 1,
//   name: "webbrain",
//   surname: "academy",
//   getFull () {
//     console.log( this.id, this.name, this.surname );
//   }
// }

// let data = user.getFull;
// data.call(user);


// 2).
// let user = {
//   id: 1,
//   name: "webbrain",
//   surname: "academy",
//   getFull () {
//     return ( () => {
//       console.log( this.id, this.name, this.surname );
//     } )();
//   }
// }
// user.getFull()