import { Card, CardContent } from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
}

const NewsCard = ({ title, excerpt, image, date, readTime }: NewsCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 bg-white transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <CardContent className="p-6">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 uppercase tracking-wide">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>

        <h3 className="font-medium text-xl mb-4 text-black leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{excerpt}</p>

        <div className="text-sm font-medium text-black group-hover:underline cursor-pointer">
          Читать далее
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
