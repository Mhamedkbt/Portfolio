import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }) => {
  // Initialize state: Check localStorage, if empty, default to TRUE (dark)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true; 
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    // If no theme is saved (first time visitor), force Dark Mode
    if (!savedTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    } else if (savedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-all duration-300 hover:bg-primary/10 active:scale-90",
        className
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 md:h-6 md:w-6 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 md:h-6 md:w-6 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  );
};