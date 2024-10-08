import React from "react";
import PricingCard from "./CardPricing";
import HorizontalCard from "./HorizontalCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  ///////
  const professionalFeatures = [
    "Personalized onboarding (30 min call)",
    "Access to all social tools and discovery tools",
    "Blog post generation",
    "LinkedIn post generation",
    "Research report generation",
    "YouTube video transcripts (for videos shorter than 1 hour)",
    "YouTube summaries",
    "YouTube video translations",
    "Content search and discovery",
    "Unlimited bookmarking",
  ];

  const HobbyFeatures = [
    "Access to all social tools and discovery tools",
    "Blog post generation",
    "LinkedIn post generation",
    "Research report generation",
    "YouTube video transcripts (for videos shorter than 1 hour)",
    "YouTube summaries",
    "YouTube video translations",
    "Content search and discovery",
    "Unlimited bookmarking",
  ];

  const SuperStarFeatures = [
    "Everything in Professional Plan",
    "Personalized onboarding (60 min call)",
    "YouTube video transcripts (for videos shorter than 2 hours)",
  ];

  const EnterpriseFeatures = [
    "Custom Implementation and Use Cases",
    "Volume Discount and Technical Support",
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10 text-center">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {/* ///////////////////////////////////////// */}
        <PricingCard
          title="Hobby"
          description="Best for starting out and personal branding"
          price={12}
          credits={50}
          features={HobbyFeatures}
          isBestValue={false}
        />

        {/* ///////////////////////////////////////// */}
        <PricingCard
          title="Professional"
          description="Best for startups"
          price={49}
          credits={500}
          features={professionalFeatures}
          isBestValue={true}
        />
        {/* ////////////////////////////////////////// */}
        <PricingCard
          title="Super-Star"
          description="Best for agencies and growing companies"
          price={179}
          credits={1200}
          features={SuperStarFeatures}
          isBestValue={false}
        />
      </div>
      <HorizontalCard
        title="Enterprise"
        description="Have custom request?"
        ourOffer={"Let's chat."}
        features={EnterpriseFeatures}
        isBestValue={false}
      />
      <div>
        <p className=" mt-10">
          * For more information about credit usage,<span> </span>
          <Link to={"/faq?section=credits"} target="_blank" class="text-orange-500">
            click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
