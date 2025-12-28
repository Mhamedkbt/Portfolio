import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full top-0 left-0 z-[999] transition-all duration-300",
        isScrolled ? "py-3 bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Kept exactly as you had it */}
        <a className="text-xl font-bold text-primary flex items-center shrink-0 z-[1001]" href="/">
          <span className="relative z-10">
            <span className="text-glow text-foreground">MhamedDev </span> Portfolio
          </span>
        </a>

        {/* Right Side Content */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav - Your original styling */}
          <div className="hidden md:flex items-center space-x-8 mr-4">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <ThemeToggle className="z-[1001]" />

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-[1001] transition-transform active:scale-90"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay - Logic Fix, Your Style */}
        <div
          className={cn(
            "fixed inset-0 w-full h-[100dvh] bg-background/98 backdrop-blur-xl z-[1000] flex flex-col items-center justify-center transition-all duration-500 md:hidden",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          )}
        >
          <div className="flex flex-col space-y-8 text-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-2xl font-semibold text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};