import { Rocket, BarChart3, Target, Shield } from "lucide-react";

const ExpertiseSection = () => {
  const expertise = [
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Full-stack software engineering",
      description: "with scalability in mind"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-accent" />,
      title: "Data science + AI expertise",
      description: "to fuel smarter apps"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Marketing and growth strategy",
      description: "to drive adoption"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Enterprise-readiness",
      description: "backends tested, 1–3 months to scale"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-secondary/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Build Ventures{" "}
            <span className="gradient-text">With Us?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 rounded-xl bg-card/50 border border-border/50 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;