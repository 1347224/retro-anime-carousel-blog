
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from 'framer-motion';

const animes = [
  {
    id: 1,
    title: "Cowboy Bebop",
    year: "1998-1999",
    image: "https://images4.alphacoders.com/457/thumb-1920-45774.jpg",
    description: "Spike Spiegel and his crew aboard the spaceship Bebop chase bounties across the solar system in this genre-defining anime.",
    analysis: "Cowboy Bebop redefined anime with its unique blend of space western, noir, and jazz aesthetics. Director Shinichirō Watanabe created a series that transcends genre boundaries with its mature storytelling, complex character studies, and philosophical themes. The series explores existentialism, nihilism, and the human condition through its protagonists' struggles with their pasts. Yoko Kanno's iconic soundtrack, combining jazz, blues, and rock, creates an immersive atmosphere that enhances the emotional depth of each episode. Its episodic structure balanced with an overarching narrative allows both accessibility and profound character development. Cowboy Bebop remains a masterpiece that influenced countless western animations and stands as a perfect gateway anime for newcomers to the medium."
  },
  {
    id: 2,
    title: "Naruto",
    year: "2002-2007",
    image: "https://images.alphacoders.com/473/thumb-1920-473144.jpg",
    description: "Follow the journey of Naruto Uzumaki, a young ninja seeking recognition from his peers and dreaming of becoming the Hokage.",
    analysis: "Naruto revolutionized the shonen genre with its compelling coming-of-age story and intricate world-building. Masashi Kishimoto created a ninja universe with deep cultural and philosophical foundations while addressing universal themes of friendship, sacrifice, and perseverance. The series stands out for its well-developed character progression, especially Naruto's journey from outcast to hero. Its unique chakra system and spectacular jutsu battles established new standards for action sequences in anime. The series tackles complex themes including cycles of hatred, nature vs. nurture, and finding one's purpose. Despite occasional pacing issues, Naruto's emotional impact and cultural significance make it an essential watch for understanding the evolution of modern anime storytelling."
  },
  {
    id: 3,
    title: "Bleach",
    year: "2004-2012",
    image: "https://images4.alphacoders.com/259/thumb-1920-259316.jpg",
    description: "Ichigo Kurosaki gains the powers of a Soul Reaper and takes on the duty to defend humans from evil spirits and guide souls to the afterlife.",
    analysis: "Bleach distinguished itself in the competitive shonen landscape through Tite Kubo's distinctive art style and character designs. The series masterfully blends supernatural elements with Japanese folklore, creating a unique afterlife mythology. Its sword-based combat system, Bankai transformations, and power scaling provided fresh takes on traditional shonen battles. The Soul Society arc is widely regarded as one of the greatest story arcs in anime history, delivering perfect pacing, surprising plot twists, and meaningful character development. Bleach excels at balancing its large cast of characters while maintaining individual motivations and growth. The series' exploration of mortality, duty, and identity, combined with its stylish aesthetic and memorable soundtrack, continues to influence modern anime and remains essential viewing for fans of supernatural action series."
  },
  {
    id: 4,
    title: "Fullmetal Alchemist",
    year: "2003-2004",
    image: "https://images5.alphacoders.com/857/thumb-1920-857564.jpg",
    description: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
    analysis: "Fullmetal Alchemist stands as one of anime's most profound works, exploring complex ethical dilemmas through its ingenious concept of Equivalent Exchange. The series masterfully balances action, political intrigue, and philosophical questions while maintaining an emotionally resonant core focused on the Elric brothers' journey. Its intricate plot addresses imperialism, military ethics, religious dogma, and scientific responsibility with remarkable nuance. The series' unique approach to alchemy creates a magic system with clear rules and consequences, allowing for creative problem-solving rather than power escalation. Both the 2003 adaptation and Brotherhood (2009) offer distinct storytelling approaches to the manga material, with the former exploring more psychological themes while the latter delivers faithful adaptation with improved animation. Fullmetal Alchemist remains essential viewing for its perfect blend of thoughtful themes, memorable characters, and compelling narrative."
  }
];

const AnimeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => (current === animes.length - 1 ? 0 : current + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((current) => (current === 0 ? animes.length - 1 : current - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const gotoSlide = (index: number) => {
    if (animating || index === activeIndex) return;
    setAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="anime" className="py-10">
      <div className="retro-container">
        <h2 className="retro-title text-3xl md:text-4xl mb-2 text-center">Iconic 2000s Anime</h2>
        <p className="text-foreground/70 mb-10 text-center">Relive the golden era with these classic series</p>

        <div className="relative glowing-border min-h-[500px] md:min-h-[600px] crt-screen bg-gradient-to-r from-black via-slate-900 to-black overflow-hidden">
          {/* Decorative elements for immersive design */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-retro-purple/20 filter blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-retro-orange/20 filter blur-3xl"></div>
          
          <div ref={carouselRef} className="relative w-full h-full">
            {animes.map((anime, index) => (
              <AnimatePresence key={anime.id}>
                <motion.div 
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex flex-col md:flex-row ${
                    index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={index === activeIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="w-full md:w-1/2 h-60 md:h-auto relative overflow-hidden">
                    <motion.img 
                      src={anime.image} 
                      alt={anime.title} 
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 8 }}
                    />
                    <div className="absolute top-2 left-2 bg-retro-purple/80 text-white px-3 py-1 text-sm font-pixel">
                      {anime.year}
                    </div>
                    {/* Decorative scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
                  </div>
                  <div className="w-full md:w-1/2 p-6 md:p-10 bg-gradient-to-br from-slate-900/95 to-slate-800/80 flex flex-col justify-center relative">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-4 retro-gradient-text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {anime.title}
                    </motion.h3>
                    <motion.p 
                      className="text-foreground/80 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      {anime.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <Button 
                        className="retro-button self-start"
                        onClick={() => setOpenDialog(true)}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                    
                    {/* Indicators moved to bottom */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 mt-8">
                      {animes.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-4 h-4 rounded-full transition-all transform ${
                            idx === activeIndex 
                              ? 'bg-retro-purple scale-125' 
                              : 'bg-white/30 scale-100 hover:bg-white/50'
                          }`}
                          onClick={() => gotoSlide(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-black/40 text-white rounded-full hover:bg-black/60 hover:scale-110 transition-all"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-black/40 text-white rounded-full hover:bg-black/60 hover:scale-110 transition-all"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      {/* Popup Dialog for detailed analysis */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-gradient-to-br from-slate-900 to-slate-950 border-retro-purple/30 max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-pixel text-retro-purple text-2xl">
              {animes[activeIndex]?.title} - Analysis
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative">
            <img 
              src={animes[activeIndex]?.image} 
              alt={animes[activeIndex]?.title} 
              className="w-full h-48 object-cover rounded-md mb-4 opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>
          
          <DialogDescription className="text-foreground/90 font-vt323 text-lg space-y-4">
            <p>{animes[activeIndex]?.analysis}</p>
          </DialogDescription>
          
          <DialogClose asChild>
            <Button variant="outline" className="absolute top-2 right-2 border-none hover:bg-transparent hover:opacity-70">
              <X className="w-5 h-5" />
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AnimeCarousel;
