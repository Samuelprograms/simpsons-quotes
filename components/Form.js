import React from "react";
import Input from "components/Input";
import Switch from "./Switch";
import Button from "./Button";

const Form = ({ onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center space-y-2 w-full sm:w-96 mx-auto"
    >
      <Input type="text" name="character" placeholder="Character" />
      <Input
        type="number"
        name="quantity"
        placeholder="# Quotes"
        min={1}
        defaultValue={1}
      />
      <div className="w-full flex space-x-2">
        <Button
          type="submit"
          className="w-full flex-1 bg-white px-4 py-2 rounded-lg dark:bg-black dark:text-white border-black border-2 dark:border-white"
        >
          Search
        </Button>
        <Switch />
      </div>
    </form>
  );
};

export default Form;
