"use strict";

// let personalMovieDb = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// function start() {
//     let numberOfFilms;
//     do {
//         numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
//     }
//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms));

//     personalMovieDb.count = numberOfFilms;
// }

// function rememberMyFilms() {
//     for (let i = 1; i <= 2; i++) {
//         let lastSawFilm;
//         do {
//             lastSawFilm = prompt("Один из последних просмотренных фильмов?", "");
//         }
//         while (lastSawFilm == "" || lastSawFilm == null || lastSawFilm.length > 50);

//         let grade;
//         do {
//             grade = +prompt("Насколько оцените его?", "");
//         }
//         while (grade == "" || grade == null || isNaN(grade));
//         personalMovieDb.movies[lastSawFilm] = grade;
//     }
// }

// function detectPersonalLevel() {
//     if (personalMovieDb.count < 10) {
//         alert("You watched quite a few films");
//     } else
//     if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
//         alert("You are a classical watcher");
//     } else
//     if (personalMovieDb.count >= 30) {
//         alert("You are cinephile");
//     } else {
//         alert("An error happend");
//     }
// }

// function writeYourGenres() {
//     let genre;
//     for (let i = 0; i <= 2; i++) {
//         do {
//             genre = prompt(`Ваш любимый жанр под номером ${i+1}`, "");
//         }
//         while (genre == "" || genre == null);
//         personalMovieDb.genres[i] = genre;
//     }
// }

// function showMyDB() {
//     if (personalMovieDb.privat == false) {
//         console.log(personalMovieDb);
//     }
// }

// start();
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();
// showMyDB();


// let arr = [1, 2, 3, 6, 8];

// console.log(arr.push(10));

// console.log(arr);

// arr.forEach(function(item, i, arr){
// console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// // Место для первой задачи
// function firstTask() {
//     // Пишем решение вот тут
//     for(let i = 5; i <= 10; i++){
//         console.log(i);
//     }
// }
// firstTask();

// // Место для второй задачи
// function secondTask() {
//     // Пишем решение вот тут
//     for(let i = 20; i >= 10; i--){
//         console.log(i);
//         if (i === 13){
//             break;
//         }
//     }
// }
// secondTask();

// // Место для третьей задачи
// function thirdTask() {
//     // Пишем решение вот тут
//     for(let i = 1; i < 10; i++){
//         i++;
//         console.log(i);
//     }
// }
// thirdTask();

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// function fourthTask() {
//     // Пишем решение вот тут
//     let i = 2;
//     while (i <= 16) {
//         if (i % 2 === 0) {
//             // continue;

//         } else {
//             console.log(i);
//         }
//         i++;
//     }

// }
// fourthTask();

// // Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];

//     // Пишем решение вот тут
//     for (let i = 0; i <= 5; i++){
//         arrayOfNumbers[i] = i + 5;
//     }

//     // Не трогаем
//     return arrayOfNumbers;
// }
// fifthTask();




// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i <= arr.length - 1; i++){
//         result[i] = arr[i];
//     }
//     console.log(result); 

//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for(let i = 0; i <= data.length - 1; i++) {
//         if (typeof(data[i]) === 'number'){
//             data[i] = data[i] * 2;
//         } else {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data); 


//     function secondTask() {
//         const data = [5, 10, 'Shopping', 20, 'Homework'];

//         for (let i = 0; i < data.length; i++) {
//             if (typeof(data[i]) === 'number') {
//                 data[i] = data[i] * 2;
//             } else if (typeof(data[i]) === 'string') {
//                 data[i] = data[i].concat(' - done');
//             }
//         }

//         console.log(data);
//         return data;
//     }

//     function thirdTask() {
//         // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//         const data = [5, 10, 'Shopping', 20, 'Homework'];
//         const result = [];
//             for(let i = 0; i <= data.length - 1; i++){
//                 result[i] = data[data.length - 1 - i];
//             }
//         // Не трогаем
//         return result;
//     }


// const lines = 6;
// let result = '';

// for (let i = 1; i <= lines; i++) {
//     for (let c = i; c < lines; c++) {
//         result += ' ';
//     }

//     for (let j = 1; j < i + i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

////////////////////////Exercise 6

// function getMathResult(numberOne, numberTwo) {
//     if (typeof(numberTwo) != 'number' || numberTwo <= 0) {return numberOne;}

//     let result = '';
//     for (let i = 1; i <= numberTwo; i++){
//         result = result + `${numberOne * i}`;
//         if (i != numberTwo) {result = result + '---';}
//     }
//     return result;
// }

// console.log(getMathResult(6, 8));

const a = "Hello World";

console.log(a.slice(5));