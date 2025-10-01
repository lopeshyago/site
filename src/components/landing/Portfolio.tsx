import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    image: portfolio1,
    title: "SaaS Platform Landing",
    category: "Software",
    description: "Modern SaaS landing page with conversion-focused design"
  },
  {
    image: portfolio2,
    title: "E-commerce Product Launch",
    category: "E-commerce",
    description: "High-impact product page with stunning visuals"
  },
  {
    image: portfolio3,
    title: "Tech Startup Launch",
    category: "Startup",
    description: "Bold, innovative design for disruptive tech company"
  },
  {
    image: portfolio1,
    title: "Marketing Agency",
    category: "Services",
    description: "Clean, professional agency showcase page"
  },
  {
    image: portfolio2,
    title: "Mobile App Launch",
    category: "Mobile",
    description: "App store optimized landing page"
  },
  {
    image: portfolio3,
    title: "Fitness Program",
    category: "Health",
    description: "Energy-packed fitness program page"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover stunning landing pages we've created for clients across industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="inline-block w-fit px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <button className="flex items-center gap-2 text-accent font-medium group/btn">
                  View Details
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;