
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeaturedReview {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  rating: number;
}

interface FeaturedCuriosity {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
}

interface FeaturedTopList {
  title: string;
  items: string[];
}

interface FeaturedContentProps {
  featuredReviews: FeaturedReview[];
  featuredCuriosities: FeaturedCuriosity[];
  featuredTopList: FeaturedTopList;
}

const FeaturedContent = ({ featuredReviews, featuredCuriosities, featuredTopList }: FeaturedContentProps) => {
  // Ensure each array has valid items to prevent toLowerCase() errors
  const safeReviews = featuredReviews?.filter(item => item && item.title && item.excerpt && item.image) || [];
  const safeCuriosities = featuredCuriosities?.filter(item => item && item.title && item.category && item.excerpt && item.image) || [];
  const safeTopList = featuredTopList?.title && featuredTopList?.items ? featuredTopList : { 
    title: "Top Anime List", 
    items: [] 
  };

  // Reversed top list items (5th, 4th, 3rd, etc.)
  const reversedItems = [...safeTopList.items].reverse();
  
  // Images for specific anime titles
  const animeImages = {
    "Macross Plus": "https://wallpapercave.com/wp/wp5042391.jpg",
    "Code Geass": "https://wallpapercave.com/wp/wp5972466.jpg",
    "Tengen Toppa Gurren Lagann": "https://wallpapercave.com/wp/NZjrHMj.jpg"
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    <>
      {/* Featured Reviews */}
      <section className="py-12 theme-reviews">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 space-x-4"
          >
            <h2 className="font-silkscreen text-2xl md:text-3xl theme-reviews-text">RESEÑAS DESTACADAS</h2>
            <div className="h-px bg-border flex-grow"></div>
            <Link to="/resenas" className="text-sm font-medium text-retro-pink flex items-center hover:underline font-silkscreen">
              VER TODAS
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {safeReviews.map((review) => (
              <motion.div key={review.id} variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Link to="/resenas">
                  <Card className="overflow-hidden border-2 border-retro-pink/30 h-full flex flex-col theme-reviews-card">
                    <div className="h-48 overflow-hidden">
                      <motion.img 
                        src={review.image} 
                        alt={review.title} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-pixel text-retro-pink">{review.title}</CardTitle>
                      <CardDescription className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="font-vt323 text-lg">{review.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Curiosities */}
      <section className="py-12 theme-curiosities">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 space-x-4"
          >
            <h2 className="font-silkscreen text-2xl md:text-3xl theme-curiosities-text">CURIOSIDADES</h2>
            <div className="h-px bg-border flex-grow"></div>
            <Link to="/curiosidades" className="text-sm font-medium text-blue-500 flex items-center hover:underline font-silkscreen">
              VER TODAS
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {safeCuriosities.map((item) => (
              <motion.div key={item.id} variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Link to="/curiosidades">
                  <Card className="h-full border-2 border-blue-500/30 overflow-hidden flex flex-col theme-curiosities-card">
                    <div className="h-48 overflow-hidden">
                      <motion.img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-pixel text-blue-500">{item.title}</CardTitle>
                      <CardDescription>{item.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="font-vt323 text-lg">{item.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="text-blue-500 font-silkscreen">
                        LEER MÁS
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Top List - Redesigned with horizontal layout */}
      <section className="py-12 theme-toplist">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 space-x-4"
          >
            <h2 className="font-silkscreen text-2xl md:text-3xl theme-toplist-text">TOP LISTS</h2>
            <div className="h-px bg-border flex-grow"></div>
            <Link to="/top-list#mecha-animes" className="text-sm font-medium text-amber-400 flex items-center hover:underline font-silkscreen">
              VER TODAS
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-2 border-amber-400/30 theme-toplist-card">
              <CardHeader>
                <CardTitle className="font-pixel text-amber-400">{safeTopList.title}</CardTitle>
                <CardDescription className="font-vt323">
                  El ranking inverso para generar expectativa - ¡Descubre quién está en el primer lugar!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {reversedItems.slice(0, 3).map((item, index) => {
                    const realRank = safeTopList.items.length - index;
                    const imageUrl = animeImages[item] || "";
                    
                    return (
                      <motion.div 
                        key={index} 
                        className="relative"
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative overflow-hidden rounded-lg border border-amber-400/30 h-60">
                          {imageUrl && (
                            <img 
                              src={imageUrl} 
                              alt={item} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span className="bg-amber-400 text-black px-2 py-1 text-xs rounded-full font-bold inline-block mb-1">
                              #{realRank}
                            </span>
                            <h3 className="font-silkscreen text-white text-lg mb-1">{item}</h3>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1, delay: index * 0.2 }}
                              className="h-1 bg-amber-400"
                            ></motion.div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="mt-6">
                  <ol className="list-decimal pl-5 space-y-2 font-vt323 text-lg">
                    {reversedItems.slice(3).map((item, index) => {
                      const realRank = safeTopList.items.length - 3 - index;
                      return (
                        <li key={index} className={`${realRank === 1 ? 'text-yellow-400 font-semibold font-silkscreen' : 'font-vt323'}`}>
                          <span className="mr-2 font-bold">#{realRank}</span>
                          {item}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/top-list#mecha-animes">
                  <Button variant="outline" className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10 font-silkscreen">
                    VER LISTA COMPLETA
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturedContent;
