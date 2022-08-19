import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import useTheme from "hooks/useTheme";
import React from "react";

const Switch = () => {
  const { toggleTheme, isDarkTheme } = useTheme();
  const Icon = isDarkTheme ? SunIcon : MoonIcon;
  return (
    <div
      onClick={() => toggleTheme()}
      className="cursor-pointer text-white outline-none bg-black  dark:bg-white dark:text-black rounded-lg p-2.5  w-12 border-white border-2 dark:border-black "
    >
      <Icon className="w-6 h-6" />
    </div>
  );
};

export default Switch;
