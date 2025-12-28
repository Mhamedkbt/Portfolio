import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle"; // Import it here

const navItems = [
  { name: "Home", href: "#hero" },
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
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold text-primary flex items-center shrink-0" href="#hero">
          <span className="text-glow text-foreground">MhamedDev</span>
          <span className="ml-1 text-primary">Portfolio</span>
        </a>

        {/* Right Side Content */}
        <div className="flex items-center gap-4">
          {/* Desktop Links */}
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

          {/* Theme Toggle - Always visible beside links or hamburger */}
          <ThemeToggle className="z-50" />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 transition-transform active:scale-90"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
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