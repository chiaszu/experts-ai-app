import { Clock, TrendingUp, Users, BarChart3 } from "lucide-react";
import marliCircle from "@/assets/marli-circle.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      stat: t.benefits.items[0].stat,
      title: t.benefits.items[0].title,
      description: t.benefits.items[0].description,
    },
    {
      icon: TrendingUp,
      stat: t.benefits.items[1].stat,
      title: t.benefits.items[1].title,
      description: t.benefits.items[1].description,
    },
    {
      icon: Users,
      stat: t.benefits.items[2].stat,
      title: t.benefits.items[2].title,
      description: t.benefits.items[2].description,
    },
  ];

  return (
    <section id="benefits" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative Half Circle - Fixed to left edge */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] opacity-20">
        <img
          src={marliCircle}
          alt=""
          className="w-full h-full aspect-square object-cover"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="relative opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              {t.benefits.badge}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
              {t.benefits.headline}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {t.benefits.description1}
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {t.benefits.description2}
            </p>
          </div>

          {/* Right Content - Benefits Stack */}
          <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-clinical p-6 shadow-elegant border border-border hover:shadow-elevated transition-all duration-300 opacity-0 animate-fade-in text-center"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Huge Stat Number */}
                <p className="text-5xl lg:text-6xl font-bold text-foreground mb-3">
                  {benefit.stat}
                </p>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
