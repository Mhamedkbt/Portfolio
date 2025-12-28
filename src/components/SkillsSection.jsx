import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", category: "frontend", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS", category: "frontend", icon: "https://skillicons.dev/icons?i=css" },
  { name: "JavaScript", category: "frontend", icon: "https://skillicons.dev/icons?i=js" },
  { name: "React JS", category: "frontend", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Tailwind", category: "frontend", icon: "https://skillicons.dev/icons?i=tailwind" },

  // Backend
  { name: "Java", category: "backend", icon: "https://skillicons.dev/icons?i=java" },
  { name: "Spring Boot", category: "backend", icon: "https://skillicons.dev/icons?i=spring" },
  { name: "PostgreSQL", category: "backend", icon: "https://skillicons.dev/icons?i=postgres" },
  { name: "MySQL", category: "backend", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "C++", category: "backend", icon: "https://skillicons.dev/icons?i=cpp" },

  // Tools
  { name: "GitHub", category: "tools", icon: "https://skillicons.dev/icons?i=github" },
  { name: "VS Code", category: "tools", icon: "https://skillicons.dev/icons?i=vscode" },
  { name: "IntelliJ", category: "tools", icon: "https://skillicons.dev/icons?i=idea" },
  { name: "Postman", category: "tools", icon: "https://skillicons.dev/icons?i=postman" },
  { name: "Docker", category: "tools", icon: "https://skillicons.dev/icons?i=docker" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border/50 card-hover transition-all duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={`${skill.name} logo`} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-medium text-sm md:text-base">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};