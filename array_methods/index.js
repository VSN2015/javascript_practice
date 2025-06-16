users = [
    {
        id: 1,
        name: "John",
        age: 30,
        has_pet: true,
        email: "john@example.com",
        is_active: true,
        money: [200, 300]
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
        has_pet: false,
        email: "jane@example.com",
        is_active: true,
        money: [100, 300]
    },
    {
        id: 3,
        name: "Bob",
        age: 35,
        has_pet: true,
        email: "bob@example.com",
        is_active: false,
        money: [100, 100]
    },
]

console.table(users)

// filter
// const filteredUsers = users.filter((user) => user.age >= 30)
// console.table(filteredUsers)

// find
// const user = users.find((user) => user.id === 2)
// console.log("user", user)

// map
// const customUsers = users.map((user) => {
//     return {
//         ...user,
//         email: `${user.email.toUpperCase() + 'edited'}`
//     }
// })
// console.table(customUsers)

// some
// const filteredUsers = users.filter((user) => {
//     return user.money.some((money) => money == 100)
// }) 
// console.table(filteredUsers)

// every
// const filteredUsers = users.filter((user) => {
//     return user.money.every((money) => money == 100)
// }) 
// console.table(filteredUsers)

// reduce
// const filteredUsers = users.reduce((acc, user) => {
//     if (user.age >= 35) {
//         acc.push(user)
//     }
//     return acc
// }, [])
// console.table(filteredUsers)

// reduce
// const updatedUsers = users.reduce((acc, user) => {
//     return {
//         ...acc,
//         [user.id]: user
//     }
// }, {})
// console.log("updatedUsers", updatedUsers)

// reduce
// const updatedUsers = users.reduce((acc, user) => {
//     const sumMoney = user.money.reduce((acc, money) => {
//         return acc + money
//     }, 0)
//     return acc + sumMoney
// }, 0)
// console.log("updatedUsers", updatedUsers)