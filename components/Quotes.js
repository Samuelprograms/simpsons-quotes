import React from "react";
import Image from "next/image";
const Quotes = ({ data = [] }) => {
  return (
    <div
      className={`grid ${data.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
    >
      {data.map((item, index) => {
        const { quote, character, image, characterDirection } = item;
        return (
          <div
            key={index}
            className="border-4 bg-white dark:bg-black border-black dark:border-white shadow-2xl shadow-black m-4"
          >
            <h1 className="bg-yellow-400 dark:bg-yellow-700 dark:text-white p-4 rounded-sm">
              {character}
            </h1>
            <div
              className={`flex items-center justify-center p-7 ${
                characterDirection === "Right" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <p className="border-4 p-4 border-black rounded-lg bg-white">
                {quote}
              </p>
              <Image src={image} width={500} height={500} alt={character} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Quotes;
