import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-light font-montserrat text-black mb-8 tracking-tight text-balance">
            Современный
            <span className="block font-medium">Бутик</span>
          </h1>

          <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed">
            Коллекция эксклюзивных товаров, созданных с особым вниманием к
            деталям и качеству
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-8 py-3 text-sm font-medium tracking-wide transition-colors"
            >
              Смотреть коллекцию
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-sm font-medium tracking-wide transition-colors"
            >
              О нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
