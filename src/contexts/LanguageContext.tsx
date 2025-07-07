import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    products: 'المنتجات',
    gallery: 'معرض الصور',
    contact: 'تواصل معنا',
    bestSellers: 'الأكثر مبيعاً',
    
    // Hero Section
    heroTitle: 'ماروفي - عالم الأثاث الفاخر',
    heroSubtitle: 'اكتشف مجموعتنا الحصرية من الأثاث المنزلي الراقي',
    heroDescription: 'نحن نقدم أفخر قطع الأثاث المصنوعة بحرفية عالية ومواد من الدرجة الأولى لتضفي على منزلك لمسة من الأناقة والفخامة',
    exploreCollection: 'استكشف المجموعة',
    contactUs: 'تواصل معنا',
    
    // Products
    bedrooms: 'غرف النوم',
    livingRooms: 'صالونات',
    children: 'غرف الأطفال',
    diningRooms: 'غرف السفرة',
    offices: 'مكاتب',
    decorations: 'ديكورات',
    
    // About Section
    aboutTitle: 'لماذا تختار ماروفي؟',
    aboutSubtitle: 'خبرة تمتد لأكثر من 15 عاماً في عالم الأثاث الفاخر',
    customDesign: 'تصميم حسب الطلب',
    customDesignDesc: 'نصمم قطع الأثاث وفقاً لذوقك ومساحتك الخاصة',
    highQuality: 'جودة عالية',
    highQualityDesc: 'نستخدم أفضل المواد والخامات في صناعة منتجاتنا',
    warranty: 'ضمان شامل',
    warrantyDesc: 'ضمان لمدة 5 سنوات على جميع منتجاتنا',
    fastDelivery: 'توصيل سريع',
    fastDeliveryDesc: 'خدمة توصيل وتركيب مجانية في جميع أنحاء المملكة',
    
    // Testimonials
    testimonialsTitle: 'آراء عملائنا',
    testimonialsSubtitle: 'ثقة آلاف العملاء في جودة منتجاتنا وخدماتنا',
    
    // Footer
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات التواصل',
    followUs: 'تابعنا',
    workingHours: 'ساعات العمل',
    location: 'الموقع',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    
    // Buttons
    orderNow: 'اطلب الآن',
    viewDetails: 'عرض التفاصيل',
    backToTop: 'العودة لأعلى',
    whatsapp: 'واتساب',
    
    // Product Details
    price: 'السعر',
    sar: 'ريال',
    description: 'الوصف',
    specifications: 'المواصفات',
    colors: 'الألوان المتاحة',
    
    // Common
    readMore: 'اقرأ المزيد',
    viewAll: 'عرض الكل',
    loading: 'جارٍ التحميل...',
    searchPlaceholder: 'ابحث عن المنتجات...',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    gallery: 'Gallery',
    contact: 'Contact Us',
    bestSellers: 'Best Sellers',
    
    // Hero Section
    heroTitle: 'Marovi - World of Luxury Furniture',
    heroSubtitle: 'Discover our exclusive collection of premium home furniture',
    heroDescription: 'We offer the finest furniture pieces crafted with high quality and premium materials to add elegance and luxury to your home',
    exploreCollection: 'Explore Collection',
    contactUs: 'Contact Us',
    
    // Products
    bedrooms: 'Bedrooms',
    livingRooms: 'Living Rooms',
    children: 'Children Rooms',
    diningRooms: 'Dining Rooms',
    offices: 'Offices',
    decorations: 'Decorations',
    
    // About Section
    aboutTitle: 'Why Choose Marovi?',
    aboutSubtitle: 'Over 15 years of experience in luxury furniture',
    customDesign: 'Custom Design',
    customDesignDesc: 'We design furniture according to your taste and space',
    highQuality: 'High Quality',
    highQualityDesc: 'We use the finest materials in manufacturing our products',
    warranty: 'Comprehensive Warranty',
    warrantyDesc: '5-year warranty on all our products',
    fastDelivery: 'Fast Delivery',
    fastDeliveryDesc: 'Free delivery and installation service nationwide',
    
    // Testimonials
    testimonialsTitle: 'Customer Reviews',
    testimonialsSubtitle: 'Thousands of customers trust our product quality and services',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Information',
    followUs: 'Follow Us',
    workingHours: 'Working Hours',
    location: 'Location',
    phone: 'Phone',
    email: 'Email',
    
    // Buttons
    orderNow: 'Order Now',
    viewDetails: 'View Details',
    backToTop: 'Back to Top',
    whatsapp: 'WhatsApp',
    
    // Product Details
    price: 'Price',
    sar: 'SAR',
    description: 'Description',
    specifications: 'Specifications',
    colors: 'Available Colors',
    
    // Common
    readMore: 'Read More',
    viewAll: 'View All',
    loading: 'Loading...',
    searchPlaceholder: 'Search products...',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('marovi-language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('marovi-language', lang);
  };

  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  useEffect(() => {
    // Update document attributes
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.style.fontFamily = isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif";
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
