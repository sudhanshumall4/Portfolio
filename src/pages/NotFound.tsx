import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center section-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        <div className="animate-fade-in">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-display font-bold text-gradient mb-4 animate-glow">
            404
          </h1>
          
          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            Page Not Found
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital wilderness. 
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              asChild
              size="lg"
              className="hero-gradient text-primary-foreground hover:shadow-glow transition-all duration-300 px-8"
            >
              <a href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </a>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
