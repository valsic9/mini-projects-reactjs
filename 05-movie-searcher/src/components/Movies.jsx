import { MoviesResult } from "./movies/MoviesResult";
import { NoMoviesResult } from "./movies/NoMoviesResult";

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies ?
      <MoviesResult movies={movies} /> :
      <NoMoviesResult />
  )
}