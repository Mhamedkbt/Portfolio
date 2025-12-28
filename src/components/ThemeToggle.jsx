import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    // If no theme saved, return true (Dark Mode)
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    // Force dark if it's the first visit
    if (!savedTheme || savedTheme === "dark") {
      root.classList.add("dark");
      if (!savedTheme) localStorage.setItem("theme", "dark");
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
      className={cn("p-2 rounded-full transition-all active:scale-90", className)}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  );
};