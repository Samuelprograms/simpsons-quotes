import useTheme from "hooks/useTheme";
import React from "react";

const Layout = ({ children }) => {
  const { isDarkTheme } = useTheme();
  return (
    <div className={`h-screen ${isDarkTheme ? "dark bg-dark" : "bg-light"}`}>
      <div className="font-bold capitalize">{children}</div>
    </div>
  );
};

export default Layout;
