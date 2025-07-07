import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LocationSection = () => {
  const { t, isRTL } = useLanguage();

  const openInGoogleMaps = () => {
    const mapsUrl = "https://maps.app.goo.gl/ze5KvA4vzVdjkCFs9";
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-modern-dark mb-4 font-modern">
            {isRTL ? 'موقعنا' : 'Our Location'}
          </h2>
          <p className="text-lg text-modern-primary max-w-2xl mx-auto font-modern">
            {isRTL 
              ? 'تعال وزورنا في معرضنا لتستكشف مجموعتنا الرائعة من الأثاث الفاخر' 
              : 'Come visit us at our showroom to explore our amazing collection of luxury furniture'
            }
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-modern-primary/10">
            {/* Google Maps Embed */}
            <div className="relative w-full h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.1249114201753!2d31.818568482427955!3d31.417364252961795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dc49bce54d9%3A0xc87d305fb7e3dfb4!2z2YXYtdix2YPYqSDYp9mE2YXYsdmD2Kkg2YjZhNiv2YbYqtiu!5e0!3m2!1sar!2seg!4v1720337652252!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={isRTL ? 'موقع ماروفي' : 'Marovi Location'}
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Location Info */}
            <div className="p-8 bg-gradient-to-r from-modern-light to-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-modern-dark mb-4 font-modern">
                    {isRTL ? 'معرض ماروفي للأثاث' : 'Marovi Furniture Showroom'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-modern-primary rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-modern-dark font-modern">
                        {isRTL ? 'دمياط، طريق بورسعيد' : 'Damietta, Egypt'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-modern-primary rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-modern-dark font-modern">01067231442</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <Button 
                    onClick={openInGoogleMaps}
                    className="bg-modern-navy hover:bg-modern-hover-blue text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover-scale font-modern text-lg"
                  >
                    {isRTL ? 'افتح في الخرائط' : 'Open in Maps'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
