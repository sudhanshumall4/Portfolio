"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "sudhanshumall4@gmail.com",
      link: "mailto:sudhanshumall4@gmail.com",
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mblajzok", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-section section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to connect with  developers, potential
            collaborators, or anyone interested in discussing new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Feel free to reach out through any of the following channels.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center p-4 glass-card rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
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
            <div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 glass-card">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="Name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="Name"
                      name="name"
                      placeholder="Name"
                      className="bg-background/50"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    className="bg-background/50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="bg-background/50 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hero-gradient text-primary-foreground hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                {/* Inline Success/Error */}
                {status === "success" && (
                  <p className="text-green-500 text-sm mt-2">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm mt-2">
                    ❌ Oops! Something went wrong.
                  </p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
