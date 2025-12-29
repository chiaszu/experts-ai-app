import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                AI-Powered Pre-Consultation
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              The Gatekeeper for{" "}
              <span className="text-accent">High-Value</span> Professional Practices
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Marli is an AI-driven pre-consultation engine that qualifies every inquiry against your firm's specific engagement standards. Protect your team's expertise and ensure your billable hours are spent on projects that align with your firm's goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Request a Demo
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Demo Video Container */}
          <div 
            className="relative opacity-0 animate-fade-in-right" 
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative bg-card rounded-lg shadow-elevated overflow-hidden border border-border">
              {/* Video Container */}
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                {/* Play Button Overlay */}
                <button className="group relative w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-xl-custom hover:scale-105 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                </button>
              </div>
              
              {/* Video Caption */}
              <div className="p-4 bg-card border-t border-border">
                <p className="text-sm font-medium text-foreground">
                  See Marli in Action
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  2 minute product overview
                </p>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-lg shadow-elevated p-4 border border-border animate-float">
              <p className="text-2xl font-bold text-accent">87%</p>
              <p className="text-xs text-muted-foreground">Reduction in unqualified consultations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
