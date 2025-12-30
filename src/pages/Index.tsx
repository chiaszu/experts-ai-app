import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Experts AI | AI Pre-Consultation Gatekeeper for Law Firms</title>
        <meta 
          name="description" 
          content="Experts AI qualifies every prospective client before they reach your attorneys—protecting billable hours and ensuring only merit-worthy cases proceed." 
        />
      </Helmet>
      
      <div
        className="min-h-screen"
        style={{
          background: 'linear-gradient(180deg, #FAFBFC 0%, #F8FAFB 50%, #F0F4F8 100%)',
          backgroundImage: `
            linear-gradient(180deg, #FAFBFC 0%, #F8FAFB 50%, #F0F4F8 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")
          `
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <HowItWorks />
          <Benefits />
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
