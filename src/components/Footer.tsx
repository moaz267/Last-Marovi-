import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'products', path: '/products' },
    { key: 'about', path: '/about' },
    { key: 'bestSellers', path: '/best-sellers' },
    { key: 'contact', path: '/contact' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/marovi_furniture',
      icon: (
<svg
  className="w-6 h-6"
  viewBox="0 0 448 512"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 
  114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7 
  s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.5 74.7-74.7 74.7zm146.4-194.3c0 
  14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 
  26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.2-93.5S389.8 
  0 354.1 1.7c-35.7 1.7-143.2 1.7-178.9 0C139.5 0 107.9 8.2 81.7 
  34.5S1.7 122.2 0 157.9c-1.7 35.7-1.7 143.2 0 178.9 1.7 35.7 9.9 
  67.3 36.2 93.5s57.8 34.5 93.5 36.2c35.7 1.7 143.2 1.7 178.9 
  0 35.7-1.7 67.3-9.9 93.5-36.2s34.5-57.8 36.2-93.5c1.7-35.7 
  1.7-143.2 0-178.9zM398.8 388c-7.8 19.6-22.9 34.7-42.6 
  42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
  9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 
  132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 
  42.6 11.7 29.5 9 99.5 9 132.1s2.6 102.7-9 132.1z"/>
</svg>

      )
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/marovi_furniture',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@marovi_furniture',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 8.5a6.5 6.5 0 01-6.5-6.5H11v15.1a2.6 2.6 0 11-2.6-2.6 2.6 2.6 0 011.1.2V11a5.2 5.2 0 105.2 5.2V9.3a9.4 9.4 0 004.3 1.2z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-modern-primary to-modern-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-modern-dark">ماروفي</span>
                <span className="text-modern-dark/70">Marovi</span>
              </div>
            </div>
            <p className="text-modern-dark leading-relaxed">
              {isRTL 
                ? 'معرض ماروفي للأثاث الفاخر - نقدم أجود أنواع الأثاث المنزلي بتصاميم حصرية وجودة عالية منذ أكثر من 15 عاماً.'
                : 'Marovi Luxury Furniture Gallery - We provide the finest home furniture with exclusive designs and high quality for over 15 years.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-modern-primary">
              {t('quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-modern-dark hover:text-modern-primary transition-colors duration-300"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-modern-primary">
              {t('contactInfo')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-modern-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-modern-dark">
                  {isRTL ? 'دمياط , طريق بورسعيد ' : 'Damietta, Port Said Road'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-modern-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-modern-dark">01067231442</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-modern-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-modern-dark">moazelhenawy23@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-modern-primary">
              {t('workingHours')}
            </h3>
            <div className="space-y-3 mb-6">
              <div className="text-modern-dark">
                <div className="font-medium">{isRTL ? 'السبت - الخميس' : 'Saturday - Thursday'}</div>
                <div className="text-sm">9:00 AM - 10:00 PM</div>
              </div>
              <div className="text-modern-dark">
                <div className="font-medium">{isRTL ? 'الجمعة' : 'Friday'}</div>
                <div className="text-sm">2:00 PM - 10:00 PM</div>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4 text-modern-primary">
              {t('followUs')}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-modern-primary hover:bg-modern-accent rounded-full flex items-center justify-center text-white transition-all duration-300 hover-scale"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-modern-dark">
            <p>© 2024 {isRTL ? 'ماروفي - جميع الحقوق محفوظة' : 'Marovi - All Rights Reserved'}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
