import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0%,transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-sm font-medium text-accent">🚀 High-Converting Landing Pages</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Stunning Landing Pages That{" "}
              <span className="bg-gradient-to-r from-primary via-[hsl(260_80%_45%)] to-accent bg-clip-text text-transparent">
                Convert
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Professional, high-performance landing pages fast delivered. 
              Perfect for startups, marketers, and businesses that need results fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToPricing}
                className="group"
              >
                View Packages
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Examples
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">1-7</div>
                <div className="text-sm text-muted-foreground">Days Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Professional landing page examples" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-2xl font-semibold animate-bounce">
              Fast Delivery! ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;