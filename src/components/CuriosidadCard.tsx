
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
      className="cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <Card className="overflow-hidden border-2 border-blue-500/30">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-2 left-2 bg-blue-500/80 text-white px-2 py-1 text-xs rounded font-silkscreen">
            {category}
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="font-pixel text-blue-500">{title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: expanded ? 1 : 0.7,
              height: expanded ? "auto" : "80px" 
            }}
            className={`overflow-hidden font-vt323 text-lg ${!expanded && "line-clamp-3"}`}
          >
            <p>{content}</p>
          </motion.div>
          
          {!expanded && content.length > 150 && (
            <motion.button 
              className="text-sm text-blue-400 mt-2 hover:underline font-silkscreen"
              whileHover={{ scale: 1.05 }}
            >
              LEER MÁS
            </motion.button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CuriosidadCard;
