import { Clock, AlertTriangle, XCircle, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Wasted Attorney Time",
    description: "Partners spending hours on consultations that never convert to billable work.",
  },
  {
    icon: AlertTriangle,
    title: "Unqualified Leads",
    description: "Prospective clients who lack legal standing or don't fit your practice areas.",
  },
  {
    icon: XCircle,
    title: "Conflict of Interest",
    description: "Cases that should never reach intake due to existing client conflicts.",
  },
  {
    icon: DollarSign,
    title: "Retainer Issues",
    description: "Clients unable to meet minimum retainer requirements discovered too late.",
  },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            The Billable Hour Leak
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every unqualified consultation costs your firm money, reputation, and the 
            most valuable resource of all—your attorneys' time.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group bg-card rounded-lg p-6 shadow-elegant hover:shadow-elevated transition-all duration-300 border border-border opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div 
          className="mt-16 bg-primary rounded-lg p-8 lg:p-12 shadow-elevated opacity-0 animate-scale-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                40%
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                of consultations don't convert
              </p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                $450/hr
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                average partner billing rate
              </p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                $180K+
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                annual loss per partner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
