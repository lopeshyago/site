import { Rocket, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const audiences = (t: any) => [
  {
    icon: Rocket,
    title: t('audience_startups_title'),
    description: t('audience_startups_desc')
  },
  {
    icon: TrendingUp,
    title: t('audience_marketers_title'),
    description: t('audience_marketers_desc')
  },
  {
    icon: Users,
    title: t('audience_smallbiz_title'),
    description: t('audience_smallbiz_desc')
  },
  {
    icon: Zap,
    title: t('audience_freelancers_title'),
    description: t('audience_freelancers_desc')
  }
];

import { useTranslation } from "@/i18n/i18n";

const WhoIsThisFor = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t('who_title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('who_sub')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences(t).map((audience, index) => (
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