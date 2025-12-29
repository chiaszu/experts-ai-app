import { Shield, Scale, Wallet, CheckCircle } from "lucide-react";
import marliCircle from "@/assets/marli-circle.png";

const features = [
  {
    icon: Scale,
    title: "Merit-Based Screening",
    description: "AI evaluates case strength, legal standing, and fit with your practice areas before any attorney involvement.",
    points: ["Statute of limitations check", "Jurisdiction verification", "Practice area alignment"],
  },
  {
    icon: Wallet,
    title: "Financial Qualification",
    description: "Automated retainer affordability assessment and payment plan eligibility determination.",
    points: ["Retainer requirement matching", "Payment plan qualification", "Fee structure alignment"],
  },
  {
    icon: Shield,
    title: "Conflict Detection",
    description: "Instant cross-reference against your existing client database to identify potential conflicts of interest.",
    points: ["Real-time conflict checks", "Multi-party analysis", "Historical case review"],
  },
];

const Solution = () => {
  return (
    <section id="solution" className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            The Solution
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            The Marli Protocol
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A three-tier AI screening system that qualifies every prospective client 
            before they ever speak with an attorney.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-clinical p-8 shadow-elegant hover:shadow-elevated transition-all duration-300 border border-border opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Visual Divider with Brand Element */}
        <div 
          className="mt-20 flex items-center justify-center opacity-0 animate-scale-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative">
            <img 
              src={marliCircle} 
              alt="Marli" 
              className="w-24 h-24 lg:w-32 lg:h-32 animate-float"
            />
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
