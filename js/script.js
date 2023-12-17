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


for(let i = 0; i < 2; i++) {
    const a= prompt('Один из последних просмотренных фильмов?',''),
          b= prompt('На сколько оцените его?', '');
          
    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a]= b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }     
}

if(personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if(personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);