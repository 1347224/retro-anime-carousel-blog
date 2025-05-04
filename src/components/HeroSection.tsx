
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" }
    })
  };

  return (
    <div 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden crt-screen"
      ref={ref}
    >
      {/* Parallax Layers */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: backgroundY }}
      >
        {/* Background stars */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-30"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-[10%] left-[10%] w-64 h-64 bg-retro-purple/20 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-[20%] right-[15%] w-80 h-80 bg-retro-pink/20 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-[40%] right-[25%] w-40 h-40 bg-retro-orange/20 rounded-full filter blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 50, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity
          }}
        ></motion.div>
        
        {/* Grid lines with perspective effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, rgba(155, 135, 245, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(155, 135, 245, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          perspectiveOrigin: 'center center',
          perspective: '500px',
          transform: 'rotateX(60deg)'
        }}></div>
      </motion.div>

      <motion.div 
        className="retro-container relative z-10"
        style={{ y: textY, opacity }}
      >
        <motion.div 
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={fadeInVariants}
            custom={0}
          >
            <h1 className="retro-title text-5xl md:text-7xl mb-2 leading-tight">
              RETRO ANIME
              <span className="block">TIME MACHINE</span>
            </h1>
          </motion.div>
          
          <motion.div
            variants={fadeInVariants}
            custom={1}
          >
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-vt323">
              Viaja al pasado y revive la época dorada del anime de los 90s y 2000s. 
              Donde la nostalgia y los clásicos te esperan.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInVariants}
            custom={2}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button className="retro-button text-lg px-8 py-6 font-silkscreen" asChild>
              <Link to="/resenas">EXPLORAR CLÁSICOS</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-retro-purple text-retro-purple hover:bg-retro-purple/10 text-lg px-8 py-6 font-silkscreen"
              asChild
            >
              <Link to="/noticias">ÚLTIMAS NOTICIAS</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-20 h-20 border-2 border-retro-pink/50 rounded-full opacity-70 hidden md:block"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-[20%] right-[20%] w-10 h-10 border-2 border-retro-orange/50 rounded-full opacity-70 hidden md:block"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.7, 0.4, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute top-[40%] left-[15%] w-16 h-16 border-2 border-retro-purple/50 rounded-full opacity-70 hidden md:block"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.7, 0.2, 0.7]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
