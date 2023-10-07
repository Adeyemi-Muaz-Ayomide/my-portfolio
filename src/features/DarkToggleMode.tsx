import { useState, useEffect } from "react";
import lightMode from "../assets/icons8-light-mode-78.png";
import darkMode from "../assets/darkmode.png";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // useEffect to set the initial mode based on localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    if (savedMode !== null) {
      setIsDarkMode(savedMode === "true");
    }
  }, []);

  // useEffect to save the mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode.toString());
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`absolute top-2 right-4 `}>
      <button
        onClick={handleToggleDarkMode}
        className=" w-[85px] cursor-pointer p-3"
      >
        {isDarkMode ? (
          <img src={lightMode} alt="Light Mode" />
        ) : (
          <img src={darkMode} alt="Dark Mode" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
