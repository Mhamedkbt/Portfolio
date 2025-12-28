import { 
    Globe, 
    Layout, 
    ShoppingCart, 
    Database, 
    ShieldCheck, 
    Zap 
  } from "lucide-react";
  
  const services = [
    {
      title: "Vitrine Websites",
      description: "Professional multi-page websites designed to showcase your brand identity and attract local customers.",
      icon: <Globe className="h-8 w-8 text-primary" />,
    },
    {
      title: "High-Converting Landing Pages",
      description: "Fast-loading, optimized landing pages built to turn visitors into leads and increase your sales.",
      icon: <Layout className="h-8 w-8 text-primary" />,
    },
    {
      title: "Full-Stack E-commerce",
      description: "Secure online stores with inventory management, product catalogs, and custom payment integration.",
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    },
    {
      title: "Enterprise Web Applications",
      description: "Complex business tools and SaaS platforms built with robust Java Spring Boot backends and React frontends.",
      icon: <Zap className="h-8 w-8 text-primary" />,
    },
    {
      title: "Secure API & Backend Development",
      description: "Scalable REST APIs using Spring Boot and Spring Security to protect your data and manage user roles.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    },
    {
      title: "Database Architecture",
      description: "Structured PostgreSQL database design and optimization for fast data retrieval and high reliability.",
      icon: <Database className="h-8 w-8 text-primary" />,
    }
  ];
  
  export const ServicesSection = () => {
    return (
      <section id="services" className="py-24 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tailored web solutions built with modern technologies to help your business scale and succeed online.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };