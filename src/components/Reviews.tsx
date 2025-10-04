import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Олена К.",
    rating: 5,
    text: "Чудова якість! Постільна білизна м'яка, приємна до тіла. Після багатьох прань виглядає як нова. Дуже задоволена покупкою!",
    date: "2 тижні тому",
  },
  {
    id: 2,
    name: "Андрій М.",
    rating: 5,
    text: "Замовляли плед та подушки. Все прийшло швидко, якість на висоті. Терракотовий колір ідеально вписався в інтер'єр.",
    date: "3 тижні тому",
  },
  {
    id: 3,
    name: "Марія В.",
    rating: 5,
    text: "Натуральні матеріали, приємні відтінки. Рушники дуже м'які та добре вбирають вологу. Рекомендую!",
    date: "1 місяць тому",
  },
  {
    id: 4,
    name: "Ігор С.",
    rating: 5,
    text: "Відмінне обслуговування та якісні товари. Дружелюбна підтримка допомогла з вибором. Обов'язково замовлю ще!",
    date: "1 місяць тому",
  },
];

const videoReviews = [
  {
    id: 1,
    name: "Оксана П.",
    thumbnail: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400",
    duration: "2:15",
  },
  {
    id: 2,
    name: "Дмитро Л.",
    thumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    duration: "1:45",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Відгуки наших клієнтів
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Більше 5000 задоволених покупців по всій Україні
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="border-0 shadow-soft rounded-2xl bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-terracotta text-terracotta"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  {review.text}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-primary">
                    {review.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Відео відгуки
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videoReviews.map((video) => (
            <div
              key={video.id}
              className="relative rounded-2xl overflow-hidden shadow-medium group cursor-pointer"
            >
              <img
                src={video.thumbnail}
                alt={`Відгук від ${video.name}`}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-background/90 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary/80 to-transparent">
                <p className="text-primary-foreground font-semibold">
                  {video.name}
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
