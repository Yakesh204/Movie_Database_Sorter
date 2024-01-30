const movieProcess = require('./movieAnalysis.js')
const movies = require('./movie2.json')
//test('Works',() => {expect(movieProcess('Fantasy',2)).toBe('It\'s a Wonderful Life released in 1946 is the highest rated Fantasy movie over 2 hour(s) long, with an imdb rating of 8.7')});
//test('Works',() => {expect(movieProcess('Action',2)).toBe('The Dark Knight released in 2008 is the highest rated Action movie over 2 hour(s) long, with an imdb rating of 9.1')});


test('Works',() => {expect(movieProcess('Western',2,movies)).toBe('Dances with Wolves released in 1990 is the highest rated Western movie over 2 hour(s) long, with an imdb rating of 8.1')});
