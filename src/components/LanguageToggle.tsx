
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-modern-primary/10 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => setLanguage('ar')}
        className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
          language === 'ar' 
            ? 'bg-modern-primary text-white shadow-md' 
            : 'text-modern-dark hover:bg-modern-primary/20'
        }`}
      >
        عربي
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
          language === 'en' 
            ? 'bg-modern-primary text-white shadow-md' 
            : 'text-modern-dark hover:bg-modern-primary/20'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
