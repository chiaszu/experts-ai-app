import { Shield, Scale, Wallet, CheckCircle } from "lucide-react";
import marliCircle from "@/assets/marli-circle.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Solution = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Scale,
      title: t.solution.features[0].title,
      description: t.solution.features[0].description,
      points: t.solution.features[0].points,
    },
    {
      icon: Wallet,
      title: t.solution.features[1].title,
      description: t.solution.features[1].description,
      points: t.solution.features[1].points,
    },
    {
      icon: Shield,
      title: t.solution.features[2].title,
      description: t.solution.features[2].description,
      points: t.solution.features[2].points,
    },
  ];

  return (
    <section id="solution" className="py-24 lg:py-36">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t.solution.badge}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {t.solution.headline}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.solution.subheadline}
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
      </div>
    </section>
  );
};

export default Solution;
