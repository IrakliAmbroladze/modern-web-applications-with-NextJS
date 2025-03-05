"use client";

import { useContext, useState } from "react";
import React from "react";
import Welcome from "@/components/welcome";

const ThemeContext = React.createContext();

const HomePage = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Welcome />
      <Toolbar />
    </ThemeContext.Provider>
  );
};

function Toolbar() {
  return <ThemeSwitch />;
}

function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
}

export default HomePage;
