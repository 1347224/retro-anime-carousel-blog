
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const animes = [
  {
    id: 1,
    title: "Cowboy Bebop",
    year: "1998-1999",
    image: "https://wallpapercave.com/wp/wp2755868.jpg",
    description: "Spike Spiegel and his crew aboard the spaceship Bebop chase bounties across the solar system in this genre-defining anime."
  },
  {
    id: 2,
    title: "Naruto",
    year: "2002-2007",
    image: "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    description: "Follow the journey of Naruto Uzumaki, a young ninja seeking recognition from his peers and dreaming of becoming the Hokage."
  },
  {
    id: 3,
    title: "Bleach",
    year: "2004-2012",
    image: "https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    description: "Ichigo Kurosaki gains the powers of a Soul Reaper and takes on the duty to defend humans from evil spirits and guide souls to the afterlife."
  },
  {
    id: 4,
    title: "Fullmetal Alchemist",
    year: "2003-2004",
    image: "https://wallpapercave.com/wp/wp3276734.jpg",
    description: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment."
  }
];

const AnimeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="anime" className="py-20">
      <div className="retro-container">
        <h2 className="retro-title text-3xl md:text-4xl mb-2">Iconic 2000s Anime</h2>
        <p className="text-foreground/70 mb-10">Relive the golden era with these classic series</p>

        <div className="relative glowing-border min-h-[400px] crt-screen">
          {animes.map((anime, index) => (
            <div 
              key={anime.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex flex-col md:flex-row ${
                index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="w-full md:w-1/2 h-60 md:h-auto relative">
                <img 
                  src={anime.image} 
                  alt={anime.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-retro-purple/80 text-white px-3 py-1 text-sm font-pixel">
                  {anime.year}
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 bg-card flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 retro-gradient-text">{anime.title}</h3>
                <p className="text-foreground/80 mb-6">{anime.description}</p>
                <Button className="retro-button self-start">Learn More</Button>
              </div>
            </div>
          ))}

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
            {animes.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-retro-purple' : 'bg-white/50'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimeCarousel;
