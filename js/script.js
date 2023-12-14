"use strict"; // (говорим файлу, что работаем в современном, строгом режиме)
//let number = 5; // (let-мы можем поменять значение переменой) 
//const LeftBorderWidth = 1; // (const- значение переменой постоянное) 

//number = 10;
//console.log(number);

//урок 11
//const obj = {name:'John', age: 25, isMarried: false};
//console.log(obj.age);

//урок 13
//const answers = [];
//answers[0]= prompt( 'Как ваше имя?', '');
//answers[1]= prompt( 'Как ваша фамилия?', '');
//answers[2]= prompt( 'Сколько вам лет?', '');
//document.write(answers);
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a= prompt('Один из последних просмотренных фильмов?',''),
      b= prompt('На сколько оцените его?', ''),
      c= prompt('Один из последних просмотренных фильмов?',''),
      d= prompt('На сколько оцените его?', '');
     
personalMovieDB.movies[a]= b;
personalMovieDB.movies[c]= d;
console.log(personalMovieDB);