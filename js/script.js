

"use strict" 

const numberOfFilms = +prompt ('Сколько фильмов вы уже просмотрели?', '');
const   personalMovieDB = {
	count: numberOfFilms,
	movies: {}, // пустой обьект
	actors: {}, // пустой обьект
	genres: [], // пустой массив, где елемнты идут строго по порядку
	privat: false
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
	b = prompt('На сколько вы его оцените?', ''),
	d = prompt('Один из последних просмотреных фильмов?', ''),
	c = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[d] = c;

console.log(personalMovieDB);
