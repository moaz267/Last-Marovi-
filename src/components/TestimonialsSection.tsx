
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t, isRTL } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: isRTL ? 'أحمد محمد' : 'Ahmed Mohammed',
      location: isRTL ? 'الرياض' : 'Riyadh',
      rating: 5,
      text: isRTL 
        ? 'خدمة ممتازة وجودة عالية جداً. غرفة النوم التي اشتريتها من ماروفي فاقت توقعاتي بكثير. التصميم رائع والتنفيذ احترافي.'
        : 'Excellent service and very high quality. The bedroom I bought from Marovi exceeded my expectations. Amazing design and professional execution.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      name: isRTL ? 'فاطمة العلي' : 'Fatima Al-Ali', 
      location: isRTL ? 'جدة' : 'Jeddah',
      rating: 5,
      text: isRTL
        ? 'تعاملت معهم أكثر من مرة وفي كل مرة يبهروني بالجودة والذوق الرفيع. ينصح بهم بقوة لكل من يبحث عن الفخامة.'
        : 'I have dealt with them more than once and each time they impress me with quality and refined taste. Highly recommended for anyone looking for luxury.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    },
    {
      name: isRTL ? 'خالد السعد' : 'Khalid Al-Saad',
      location: isRTL ? 'الدمام' : 'Dammam',
      rating: 5,
      text: isRTL
        ? 'أثاث عالي الجودة وأسعار معقولة. فريق العمل محترف جداً والتسليم في الوقت المحدد. شكراً ماروفي على الخدمة المميزة.'
        : 'High quality furniture and reasonable prices. Very professional team and on-time delivery. Thank you Marovi for the excellent service.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-marovi-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-marovi-dark-brown mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-lg text-marovi-brown max-w-2xl mx-auto">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-8 absolute inset-0'
                }`}
              >
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-marovi-gold"
                      />
                    </div>
                    
                    <div className="flex-1 text-center md:text-right">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-marovi-gold fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      
                      <blockquote className="text-lg md:text-xl text-marovi-brown leading-relaxed mb-6 italic">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div>
                        <div className="font-semibold text-marovi-dark-brown text-xl mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-marovi-gold font-medium">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-marovi-gold w-8' 
                    : 'bg-marovi-brown/30 hover:bg-marovi-brown/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
