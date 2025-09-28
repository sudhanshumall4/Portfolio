"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwprvyen"); 

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "sudhanshumall4@zohomail.in",
      link: "mailto:sudhanshumall4@zohomail.in",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 7275027406",
      link: "tel:+917275027406",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Gorakhpur, India",
    },
  ];

  return (
    <section id="contact" className="py-section section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to connect with developers, collaborators, or
            anyone interested in discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-semibold mb-6">
              Let's Connect
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center p-4 glass-card rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-foreground">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 glass-card">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Send a Message
              </h3>

              {state.succeeded ? (
                <p className="text-green-500 text-sm">
                  ✅ Message sent successfully!
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="bg-background/50"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or just say hello..."
                      required
                      className="bg-background/50 resize-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full hero-gradient text-primary-foreground hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
