import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "@/i18n/i18n";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="mb-4">
                <img src="/logo.png" alt={t('brand_name')} title={t('brand_name')} className="h-8" />
              </div>
            <p className="text-background/70 text-sm">
              Professional landing pages that convert. Fast, affordable, and results-driven.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('services_title')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">{t('landing_pages')}</a>
              </li>
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">{t('logo_design')}</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">{t('seo_optimization')}</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">{t('custom_development')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('company_title')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#portfolio" className="hover:text-accent transition-colors">{t('navbar_portfolio')}</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">{t('navbar_pricing')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('about_us')}</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">{t('contact_us')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('legal_title')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">{t('terms_of_service')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('privacy_policy')}</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">{t('cookie_policy')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} {t('brand_name')}. {t('footer_copy')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;