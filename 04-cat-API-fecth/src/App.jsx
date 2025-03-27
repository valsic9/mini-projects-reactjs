import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageURL } = useCatImage({ fact });

  // Fetch a random fact from API when the button is clicked
  const handleClick = () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Pussies App</h1>

      <button onClick={handleClick}>Get a new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && (
        <img
          src={imageURL}
          alt="Random cat found with the first three words of the fact"
          className="cat-image"
        />
      )}
    </main>
  );
}
