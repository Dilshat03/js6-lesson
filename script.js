//Неправильно
// let numbers = [10,20,30]
// numbers[0] = numbers[0] * numbers[0]
// numbers[1] = numbers[1] * numbers[1]
// numbers[2] = numbers[2] * numbers[2]
// console.log(numbers)

//Правильно
// let numbers = [10,20,30]
// let newArray = numbers.map( item => item * item)
// console.log(newArray)


// let numbers = [10,20,30]
// let newArray = numbers.map(item => item === 20 ? item * item : item)
// console.log(newArray)


// let names = ["ivan","dima","misha","vasya"]
// let result = names.map((item) => item.toUpperCase())
// console.log(result)


//.filter()

// let numbers = [34,45,47,94,85]
// let result = numbers.filter((item) => item > 40)
// console.log(result)


// let names = ["pikachu","chermander","bulbazavr","ivi"]
// let result = names.filter((item) => item.length > 8)
// console.log(result)\

//.reduce()
// const task1 = (array) =>{
//     return array.reduce((acc, item) => acc + item,0)
// }
// console.log(task1([5,15,315,2,13,20,9]))
//
// const task2 = (array) => {
//     return array.reduce((acc,item) =>{
//         if (item % 2 === 0){
//             return acc + item
//         }
//         return acc
//     }, 0)
// }
// console.log(task2([5,15,315,2,13,20,9]))


// task5
// const task5 = array =>{
//     return array.reduce((acc, item) => acc + item, "")
// }
// console.log(task5( ['Аскар', 'Баяман', 'Калмамат']))


//Class work
// task1
// const task1 = array => {
//     return array.map((item) => Number(String(item)[0]) + Number(String(item)[1]))
// }
// console.log(task1([15, 64, 75, 43, 65, 63]))

// task2
// const task2 = array => {
//   return array.map((item) => item.replace(/а/gi,"я"))
// }
// console.log(task2(['Аскар', 'Баяман', 'Калмамат']))

// task3
// const task3 = array => {
//   return array.filter((item) => item.includes("к"))
// }
// console.log(task3(['Аскар', 'Баяман', 'Калмамат']))


// // task4
// const task4 = array => {
//     return array.map(item => item * item)
// }
// console.log(task4( [4, 54, 49]))

// task5
// const task5 = array =>{
//     return array.filter((item) => item < 0)
// }
// console.log(task5([3134, 4, -143, -245, -214]))

// task6
// const task6 = array => {
//     return array.filter((item) => item % 2 === 0)
// }
// console.log(task6([3, 51, 30, 54, 60]))


// task7
// const task7 = array => {
//     return array.filter((item) => item.length > 5)
// }
// console.log(task7(['Бегимай', 'Азат', 'Калмамат']))

// task8
// const task8 = array => {
//     let result = array.filter((item) => item < 0)
//     return result.length
//
// }
// console.log(task8([-13, 96, -41, -28, 40]))

// task9
// const task9 = array =>{
//     return array.filter((item) => item > 0).map((item) => item > 30 ? Math.sqrt(item) : item)
// }
// console.log(task9([3, 51, -30, -54, 60]))

// task10
// const task10 = array =>{
//     return array.filter((item,idx) => array.indexOf(item) === idx)
// }
// console.log(task10([55, 44, 55, 44, 15, 49]))

// task11
// const task11 = array => {
//     return array.filter((item) => item )
// }
// console.log(task11([NaN, 0, 77, false, -17, '',undefined, 99, null]))

// task12
// const task12 = array => {
//     return array.map((item) => item[item.length -1].toUpperCase() + item.slice(1,[item.length -1]) + item[0].toLowerCase())
// }
// console.log(task12(['Баяман', 'Калмамат']))

// task13
// const task13 = array =>{
//     return array.map((item) => item * 85)
// }
// console.log(task13([1, 65, 13 , 30, 100]))

// task14
// const task14 = array =>{
//     return array.map((item) => item.slice(0,1).toUpperCase() + item.slice(1, item.length).toLowerCase())
// }
// console.log(task14( ['асКар', 'бЯяман', 'калМмамат']))


// task15
// const task15 = array =>{
//     return array.map((item,idx) =>{
//         return `${(idx + 1)}.${(item)}`
//     })
// }
// console.log(task15(['Оскар', 'Баяман', 'Калмамат']))