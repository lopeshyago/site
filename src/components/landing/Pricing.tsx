import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslation } from "@/i18n/i18n";

const Pricing = () => {
  const { t, lang } = useTranslation();
  const isPt = lang && lang.startsWith('pt');

  const formatPrice = (value: number) => {
    if (isPt) {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    }
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
  };

  const openWhatsApp = (packageName: string, priceDisplay: string) => {
    const phoneNumber = "5521991779372";
    const template = t('whatsapp_message_pkg');
    const filled = template.replace('{name}', packageName).replace('{price}', priceDisplay);
    const message = encodeURIComponent(filled);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Pricing for EN (USD) and PT-BR (BRL)
  const packages = isPt
    ? [
        {
          id: 'basic',
          name: 'Basic',
          description: t('pricing_basic_desc'),
          priceValue: 400,
          priceDisplay: formatPrice(400),
          features: [
            t('feature_single_page'),
            t('feature_responsive'),
            t('feature_sections_4'),
            t('feature_basic_seo'),
            t('feature_fast_loading'),
            t('delivery_7_days'),
          ],
        },
        {
          id: 'professional',
          name: 'Professional',
          description: t('pricing_professional_desc'),
          priceValue: 500,
          priceDisplay: formatPrice(500),
          features: [
            t('feature_everything_basic'),
            t('feature_sections_5'),
            t('feature_adv_seo'),
            t('feature_custom_forms'),
            t('feature_analytics'),
            t('delivery_1_day'),
            t('feature_social'),
          ],
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          description: t('pricing_enterprise_desc'),
          priceValue: 2000,
          priceDisplay: formatPrice(2000),
          features: [
            t('feature_everything_basic'),
            t('feature_unlimited'),
            t('feature_premium_seo'),
            t('feature_custom_integrations'),
            t('feature_priority_support'),
            t('delivery_1_day'),
            t('feature_ab_testing'),
            t('feature_performance'),
            t('feature_backend'),
          ],
        },
      ]
    : [
        {
          id: 'basic',
          name: 'Basic',
          description: t('pricing_basic_desc'),
          priceValue: 75,
          priceDisplay: formatPrice(75),
          features: [
            t('feature_single_page'),
            t('feature_responsive'),
            t('feature_sections_4'),
            t('feature_basic_seo'),
            t('feature_fast_loading'),
            t('delivery_7_days'),
          ],
        },
        {
          id: 'professional',
          name: 'Professional',
          description: t('pricing_professional_desc'),
          priceValue: 100,
          priceDisplay: formatPrice(100),
          features: [
            t('feature_everything_basic'),
            t('feature_sections_5'),
            t('feature_adv_seo'),
            t('feature_custom_forms'),
            t('feature_analytics'),
            t('delivery_1_day'),
            t('feature_social'),
          ],
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          description: t('pricing_enterprise_desc'),
          priceValue: 400,
          priceDisplay: formatPrice(400),
          features: [
            t('feature_everything_basic'),
            t('feature_unlimited'),
            t('feature_premium_seo'),
            t('feature_custom_integrations'),
            t('feature_priority_support'),
            t('delivery_1_day'),
            t('feature_ab_testing'),
            t('feature_performance'),
            t('feature_backend'),
          ],
        },
      ];

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent))_0%,transparent_50%)] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{t('pricing_title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('pricing_sub')}</p>
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
                    <span className="text-5xl font-bold">{pkg.priceDisplay}</span>
                    <span className="text-muted-foreground"> {t('per_project')}</span>
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
                    onClick={() => openWhatsApp(pkg.name, pkg.priceDisplay)}
                  >
                    {t('choose')} {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 space-y-8">
          <p className="text-muted-foreground">
            {t('contact_us')} {" "}
            <a href="#contact" className="text-accent font-medium hover:underline">
              {t('contact_us')}
            </a>
          </p>

          <div className="flex justify-center">
            <Button 
              variant="hero"
              size="lg"
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to talk to your team about a custom project.");
                window.open(`https://wa.me/5521991779372?text=${message}`, "_blank");
              }}
              className="bg-[#25D366] hover:bg-[#20BD5B] text-white flex items-center gap-2 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
            >
              {t('navbar_talk')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;