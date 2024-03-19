// let b = 8
// b = b + 10
// b += 10
// b = b - 7
// b -= 7

// b = b + 1 * 9 + 1
// b += 1

// add or sub one value
// b++
// b--
// console.log(b);


// symbol,undefined,null,bigInt,number,string,boolean
// object - object,array,date,error etc..



// const obj1 = {}
// const obj2 = new Object()

// const arr1 = [18]
// const arr2 = new Array(18)

// console.log(arr1.length);
// console.log(arr2.length);



// const user = {
//     name: 'Ayshen',
//     surname: "Ayshenli",
//     info: {
//         address: 'Baku',
//         uni: 'ADNSU'
//     }
// }

// const db = [
//     {
//         name: 'Ayshen',
//         surname: "Ayshenli",
//         info: {
//             address: 'Baku',
//             uni: 'ADNSU'
//         }
//     },
//     {
//         name: 'Ayshen',
//         surname: "Ayshenli",
//         info: {
//             address: 'Baku',
//             uni: 'ADNSU'
//         }
//     },
//     {
//         name: 'Ayshen',
//         surname: "Ayshenli",
//         info: {
//             address: 'Baku',
//             uni: 'ADNSU'
//         }
//     },
//     {
//         name: 'Ayshen',
//         surname: "Ayshenli",
//         info: {
//             address: 'Baku',
//             uni: 'ADNSU'
//         }
//     },
//     {
//         name: 'Ayshen',
//         surname: "Ayshenli",
//         info: {
//             address: 'Baku',
//             uni: 'ADNSU'
//         }
//     },
//     {
//         name: 'Ayshen',
//         surname: "Ayshenli",
//         info: {
//             address: 'Baku',
//             uni: 'ADNSU'
//         }
//     },
//     {
//         name: 'Ayshen',
//         surname: "Ayshenli",
//         info: {
//             address: 'Baku',
//             uni: 'ADNSU'
//         }
//     },
// ]


// // console.log('1', user[1]);

// const users = [
//     {
//         name: 'Ayshen',
//         surname: 'Ayshenli'
//     },
//     {
//         name: 'Nur',
//         surname: 'Nurlu'
//     },
//     {
//         name: 'Ilqar',
//         surname: 'Ilqarli'
//     },
//     {
//         name: 'Ibrahim',
//         surname: 'Ibrahimli'
//     },
// ]

// const container = document.querySelector('.container')
// function getUser() {
//     users.forEach((user) => {
//         const name = document.createElement('h3')
//         const surname = document.createElement('h3')
//         const hr = document.createElement('hr')
//         name.innerHTML = 'Name:' + user.name
//         surname.innerHTML = 'Surname:' + user.surname
//         container.append(name, surname, hr)
//     })
// }

// getUser()






// add and remove data in the end of the array
// numbers.push(19, 8, 'ulfat', true)
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers.pop()

// numbers.unshift('Code', 6, 88, false)
// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.shift()
// numbers.shift()
// console.log(numbers);

const numbers = [5, 21, 14, 52, 17, 22, 9]

// => arrow function
// let sum = 0
// let sum2 = 0
// numbers.map(item => sum += item)
// numbers.map((_, i) => sum2 += i)
// console.log(sum - sum2);

// console.log(Math.round(sum / numbers.length));

// let mult = 1
// numbers.map(item => mult *= item)
// console.log(mult);

// console.log(numbers.map(item => item = item ** 3));

// console.log(numbers.map(ayshen => ayshen));




// const users = ['Ayshen', 'Ayten', 10, 33, 'Tahir', 'Ayten', 'Cavid', 'Vilayet', 'Ayten', 9, 10, true, null, undefined]


// let result = users.find(item => typeof item === 'string' && item.startsWith('A'))
// console.log(result);

// %





