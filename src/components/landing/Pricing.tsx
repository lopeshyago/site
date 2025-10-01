import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const openWhatsApp = (packageName: string, price: number) => {
    const phoneNumber = "5521991779372";
    const message = encodeURIComponent(`Hi! I'm interested in the ${packageName} package for $${price}. Could you provide more information?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  const packages = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for simple landing pages",
      price: 75,
      features: [
        "Single Page",
        "Responsive Design",
        "Up to 4 Sections",
        "Basic SEO Optimization",
        "Fast Loading Speed",
        "7 Days Delivery",
      ]
    },
    {
      id: "professional",
      name: "Professional",
      description: "For businesses that need more features",
      price: 100,
      features: [
        "Everything in Basic",
        "Up to 5 Sections",
        "Advanced SEO Optimization",
        "Custom Forms",
        "Analytics Integration",
        "1 Day Delivery",
        "Social Media Integration",

      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Full customization for larger projects",
      price: 400,
      features: [
        "Everything in Professional",
        "Unlimited Sections",
        "Premium SEO Package",
        "Custom Integrations",
        "Priority Support",
        "1 Day Delivery",
        "A/B Testing",
        "Performance Optimization",
        "Custom Backend Integration"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent))_0%,transparent_50%)] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your needs. All plans include mobile-responsive design and SEO optimization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const features = Array.isArray(pkg.features) ? pkg.features : [];
            const isPopular = index === 1;
            
            return (
              <Card 
                key={pkg.id}
                className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  isPopular ? 'border-2 border-accent shadow-xl scale-105' : 'border-2'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-3xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-5xl font-bold">${pkg.price}</span>
                    <span className="text-muted-foreground"> / project</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={isPopular ? "hero" : "default"}
                    size="lg"
                    className="w-full"
                    onClick={() => openWhatsApp(pkg.name, pkg.price)}
                  >
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <a href="#contact" className="text-accent font-medium hover:underline">
              Contact us for enterprise pricing
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;