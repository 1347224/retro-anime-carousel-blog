
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface TopAnimeCardProps {
  rank: number;
  title: string;
  year: string;
  impact: string;
  legacy: string;
  imageUrl?: string;
}

const TopAnimeCard = ({ rank, title, year, impact, legacy, imageUrl }: TopAnimeCardProps) => {
  const [open, setOpen] = useState(false);

  // Generate a placeholder image if none provided
  const imageSrc = imageUrl || `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&fit=crop`;

  return (
    <>
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="bg-gradient-to-b from-green-900/20 to-background rounded-lg overflow-hidden border-2 border-green-500/30 shadow-lg w-[280px] h-[300px] relative">
          <div className="h-[160px] overflow-hidden">
            <motion.img 
              src={imageSrc} 
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-3 left-3">
              <Badge className={`font-bold text-lg ${
                rank === 1 
                ? "bg-yellow-400 hover:bg-yellow-500 text-black" 
                : rank === 2 
                  ? "bg-gray-400 hover:bg-gray-500 text-black"
                  : rank === 3
                    ? "bg-amber-700 hover:bg-amber-800 text-white"
                    : "bg-green-700 hover:bg-green-800 text-white"
              }`}>
                #{rank}
              </Badge>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-silkscreen font-bold text-lg text-green-400 mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground font-vt323">
              {year}
            </p>
            <div className="mt-4 flex justify-end">
              <Badge variant="outline" className="text-xs animate-pulse">
                Ver impacto y legado
              </Badge>
            </div>
          </div>
        </div>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl bg-gradient-to-b from-green-950/30 to-background border-green-500/30">
          <DialogHeader>
            <DialogTitle className="font-silkscreen font-bold text-2xl text-green-400 flex items-center">
              <span className="mr-2">#{rank}</span>
              {title} <span className="ml-2 text-sm text-muted-foreground">({year})</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <img 
                src={imageSrc} 
                alt={title}
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-silkscreen text-lg text-green-400 mb-2">
                  Impacto
                </h4>
                <p className="font-vt323 text-lg leading-relaxed">
                  {impact}
                </p>
              </div>
              
              <div>
                <h4 className="font-silkscreen text-lg text-green-400 mb-2">
                  Legado
                </h4>
                <p className="font-vt323 text-lg leading-relaxed">
                  {legacy}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TopAnimeCard;
