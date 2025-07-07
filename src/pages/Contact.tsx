
import React, { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useToast } from '@/hooks/use-toast';

const ContactContent = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRTL ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
      description: isRTL ? "سنتواصل معك قريباً" : "We will contact you soon",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-modern-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-modern-dark mb-4 font-modern">
              {t('contact')}
            </h1>
            <p className="text-lg text-modern-primary max-w-2xl mx-auto font-modern">
              {isRTL 
                ? 'نحن هنا للإجابة على جميع استفساراتك' 
                : 'We are here to answer all your inquiries'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-modern-primary/10">
              <h3 className="text-2xl font-bold text-modern-dark mb-6 font-modern">
                {isRTL ? 'أرسل لنا رسالة' : 'Send us a message'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-modern-dark font-medium mb-2 font-modern">
                    {isRTL ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-modern-primary/30 rounded-lg focus:outline-none focus:border-modern-primary bg-white font-modern text-base"
                  />
                </div>
                <div>
                  <label className="block text-modern-dark font-medium mb-2 font-modern">
                    {isRTL ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-modern-primary/30 rounded-lg focus:outline-none focus:border-modern-primary bg-white font-modern text-base"
                  />
                </div>
                <div>
                  <label className="block text-modern-dark font-medium mb-2 font-modern">
                    {isRTL ? 'رقم الهاتف' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-modern-primary/30 rounded-lg focus:outline-none focus:border-modern-primary bg-white font-modern text-base"
                  />
                </div>
                <div>
                  <label className="block text-modern-dark font-medium mb-2 font-modern">
                    {isRTL ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-modern-primary/30 rounded-lg focus:outline-none focus:border-modern-primary resize-none bg-white font-modern text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-modern-navy hover:bg-modern-hover-blue text-white py-4 rounded-full font-medium transition-all duration-300 hover-scale font-modern text-lg"
                >
                  {isRTL ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-modern-primary/10">
                <h3 className="text-2xl font-bold text-modern-dark mb-6 font-modern">
                  {isRTL ? 'بيانات التواصل' : 'Contact Information'}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-modern-primary rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-modern-dark font-modern">
                        {isRTL ? 'العنوان' : 'Address'}
                      </h4>
                      <p className="text-modern-dark/70 font-modern">
                        {isRTL ? 'دمياط , طريق بورسعيد ' : 'Damietta, Port Said Road'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-marovi-gold rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-marovi-dark-brown">
                        {isRTL ? 'الهاتف' : 'Phone'}
                      </h4>
                      <a href="tel:+20 01067231442" className="text-marovi-brown hover:text-marovi-gold">
                         010 672 31442
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-marovi-dark-brown">
                        {isRTL ? 'واتساب' : 'WhatsApp'}
                      </h4>
                      <a 
                        href="https://wa.me/201067231442" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-marovi-brown hover:text-green-500"
                      >
                        01067231442 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-modern-primary/10">
                <h3 className="text-2xl font-bold text-modern-dark mb-6 font-modern">
                  {isRTL ? 'ساعات العمل' : 'Working Hours'}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-modern-dark font-medium font-modern">
                      {isRTL ? 'السبت - الخميس' : 'Saturday - Thursday'}
                    </span>
                    <span className="text-modern-dark/70 font-modern">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-modern-dark font-medium font-modern">
                      {isRTL ? 'الجمعة' : 'Friday'}
                    </span>
                    <span className="text-modern-dark/70 font-modern">2:00 PM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <ContactContent />
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
};

export default Contact;
