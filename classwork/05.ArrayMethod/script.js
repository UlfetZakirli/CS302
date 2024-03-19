// const arr1 = new Array() //constructor
// const arr2 = [] //literal

// alt + shift + up or down



// const users = [
//     {
//         id: 1,
//         name: 'Ilqar',
//         surname: 'Ilqarli',
//         age: 22
//     },
//     {
//         id: 2,
//         name: 'Ibrahim',
//         surname: 'Ibrahimli',
//         age: 22
//     },
//     {
//         id: 3,
//         name: 'Nur',
//         surname: 'Nurlu',
//         age: 21
//     },
// ]

// let test = ['l', 'b', 'a']
// console.log(test[2]);

//1
// let user = users.find(item => item.name === 'Nur').name
// console.log(user);

//2
// console.log(users.find(item => item.name.startsWith('Nur')).name);

// 3.
// console.log(users[2].name);

// 4.
// let result = users.slice(-1)
// console.log(result[0].name);

// 5.
// console.log(users.find(item => item.id === 3));





// map,find,filter,pop,push,shift,unshift (loop),findIndex,findLastIndex

// let result = names.map((item, index) => {
//     if (item !== 'Arzu') {
//         return index
//     }
// }).filter(item => item)

// console.log(result);



// // 0 - 100 / a-z  ascending (asc)
// // 100 - 0 / z-a descending (desc)

// numbers.sort((a, b) => b - a)

// console.log(numbers);

const names = ['Leman', 'Arzu', 'Fuad', 'Zakir', 'Arzu', 'Zaur', 'Ayten', 'Xeyal', 'Arzu', 'Buta', 'Bahar']
// names.sort((b,a) => b.localeCompare(a))
// console.log(names);


// console.log(names);
// names.reverse()
// console.log(names);


// slice

// slice(startIndex, endIndex)
// let fullName = 'Leman Babayeva'
// console.log(fullName.slice(0, 8));

// reduce
// const numbers = [1, 2, 3, 4]

// let sum = 100
// numbers.map(item => sum += item)
// console.log(sum);

// const result2 = numbers.reduce((acc, item) => acc - item)
// console.log(result2);


const arr = [4, 8, 9, 1, 4, 9, 10, 11, 33, 21, 11]

// 1.sort asc
// 2.sort desc
// 3.reverse
// 4.sum all numbers(map)
// 5.mult all numbers(reduce)
// 6.find item is equal 9
// 7.filter only 4 numbers
// 8.find index of 10


const arr2 = ['Aynur', 'Ilqar', 'Azerin', 'Ulfat', 'Zakir', 'Fuad', 'Bahar']
// 9.sort asc
// 10.sort desc
// 11.slice form Ilqar to Fuad
// 12.reverse
// 13.console only last name
// 14.console only last three names

