
import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface AnimeReview {
  id: number;
  title: string;
  image: string;
  year: string;
  studio: string;
  director: string;
  rating: number;
  opinion: string;
  worthWatching: string;
}

const animeReviews: AnimeReview[] = [
  {
    id: 1,
    title: "Akira",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    year: "1988",
    studio: "Tokyo Movie Shinsha",
    director: "Katsuhiro Otomo",
    rating: 5,
    opinion: "Obra maestra del cyberpunk que revolucionó la animación japonesa. Sus temas sobre poder, corrupción y evolución humana siguen siendo relevantes.",
    worthWatching: "Absolutamente. Su animación sigue siendo impresionante y su influencia es innegable en la cultura popular actual."
  },
  {
    id: 2,
    title: "Ghost in the Shell",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    year: "1995",
    studio: "Production I.G",
    director: "Mamoru Oshii",
    rating: 5,
    opinion: "Reflexión filosófica sobre la identidad y conciencia en la era digital. Visualmente hipnótica con una banda sonora inolvidable.",
    worthWatching: "Sin duda. Sus preguntas sobre qué nos hace humanos son ahora más relevantes que nunca en la era de la IA."
  },
  {
    id: 3,
    title: "Saint Seiya",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    year: "1986-1989",
    studio: "Toei Animation",
    director: "Kōzō Morishita",
    rating: 4,
    opinion: "Serie pionera de aventuras mitológicas con personajes memorables. Aunque con ritmo irregular, su épica narrativa capturó a toda una generación.",
    worthWatching: "Sí, aunque hay que tener en cuenta su ritmo y animación de la época. Su legado cultural es innegable."
  }
];

const Resenas = () => {
  const [selectedReview, setSelectedReview] = useState<AnimeReview | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground">
      <Navigation />
      
      <div className="retro-container py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-pixel text-4xl md:text-5xl text-retro-purple mb-4">Reseñas de Anime Retro</h1>
          <p className="text-lg max-w-2xl mx-auto">Análisis profundos de series y películas clásicas que marcaron una época y definieron la estética del anime que conocemos hoy.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {animeReviews.map((review) => (
            <motion.div 
              key={review.id} 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
              onClick={() => setSelectedReview(review)}
            >
              <Card className="overflow-hidden border-2 border-retro-purple/30 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={review.image} 
                    alt={review.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-pixel text-retro-purple">{review.title}</CardTitle>
                  <CardDescription>{review.year} • {review.studio}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="line-clamp-3 text-sm">{review.opinion}</p>
                </CardContent>
                <CardFooter className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">Director: {review.director}</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedReview(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card max-w-4xl w-full rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={selectedReview.image}
                    alt={selectedReview.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="font-pixel text-2xl text-retro-purple">{selectedReview.title}</h2>
                    <button
                      onClick={() => setSelectedReview(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Año:</p>
                      <p>{selectedReview.year}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Estudio:</p>
                      <p>{selectedReview.studio}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Director:</p>
                      <p>{selectedReview.director}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Calificación:</p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < selectedReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Opinión Personal</h3>
                    <p>{selectedReview.opinion}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">¿Vale la pena verlo hoy?</h3>
                    <p>{selectedReview.worthWatching}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Resenas;
