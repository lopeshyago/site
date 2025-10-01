import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-[hsl(260_80%_45%)] to-accent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Limited Time Offer</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have launched with our professional landing pages. 
            Start converting visitors into customers today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="secondary"
              size="xl"
              onClick={scrollToPricing}
              className="group bg-white text-primary hover:bg-white/90 shadow-2xl"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="xl"
              className="border-2 border-white bg-transparent text-white hover:bg-white/10"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-8 text-white/80">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Check = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default CTA;