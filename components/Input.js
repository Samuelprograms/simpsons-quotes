import React from "react";

const Input = (props) => {
  return (
    <div className="flex justify-between items-center w-96 ">
      <label className="text-black dark:text-white text-lg">
        {props.placeholder}:{" "}
      </label>
      <input className="py-3 px-5 rounded-lg outline-none" {...props} />
    </div>
  );
};

export default Input;
