import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Landing Page Pro
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Pricing
            </button>

            <Button 
              variant="hero"
              onClick={() => scrollToSection('pricing')}
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
            >
              Pricing
            </button>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => {
                navigate('/auth');
                setIsMenuOpen(false);
              }}
            >
              Sign In
            </Button>
            <Button 
              variant="hero"
              className="w-full"
              onClick={() => scrollToSection('pricing')}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;