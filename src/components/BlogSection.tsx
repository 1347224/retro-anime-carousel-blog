
import { Calendar, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Studio Ghibli on Western Animation",
    excerpt: "Exploring how Hayao Miyazaki's distinct style and storytelling influenced animators worldwide.",
    category: "Analysis",
    date: "May 2, 2025",
    readTime: "8 min",
    likes: 342,
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Evolution of Mecha Anime: From Gundam to Evangelion",
    excerpt: "Tracing the development of the mecha genre through its most groundbreaking series.",
    category: "History",
    date: "Apr 28, 2025",
    readTime: "12 min",
    likes: 286,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Character Design in 2000s Anime vs. Today",
    excerpt: "Analyzing how character design philosophies have evolved over the past two decades.",
    category: "Art",
    date: "Apr 15, 2025",
    readTime: "10 min",
    likes: 195,
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background/50">
      <div className="retro-container">
        <h2 className="retro-title text-3xl md:text-4xl mb-2">Retro Anime Blog</h2>
        <p className="text-foreground/70 mb-10">Deep dives into the anime that defined a generation</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="retro-card group transition-all duration-300 hover:scale-[1.02]">
              <div className="card-highlight"></div>
              <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-retro-purple/80 text-white px-3 py-1 text-xs rounded">
                  {post.category}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-retro-purple transition-colors">
                {post.title}
              </h3>
              
              <p className="text-foreground/70 text-sm mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-xs text-foreground/60">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-retro-pink text-retro-pink" /> {post.likes}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="retro-button">View All Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
