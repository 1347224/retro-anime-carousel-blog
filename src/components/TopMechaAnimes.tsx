
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

interface MechaAnime {
  id: number;
  title: string;
  image: string;
  year: string;
}

const TopMechaAnimes = () => {
  const mechaAnimes: MechaAnime[] = [
    {
      id: 1,
      title: "Neon Genesis Evangelion",
      image: "https://wallpapercave.com/wp/wp12710756.jpg",
      year: "1995"
    },
    {
      id: 2,
      title: "Mobile Suit Gundam",
      image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GKEH2G9XV-backdrop_wide",
      year: "1979"
    },
    {
      id: 3,
      title: "Tengen Toppa Gurren Lagann",
      image: "https://wallpapercave.com/wp/NZjrHMj.jpg",
      year: "2007"
    },
    {
      id: 4,
      title: "Code Geass",
      image: "https://wallpapercave.com/wp/wp5972466.jpg",
      year: "2006"
    },
    {
      id: 5,
      title: "Macross Plus",
      image: "https://wallpapercave.com/wp/wp5042391.jpg",
      year: "1994"
    }
  ];

  return (
    <div className="overflow-hidden px-4">
      <motion.div 
        className="flex gap-4 md:gap-6 overflow-x-auto py-6 px-1 hide-scrollbar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {mechaAnimes.map((anime, index) => (
          <motion.div
            key={anime.id}
            className="w-64 flex-shrink-0"
            initial={{ opacity: 0, x: 50 * index }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className={`h-full border-2 ${
                index === 0 
                  ? "border-yellow-400/70 bg-yellow-400/10" 
                  : index === 1 
                    ? "border-gray-400/70 bg-gray-400/10"
                    : index === 2
                      ? "border-amber-700/70 bg-amber-700/10"
                      : "border-indigo-600/30 bg-indigo-600/5"
              } overflow-hidden`}>
                <div className="relative">
                  <AspectRatio ratio={16/9} className="overflow-hidden">
                    <motion.img 
                      src={anime.image} 
                      alt={anime.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AspectRatio>
                  
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 z-10">
                    <Badge className={`font-bold ${
                      index === 0 
                        ? "bg-yellow-400 hover:bg-yellow-500 text-black" 
                        : index === 1 
                          ? "bg-gray-400 hover:bg-gray-500 text-black"
                          : index === 2
                            ? "bg-amber-700 hover:bg-amber-800 text-white"
                            : "bg-indigo-600 hover:bg-indigo-700"
                    }`}>
                      #{index + 1}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-1">
                    <h3 className="font-silkscreen text-lg font-bold tracking-tight leading-tight">
                      {anime.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{anime.year}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopMechaAnimes;
