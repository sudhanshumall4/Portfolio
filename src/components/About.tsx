import { Card } from "@/components/ui/card";
import { Code, Rocket, Users,Server } from "lucide-react";


const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building scalable and secure backend systems with Node.js, Express.js, and databases like MongoDB and PostgreSQL."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency with modern build tools and best practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively in teams using agile methodologies and modern development workflows."
    }
  ];
  const technologies = [
    "React", "Node.js", "CSS", "HTML-5",
    "Python", "PostgreSQL", "MongoDB", "C/C++",
    "Git", "Supabase", "Postman", "Express.js"
  ];
  return (
    <section id="about" className="py-section section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Full Stack Developer skilled in MERN stack and Supabase. Experienced in building scalable web apps, 
          REST APIs, authentication, CI/CD, and delivering production-ready solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-semibold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My passion for development began during my computer science studies, where I discovered 
                the perfect blend of creativity and logic that programming offers. Since then, I've been 
                dedicated to crafting elegant solutions to complex problems.
              </p>
              <p>
                Every project is an opportunity to learn 
                something new and push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-display font-semibold mb-6">Technologies I Use</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="p-6 glass-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-primary mb-4 group-hover:text-primary-glow transition-colors duration-300">
                {skill.icon}
              </div>
              <h4 className="text-lg font-display font-semibold mb-3">{skill.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;