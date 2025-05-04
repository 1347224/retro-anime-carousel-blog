
import { Book, Video, Image, Star, Users } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Classic Reviews",
    description: "In-depth analyses of the most influential anime from the 2000s",
    icon: <Star className="w-10 h-10 text-retro-orange" />,
    count: 42
  },
  {
    id: 2,
    title: "Studio Spotlights",
    description: "Exploring legendary animation studios and their unique styles",
    icon: <Image className="w-10 h-10 text-retro-purple" />,
    count: 28
  },
  {
    id: 3,
    title: "Character Studies",
    description: "Detailed examinations of iconic characters and their development",
    icon: <Users className="w-10 h-10 text-retro-blue" />,
    count: 35
  },
  {
    id: 4,
    title: "Manga Origins",
    description: "Comparing anime adaptations with their original manga sources",
    icon: <Book className="w-10 h-10 text-retro-pink" />,
    count: 23
  },
  {
    id: 5,
    title: "Animation Techniques",
    description: "Analyzing the evolution of animation styles through the 2000s",
    icon: <Video className="w-10 h-10 text-retro-pink" />,
    count: 19
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-20">
      <div className="retro-container">
        <h2 className="retro-title text-3xl md:text-4xl mb-2">Explore Categories</h2>
        <p className="text-foreground/70 mb-10">Discover content across specialized anime topics</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="retro-card flex flex-col items-center text-center group cursor-pointer">
              <div className="card-highlight"></div>
              <div className="p-4 mb-3 rounded-full bg-card border border-retro-purple/30 group-hover:border-retro-purple transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-retro-purple transition-colors">
                {category.title}
              </h3>
              <p className="text-foreground/70 text-sm mb-3">
                {category.description}
              </p>
              <div className="py-1 px-3 bg-muted rounded-full text-xs">
                {category.count} articles
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
