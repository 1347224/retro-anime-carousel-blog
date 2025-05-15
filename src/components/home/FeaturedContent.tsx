
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
      <section className="py-12 relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
          <img 
            src="https://wallpapercave.com/wp/wp9697349.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="retro-container relative z-10">
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
            {featuredReviews.map((review) => (
              <motion.div key={review.id} variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Link to="/resenas">
                  <Card className="overflow-hidden border-2 border-retro-pink/30 h-full flex flex-col theme-reviews-card backdrop-blur-sm bg-black/40">
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
      <section className="py-12 relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
          <img 
            src="https://wallpapercave.com/wp/wp2055835.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="retro-container relative z-10">
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
            {featuredCuriosities.map((item) => (
              <motion.div key={item.id} variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Link to="/curiosidades">
                  <Card className="h-full border-2 border-blue-500/30 overflow-hidden flex flex-col theme-curiosities-card backdrop-blur-sm bg-black/40">
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

      {/* Featured Top List - Redesigned section */}
      <section className="py-12 relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70"></div>
          <img 
            src="https://wallpapercave.com/wp/wp8493329.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="retro-container relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 space-x-4"
          >
            <h2 className="font-silkscreen text-2xl md:text-3xl theme-toplist-text">TOP LISTS</h2>
            <div className="h-px bg-border flex-grow"></div>
            <Link to="/top-list" className="text-sm font-medium text-amber-400 flex items-center hover:underline font-silkscreen">
              VER TODAS
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Display items in reverse order, showing only 5th, 4th, and 3rd positions */}
            {featuredTopList.items.slice(2, 5).reverse().map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="group cursor-pointer"
              >
                <Link to="/top-list">
                  <motion.div 
                    className="relative overflow-hidden rounded-lg border-2 border-amber-400/30 backdrop-blur-sm bg-black/40 h-64"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Image overlay with position indicator */}
                    <img 
                      src={
                        index === 0 
                          ? "https://wallpapercave.com/wp/wp5042391.jpg" // Macross Plus
                          : index === 1 
                            ? "https://wallpapercave.com/wp/wp5972466.jpg" // Code Geass
                            : "https://wallpapercave.com/wp/NZjrHMj.jpg" // Tengen Toppa Gurren Lagann
                      }
                      alt={item}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4">
                      <div className="font-pixel text-6xl text-amber-400/40 absolute top-4 right-4">
                        #{index === 0 ? "5" : index === 1 ? "4" : "3"}
                      </div>
                      <h3 className="font-silkscreen text-xl text-white mb-2 z-10 group-hover:text-amber-400 transition-colors">{item}</h3>
                      <div className="w-0 h-1 bg-amber-400 group-hover:w-full transition-all duration-500"></div>
                      <motion.div 
                        className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ height: 0 }}
                        whileHover={{ height: 'auto' }}
                      >
                        <Button variant="ghost" size="sm" className="px-0 text-amber-400 font-silkscreen">
                          DESCUBRIR
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturedContent;
