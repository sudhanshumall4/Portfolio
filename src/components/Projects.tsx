import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Database, Layout } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Intelligent Finance Manager",
      description: "A MERN stack finance manager with JWT authentication, automated EMI alerts, and dashboards for financial insights.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=center",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Nodemailer"],
      github: "https://github.com/sudhanshumall4/Intelligent-Finance-Manager",
       demo:"#",
      type: "Full Stack"
    },
    {
      title: "Resume Analyzer",
      description: "A Python + Flask NLP tool that extracts 100+ skill dimensions and matches resumes to job roles using ML classifiers.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=center",
      tags: ["Python", "Flask", "NLP", "scikit-learn"],
      github: "https://github.com/sudhanshumall4/Resume-analyzer",
       demo:"#",
      type: "Full Stack"
    },
    {
      title: "NewsMonkey",
      description: "A responsive React news portal using NewsAPI with infinite scroll, category filtering, and dark mode support.",
      image: "https://images.unsplash.com/photo-1579532536935-619928decd08?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3NwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
      tags: ["React", "Bootstrap", "NewsAPI"],
      github: "https://github.com/sudhanshumall4/Newsmonkey",
       demo:"#",
      type: "Web App"
    },
    {
      title: "Tomato",
      description: "A responsive React portal for food ordering",
      image: "https://images.unsplash.com/photo-1628591667015-652ca2f54d4b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2QlMjBkZWxpZXZlcnl8ZW58MHx8MHx8fDA%3D",
      tags: ["React", "Bootstrap"],
      github: "https://github.com/sudhanshumall4/Tomato",
      demo:"#",
      type: "Web App"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Full Stack":
        return <Database className="w-4 h-4" />;
      case "Frontend":
        return <Layout className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my projects that showcase my skills and passion for building 
            impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden glass-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 glass-card text-xs font-medium text-primary">
                    {getTypeIcon(project.type)}
                    {project.type}
                  </span>
                </div>

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button asChild size="sm" className="hero-gradient">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button asChild size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button asChild size="sm" className="flex-1 hero-gradient">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;