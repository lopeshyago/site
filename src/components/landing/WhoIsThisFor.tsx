import { Rocket, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Launch your MVP with a professional landing page that attracts investors and early adopters."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketers",
    description: "Create high-converting campaign pages that maximize your ROI and drive qualified leads."
  },
  {
    icon: Users,
    title: "Small Businesses",
    description: "Establish your online presence with a stunning page that builds trust and drives sales."
  },
  {
    icon: Zap,
    title: "Freelancers",
    description: "Showcase your services and portfolio with a page that wins clients and grows your business."
  }
];

const WhoIsThisFor = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Who Is This For?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our landing page service is perfect for ambitious professionals and businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <audience.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{audience.title}</h3>
                <p className="text-muted-foreground">{audience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;