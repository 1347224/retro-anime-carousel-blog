
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import TopOpeningCard from "@/components/TopOpeningCard";
import TopAnimeCard from "@/components/TopAnimeCard";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const TopList = () => {
  const containerRef = useRef(null);
  const mechaSection = useRef<HTMLElement>(null);
  const location = useLocation();
  const [autoPlayOpenings, setAutoPlayOpenings] = useState(true);
  const [autoPlayAnimes, setAutoPlayAnimes] = useState(true);

  useEffect(() => {
    // Handle direct navigation to the mecha animes section
    if (location.hash === '#mecha-animes' && mechaSection.current) {
      mechaSection.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);
  
  // Auto-play carousels
  useEffect(() => {
    let openingsInterval: NodeJS.Timeout;
    let animesInterval: NodeJS.Timeout;
    
    if (autoPlayOpenings) {
      openingsInterval = setInterval(() => {
        const nextButton = document.querySelector('.openings-carousel .carousel-next') as HTMLButtonElement | null;
        if (nextButton) nextButton.click();
      }, 5000);
    }
    
    if (autoPlayAnimes) {
      animesInterval = setInterval(() => {
        const nextButton = document.querySelector('.animes-carousel .carousel-next') as HTMLButtonElement | null;
        if (nextButton) nextButton.click();
      }, 7000);
    }
    
    return () => {
      clearInterval(openingsInterval);
      clearInterval(animesInterval);
    };
  }, [autoPlayOpenings, autoPlayAnimes]);

  const topMechaAnimes = [
    {
      rank: 1,
      title: "Neon Genesis Evangelion",
      year: "1995",
      image: "https://wallpapercave.com/wp/wp12710756.jpg",
      description: "Revolucionó el género mecha con su profundidad psicológica y su deconstrucción de los tropos del género. Sus EVAs son algunos de los diseños más icónicos del anime."
    },
    {
      rank: 2,
      title: "Mobile Suit Gundam",
      year: "1979",
      image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GKEH2G9XV-backdrop_wide",
      description: "La serie que estableció el realismo militar en el género mecha y dio inicio a una de las franquicias más extensas del anime."
    },
    {
      rank: 3,
      title: "Tengen Toppa Gurren Lagann",
      year: "2007",
      image: "https://wallpapercave.com/wp/NZjrHMj.jpg",
      description: "Una montaña rusa de acción sobre el top que celebra y lleva al extremo los tropos del género mecha con un estilo visual único."
    },
    {
      rank: 4,
      title: "Code Geass",
      year: "2006",
      image: "https://wallpapercave.com/wp/wp5972466.jpg",
      description: "Combina la política, estrategia y acción mecha en una narrativa compleja con uno de los finales más memorables del anime."
    },
    {
      rank: 5,
      title: "Macross Plus",
      year: "1994",
      image: "https://wallpapercave.com/wp/wp5042391.jpg",
      description: "Una obra maestra visual con increíbles secuencias de vuelo y transformación de mechas, complementada por la música de Yoko Kanno."
    }
  ];

  const topOpenings = [
    {
      rank: 1,
      title: "A Cruel Angel's Thesis",
      anime: "Neon Genesis Evangelion",
      year: "1995",
      description: "Un tema enérgico y pegadizo que contrasta con los temas oscuros de la serie. Se ha convertido en un himno de la cultura otaku.",
      videoUrl: "https://www.youtube.com/embed/nU21rCWkuJw"
      imageUrl: "https://preview.redd.it/r4qg02hmkoq71.jpg?vthumb=1&s=de886d51809f7e9aa441cd51f3a1dafe3caa058f"
    },
    {
      rank: 2,
      title: "Tank!",
      anime: "Cowboy Bebop",
      year: "1998",
      description: "Una explosiva introducción de jazz que captura perfectamente la esencia estilizada y cool de la serie.",
      videoUrl: "https://www.youtube.com/embed/EL-D9LrFJd4"
    },
    {
      rank: 3,
      title: "Sobakasu",
      anime: "Rurouni Kenshin",
      year: "1996",
      description: "Un tema de J-rock enérgico que combina perfectamente con la acción de la serie y se volvió emblemático de la época.",
      videoUrl: "https://www.youtube.com/embed/YvvlGma6COM"
    },
    {
      rank: 4,
      title: "Moonlight Densetsu",
      anime: "Sailor Moon",
      year: "1992",
      description: "Un opening que trasciende generaciones y ha sido versionado múltiples veces, manteniendo su encanto nostálgico.",
      videoUrl: "https://www.youtube.com/embed/LGQCPOMcYJQ"
    },
    {
      rank: 5,
      title: "Cha-La Head-Cha-La",
      anime: "Dragon Ball Z",
      year: "1989",
      description: "Posiblemente uno de los openings más reconocibles globalmente, que continúa siendo cantado por fans en todo el mundo.",
      videoUrl: "https://www.youtube.com/embed/cie7scVUdQE"
    }
  ];

  const animesThatDefinedGeneration = [
    {
      rank: 1,
      title: "Dragon Ball Z",
      year: "1989-1996",
      impact: "Globalizó el anime y se convirtió en un fenómeno cultural mundial. Introdujo a millones de personas al medio.",
      legacy: "Sus personajes, frases y escenas de batalla son referencias culturales inmediatas en todo el mundo.",
      imageUrl: "https://wallpapercave.com/wp/wp6341982.jpg"
    },
    {
      rank: 2,
      title: "Sailor Moon",
      year: "1992-1997",
      impact: "Redefinió el género magical girl y presentó heroínas fuertes que resonaron con audiencias de todos los géneros.",
      legacy: "Su estética y temas continúan influyendo en el anime y la cultura pop actual.",
      imageUrl: "https://images2.alphacoders.com/454/thumb-1920-454764.jpg"
    },
    {
      rank: 3,
      title: "Pokemon",
      year: "1997-presente",
      impact: "Trascendió el anime para convertirse en un fenómeno multimedia global que abarca juegos, cartas, juguetes y más.",
      legacy: "La franquicia más rentable de todos los tiempos, que continúa siendo relevante para nuevas generaciones.",
      imageUrl: "https://images7.alphacoders.com/592/thumb-1920-592678.jpg"
    },
    {
      rank: 4,
      title: "Neon Genesis Evangelion",
      year: "1995-1996",
      impact: "Revolucionó la narrativa y estética del anime con su deconstrucción del género mecha y exploración psicológica.",
      legacy: "Sentó las bases para un anime más experimental y psicológicamente complejo.",
      imageUrl: "https://images6.alphacoders.com/691/thumb-1920-691066.jpg"
    },
    {
      rank: 5,
      title: "Ghost in the Shell",
      year: "1995",
      impact: "Exploró temas filosóficos sobre la identidad humana en la era digital que siguen siendo relevantes.",
      legacy: "Su estética y temas influenciaron a toda una generación de creadores, incluyendo a los directores de Matrix.",
      imageUrl: "https://wallpapercave.com/wp/wp1843957.jpg"
    }
  ];

  return (
    <div className="min-h-screen theme-toplist text-foreground overflow-hidden">
      <Navigation />
      
      <div className="py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 retro-container"
        >
          <h1 className="font-pixel text-4xl md:text-5xl text-amber-400 mb-4">Top Lists</h1>
          <p className="text-lg max-w-2xl mx-auto font-vt323">Rankings temáticos de lo mejor del anime retro. Descubre joyas nostálgicas y revive clásicos que definieron toda una era dorada de la animación japonesa.</p>
        </motion.div>

        {/* Top Mecha Animes Section */}
        <section id="mecha-animes" ref={mechaSection} className="py-12 bg-gradient-to-r from-amber-900/20 via-background to-amber-900/20">
          <div className="retro-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-8 space-x-4"
            >
              <div className="h-1 flex-grow bg-gradient-to-r from-amber-400/20 to-amber-400"></div>
              <h2 className="font-pixel text-3xl text-amber-400 whitespace-nowrap">
                Top 5 Mecha Animes de los 90s
              </h2>
              <div className="h-1 flex-grow bg-gradient-to-l from-amber-400/20 to-amber-400"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {topMechaAnimes.map((anime, index) => (
                <motion.div
                  key={anime.rank}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="col-span-1"
                >
                  <div className={`h-full border-2 ${
                    index === 0 
                      ? "border-yellow-400/70 bg-yellow-400/10" 
                      : index === 1 
                        ? "border-gray-400/70 bg-gray-400/10"
                        : index === 2
                          ? "border-amber-700/70 bg-amber-700/10"
                          : "border-indigo-600/30 bg-indigo-600/5"
                  } rounded-lg overflow-hidden`}>
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                      <img 
                        src={anime.image} 
                        alt={anime.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-8 left-4 z-20">
                        <Badge className="font-bold text-lg bg-amber-400 hover:bg-amber-500 text-black">
                          #{anime.rank}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-silkscreen font-bold text-xl mb-2">
                        {anime.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{anime.year}</p>
                      <p className="text-sm font-vt323">{anime.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Openings Section - Now with carousel */}
        <section className="py-12">
          <div className="retro-container">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-12 space-x-4"
            >
              <div className="h-1 flex-grow bg-gradient-to-r from-red-500 to-red-500/20"></div>
              <h2 className="font-pixel text-3xl text-red-500 whitespace-nowrap">
                Los Openings Más Épicos
              </h2>
              <div className="h-1 flex-grow bg-gradient-to-l from-red-500 to-red-500/20"></div>
            </motion.div>
            
            <div className="openings-carousel">
              <Carousel className="w-full" 
                onMouseEnter={() => setAutoPlayOpenings(false)}
                onMouseLeave={() => setAutoPlayOpenings(true)}
              >
                <CarouselContent className="-ml-4">
                  {topOpenings.map((opening) => (
                    <CarouselItem key={opening.rank} className="pl-4 md:basis-1/3">
                      <TopOpeningCard
                        rank={opening.rank}
                        title={opening.title}
                        anime={opening.anime}
                        year={opening.year}
                        description={opening.description}
                        videoUrl={opening.videoUrl}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="carousel-prev -left-4 lg:-left-12 bg-red-500/20 hover:bg-red-500/40 border-red-500/30 text-red-400" />
                <CarouselNext className="carousel-next -right-4 lg:-right-12 bg-red-500/20 hover:bg-red-500/40 border-red-500/30 text-red-400" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Animes That Defined A Generation - Now with carousel */}
        <section className="py-12 bg-gradient-to-r from-purple-900/20 via-background to-purple-900/20">
          <div className="retro-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-8 space-x-4"
            >
              <div className="h-1 flex-grow bg-gradient-to-r from-green-500/20 to-green-500"></div>
              <h2 className="font-pixel text-3xl text-green-500 whitespace-nowrap">
                Animes Que Definieron Una Generación
              </h2>
              <div className="h-1 flex-grow bg-gradient-to-l from-green-500/20 to-green-500"></div>
            </motion.div>
            
            <div className="animes-carousel">
              <Carousel className="w-full"
                onMouseEnter={() => setAutoPlayAnimes(false)}
                onMouseLeave={() => setAutoPlayAnimes(true)}
              >
                <CarouselContent className="-ml-4">
                  {animesThatDefinedGeneration.map((anime) => (
                    <CarouselItem key={anime.rank} className="pl-6 md:basis-1/3">
                      <TopAnimeCard
                        rank={anime.rank}
                        title={anime.title}
                        year={anime.year}
                        impact={anime.impact}
                        legacy={anime.legacy}
                        imageUrl={anime.imageUrl}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="carousel-prev -left-4 lg:-left-12 bg-green-500/20 hover:bg-green-500/40 border-green-500/30 text-green-400" />
                <CarouselNext className="carousel-next -right-4 lg:-right-12 bg-green-500/20 hover:bg-green-500/40 border-green-500/30 text-green-400" />
              </Carousel>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default TopList;
