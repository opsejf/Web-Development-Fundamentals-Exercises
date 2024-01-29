const movies = [
  { title: "Jaws", director: "Steven Spielberg", year: "1975" },
  { title: "Star Wars", director: "George Lucas", year: "1977" },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    year: "2018"
  },
  { title: "Top Gun", director: "Tony Scott", year: "1986" },
  { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail

// function findMovie(movieTitle){
//   for(let i=0; i<movies.length;i++){
//     if(movieTitle === movies[i].title){
//       console.log(`${movieTitle} was directed by ${movies[i].director} and released in ${movies[i].year}.`);
//     }
//   }
// };

// findMovie("Star Wars");

// console.log(movie);

// var movie = "Thor: Ragnorok";

// findMovie(movie);

// console.log(movie);

// findMovie("Star Wars");


// Part 2 = Create a function to return a movie object

function returnMovie(movieTitle){
  for(let x of movies){
    if(x.title === movieTitle){
      return x;
    }
    console.log(x);
  }
  console.log("Any text, any text at all.");

  return "Movie not found";
};

returnMovie("Star Wars");

console.log("gap");



var myMovie = returnMovie("Avengers: Infinity War");

console.log("gap");

console.log(myMovie);

console.log("gap");

console.log(`This movie is called ${myMovie.title} and it was directed by ${myMovie.director} and released in ${myMovie.year}.`);

var myOtherMovie = returnMovie("Thor:Ragnorok");

console.log(myOtherMovie);

console.log("gap");


function myMovieDetails(anyMovie){
  movieType = typeof anyMovie;
  if(movieType === "object"){
    return "This is an object";
  }
  else{
    return anyMovie;
  }
};

console.log(myMovieDetails(myOtherMovie));

console.log(myMovieDetails(returnMovie("Jaws")));
// let myMovie = returnMovie("Avengers: Infinity War");
// // Instruction 4
// console.log(myMovie);