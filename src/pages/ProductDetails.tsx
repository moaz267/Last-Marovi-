
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { generateProducts } from '@/data/products';

const ProductDetailsContent = () => {
  const { t, isRTL } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productId = parseInt(searchParams.get('id'));
    const products = generateProducts(isRTL);
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct || products[0]); // Default to first product if not found
  }, [location.search, isRTL]);

  const handleOrderNow = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      
      toast({
        title: isRTL ? "تم إضافة المنتج" : "Product Added",
        description: isRTL ? `تم إضافة ${product.name} إلى السلة` : `${product.name} added to cart`,
      });

      // Navigate to cart after adding product
      navigate('/cart');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const features = isRTL ? [
    'خشب طبيعي عالي الجودة',
    'تصميم عصري وأنيق',
    'مقاوم للخدش والتآكل',
    'ضمان 3 سنوات',
    'تركيب مجاني'
  ] : [
    'High-quality natural wood',
    'Modern and elegant design',
    'Scratch and wear resistant',
    '3-year warranty',
    'Free installation'
  ];

  return (
    <div className="min-h-screen bg-modern-light">
      <Header />
      <div className="pt-20">
        <section className="py-20 bg-modern-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-modern-dark mb-4">
                    {product.name}
                  </h1>
                  <div className="text-3xl font-bold text-modern-primary mb-6">
                    {product.price.toLocaleString()} {t('sar')}
                  </div>
                </div>

                <Card className="bg-white border-modern-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-modern-dark mb-4">
                      {isRTL ? 'وصف المنتج' : 'Product Description'}
                    </h3>
                    <p className="text-modern-dark/70 leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-modern-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-modern-dark mb-4">
                      {isRTL ? 'المميزات' : 'Features'}
                    </h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-modern-dark/70">
                          <div className="w-2 h-2 bg-modern-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button 
                    onClick={handleOrderNow}
                    className="flex-1 bg-modern-navy hover:bg-modern-hover-blue text-white py-6 text-lg rounded-full font-medium transition-all duration-300"
                  >
                    {isRTL ? 'اطلب الآن' : 'Order Now'}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.history.back()}
                    className="flex-1 border-2 border-modern-primary text-modern-primary hover:bg-modern-primary hover:text-white py-6 text-lg rounded-full font-medium transition-all duration-300"
                  >
                    {isRTL ? 'العودة' : 'Go Back'}
                  </Button>
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

const ProductDetails = () => {
  return (
    <LanguageProvider>
      <ProductDetailsContent />
    </LanguageProvider>
  );
};

export default ProductDetails;
