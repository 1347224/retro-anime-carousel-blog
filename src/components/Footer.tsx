
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-card/30">
      <div className="retro-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-retro-purple rounded-full"></div>
              <span className="font-pixel text-xl text-retro-purple">RetroAnime</span>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              A nostalgic journey through the golden era of 2000s anime, 
              celebrating the classics that defined a generation of fans.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'YouTube', 'Discord'].map((social) => (
                <a key={social} href="#" className="text-foreground/60 hover:text-retro-purple transition-colors">
                  {social}
                </a>  
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-foreground/70">
              {['Home', 'Anime Database', 'Blog', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-retro-purple transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-foreground/70">
              {['Classic Reviews', 'Studio Spotlights', 'Character Studies', 'Manga Origins', 'Animation Techniques'].map((category) => (
                <li key={category}>
                  <a href="#" className="hover:text-retro-purple transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
          <p>© 2025 RetroAnime. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="w-3 h-3 fill-retro-pink text-retro-pink" /> by a nostalgic fan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
