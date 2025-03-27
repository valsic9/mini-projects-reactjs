import { RANDOM_FACT } from "../constants";

export const getRandomFact = async () => {
  const res = await fetch(RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};
