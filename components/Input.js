import React from "react";

const Input = (props) => {
  return (
    <div className="flex justify-between items-center w-full ">
      <label className="text-black dark:text-white text-lg w-52">
        {props.placeholder}:{" "}
      </label>
      <input className="py-3 px-5 rounded-lg outline-none w-full" {...props} />
    </div>
  );
};

export default Input;
