import { useState } from "react";
import lightMode from "../assets/icons8-light-mode-78.png";
import darkMode from "../assets/darkmode.png";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoverText, setHoverText] = useState("");

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  const handleHover = () => {
    setHoverText(isDarkMode ? "Light Mode" : "Dark Mode");
  };

  const handleLeave = () => {
    setHoverText("");
  };
  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={handleToggleDarkMode}
        className=" cursor-pointer p-3"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {isDarkMode ? (
          <img src={lightMode} alt="Light Mode" />
        ) : (
          <img src={darkMode} alt="Dark Mode" />
        )}
      </button>
      <div className="text-center absolute bottom-0 left-0 right-0 dark:text-white">
        {hoverText}
      </div>
    </div>
  );
};

export default DarkModeToggle;
