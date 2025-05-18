
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AnimeCarousel from "@/components/AnimeCarousel";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Lightbulb, Award, ArrowRight } from "lucide-react";

const Index = () => {
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

  // Featured content from other sections
  const featuredReviews = [
    {
      id: 1,
      title: "Akira",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      excerpt: "Obra maestra del cyberpunk que revolucionó la animación japonesa.",
      rating: 5
    },
    {
      id: 2,
      title: "Ghost in the Shell",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      excerpt: "Reflexión filosófica sobre la identidad en la era digital.",
      rating: 5
    }
  ];

  const featuredCuriosities = [
    {
      id: 1,
      title: "Evangelion: Depresión Creativa",
      category: "Behind the Scenes",
      excerpt: "Hideaki Anno creó la serie mientras luchaba contra una severa depresión."
    },
    {
      id: 2,
      title: "Referencias Culturales en Evangelion",
      category: "Easter Eggs",
      excerpt: "La serie está repleta de simbolismo religioso y referencias culturales."
    }
  ];

  const featuredTopList = {
    title: "Top 5 Mecha Animes de los 90s",
    items: ["Neon Genesis Evangelion", "Mobile Suit Gundam", "Tengen Toppa Gurren Lagann", "Code Geass", "Macross Plus"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-purple-900/10">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Anime Carousel */}
      <section className="py-12 bg-gradient-to-r from-indigo-900/20 via-background to-indigo-900/20">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl text-retro-purple mb-4">Viaja al Pasado</h2>
            <p className="text-lg max-w-2xl mx-auto">Explora nuestra colección de animes retro icónicos que definieron toda una era.</p>
          </motion.div>
          
          <AnimeCarousel />
        </div>
      </section>
      
      {/* Featured Reviews */}
      <section className="py-12">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 space-x-4"
          >
            <div className="flex items-center space-x-3">
              <BookOpen className="text-retro-purple h-6 w-6" />
              <h2 className="font-pixel text-2xl md:text-3xl">Reseñas Destacadas</h2>
            </div>
            <div className="h-px bg-border flex-grow"></div>
            <Link to="/resenas" className="text-sm font-medium text-retro-purple flex items-center hover:underline">
              Ver todas
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
              <motion.div key={review.id} variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <Link to="/resenas">
                  <Card className="overflow-hidden border-2 border-retro-purple/30 h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={review.image} 
                        alt={review.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-pixel text-retro-purple">{review.title}</CardTitle>
                      <CardDescription className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>{review.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Curiosities */}
      <section className="py-12 bg-gradient-to-r from-blue-900/20 via-background to-blue-900/20">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 space-x-4"
          >
            <div className="flex items-center space-x-3">
              <Lightbulb className="text-blue-500 h-6 w-6" />
              <h2 className="font-pixel text-2xl md:text-3xl">Curiosidades</h2>
            </div>
            <div className="h-px bg-border flex-grow"></div>
            <Link to="/curiosidades" className="text-sm font-medium text-blue-500 flex items-center hover:underline">
              Ver todas
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
              <motion.div key={item.id} variants={itemVariants} whileHover={{ scale: 1.02 }}>
                <Link to="/curiosidades">
                  <Card className="h-full border-2 border-blue-500/30 bg-gradient-to-br from-card to-blue-900/10">
                    <CardHeader className="pb-2">
                      <CardTitle className="font-pixel text-blue-500">{item.title}</CardTitle>
                      <CardDescription>{item.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{item.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" className="text-blue-500">
                        Leer más
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

      {/* Featured Top List */}
      <section className="py-12">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-8 space-x-4"
          >
            <div className="flex items-center space-x-3">
              <Award className="text-amber-400 h-6 w-6" />
              <h2 className="font-pixel text-2xl md:text-3xl">Top Lists</h2>
            </div>
            <div className="h-px bg-border flex-grow"></div>
            <Link to="/top-list" className="text-sm font-medium text-amber-400 flex items-center hover:underline">
              Ver todas
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <Link to="/top-list">
              <Card className="border-2 border-amber-400/30 bg-gradient-to-br from-card to-amber-900/10">
                <CardHeader>
                  <CardTitle className="font-pixel text-amber-400">{featuredTopList.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    {featuredTopList.items.map((item, index) => (
                      <li key={index} className={`${index === 0 ? 'text-yellow-400 font-semibold' : ''}`}>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="border-amber-400/30 text-amber-400 hover:bg-amber-400/10">
                    Ver lista completa
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-retro-purple/20 via-background to-retro-purple/20">
        <div className="retro-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="pixelated-border p-1 mb-6 inline-block">
              <div className="h-12 w-12 bg-retro-purple rounded-full mx-auto animate-pulse"></div>
            </div>
            <h2 className="font-pixel text-3xl md:text-4xl text-retro-purple mb-4">¡Únete a la comunidad RetroAnime!</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">Forma parte de nuestra comunidad de amantes del anime retro donde compartimos recuerdos, análisis y celebramos la época dorada de la animación japonesa.</p>
            <Button className="retro-button text-lg px-8 py-6">Suscríbete a la Newsletter</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
