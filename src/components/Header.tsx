
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <a href="#" className="text-2xl font-bold text-primary">
            EduWallet
          </a>
          <span className="text-xs text-muted-foreground">An Extension of MightyFin's Digital Wallet</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#download" 
            className="flex items-center text-sm font-medium bg-primary text-white rounded-full px-5 py-2.5 transition-all hover:bg-primary/90 hover:shadow-md"
          >
            <Download size={16} className="mr-1.5" />
            Download the App
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-white w-full h-screen pt-20 transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#download" 
            className="flex items-center text-lg font-medium bg-primary text-white rounded-full px-6 py-3 w-full justify-center transition-all hover:bg-primary/90"
            onClick={() => setIsOpen(false)}
          >
            <Download size={18} className="mr-2" />
            Download the App
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
