
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TopMechaAnimes from "@/components/TopMechaAnimes";

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
            {featuredReviews.map((review) => (
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
            {featuredCuriosities.map((item) => (
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

      {/* Top Mecha Animes Section */}
      <section className="py-12 theme-toplist bg-gradient-to-r from-amber-900/20 via-background to-amber-900/20">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-4 space-x-4"
          >
            <h2 className="font-silkscreen text-2xl md:text-3xl text-amber-400">TOP 5 MECHA ANIMES DE LOS 90s</h2>
            <div className="h-px bg-border flex-grow"></div>
            <Link to="/top-list" className="text-sm font-medium text-amber-400 flex items-center hover:underline font-silkscreen">
              VER MÁS
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <TopMechaAnimes />
        </div>
      </section>

      {/* Featured Top List */}
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
            <Link to="/top-list" className="text-sm font-medium text-amber-400 flex items-center hover:underline font-silkscreen">
              VER TODAS
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/top-list">
              <Card className="border-2 border-amber-400/30 theme-toplist-card">
                <CardHeader>
                  <CardTitle className="font-pixel text-amber-400">{featuredTopList.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2 font-vt323 text-lg">
                    {featuredTopList.items.map((item, index) => (
                      <li key={index} className={`${index === 0 ? 'text-yellow-400 font-semibold font-silkscreen' : 'font-vt323'}`}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10 font-silkscreen">
                    VER LISTA COMPLETA
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturedContent;
