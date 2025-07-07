
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import LocationSection from '@/components/LocationSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <HeroSection />
          <CategorySection />
          <LocationSection />
          <AboutSection />
          <Footer />
          <BackToTop />
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
