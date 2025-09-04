import { Button } from "@/components/ui/button";
import { FileText, Wallet, ExternalLink } from "lucide-react";

interface VentureCardProps {
  title: string;
  description: string;
  testLink?: string;
  documentationLink?: string;
  isComingSoon?: boolean;
}

const VentureCard = ({ title, description, testLink, documentationLink, isComingSoon = false }: VentureCardProps) => {
  return (
    <div className="venture-card p-6 rounded-xl h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground flex-grow leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-border hover:border-accent transition-colors"
            disabled={isComingSoon}
            onClick={() => documentationLink && window.open(documentationLink, '_blank')}
          >
            <FileText className="mr-2 h-4 w-4" />
            {isComingSoon ? "Coming Soon" : "Documentation"}
          </Button>
          
          <Button 
            size="sm" 
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            disabled={isComingSoon}
            onClick={() => window.open('mailto:abelassefa19@gmail.com', '_blank')}
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