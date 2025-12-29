import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Marli | AI Pre-Consultation Gatekeeper for Law Firms</title>
        <meta 
          name="description" 
          content="Marli qualifies every prospective client before they reach your attorneys—protecting billable hours and ensuring only merit-worthy cases proceed." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <HowItWorks />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
