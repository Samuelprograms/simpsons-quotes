import axios from "axios";

export const getQuotes = async ({ character, quantity }, firstTime = false) => {
  const url = "https://simpsons-quotes-tau.vercel.app/api/quotes";
  if (firstTime) {
    const { data } = await axios.get(url);
    return data;
  }
  const { data } = await axios.post("/api/quotes", { character, quantity });
  return data;
};
