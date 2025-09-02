import { Button } from "@/components/ui/button";
import { FileText, Wallet, ExternalLink } from "lucide-react";

interface VentureCardProps {
  title: string;
  description: string;
  testLink?: string;
  isComingSoon?: boolean;
}

const VentureCard = ({ title, description, testLink, isComingSoon = false }: VentureCardProps) => {
  return (
    <div className="venture-card p-6 rounded-xl h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground flex-grow leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-border hover:border-accent transition-colors"
            disabled={isComingSoon}
          >
            <FileText className="mr-2 h-4 w-4" />
            {isComingSoon ? "Coming Soon" : "Documentation"}
          </Button>
          
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity"
            disabled={isComingSoon}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Fund Project
          </Button>
        </div>
        
        {testLink && (
          <Button 
            variant="secondary"
            size="sm" 
            className="w-full"
            onClick={() => window.open(testLink, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Test Application
          </Button>
        )}
      </div>
    </div>
  );
};

export default VentureCard;