import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden min-h-screen flex items-center">

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 opacity-0 animate-fade-in-left" style={{ animationDelay: "0.1s" }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-secondary-foreground">
                {t.hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {t.hero.headline1}{" "}
              <span className="text-accent">{t.hero.headline2}</span> {t.hero.headline3}
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {t.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="http://localhost:8081/demo" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  {t.hero.ctaButton}
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Demo Video Container */}
          <div 
            className="relative opacity-0 animate-fade-in-right" 
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative rounded-lg shadow-elevated overflow-hidden">
              {/* Video Container */}
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-lg shadow-elevated p-4 border border-border animate-float">
              <p className="text-2xl font-bold text-accent">{t.hero.stat}</p>
              <p className="text-xs text-muted-foreground">{t.hero.statDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
