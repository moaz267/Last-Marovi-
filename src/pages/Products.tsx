
import React, { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Products = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20">
          <ProductGrid />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default Products;
