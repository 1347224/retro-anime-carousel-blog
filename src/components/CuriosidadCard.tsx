
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

interface CuriosidadCardProps {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
}

const CuriosidadCard = ({ id, title, category, content, image }: CuriosidadCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div 
      layout
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer relative"
    >
      <Card 
        className="overflow-hidden border-2 border-blue-500/30 h-full flex flex-col"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="h-48 overflow-hidden">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-2 left-2 bg-blue-500/80 text-white px-2 py-1 text-xs rounded font-silkscreen">
            {category}
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="font-silkscreen font-bold text-blue-500 text-base md:text-lg lg:text-xl line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col">
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: expanded ? 1 : 0.7,
              height: expanded ? "auto" : "80px" 
            }}
            className={`overflow-hidden font-vt323 text-lg ${!expanded && "line-clamp-3"} flex-grow`}
          >
            <p>{content}</p>
          </motion.div>
          
          <div className="flex justify-between items-center mt-4">
            {!expanded && content.length > 150 && (
              <motion.span 
                className="text-sm text-blue-400 hover:underline font-silkscreen inline-block"
                whileHover={{ scale: 1.05 }}
              >
                LEER MÁS
              </motion.span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CuriosidadCard;
