
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

const featuredNews: NewsItem[] = [
  {
    id: 1,
    title: "Nuevo anime de Evangelion anunciado para 2026",
    date: "2025-04-30",
    excerpt: "Studio Khara ha confirmado una nueva serie centrada en el universo de Evangelion.",
    image: "https://wallpapercave.com/wp/wp8493329.jpg",
    category: "Anuncios"
  },
  {
    id: 2,
    title: "Studio Ghibli abrirá museo virtual en metaverso",
    date: "2025-04-25",
    excerpt: "Los fans podrán visitar recreaciones de los mundos de Miyazaki en esta experiencia inmersiva.",
    image: "https://wallpapercave.com/wp/wp2055835.jpg",
    category: "Tecnología"
  },
  {
    id: 3,
    title: "Se confirma adaptación live-action de Sailor Moon",
    date: "2025-04-20",
    excerpt: "Netflix producirá la primera adaptación occidental de la icónica serie de los 90.",
    image: "https://wallpapercave.com/wp/wp9697349.jpg",
    category: "Adaptaciones"
  }
];

const FeaturedNewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  // Filter out any potentially undefined items
  const safeNewsList = featuredNews.filter(item => 
    item && 
    item.id && 
    item.title && 
    item.date && 
    item.excerpt && 
    item.image && 
    item.category
  );

  const nextSlide = () => {
    if (animating || !safeNewsList.length) return;
    setAnimating(true);
    setActiveIndex((current) => (current === safeNewsList.length - 1 ? 0 : current + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating || !safeNewsList.length) return;
    setAnimating(true);
    setActiveIndex((current) => (current === 0 ? safeNewsList.length - 1 : current - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (safeNewsList.length > 1) {
        nextSlide();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Guard against empty news list
  if (!safeNewsList.length) {
    return null;
  }

  return (
    <div className="relative overflow-hidden crt-screen rounded-lg border-2 border-retro-purple/30">
      <div className="absolute top-0 left-0 z-10 bg-gradient-to-r from-retro-purple/30 to-transparent py-2 px-4 rounded-br-lg">
        <span className="font-pixel text-sm md:text-base text-white">NOTICIAS DESTACADAS</span>
      </div>
      
      {safeNewsList.map((news, index) => (
        <motion.div
          key={news.id}
          className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === activeIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${news.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-2"
              >
                <span className="bg-retro-purple/80 text-white px-2 py-1 rounded text-sm font-silkscreen">
                  {news.category}
                </span>
              </motion.div>
              
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl md:text-3xl font-bold mb-2 text-white font-pixel"
              >
                {news.title}
              </motion.h3>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-white/80 mb-4 font-vt323 text-lg"
              >
                {news.excerpt}
              </motion.p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link to="/noticias">
                  <Button className="retro-button font-silkscreen">
                    LEER MÁS
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {safeNewsList.length > 1 && (
        <>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/30 text-white rounded-full hover:bg-black/50"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/30 text-white rounded-full hover:bg-black/50"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {safeNewsList.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-retro-purple' : 'bg-white/50'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedNewsCarousel;
