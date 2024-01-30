let mov = require(`./movies-250.json`);//Do not touch

function getBestMovieBasedOn(genre, duration, file){

let movies = file.movies;

let genreFiltered = movies.filter(movies => movies.Genre.includes(genre));

let durationFiltered = genreFiltered.filter(genreFiltered => (genreFiltered.Runtime.split(" ")[0]/60) > duration)

let bestMovie = durationFiltered.reduce((max, current) => {return current.imdbRating > max.imdbRating ? current : max})
        
return `${bestMovie.Title} released in ${bestMovie.Year} is the highest rated ${genre} movie over ${duration} hour(s) long, with an imdb rating of ${bestMovie.imdbRating}`
}


//Do not touch
console.log(getBestMovieBasedOn('Romance',2, mov));
module.exports=getBestMovieBasedOn;



