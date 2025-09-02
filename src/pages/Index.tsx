import HeroSection from "@/components/HeroSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MarketplaceSection />
      <ExpertiseSection />
      <Footer />
    </div>
  );
};

export default Index;
