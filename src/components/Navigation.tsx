
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterForm from '@/components/NewsletterForm';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Reseñas', path: '/resenas' },
    { name: 'Curiosidades', path: '/curiosidades' },
    { name: 'Top List', path: '/top-list' },
    { name: 'Noticias', path: '/noticias' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="retro-container flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-retro-purple rounded-full animate-pulse"></div>
          <span className="font-silkscreen text-lg text-retro-purple">RetroAnime</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="font-silkscreen text-foreground hover:text-retro-purple transition-colors group"
            >
              <span className="relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-retro-purple transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}
          <Button 
            className="retro-button font-silkscreen"
            onClick={() => setIsNewsletterOpen(true)}
          >
            Subscribe
          </Button>
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
        <div className="md:hidden absolute w-full bg-card/90 backdrop-blur-md border-b border-border rounded-b-lg">
          <div className="retro-container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-silkscreen block text-foreground hover:text-retro-purple transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>{item.name}</span>
              </Link>
            ))}
            <Button 
              className="retro-button font-silkscreen w-full"
              onClick={() => {
                setIsOpen(false);
                setIsNewsletterOpen(true);
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      )}

      {/* Newsletter Form Dialog */}
      <NewsletterForm open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen} />
    </nav>
  );
};

export default Navigation;
