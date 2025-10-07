import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.png";
import portfolio4 from "@/assets/portfolio-4.png";
import portfolio5 from "@/assets/portfolio-5.png";
import portfolio6 from "@/assets/portfolio-6.png";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/i18n/i18n";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Heath APP and Landingpage",
    category: "Software",
    description: "Modern SaaS landing page with conversion-focused design",
    url: "https://lucky-crisp-fd5cdd.netlify.app/"
  },
  {
    image: portfolio2,
    title: "Tech Startup Launch",
    category: "E-commerce",
    description: "High-impact product page with stunning visuals",
    url: "https://harmonious-zabaione-f4494f.netlify.app/"
  },
  {
    image: portfolio6,
    title: "Tech Startup Launch",
    category: "Startup",
    description: "Bold, innovative design for disruptive cosmetic company",
    url: "https://spiffy-sunflower-5ccb3d.netlify.app/"
  },
  {
    image: portfolio3,
    title: "Marketing Agency",
    category: "Services",
    description: "Clean, professional agency showcase page",
    url: "https://voluble-sfogliatella-f13af4.netlify.app/"
  },
  {
    image: portfolio4,
    title: "Mobile App Launch",
    category: "Mobile",
    description: "App store optimized landing page",
    url: "https://golden-profiterole-07a351.netlify.app/"
  },
  {
    image: portfolio5,
    title: "Fitness Program",
    category: "Health",
    description: "Energy-packed fitness program page",
    url: "https://example-fitness.cohttps://glittering-wisp-ed4874.netlify.app/"
  }
];

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t('portfolio_title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('portfolio_sub')}</p>
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
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-medium group/btn hover:underline"
                >
                  {t('view_details')}
                  <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;