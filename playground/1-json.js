
const fs =require('fs')
//Code TO Write To a File
// const book ={
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
// const parseData = JSON.parse(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)
//Code To Read From A File
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data =JSON.parse(dataJson)
// console.log(data.title)
//-------Challenge
const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const userdata = JSON.parse(dataJson)
userdata.name = 'Usman'
userdata.age = 19 
userJson =JSON.stringify(userdata)
fs.writeFileSync('1-json.json', userJson)