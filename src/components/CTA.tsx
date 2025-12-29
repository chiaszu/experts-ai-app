import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div 
          className="relative bg-primary rounded-lg p-10 lg:p-16 shadow-xl-custom overflow-hidden opacity-0 animate-scale-in"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Ready to Protect Your Billable Hours?
            </h2>
            
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Join leading law firms who have reclaimed thousands of attorney hours 
              with Marli's intelligent pre-consultation screening.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elevated font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Demo
              </Button>
              <Button 
                size="xl" 
                className="bg-primary-foreground/10 text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/20 font-semibold"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <p className="mt-8 text-sm text-primary-foreground/60">
              No commitment required • 14-day free trial • White-glove onboarding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
