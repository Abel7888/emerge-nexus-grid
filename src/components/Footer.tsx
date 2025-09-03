import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Calendar, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Mail className="mr-3 h-6 w-6 text-accent" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your name" 
                  className="bg-secondary/50 border-border"
                />
                <Input 
                  placeholder="Your email" 
                  type="email"
                  className="bg-secondary/50 border-border"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-secondary/50 border-border"
              />
              <textarea 
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-3 py-2 bg-secondary/50 border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
              />
              <Button 
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                onClick={() => window.open('mailto:abelassefa19@gmail.com', '_blank')}
              >
                Send Message
              </Button>
            </div>
          </div>
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect</h3>
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/in/abel7888/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="mr-3 h-5 w-5" />
                LinkedIn
              </a>
              <a 
                href="https://calendly.com/abelassefa788/partnerships-investor-and-advisors-information" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-accent transition-colors"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Schedule a Call
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-accent" />
                Industries
              </h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Healthcare</div>
                <div>Finance</div>
                <div>Real Estate</div>
                <div>Construction</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground mb-2">
            ⚡ From concept to enterprise — we build the ventures of tomorrow.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Emerging Tech Venture Agency. Building the future, one venture at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;