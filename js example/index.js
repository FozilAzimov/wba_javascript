
const data = [
  { id: 1, name: "Foziljon", surname: "Azimov", group: "AT-2" },
  { id: 2, name: "Mirkomil", surname: "Norqulov", group: "AT-2" },
  { id: 3, name: "G'aniyev", surname: "Islom", group: "AT-1" },
  { id: 4, name: "Shuhrat", surname: "Qurbonov", group: "AT-2" },
  { id: 5, name: "Muhammadali", surname: "Hamzayev", group: "AT-1" },
  { id: 6, name: "Suxrob", surname: "Sotvoldiyev", group: "AT-3" },
  { id: 7, name: "Abror", surname: "Berdiyev", group: "AT-4" },
]

//  --Savol--: natija shu ko'rinishda gruppalansin.
// users = [
//   'at-2': [
//     { id: 1, name: 'Foziljon', surname: 'Azimov', group: 'AT-2' },
//     { id: 2, name: 'Mirkomil', surname: 'Norqulov', group: 'AT-2' },
//     { id: 4, name: 'Shuhrat', surname: 'Qurbonov', group: 'AT-2' }
//   ],
//   'at-1': [
//     { id: 3, name: "G'aniyev", surname: 'Islom', group: 'AT-1' },
//     { id: 5, name: 'Muhammadali', surname: 'Hamzayev', group: 'AT-1' }
//   ],
//   'at-3': [{ id: 6, name: 'Suxrob', surname: 'Sotvoldiyev', group: 'AT-3' }],
//   'at-4': [{ id: 7, name: 'Abror', surname: 'Berdiyev', group: 'AT-4' }]
// ]

const users = [];
data.forEach((user) => {
  users[user.group.toLowerCase()]
    ? users[user.group.toLowerCase()].push(user)
    : users[user.group.toLowerCase()] = [user];
})
console.log(users);