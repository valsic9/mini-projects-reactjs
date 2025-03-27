import { useState, useEffect } from "react";
import { getImageUrl } from "../services/imageUrl";

// Custom hook to fetch a random cat image
export function useCatImage({ fact }) {
  const [imageURL, setImageURL] = useState(null);

  // Fetch a random cat picure when the fact is fetched
  useEffect(() => {
    if (!fact) return;

    const firstThreeWords = fact.split(" ", 3).join("");

    getImageUrl(firstThreeWords).then((url) => setImageURL(url));
  }, [fact]);

  return { imageURL };
}
