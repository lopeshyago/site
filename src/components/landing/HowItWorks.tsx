import { CheckCircle2, Palette, Rocket, Send } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    step: "1",
    title: "Choose Your Plan",
    description: "Select the perfect package that fits your needs and budget from our transparent pricing options."
  },
  {
    icon: Send,
    step: "2",
    title: "Submit Your Details",
    description: "Fill out our simple form with your brand colors, logo, and content. We'll guide you every step of the way."
  },
  {
    icon: Palette,
    step: "3",
    title: "We Design & Build",
    description: "Our expert team creates your custom landing page with attention to every detail, optimized for conversions."
  },
  {
    icon: Rocket,
    step: "4",
    title: "Launch & Convert",
    description: "Receive your completed page, review it, and go live. Start converting visitors into customers immediately."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to launch in just 4 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10 space-y-4">
                <div className="relative">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="h-12 w-12 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;