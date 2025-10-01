import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Landing Page Pro
            </h3>
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
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">Landing Pages</a>
              </li>
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">Logo Design</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">SEO Optimization</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">Custom Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="https://api.whatsapp.com/send/?phone=5521991779372&text=Hi%21+I+would+like+to+get+more+information.&type=phone_number&app_absent=0" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {new Date().getFullYear()} Landing Page Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;