
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Eye } from 'lucide-react';

const BestSellersContent = () => {
  const { t, isRTL } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bestSellingProductsByCategory = {
    bedrooms: [
      {
        id: 1,
        name: isRTL ? 'غرفة نوم ملكية' : 'Royal Bedroom Set',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        category: 'bedrooms',
        description: isRTL ? 'غرفة نوم فاخرة بتصميم ملكي عصري' : 'Luxurious bedroom set with modern royal design'
      },
      {
        id: 7,
        name: isRTL ? 'غرفة نوم كلاسيكية' : 'Classic Bedroom Set',
        price: 12500,
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        category: 'bedrooms',
        description: isRTL ? 'غرفة نوم كلاسيكية أنيقة' : 'Elegant classic bedroom set'
      }
    ],
    livingRooms: [
      {
        id: 2,
        name: isRTL ? 'صالون كلاسيكي فاخر' : 'Classic Luxury Sofa',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        category: 'livingRooms',
        description: isRTL ? 'كنبة كلاسيكية فاخرة مريحة وأنيقة' : 'Classic luxury sofa, comfortable and elegant'
      },
      {
        id: 6,
        name: isRTL ? 'كنبة زاوية عصرية' : 'Modern Corner Sofa',
        price: 11000,
        image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
        category: 'livingRooms',
        description: isRTL ? 'كنبة زاوية عصرية مثالية للصالون' : 'Modern corner sofa perfect for living room'
      }
    ],
    diningRooms: [
      {
        id: 3,
        name: isRTL ? 'طاولة سفرة خشبية' : 'Wooden Dining Table',
        price: 8000,
        image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
        category: 'diningRooms',
        description: isRTL ? 'طاولة سفرة من الخشب الطبيعي الفاخر' : 'Natural luxury wood dining table'
      }
    ],
    children: [
      {
        id: 4,
        name: isRTL ? 'غرفة أطفال ملونة' : 'Colorful Kids Room',
        price: 6500,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2158&q=80',
        category: 'children',
        description: isRTL ? 'غرفة أطفال ملونة ومرحة وآمنة' : 'Colorful, fun and safe kids room'
      }
    ],
    offices: [
      {
        id: 5,
        name: isRTL ? 'مكتب تنفيذي راقي' : 'Executive Office Desk',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2158&q=80',
        category: 'offices',
        description: isRTL ? 'مكتب تنفيذي أنيق للمكاتب الراقية' : 'Elegant executive desk for upscale offices'
      }
    ],
    storage: [
      {
        id: 8,
        name: isRTL ? 'خزانة تخزين عملية' : 'Practical Storage Cabinet',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2158&q=80',
        category: 'storage',
        description: isRTL ? 'خزانة تخزين عملية وأنيقة' : 'Practical and elegant storage cabinet'
      }
    ]
  };

  const categories = [
    { id: 'bedrooms', name: t('bedrooms') },
    { id: 'livingRooms', name: t('livingRooms') },
    { id: 'children', name: t('children') },
    { id: 'diningRooms', name: t('diningRooms') },
    { id: 'offices', name: t('offices') },
    { id: 'storage', name: isRTL ? 'التخزين' : 'Storage' }
  ];

  const handleAddToCart = (product: any) => {
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

    navigate('/cart');
  };

  const handleViewDetails = (productId: number) => {
    navigate(`/product-details?id=${productId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <section className="py-20 bg-marovi-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-marovi-dark-brown mb-4">
                {isRTL ? 'الأكثر مبيعاً' : 'Best Sellers'}
              </h1>
              <p className="text-lg text-marovi-brown max-w-2xl mx-auto">
                {isRTL 
                  ? 'اكتشف المنتجات الأكثر طلباً من عملائنا الكرام' 
                  : 'Discover the most popular products chosen by our valued customers'
                }
              </p>
            </div>

            {categories.map((category) => {
              const categoryProducts = bestSellingProductsByCategory[category.id as keyof typeof bestSellingProductsByCategory];
              if (!categoryProducts || categoryProducts.length === 0) return null;

              return (
                <div key={category.id} className="mb-16">
                  <h2 className="text-2xl font-bold text-marovi-dark-brown mb-8 text-center">
                    {category.name}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryProducts.map((product, index) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale group animate-zoom-in transform transition-all duration-300 hover:shadow-2xl"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="relative overflow-hidden cursor-pointer" onClick={() => handleViewDetails(product.id)}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                          <div className="absolute top-4 right-4 bg-marovi-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {product.price.toLocaleString()} {t('sar')}
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-marovi-dark-brown mb-2 cursor-pointer" onClick={() => handleViewDetails(product.id)}>
                            {product.name}
                          </h3>
                          <p className="text-marovi-brown text-sm mb-4 line-clamp-2 cursor-pointer" onClick={() => handleViewDetails(product.id)}>
                            {product.description}
                          </p>
                          
                          <div className="flex gap-2">
                            <Button 
                              onClick={() => handleAddToCart(product)}
                              className="flex-1 bg-marovi-gold hover:bg-marovi-copper text-white py-3 rounded-full font-medium transition-all duration-300"
                            >
                              {isRTL ? 'اطلب الآن' : 'Order Now'}
                            </Button>
                            
                            <Button
                              onClick={() => handleViewDetails(product.id)}
                              variant="outline"
                              className="px-3 py-3 rounded-full border-marovi-gold text-marovi-gold hover:bg-marovi-gold hover:text-white transition-all duration-300"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

const BestSellers = () => {
  return (
    <LanguageProvider>
      <BestSellersContent />
    </LanguageProvider>
  );
};

export default BestSellers;
