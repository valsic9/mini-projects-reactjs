import { useState, useEffect, useRef } from "react";
// Custom hook reponsible for managing the state of the search input and its validation
export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  // useRef is used to persist the value of isFirstInput across renders
  // isFirstInput is used to check if the search input is renderes for the first time, so we can skip the validation
  // and avoid showing an error mesage when the input is empty for the first time
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("Please enter a movie name");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("Please enter a valid movie name");
    }
    if (search.length < 3) {
      setError("Please enter at least 3 characters");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
