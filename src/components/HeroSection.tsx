import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Building the{" "}
          <span className="gradient-text">Future</span>{" "}
          of Emerging Tech Ventures
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          We design, engineer, and launch next-generation applications in healthcare, finance, 
          real estate, and construction. From concept to enterprise-grade deployment, our expertise 
          in software engineering, data science, and go-to-market strategy powers ventures that matter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="btn-hero px-8 py-4 text-lg font-semibold group">
            <Search className="mr-2 h-5 w-5" />
            Explore Marketplace
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-secondary px-8 py-4 text-lg font-semibold"
            onClick={() => window.open('mailto:abelassefa788@gmail.com', '_blank')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Partner With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;