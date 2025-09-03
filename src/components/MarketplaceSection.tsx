import VentureCard from "./VentureCard";

const MarketplaceSection = () => {
  const ventures = [
    {
      title: "🔹 Fintech App",
      description: "A decision-support platform built for today's financial leaders. The app combines AI agents, open APIs, real-time intelligence, and cybersecurity monitoring into one streamlined workspace — giving executives, risk officers, and investors the clarity they need to act fast and act smart.",
      testLink: "https://fintechapp-pcdd1109.vercel.app"
    },
    {
      title: "🔒 Secure File",
      description: "Decentralized file security using blockchain + advanced cryptography. Protect data end-to-end with no central authority or single point of failure — you decide who can access your files.",
      testLink: "https://blockchaindoc-umber.vercel.app"
    },
    {
      title: "📚 Skill Gap App",
      description: "Close skills gaps, upskill teams, and retain top talent. Our platform delivers AI-powered learning insights to prepare organizations for the future of work.",
      testLink: "https://skillgap-kn34788.vercel.app/"
    },
    {
      title: "🏗️ Build Vision AI",
      description: "AI-powered defect detection & quality assurance for construction companies. Reduce costly rework, improve safety, and ensure high-quality standards — powered by machine learning and computer vision.",
      testLink: "https://buildvision-ai-quality.vercel.app/"
    },
    {
      title: "💊 Pharma App — Pipeline Pulse",
      description: "Drug pipeline intelligence, delivered instantly. Track fragmented trial, regulatory, and investment data in one dashboard. Monitor competitor activity, approvals, and make smarter, faster decisions with confidence.",
      testLink: "https://pipelinepulse-io.vercel.app/"
    },
    {
      title: "🪙 Tokenize App",
      description: "Launch your own tokenized assets platform. A white-label turnkey solution that lets companies create, manage, and scale digital securities under their brand. From onboarding investors to issuing tokens and automating compliance — everything in one place.",
      testLink: "https://tokenize-flow.vercel.app"
    },
    {
      title: "🏠 TenantAI",
      description: "Unlock the power of AI-driven leasing insights. Our Smart Tenant Acquisition & Retention API integrates seamlessly with your CRM, marketing platforms, and ad networks to predict which channels deliver your highest-value tenants — while automatically optimizing ad spend and recommending retention strategies.",
      testLink: "https://occupancy-optimizer.vercel.app/"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Venture Projects —{" "}
            <span className="gradient-text">Explore, Support, and Scale</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, index) => (
            <VentureCard
              key={index}
              title={venture.title}
              description={venture.description}
              testLink={venture.testLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;