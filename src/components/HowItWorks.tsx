import { MessageSquare, Filter, CheckSquare, UserCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: t.howItWorks.steps[0].step,
      icon: MessageSquare,
      title: t.howItWorks.steps[0].title,
      description: t.howItWorks.steps[0].description,
    },
    {
      step: t.howItWorks.steps[1].step,
      icon: Filter,
      title: t.howItWorks.steps[1].title,
      description: t.howItWorks.steps[1].description,
    },
    {
      step: t.howItWorks.steps[2].step,
      icon: CheckSquare,
      title: t.howItWorks.steps[2].title,
      description: t.howItWorks.steps[2].description,
    },
    {
      step: t.howItWorks.steps[3].step,
      icon: UserCheck,
      title: t.howItWorks.steps[3].title,
      description: t.howItWorks.steps[3].description,
    },
  ];

  return (
    <section id="how-it-works" className="py-28 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t.howItWorks.badge}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {t.howItWorks.headline}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t.howItWorks.subheadline}
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line with Arrows */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-border/40" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="relative opacity-0 animate-fade-in flex flex-col items-center text-center"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                {/* Icon Box */}
                <div className="relative w-20 h-20 rounded-2xl bg-card border border-border shadow-elegant flex items-center justify-center mb-6 z-10">
                  <item.icon className="w-10 h-10 text-accent" />
                </div>

                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 z-20 -translate-y-1/2">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}

                {/* Step Number + Title */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
