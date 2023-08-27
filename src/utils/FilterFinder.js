export function filterMoviesByName(movies, name) {
  return movies.filter((movie) => movie.nameRU.toLowerCase().includes(name.toLowerCase()) || movie.nameEN.toLowerCase().includes(name.toLowerCase()))
}

export function filterMoviesByDuration(movies) {
  return movies.filter((movie) => movie.duration <= 40);
}


