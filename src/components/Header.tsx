
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t, isRTL } = useLanguage();
  const { items } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { key: 'home', path: '/' },
    { key: 'products', path: '/products' },
    { key: 'about', path: '/about' },
    { key: 'bestSellers', path: '/best-sellers' },
    { key: 'contact', path: '/contact' },
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
      isScrolled 
        ? 'bg-modern-white backdrop-blur-md shadow-lg' 
        : 'bg-modern-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 hover-scale flex-shrink-0">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-modern-primary to-modern-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm md:text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base md:text-xl text-modern-dark text-shadow">
                ماروفي
              </span>
              <span className="text-xs md:text-sm text-modern-primary">
                Marovi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`font-medium transition-all duration-500 hover:text-modern-primary relative text-modern-dark text-responsive-sm ${
                  location.pathname === item.path
                    ? 'text-modern-primary'
                    : 'hover:text-modern-primary'
                } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-modern-primary after:bottom-[-4px] after:left-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left ${
                  location.pathname === item.path ? 'after:scale-x-100' : ''
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 md:gap-4">
            <LanguageToggle />
            
            {/* Cart Button */}
            <Link
              to="/cart"
              className="relative p-2 rounded-full transition-all duration-500 hover-scale text-modern-dark hover:text-modern-primary touch-target"
            >
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-modern-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/201067231442"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 md:px-4 md:py-2 rounded-full flex items-center gap-1 md:gap-2 transition-all duration-300 hover-scale text-xs md:text-sm touch-target"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              <span className="hidden sm:inline">{t('whatsapp')}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 transition-colors duration-500 text-modern-dark touch-target"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block w-full h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-full h-0.5 bg-current mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2 bg-modern-primary/95 backdrop-blur-md rounded-lg mt-2 mx-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-white hover:text-modern-accent hover:bg-modern-navy/50 transition-all duration-300 touch-target text-responsive-base ${
                  location.pathname === item.path ? 'text-modern-accent bg-modern-navy/30' : ''
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
