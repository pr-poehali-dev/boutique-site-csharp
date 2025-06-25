import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredProducts = [
    {
      title: "Элегантное платье",
      price: "12 000 ₽",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
      category: "Одежда",
      isNew: true,
    },
    {
      title: "Классические часы",
      price: "25 000 ₽",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "Аксессуары",
    },
    {
      title: "Кожаная сумка",
      price: "18 500 ₽",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
      category: "Сумки",
      isNew: true,
    },
  ];

  const latestNews = [
    {
      title: "Новая коллекция весна-лето 2024",
      excerpt:
        "Представляем эксклюзивную коллекцию, вдохновленную природными мотивами и современными тенденциями моды.",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400",
      date: "15 мар",
      readTime: "3 мин",
    },
    {
      title: "Устойчивая мода: наш подход",
      excerpt:
        "Узнайте о нашей приверженности экологически чистому производству и ответственному потреблению.",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
      date: "12 мар",
      readTime: "5 мин",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Featured Products */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light font-montserrat text-black mb-6 tracking-tight">
              Рекомендуемые товары
            </h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              Тщательно подобранная коллекция для ценителей качества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-sm font-medium tracking-wide"
            >
              Посмотреть все товары
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light font-montserrat text-black mb-6 tracking-tight">
              Последние новости
            </h2>
            <p className="text-lg text-gray-600">
              Следите за нашими обновлениями и трендами
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {latestNews.map((article, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <NewsCard {...article} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-sm font-medium tracking-wide"
            >
              Все новости
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-medium font-montserrat text-black mb-4 tracking-tight">
            Boutique
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Современный бутик с индивидуальным подходом к каждому клиенту
          </p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <span className="hover:text-gray-600 cursor-pointer transition-colors">
              Instagram
            </span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors">
              Facebook
            </span>
            <span className="hover:text-gray-600 cursor-pointer transition-colors">
              Twitter
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
