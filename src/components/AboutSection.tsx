
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t('customDesign'),
      description: t('customDesignDesc')
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('highQuality'),
      description: t('highQualityDesc')
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('warranty'),
      description: t('warrantyDesc')
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('fastDelivery'),
      description: t('fastDeliveryDesc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-marovi-dark-brown mb-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-marovi-brown max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-marovi-cream hover:bg-white hover:shadow-xl transition-all duration-500 hover-scale animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-marovi-gold mb-6 flex justify-center group-hover:text-marovi-copper transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-marovi-dark-brown mb-4">
                {feature.title}
              </h3>
              <p className="text-marovi-brown leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-marovi rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-marovi-dark-brown mb-2">15+</div>
              <div className="text-marovi-brown">{isRTL ? 'سنة خبرة' : 'Years Experience'}</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-marovi-dark-brown mb-2">5000+</div>
              <div className="text-marovi-brown">{isRTL ? 'عميل راضي' : 'Happy Customers'}</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-marovi-dark-brown mb-2">500+</div>
              <div className="text-marovi-brown">{isRTL ? 'مشروع مكتمل' : 'Projects Completed'}</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-marovi-dark-brown mb-2">50+</div>
              <div className="text-marovi-brown">{isRTL ? 'مدينة نخدمها' : 'Cities Served'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
