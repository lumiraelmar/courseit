var express = require('express');
var router = express.Router();
var movies = require('../data/movies.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  const person = {
    name: 'Lu',
    surname: 'Miraelmar'
  }

  return res.json(person)
});


let movieList = [];
let serieList = [];

movies.map((movie) => {
  if (movie.type == "movie") {
    movieList.push(movie);
  } else if (movie.type == "serie") {
    serieList.push(movie)
  }
}) 

router.get('/movies', (req, res) => {
  //const getMovies = movies.filter((movie) => {
  // return movie.type == "movie";
  //})
  //return res.json(getMovies)
  return res.json(movieList)
});
router.get('/series', (req, res) => {
  //const getSeries = movies.filter((movie) => {
  // return movie.type == "serie";
  //})
  //return res.json(getSeries)
  return res.json(serieList)
});

router.get("/movies/:id", (req, res) => {
  const id = req.params.id;

  const getMovie = movies.filter((movie) => {
    return movie.id == id;
  })

  if (getMovie.length > 0) {
    const [first] = getMovie
    return res.json(first);
  } else {
    return res.sendStatus(404);
  }
  
})

router.post("/contact", (req, res) => {
  const body = req.body;
  const { name, mail, contact } = body;
  if (name && mail && contact) {
    return res.sendStatus(201)
  } else {
    return res.sendStatus(400)
  }
})

module.exports = router;
