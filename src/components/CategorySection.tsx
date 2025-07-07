
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const categories = [
    {
      id: 'bedrooms',
      name: isRTL ? 'غرف النوم' : 'Bedrooms',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: isRTL ? 'غرف نوم فاخرة وعصرية' : 'Luxurious and modern bedrooms'
    },
    {
      id: 'livingRooms',
      name: isRTL ? 'الصالونات' : 'Living Rooms',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: isRTL ? 'صالونات أنيقة ومريحة' : 'Elegant and comfortable living rooms'
    },
    {
      id: 'diningRooms',
      name: isRTL ? 'غرف السفرة' : 'Dining Rooms',
      image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: isRTL ? 'طاولات سفرة من أجود الأخشاب' : 'Dining tables from finest woods'
    },
    {
      id: 'children',
      name: isRTL ? 'غرف الأطفال' : 'Kids Rooms',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: isRTL ? 'غرف أطفال آمنة وملونة' : 'Safe and colorful kids rooms'
    },
    {
      id: 'offices',
      name: isRTL ? 'المكاتب' : 'Offices',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: isRTL ? 'مكاتب تنفيذية راقية' : 'Executive luxury offices'
    },
    {
      id: 'storage',
      name: isRTL ? 'حلول التخزين' : 'Storage Solutions',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: isRTL ? 'خزائن وحلول تخزين عملية' : 'Practical wardrobes and storage solutions'
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-marovi-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-marovi-dark-brown mb-4">
            {isRTL ? 'العناصر الأساسية' : 'Essential Elements'}
          </h2>
          <p className="text-lg text-marovi-brown max-w-2xl mx-auto">
            {isRTL 
              ? 'اكتشف مجموعتنا المتنوعة من الأثاث الفاخر لكل غرفة في منزلك' 
              : 'Discover our diverse collection of luxury furniture for every room in your home'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover-scale transform transition-all duration-300 hover:shadow-2xl animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-marovi-gold font-semibold">
                    {isRTL ? 'تصفح المجموعة' : 'Browse Collection'}
                  </span>
                  <div className="w-8 h-8 bg-marovi-gold rounded-full flex items-center justify-center group-hover:bg-marovi-copper transition-colors duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
