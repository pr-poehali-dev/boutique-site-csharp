import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const News = () => {
  const newsArticles = [
    {
      title: "Новая коллекция весна-лето 2025",
      excerpt:
        "Представляем эксклюзивную коллекцию, вдохновленную природой и современными трендами",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
      date: "15 июня 2025",
      category: "Коллекции",
      readTime: "3 мин",
    },
    {
      title: "Открытие нового шоу-рума в центре города",
      excerpt:
        "Приглашаем посетить наш новый шоу-рум с персональным консультированием",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600",
      date: "10 июня 2025",
      category: "События",
      readTime: "2 мин",
    },
    {
      title: "Интервью с главным дизайнером",
      excerpt:
        "Узнайте о философии бренда и источниках вдохновения от нашего креативного директора",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      date: "5 июня 2025",
      category: "Интервью",
      readTime: "5 мин",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-6 font-montserrat">
            Новости
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за последними событиями и трендами мира моды
          </p>
        </div>

        <div className="grid gap-12">
          {newsArticles.map((article, index) => (
            <article
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <span>{article.date}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-3xl font-bold text-black font-montserrat group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Button
                    variant="outline"
                    className="hover-scale group-hover:bg-black group-hover:text-white transition-all duration-300"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="hover-scale">
            <Icon name="Plus" size={20} className="mr-2" />
            Загрузить еще новости
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
