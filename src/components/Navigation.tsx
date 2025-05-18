
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, BookOpen, Lightbulb, Award, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', path: '/', icon: <Menu className="h-4 w-4 mr-2" /> },
    { name: 'Reseñas', path: '/resenas', icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { name: 'Curiosidades', path: '/curiosidades', icon: <Lightbulb className="h-4 w-4 mr-2" /> },
    { name: 'Top List', path: '/top-list', icon: <Award className="h-4 w-4 mr-2" /> },
    { name: 'Noticias', path: '/noticias', icon: <Newspaper className="h-4 w-4 mr-2" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="retro-container flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-retro-purple rounded-full animate-pulse"></div>
          <span className="font-pixel text-lg text-retro-purple">RetroAnime</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center text-foreground hover:text-retro-purple transition-colors group"
            >
              {item.icon}
              <span className="relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-retro-purple transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center text-foreground hover:text-retro-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
            <Button className="retro-button w-full">Subscribe</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
