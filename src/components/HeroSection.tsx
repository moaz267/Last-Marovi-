import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2158&q=80',
    'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=2069&q=80',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen h-screen overflow-hidden w-full">
      {/* Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-modern-dark/70 to-modern-navy/50"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className={`max-w-4xl w-full ${isRTL ? 'text-right mr-0 ml-auto' : 'text-left ml-0 mr-auto'} animate-fade-in`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 text-shadow leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-modern-accent mb-3 md:mb-4 text-shadow">
              {t('heroSubtitle')}
            </p>
            <p className="text-base sm:text-lg text-white/90 mb-6 md:mb-8 max-w-3xl leading-relaxed">
              {t('heroDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <button className="bg-modern-navy hover:bg-modern-hover-blue text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover-scale shadow-lg btn-mobile w-full sm:w-auto flex-1 sm:flex-initial">
                {t('exploreCollection')}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-modern-dark px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover-scale btn-mobile w-full sm:w-auto flex-1 sm:flex-initial">
                {t('contactUs')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators (larger size) */}
      <div className="absolute bottom-16 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-modern-accent w-5 sm:w-6'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-bounce hidden md:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/80">{isRTL ? 'مرر للأسفل' : 'Scroll Down'}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
