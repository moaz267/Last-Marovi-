import React, { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const CheckoutContent = () => {
  const { t, isRTL } = useLanguage();
  const { items, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });
  
  const [currentStep, setCurrentStep] = useState(1); // 1: form, 2: otp, 3: success
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: isRTL ? "يرجى ملء جميع الحقول" : "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    // Generate random OTP
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    setCurrentStep(2);
    
    // Show OTP in toast (simulation)
    toast({
      title: isRTL ? "رمز التأكيد" : "Verification Code",
      description: isRTL ? `رمز التأكيد الخاص بك: ${newOtp}` : `Your verification code: ${newOtp}`,
    });
  };

  const handleVerifyOtp = () => {
    if (otp !== generatedOtp) {
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: isRTL ? "رمز التأكيد غير صحيح" : "Invalid verification code",
        variant: "destructive"
      });
      return;
    }
    
    setCurrentStep(3);
    toast({
      title: isRTL ? "تم تأكيد الطلب" : "Order Confirmed",
      description: isRTL ? "تم إرسال طلبك بنجاح" : "Your order has been sent successfully",
    });
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  if (items.length === 0 && currentStep === 1) {
    return (
      <div className="min-h-screen bg-modern-light">
        <Header />
        <div className="pt-20">
          <section className="py-20 bg-modern-light">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-modern-dark mb-4">
                {isRTL ? 'السلة فارغة' : 'Cart is Empty'}
              </h1>
              <p className="text-lg text-modern-dark/70 mb-8">
                {isRTL ? 'لا يمكن إتمام الطلب بدون منتجات' : 'Cannot proceed without products'}
              </p>
              <Button onClick={() => navigate('/products')} className="bg-modern-navy hover:bg-modern-hover-blue text-white">
                {isRTL ? 'تصفح المنتجات' : 'Browse Products'}
              </Button>
            </div>
          </section>
        </div>
        <Footer />
        <BackToTop />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-modern-light">
      <Header />
      <div className="pt-20">
        <section className="py-20 bg-modern-light">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold text-modern-dark mb-8 text-center">
                {isRTL ? 'إتمام الطلب' : 'Complete Order'}
              </h1>

              {currentStep === 1 && (
                <Card className="bg-white border-modern-accent/20">
                  <CardHeader>
                    <CardTitle className="text-modern-dark">
                      {isRTL ? 'بيانات التوصيل' : 'Delivery Information'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitForm} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-modern-dark">
                          {isRTL ? 'الاسم الكامل' : 'Full Name'}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={isRTL ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-modern-dark">
                          {isRTL ? 'رقم الهاتف' : 'Phone Number'}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={isRTL ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                          className="mt-2"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="address" className="text-modern-dark">
                          {isRTL ? 'العنوان الكامل' : 'Full Address'}
                        </Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder={isRTL ? 'أدخل عنوانك الكامل' : 'Enter your full address'}
                          className="mt-2"
                          rows={3}
                          required
                        />
                      </div>

                      {/* Order Summary */}
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-modern-dark mb-4">
                          {isRTL ? 'ملخص الطلب' : 'Order Summary'}
                        </h3>
                        <div className="space-y-2 mb-4">
                          {items.map((item) => (
                            <div key={item.id} className="flex justify-between text-sm">
                              <span>{item.name} x{item.quantity}</span>
                              <span>{(item.price * item.quantity).toLocaleString()} {t('sar')}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between font-bold text-lg text-modern-dark border-t pt-2">
                          <span>{isRTL ? 'الإجمالي' : 'Total'}</span>
                          <span>{getTotalPrice().toLocaleString()} {t('sar')}</span>
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-modern-navy hover:bg-modern-hover-blue text-white py-3 text-lg">
                        {isRTL ? 'متابعة للتأكيد' : 'Continue to Verification'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <Card className="bg-white border-modern-accent/20">
                  <CardHeader>
                    <CardTitle className="text-modern-dark text-center">
                      {isRTL ? 'تأكيد رقم الهاتف' : 'Phone Verification'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <p className="text-modern-dark/70">
                      {isRTL 
                        ? `تم إرسال رمز التأكيد إلى ${formData.phone}` 
                        : `Verification code sent to ${formData.phone}`
                      }
                    </p>
                    
                    <div className="flex justify-center">
                      <InputOTP value={otp} onChange={setOtp} maxLength={4}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    
                    <Button 
                      onClick={handleVerifyOtp} 
                      disabled={otp.length !== 4}
                      className="bg-modern-navy hover:bg-modern-hover-blue text-white px-8 py-3"
                    >
                      {isRTL ? 'تأكيد الطلب' : 'Confirm Order'}
                    </Button>
                  </CardContent>
                </Card>
              )}

              {currentStep === 3 && (
                <Card className="bg-white border-modern-accent/20">
                  <CardContent className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h2 className="text-2xl font-bold text-modern-dark mb-4">
                      {isRTL ? 'تم تأكيد طلبك بنجاح!' : 'Order Confirmed Successfully!'}
                    </h2>
                    <p className="text-modern-dark/70 mb-6">
                      {isRTL 
                        ? 'سيتم التواصل معك قريبًا لتأكيد التوصيل' 
                        : 'We will contact you soon to confirm delivery'
                      }
                    </p>
                    <p className="text-sm text-modern-dark/70">
                      {isRTL ? 'سيتم توجيهك للصفحة الرئيسية خلال ثوانٍ...' : 'Redirecting to home page in a few seconds...'}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

const Checkout = () => {
  return (
    <LanguageProvider>
      <CheckoutContent />
    </LanguageProvider>
  );
};

export default Checkout;
