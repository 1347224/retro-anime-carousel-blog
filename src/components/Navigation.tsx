
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="retro-container flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-retro-purple rounded-full animate-pulse"></div>
          <span className="font-pixel text-lg text-retro-purple">RetroAnime</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Anime', 'Blog', 'Gallery', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-foreground hover:text-retro-purple transition-colors">
              {item}
            </a>
          ))}
          <Button className="retro-button">Subscribe</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-card border-b border-border">
          <div className="retro-container py-4 space-y-4">
            {['Home', 'Anime', 'Blog', 'Gallery', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-foreground hover:text-retro-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="retro-button w-full">Subscribe</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
