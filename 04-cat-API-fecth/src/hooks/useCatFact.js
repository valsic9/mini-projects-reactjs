import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

// Custom hook to fecth a random cat fact
export function useCatFact() {
  const [fact, setFact] = useState(null);

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  // Fetch a random fact when the page loads
  useEffect(() => {
    refreshFact();
  }, []);
  return { fact, refreshFact };
}
