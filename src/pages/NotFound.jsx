import { useNavigate } from "react-router-dom";
import { MoveLeft, Home as HomeIcon } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Reusing your star effect for consistency */}
      <StarBackground />

      <div className="relative z-10 text-center px-4">
        {/* Large Glowy 404 */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/20 animate-pulse">
          404
        </h1>
        
        <div className="mt-4 space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Lost in Space?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-lg leading-relaxed">
            The page you are looking for has drifted out of orbit. Let's get you back to the mission control.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-secondary transition-all group"
          >
            <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
          
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            <HomeIcon className="w-4 h-4" />
            Return Home
          </button>
        </div>
      </div>

      {/* Subtle Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};