export function MoviesResult({ movies }) {
  return (
    <ul className="movies">
      {
        movies.map(movie => {
          return (
            <li key={movie.id} className="movie">
              <h3>{movie.title}</h3>
              <p>
                {movie.year}
              </p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          )
        })
      }
    </ul>
  )
}


