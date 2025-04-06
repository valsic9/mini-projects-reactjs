const API_KEY = "bec7af26";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await res.json();

    const movies = json?.Search; // ?. optional chaining operator assings a value when the value exists

    // Best practice to abstract the API data to a mapped object
    return movies?.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      };
    });
  } catch (e) {
    throw new Error("Error at fecthing");
  }
};
