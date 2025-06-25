import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Products = () => {
  const products = [
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
    },
    {
      title: "Шелковый шарф",
      price: "8 500 ₽",
      image:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400",
      category: "Аксессуары",
      isNew: true,
    },
    {
      title: "Кашемировое пальто",
      price: "35 000 ₽",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400",
      category: "Одежда",
    },
    {
      title: "Дизайнерские очки",
      price: "15 000 ₽",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
      category: "Аксессуары",
    },
  ];

  const categories = ["Все", "Одежда", "Аксессуары", "Сумки"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50/30">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши товары
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Эксклюзивная коллекция товаров высочайшего качества
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-white transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <div className="relative">
                <Icon
                  name="Search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <Input placeholder="Поиск товаров..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Icon name="SlidersHorizontal" size={16} />
                Фильтры
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button size="lg" className="hover-scale">
            <Icon name="Plus" size={20} className="mr-2" />
            Загрузить еще
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
