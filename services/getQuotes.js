import axios from "axios";

export const getQuotes = async ({ character, quantity }, firstTime = false) => {
  const url = process.env.DOMAIN;
  if (firstTime) {
    const { data } = await axios.get(url);
    return data;
  }
  const { data } = await axios.post("/api/quotes", { character, quantity });
  return data;
};
