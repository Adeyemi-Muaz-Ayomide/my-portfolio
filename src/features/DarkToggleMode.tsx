import { useState } from "react";
import lightMode from "../assets/icons8-light-mode-78.png";
import darkMode from "../assets/darkmode.png";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="absolute top-2 right-4">
      <button onClick={handleToggleDarkMode} className=" w-[85px] cursor-pointer p-3">
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
