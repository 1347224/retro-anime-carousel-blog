
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden crt-screen">
      {/* Background graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-retro-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-[40%] right-[15%] w-60 h-60 bg-retro-pink/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[20%] w-40 h-40 bg-retro-orange/20 rounded-full filter blur-3xl"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, rgba(155, 135, 245, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(155, 135, 245, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          perspectiveOrigin: 'center center',
          perspective: '500px',
          transform: 'rotateX(60deg)'
        }}></div>
      </div>

      <div className="retro-container relative z-10">
        <div className="max-w-2xl">
          <h1 className="retro-title text-4xl md:text-6xl mb-4">
            Retro Anime
            <span className="block">Time Machine</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Journey through the golden era of 2000s anime, reliving nostalgia 
            and rediscovering classics that shaped a generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="retro-button">Explore Classics</Button>
            <Button variant="outline" className="border-retro-purple text-retro-purple hover:bg-retro-purple/10">
              Latest Articles
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-retro-pink/50 rounded-full 
                     animate-float opacity-70 hidden md:block"></div>
      <div className="absolute top-20 right-20 w-10 h-10 border-2 border-retro-orange/50 rounded-full 
                     animate-float opacity-70 hidden md:block" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default HeroSection;
