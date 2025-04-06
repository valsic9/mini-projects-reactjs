import { useRef, useState, useMemo } from "react";
import { searchMovies } from "../services/searchMovies";
import { use } from "react";

// Custom hook to fetch movies from the API
export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  // useMemo is used to create the function getMovies only once by injecting the dependencies as the
  // arguments of the returned function to avoid creating getMovies every time the user types a new letter
  // Here useMemo con be substitued by Callback
  const getMovies = useMemo(() => {
    // console.log("getMovies called");
    return async ({ search }) => {
      if (search === previousSearch.current) return;
      try {
        setLoading(true);
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
        previousSearch.current = search;
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  // const getSortedMovies = (movies) => {
  //   const sortedMovies = sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies;
  //   return sortedMovies;
  // };

  // useMemo is used to memorize an operation to compute it only when its dependencies change
  // In this case, we want to sort the movies only when the movies or sort state changes
  // not every time the component renders (to optimise perdormance)
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return {
    movies: sortedMovies,
    getMovies,
    loading,
  };
}
