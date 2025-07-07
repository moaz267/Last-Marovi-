
import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Eye, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { generateProducts } from '@/data/products';

const ProductGrid = () => {
  const { t, isRTL } = useLanguage();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Get category from URL params
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoryParam !== 'all') {
      setActiveCategory(categoryParam);
    }
  }, [location.search]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', name: isRTL ? 'الكل' : 'All' },
    { id: 'bedrooms', name: t('bedrooms') },
    { id: 'livingRooms', name: t('livingRooms') },
    { id: 'children', name: t('children') },
    { id: 'diningRooms', name: t('diningRooms') },
    { id: 'offices', name: t('offices') },
    { id: 'storage', name: isRTL ? 'التخزين' : 'Storage' }
  ];

  const products = generateProducts(isRTL);

  const handleOrderNow = (product: any) => {
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

  const handleProductClick = (productId: number) => {
    navigate(`/product-details?id=${productId}`);
  };

  const filterByPrice = (price: number) => {
    const min = minPrice ? parseInt(minPrice) : 0;
    const max = maxPrice ? parseInt(maxPrice) : Infinity;
    return price >= min && price <= max;
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      
      // Enhanced search: search in name, description, and category
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        t(product.category).toLowerCase().includes(searchLower);
      
      const matchesPrice = filterByPrice(product.price);
      
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [activeCategory, searchQuery, minPrice, maxPrice, products, t]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, minPrice, maxPrice]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-modern-light min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-modern-dark mb-4 font-modern">
            {t('products')}
          </h2>
          <p className="text-lg text-modern-primary max-w-2xl mx-auto font-modern">
            {isRTL 
              ? 'اكتشف مجموعتنا المتنوعة من الأثاث الفاخر المصمم بعناية فائقة' 
              : 'Discover our diverse collection of luxury furniture designed with exceptional care'
            }
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-8">
          {/* Search Bar with clear button */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-modern-primary w-5 h-5" />
              <Input
                type="text"
                placeholder={isRTL ? 'ابحث في المنتجات والأقسام...' : 'Search products and categories...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-12 py-4 h-16 rounded-full border-2 border-modern-primary/30 focus:border-modern-primary bg-white text-modern-dark font-modern text-base"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-modern-primary hover:text-modern-dark transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          {searchQuery && (
            <div className="text-center">
              <p className="text-modern-primary font-medium font-modern">
                {isRTL 
                  ? `تم العثور على ${filteredProducts.length} منتج` 
                  : `Found ${filteredProducts.length} products`
                }
              </p>
            </div>
          )}

          {/* Price Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex gap-2 items-center">
              <Input
                type="number"
                placeholder={isRTL ? 'أقل سعر' : 'Min Price'}
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-36 h-14 rounded-full border-2 border-modern-primary/30 focus:border-modern-primary bg-white text-modern-dark font-modern"
              />
              <span className="text-modern-primary font-bold">-</span>
              <Input
                type="number"
                placeholder={isRTL ? 'أعلى سعر' : 'Max Price'}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-36 h-14 rounded-full border-2 border-modern-primary/30 focus:border-modern-primary bg-white text-modern-dark font-modern"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 font-modern text-base ${
                  activeCategory === category.id
                    ? 'bg-modern-primary text-white shadow-lg hover-scale'
                    : 'bg-white text-modern-primary hover:bg-modern-primary hover:text-white border border-modern-primary/20 hover-scale'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-scale group animate-zoom-in transform transition-all duration-300 hover:shadow-2xl border border-modern-primary/10"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative overflow-hidden cursor-pointer" onClick={() => handleProductClick(product.id)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 bg-modern-primary text-white px-4 py-2 rounded-full text-sm font-semibold font-modern">
                  {product.price.toLocaleString()} {t('sar')}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-modern-dark mb-3 line-clamp-1 cursor-pointer font-modern" onClick={() => handleProductClick(product.id)}>
                  {product.name}
                </h3>
                <p className="text-modern-primary text-sm mb-6 line-clamp-2 cursor-pointer font-modern leading-relaxed" onClick={() => handleProductClick(product.id)}>
                  {product.description}
                </p>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleOrderNow(product)}
                    className="flex-1 bg-modern-navy hover:bg-modern-hover-blue text-white py-4 rounded-full font-medium transition-all duration-300 hover-scale font-modern text-base"
                  >
                    {isRTL ? 'اطلب الآن' : 'Order Now'}
                  </Button>
                  
                  <Button
                    onClick={() => handleProductClick(product.id)}
                    variant="outline"
                    className="px-4 py-4 rounded-full border-modern-primary text-modern-primary hover:bg-modern-primary hover:text-white transition-all duration-300 hover-scale"
                  >
                    <Eye className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mb-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-modern-primary hover:text-white'} text-modern-primary font-modern`}
                  />
                </PaginationItem>
                
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <PaginationItem key={pageNum}>
                      <PaginationLink
                        onClick={() => handlePageChange(pageNum)}
                        isActive={currentPage === pageNum}
                        className={`cursor-pointer font-modern ${
                          currentPage === pageNum 
                            ? 'bg-modern-primary text-white' 
                            : 'text-modern-primary hover:bg-modern-primary hover:text-white'
                        }`}
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis className="text-modern-primary" />
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer hover:bg-modern-primary hover:text-white'} text-modern-primary font-modern`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <Search className="w-16 h-16 text-modern-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-modern-primary mb-4 font-modern">
                {isRTL ? 'لا توجد منتجات مطابقة' : 'No matching products found'}
              </h3>
              <p className="text-modern-dark font-modern leading-relaxed">
                {isRTL ? 'جرب تغيير معايير البحث أو الفلتر' : 'Try changing your search or filter criteria'}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
