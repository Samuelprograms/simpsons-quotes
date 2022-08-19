import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-52 h-52 p-4 rounded-full border-4 bg-yellow-400 border-black flex items-center justify-center mx-auto">
        Loading...
      </div>
    </div>
  );
};

export default Loader;
