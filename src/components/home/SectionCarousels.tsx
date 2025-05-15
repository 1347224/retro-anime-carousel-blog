
import { motion } from "framer-motion";
import AnimeCarousel from "@/components/AnimeCarousel";
import FeaturedNewsCarousel from "@/components/FeaturedNewsCarousel";
import { useRef } from "react";
import { useInView } from "framer-motion";

const SectionCarousels = () => {
  const newsRef = useRef(null);
  const animeRef = useRef(null);
  const isNewsInView = useInView(newsRef, { once: true, amount: 0.3 });
  const isAnimeInView = useInView(animeRef, { once: true, amount: 0.3 });

  // Animación para elementos al entrar en viewport
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  // Efectos decorativos
  const glowElements = Array(5).fill(0);

  return (
    <>
      {/* Featured News Carousel Section */}
      <section 
        ref={newsRef}
        className="py-16 relative bg-gradient-to-r from-indigo-900/40 via-background to-indigo-900/40 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {glowElements.map((_, index) => (
            <motion.div
              key={`news-glow-${index}`}
              className="absolute w-40 h-40 rounded-full bg-retro-purple/10 filter blur-3xl"
              initial={{ 
                x: Math.random() * 100, 
                y: Math.random() * 100,
                opacity: 0.2 + Math.random() * 0.3
              }}
              animate={{ 
                x: [
                  Math.random() * 100, 
                  Math.random() * 100 + 50, 
                  Math.random() * 100
                ], 
                y: [
                  Math.random() * 100, 
                  Math.random() * 100 - 50, 
                  Math.random() * 100
                ],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
              }}
            />
          ))}
          
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="retro-container relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isNewsInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <div className="px-6 py-2 bg-retro-purple/20 rounded-full mb-4 inline-block border border-retro-purple/30 backdrop-blur-sm">
                <h2 className="font-pixel text-3xl md:text-4xl text-retro-purple glow-text-purple">ÚLTIMA HORA</h2>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto font-vt323 text-foreground/90"
            >
              Lo más fresco del mundo del anime retro. Noticias, eventos y lanzamientos que no puedes perderte.
              Mantente al día con todas las novedades del universo retro anime.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isNewsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-retro-purple via-retro-pink to-retro-orange rounded-lg opacity-75 blur-sm z-0"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
            <div className="relative z-10">
              <FeaturedNewsCarousel />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Anime Carousel */}
      <section 
        ref={animeRef}
        className="py-16 theme-home relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {glowElements.map((_, index) => (
            <motion.div
              key={`anime-glow-${index}`}
              className="absolute w-40 h-40 rounded-full bg-retro-orange/10 filter blur-3xl"
              initial={{ 
                x: Math.random() * 100, 
                y: Math.random() * 100,
                opacity: 0.2 + Math.random() * 0.3
              }}
              animate={{ 
                x: [
                  Math.random() * 100, 
                  Math.random() * 100 + 50, 
                  Math.random() * 100
                ], 
                y: [
                  Math.random() * 100, 
                  Math.random() * 100 - 50, 
                  Math.random() * 100
                ],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
              }}
            />
          ))}
          
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, rgba(247, 148, 30, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(247, 148, 30, 0.03) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}></div>
        </div>
        
        <div className="retro-container relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isAnimeInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <div className="px-6 py-2 bg-retro-orange/20 rounded-full mb-4 inline-block border border-retro-orange/30 backdrop-blur-sm">
                <h2 className="font-pixel text-3xl md:text-4xl text-retro-orange glow-text-orange">VIAJA AL PASADO</h2>
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto font-vt323 text-foreground/90"
            >
              Explora nuestra colección de animes retro icónicos que definieron toda una era. 
              Sumérgete en la nostalgia y redescubre las joyas que marcaron la historia de la animación japonesa.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isAnimeInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-retro-orange via-amber-400 to-yellow-300 rounded-lg opacity-75 blur-sm z-0"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                repeatType: "reverse" 
              }}
            />
            <div className="relative z-10">
              <AnimeCarousel />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SectionCarousels;
