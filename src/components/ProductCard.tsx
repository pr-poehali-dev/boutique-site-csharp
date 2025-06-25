import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({
  title,
  price,
  image,
  category,
  isNew,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 bg-white transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isNew && (
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-medium tracking-wide">
            Новинка
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
          {category}
        </p>
        <h3 className="font-medium text-lg mb-3 text-black">{title}</h3>
        <p className="text-lg font-medium text-black">{price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
