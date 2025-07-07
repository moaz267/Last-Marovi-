
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CartContent = () => {
  const { t, isRTL } = useLanguage();
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: isRTL ? "السلة فارغة" : "Cart is empty",
        description: isRTL ? "يرجى إضافة منتجات للسلة أولاً" : "Please add products to cart first",
      });
      return;
    }

    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-modern-light">
        <Header />
        <div className="pt-20">
          <section className="py-20 bg-modern-light">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <ShoppingBag className="w-24 h-24 text-modern-dark mx-auto mb-8" />
                <h1 className="text-4xl font-bold text-modern-dark mb-4">
                  {isRTL ? 'السلة فارغة' : 'Your Cart is Empty'}
                </h1>
                <p className="text-lg text-modern-dark/70 mb-8">
                  {isRTL ? 'ابدأ بإضافة منتجات رائعة إلى سلتك' : 'Start adding some amazing products to your cart'}
                </p>
                <Button 
                  onClick={() => navigate('/products')}
                  className="bg-modern-navy hover:bg-modern-hover-blue text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover-scale"
                >
                  {isRTL ? 'تصفح المنتجات' : 'Browse Products'}
                </Button>
              </div>
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
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-modern-dark mb-8 text-center">
                {isRTL ? 'سلة التسوق' : 'Shopping Cart'}
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item) => (
                    <Card key={item.id} className="bg-white border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-modern-dark">
                              {item.name}
                            </h3>
                            <p className="text-modern-primary font-bold">
                              {item.price.toLocaleString()} {t('sar')}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 border-modern-primary text-modern-primary hover:bg-modern-primary hover:text-white"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-semibold text-modern-dark">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 border-modern-primary text-modern-primary hover:bg-modern-primary hover:text-white"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="h-8 w-8 ml-2"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24 bg-white border-gray-200">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold text-modern-dark mb-4">
                        {isRTL ? 'ملخص الطلب' : 'Order Summary'}
                      </h2>
                      <div className="space-y-3 mb-6">
                        {items.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm text-modern-dark">
                            <span>{item.name} x{item.quantity}</span>
                            <span>{(item.price * item.quantity).toLocaleString()} {t('sar')}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t pt-4 mb-6">
                        <div className="flex justify-between text-lg font-bold text-modern-dark">
                          <span>{isRTL ? 'الإجمالي' : 'Total'}</span>
                          <span>{getTotalPrice().toLocaleString()} {t('sar')}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <button 
                          onClick={handleCheckout}
                          className="w-full bg-modern-navy hover:bg-modern-hover-blue text-white py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 hover-scale"
                        >
                          {isRTL ? 'إتمام الطلب' : 'Proceed to Checkout'}
                        </button>
                        <Button 
                          variant="outline"
                          onClick={clearCart}
                          className="w-full border-modern-primary text-modern-primary hover:bg-modern-primary hover:text-white py-3 rounded-full"
                        >
                          {isRTL ? 'إفراغ السلة' : 'Clear Cart'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

const Cart = () => {
  return (
    <LanguageProvider>
      <CartContent />
    </LanguageProvider>
  );
};

export default Cart;
