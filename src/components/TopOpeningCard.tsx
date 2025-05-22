
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface TopOpeningCardProps {
  rank: number;
  title: string;
  anime: string;
  year: string;
  description: string;
  videoUrl?: string;
}

const TopOpeningCard = ({ rank, title, anime, year, description, videoUrl }: TopOpeningCardProps) => {
  const [open, setOpen] = useState(false);

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
        <div className="bg-gradient-to-b from-red-900/20 to-background rounded-lg overflow-hidden border-2 border-red-500/30 shadow-lg w-[380px] h-[340px] relative">
          <div className="h-[180px] overflow-hidden">
            {/* Placeholder image - in a real app, we would have unique images */}
            <motion.img 
              src={`sd`} 
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-3 left-3">
              <Badge className="font-bold text-lg bg-red-500 hover:bg-red-600 text-white">
                #{rank}
              </Badge>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-silkscreen font-bold text-xl text-red-400 mb-2 line-clamp-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {anime} ({year})
            </p>
            <p className="font-vt323 text-sm line-clamp-3">
              {description}
            </p>
          </div>
          
          <div className="absolute bottom-3 right-3">
            <Badge variant="outline" className="animate-pulse">
              Ver detalles
            </Badge>
          </div>
        </div>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl bg-gradient-to-b from-red-950/30 to-background border-red-500/30">
          <DialogHeader>
            <DialogTitle className="font-silkscreen font-bold text-2xl text-red-400 flex items-center">
              <span className="mr-2">#{rank}</span>
              {title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="relative pb-[56.25%] bg-black rounded-md overflow-hidden mb-6">
              {videoUrl ? (
                <iframe 
                  src={videoUrl}
                  className="absolute top-0 left-0 w-full h-full" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={`${title} - ${anime} Opening`}
                />
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/80 text-white">
                  <p className="font-vt323 text-xl">Video no disponible</p>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-silkscreen text-lg text-red-400 mb-2">
                  {anime} ({year})
                </h4>
                <p className="font-vt323 text-lg leading-relaxed">
                  {description}
                </p>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Un clásico de la animación</p>
                <Badge className="bg-red-500 hover:bg-red-600 text-white">
                  Top #{rank}
                </Badge>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TopOpeningCard;
