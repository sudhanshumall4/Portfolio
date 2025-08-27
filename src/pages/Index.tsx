import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
