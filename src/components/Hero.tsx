import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-secondary rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden glass-card animate-glow">
                <img 
                  src="/profile/e6be805b-f947-411c-a651-7e979d0d7f67.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-hero rounded-full opacity-30 animate-glow -z-10"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h1 className="text-5xl md:text-7xl font-display font-bold">
              <span className="block text-foreground">Hello, I'm</span>
              <span className="block text-gradient">Sudhanshu Mall</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A passionate developer crafting beautiful digital experiences with modern technologies and creative solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a
                href="/Sudhanshu.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 text-lg"
              >
              Download Resume
              </Button>
              </a>
            </div>

            {/* Social Links */}
<div className="flex justify-center space-x-6 pt-8">
  <a 
    href="https://github.com/sudhanshumall4" 
    className="p-3 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
    aria-label="GitHub"
  >
    <Github className="w-6 h-6 text-foreground" />
  </a>

  <a 
    href="https://www.linkedin.com/in/sudhanshu-mall-558b09246/" 
    className="p-3 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
    aria-label="LinkedIn"
  >
    <Linkedin className="w-6 h-6 text-foreground" />
  </a>

  <a 
    href="mailto:your-email@example.com" 
    className="p-3 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
    aria-label="Email"
  >
    <Mail className="w-6 h-6 text-foreground" />
  </a>

  {/* LeetCode Button with Official Logo */}
  <a 
    href="https://leetcode.com/u/sudhanshumall4/" 
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
    aria-label="LeetCode"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className="w-6 h-6"
    >
      <path 
        fill="#FFA116" 
        d="M14.7 2.3a1 1 0 0 0-1.4 0l-8 8a1 1 0 0 0 0 1.4l8 8a1 1 0 1 0 1.4-1.4L7.42 12l7.3-7.3a1 1 0 0 0-1.42-1.4z"
      />
      <path 
        fill="#000000" 
        d="M19 11h-7a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2z"
      />
    </svg>
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;