import { MessageSquare, Brain, FileCheck, UserCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Client Initiates Contact",
    description: "Prospective client reaches out through your website, phone, or referral. Marli immediately begins the qualification process.",
  },
  {
    step: "02",
    icon: Brain,
    title: "AI Conducts Interview",
    description: "Our conversational AI gathers case details, assesses merit, and evaluates fit—all through natural, professional dialogue.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Automated Qualification",
    description: "Marli scores the lead on legal merit, financial qualification, and conflict status. Only qualified leads proceed.",
  },
  {
    step: "04",
    icon: UserCheck,
    title: "Attorney Handoff",
    description: "Qualified prospects are routed to the appropriate attorney with a complete case brief, saving 30+ minutes per consultation.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            From First Contact to Qualified Lead
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A seamless four-step process that protects your attorneys' time 
            while ensuring no qualified client falls through the cracks.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Card */}
                <div className="bg-card rounded-clinical p-6 shadow-elegant border border-border hover:shadow-elevated transition-all duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold mb-4">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 bg-background rounded-full border border-border items-center justify-center z-20 -translate-y-1/2">
                    <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
