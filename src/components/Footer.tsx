import { Github, Linkedin, Mail,Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url:"https://www.instagram.com/sudhanshu_mall/",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sudhanshu-mall-558b09246/",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      name: "Email",
      url: "mailto:sudhanshumall4@gmail.com",
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-display font-bold text-gradient hover:opacity-80 transition-opacity mb-2"
            >
              Build-Deploy
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="p-3 glass-card rounded-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                aria-label={social.name}
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <span>© {currentYear} <span>Sudhanshu Mall</span> Made with</span>
            <span>using React & CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;