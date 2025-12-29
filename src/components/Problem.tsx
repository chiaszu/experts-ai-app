import { Clock, AlertTriangle, XCircle, DollarSign } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Problem = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: Clock,
      title: t.problem.problems[0].title,
      description: t.problem.problems[0].description,
    },
    {
      icon: AlertTriangle,
      title: t.problem.problems[1].title,
      description: t.problem.problems[1].description,
    },
    {
      icon: XCircle,
      title: t.problem.problems[2].title,
      description: t.problem.problems[2].description,
    },
    {
      icon: DollarSign,
      title: t.problem.problems[3].title,
      description: t.problem.problems[3].description,
    },
  ];

  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t.problem.badge}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {t.problem.headline}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.problem.subheadline}
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
                {t.problem.stats[0].value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                {t.problem.stats[0].label}
              </p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                {t.problem.stats[1].value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                {t.problem.stats[1].label}
              </p>
            </div>
            <div>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground">
                {t.problem.stats[2].value}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                {t.problem.stats[2].label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
