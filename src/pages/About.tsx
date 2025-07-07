
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import LocationSection from '@/components/LocationSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const AboutContent = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-modern-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-modern-dark mb-6 font-modern">
              {isRTL ? 'عن ماروفي' : 'About Marovi'}
            </h1>
            <p className="text-xl text-modern-primary max-w-3xl mx-auto leading-relaxed font-modern">
              {isRTL 
                ? 'نحن في ماروفي نؤمن بأن الأثاث ليس مجرد قطع، بل هو تعبير عن شخصيتك وذوقك الرفيع' 
                : 'At Marovi, we believe that furniture is not just pieces, but an expression of your personality and refined taste'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={isRTL ? 'قصتنا' : 'Our Story'}
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-modern-dark font-modern">
                {isRTL ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-modern-dark/80 leading-relaxed font-modern text-lg">
                {isRTL 
                  ? 'بدأت رحلة ماروفي منذ أكثر من 15 عاماً بحلم بسيط: تقديم أثاث فاخر وعالي الجودة يناسب الأذواق العربية الأصيلة. اليوم، نحن فخورون بأن نكون من الرواد في مجال الأثاث المنزلي الراقي.'
                  : 'Marovi\'s journey began over 15 years ago with a simple dream: to provide luxury, high-quality furniture that suits authentic Arabic tastes. Today, we are proud to be pioneers in the field of premium home furniture.'
                }
              </p>
              <p className="text-modern-dark/80 leading-relaxed font-modern text-lg">
                {isRTL 
                  ? 'نحن نؤمن بأن كل منزل يستحق أن يكون مميزاً، لذلك نقدم مجموعة متنوعة من الأثاث المصنوع بعناية فائقة من أجود المواد.'
                  : 'We believe that every home deserves to be special, so we offer a diverse collection of furniture crafted with exceptional care from the finest materials.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-modern-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-modern-dark mb-4 font-modern">
              {isRTL ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-lg text-modern-primary max-w-2xl mx-auto font-modern">
              {isRTL 
                ? 'هذه هي القيم التي نؤمن بها وتوجه عملنا كل يوم' 
                : 'These are the values we believe in and guide our work every day'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: isRTL ? 'الجودة العالية' : 'High Quality',
                description: isRTL ? 'نستخدم أجود المواد والخامات في صناعة أثاثنا' : 'We use the finest materials and components in our furniture',
                icon: '🏆'
              },
              {
                title: isRTL ? 'التصميم المميز' : 'Distinctive Design',
                description: isRTL ? 'تصاميم عصرية تواكب أحدث صيحات الموضة' : 'Modern designs that keep up with the latest fashion trends',
                icon: '🎨'
              },
              {
                title: isRTL ? 'خدمة العملاء' : 'Customer Service',
                description: isRTL ? 'نلتزم بتقديم أفضل خدمة ودعم لعملائنا الكرام' : 'We are committed to providing the best service and support to our valued customers',
                icon: '🤝'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-scale transition-all duration-300 border border-modern-primary/10">
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-modern-dark mb-4 text-center font-modern">
                  {value.title}
                </h3>
                <p className="text-modern-dark/70 text-center leading-relaxed font-modern">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Location Section */}
      <LocationSection />
    </div>
  );
};

const About = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <AboutContent />
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default About;
