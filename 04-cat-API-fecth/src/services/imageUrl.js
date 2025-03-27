import { RANDOM_PICTURE } from "../constants";

export const getImageUrl = async (words) => {
  const res = await fetch(RANDOM_PICTURE + `${words}?json=true?&size=50`);
  const data = await res.json();
  const { url } = data;
  return url;
};
