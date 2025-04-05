// const books = [
//     {
//         bookname: "The Forgotten Kingdom",
//         genre: "History",
//         publish: 1980,
//         edition: 2024
//     },
//     {
//         bookname: "Quantum Tales",
//         genre: "Science Fiction",
//         publish: 1995,
//         edition: 2020
//     },
//     {
//         bookname: "Hearts of Iron",
//         genre: "War",
//         publish: 2005,
//         edition: 2015
//     },
//     {
//         bookname: "The Cursed Scroll",
//         genre: "Fantasy",
//         publish: 2010,
//         edition: 2023
//     },
//     {
//         bookname: "Modern Economics",
//         genre: "Economics",
//         publish: 2011,
//         edition: 2022
//     },
//     {
//         bookname: "AI & the Future",
//         genre: "Technology",
//         publish: 2018,
//         edition: 2024
//     },
//     {
//         bookname: "Echoes of the Past",
//         genre: "Mystery",
//         publish: 2000,
//         edition: 2020
//     },
//     {
//         bookname: "The Art of Zen",
//         genre: "Philosophy",
//         publish: 1992,
//         edition: 2008
//     },
//     {
//         bookname: "Digital Fortress",
//         genre: "Thriller",
//         publish: 1998,
//         edition: 2023
//     },
//     {
//         bookname: "Journey to Mars",
//         genre: "Science Fiction",
//         publish: 2007,
//         edition: 2021
//     }
// ];

// let publishdate = 2005;
// let selectedBooks = [];
// books.forEach(function (book){
//     if(book.publish > publishdate)
//         selectedBooks.push(book)
// } )

// console.log(selectedBooks)
// console.log(selectedBooks.length)


const nums = [1,2,3,4,5,6,7,8,9,10]

let newNums = nums
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num>=40 )
                .filter( (num) => !(num%3) )

console.log(newNums)