
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CuriosidadCard from "@/components/CuriosidadCard";
import ShareDataForm from "@/components/ShareDataForm";
import { Button } from "@/components/ui/button";

interface Curiosidad {
  id: number;
  title: string;
  category: string;
  content: string;
  image: string;
  tags: string[];
}

const curiosidades: Curiosidad[] = [
  {
    id: 1,
    title: "Evangelion: Depresión Creativa",
    category: "Behind the Scenes",
    content: "Hideaki Anno, el creador de Neon Genesis Evangelion, concibió la serie mientras luchaba contra una severa depresión. Esta experiencia personal influyó profundamente en los temas de la serie, especialmente en las luchas internas del protagonista Shinji Ikari. La serie se convirtió en una forma de terapia para Anno, quien proyectó muchos de sus propios conflictos psicológicos en la narrativa. Esto explica el enfoque cada vez más introspectivo de la serie, culminando en los controvertidos episodios finales que se adentran en la psique de los personajes.",
    image: "https://giffiles.alphacoders.com/111/111891.gif",
    tags: ["evangelion", "hideaki-anno", "depresion"]
  },
  {
    id: 2,
    title: "Referencias Culturales en Evangelion",
    category: "Easter Eggs",
    content: "Neon Genesis Evangelion está repleto de simbolismo religioso y referencias culturales. Los nombres de los ángeles provienen del cristianismo y judaísmo. Los diseños de los EVA están inspirados en deidades japonesas y la mitología sintoísta. Incluso el famoso símbolo de NERV es una referencia a la hoja de higuera que usaron Adán y Eva. Anno ha mencionado que incluyó símbolos cristianos principalmente por su exotismo visual en Japón, más que por su significado teológico profundo, aunque esto no ha impedido décadas de análisis y teorías por parte de los fans.",
    image: "https://images6.alphacoders.com/691/thumb-1920-691066.jpg",
    tags: ["evangelion", "simbolismo", "religion"]
  },
  {
    id: 3,
    title: "El origen de los personajes de Dragon Ball",
    category: "Inspiración",
    content: "Akira Toriyama, el creador de Dragon Ball, basó muchos de sus personajes en la novela clásica china 'Viaje al Oeste'. Goku está inspirado en Sun Wukong (el Rey Mono), un ser sobrenatural con un báculo mágico que puede crecer y encogerse (como el Power Pole de Goku). El maestro Roshi se basa en el monje Tang Sanzang, mientras que Oolong y Yamcha tienen equivalentes en los compañeros del Rey Mono. Esta inspiración es evidente en las primeras aventuras de Dragon Ball, aunque la serie evolucionó después hacia un enfoque más orientado a las artes marciales y batallas.",
    image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/dragon-ball-significan-nombres-personajes-1858451.jpg?tf=3840x",
    tags: ["dragon-ball", "viaje-al-oeste", "akira-toriyama"]
  },
  {
    id: 4,
    title: "La evolución del diseño de Pikachu",
    category: "Diseño",
    content: "Pikachu, la mascota más reconocible de Pokémon, ha experimentado cambios significativos en su diseño desde su creación. El Pikachu original era notablemente más rechoncho, con mejillas más prominentes y un cuerpo más redondeado. Con el paso de los años, su diseño se ha estilizado, haciéndose más delgado y adorable. Ken Sugimori, el director de arte original de Pokémon, quiso que Pikachu fuera reconocible por su silueta única, lo que explica su distintiva cola en forma de rayo. El color amarillo brillante se eligió específicamente para destacar entre otros personajes y atraer a un público más joven.",
    image: "https://wallpapercave.com/uwp/uwp4520874.png",
    tags: ["pokemon", "pikachu", "diseño"]
  },
  {
    id: 5,
    title: "El origen accidental de Sailor Moon",
    category: "Creación",
    content: "Naoko Takeuchi, creadora de Sailor Moon, inicialmente había diseñado un manga muy diferente llamado 'Codename: Sailor V'. Su editor le sugirió expandir el concepto a un equipo de heroínas basadas en los planetas del sistema solar, lo que eventualmente se convirtió en Sailor Moon. Curiosamente, Takeuchi tenía formación en farmacia y química, lo que influyó en la precisión científica de algunos elementos de la serie. El éxito de Sailor Moon fue tan grande que revolucionó el género de magical girls, añadiendo elementos de acción y drama que no eran comunes en ese tipo de historias dirigidas a niñas.",
    image: "https://wallpapercave.com/wp/wp13601691.jpg",
    tags: ["sailor-moon", "naoko-takeuchi", "magical-girl"]
  },
  {
    id: 6,
    title: "La influencia de Studio Ghibli en Disney",
    category: "Influencia Cultural",
    content: "La relación entre Studio Ghibli y Disney ha sido significativa para ambas compañías. Durante los años 90, cuando Disney adquirió los derechos de distribución internacional de las películas de Ghibli, John Lasseter de Pixar (entonces parte de Disney) se declaró un gran admirador del trabajo de Miyazaki. Esta admiración influyó en el enfoque de Pixar hacia la narración visual y la creación de mundos detallados. Miyazaki, por su parte, ha citado a Disney como una influencia temprana, creando una relación circular de inspiración mutua entre estos gigantes de la animación de distintas culturas.",
    image: "https://fwmedia.fandomwire.com/wp-content/uploads/2024/10/01094230/studio-ghibli-disney-fantasia-2000-768x432.jpg",
    tags: ["ghibli", "disney", "miyazaki", "animacion"]
  }
];

const Curiosidades = () => {
  const [filteredCuriosidades, setFilteredCuriosidades] = useState(curiosidades);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isShareFormOpen, setIsShareFormOpen] = useState(false);
  
  const categories = ["all", ...Array.from(new Set(curiosidades.map(item => item.category)))];
  
  const handleFilter = (category: string) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredCuriosidades(curiosidades);
    } else {
      setFilteredCuriosidades(curiosidades.filter(item => item.category === category));
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
          <h1 className="font-pixel text-4xl md:text-5xl text-blue-500 mb-4">CURIOSIDADES DE ANIME</h1>
          <p className="text-lg max-w-2xl mx-auto font-vt323">Descubre datos fascinantes, secretos de producción y detalles ocultos de tus animes favoritos que quizás nunca habías escuchado.</p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => handleFilter(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`font-silkscreen ${
                activeFilter === category 
                  ? "bg-blue-500 hover:bg-blue-600" 
                  : "border-blue-500 text-blue-500"
              }`}
            >
              {category === "all" ? "TODAS" : category.toUpperCase()}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCuriosidades.map(item => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <CuriosidadCard
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  content={item.content}
                  image={item.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="font-pixel text-2xl text-blue-500 mb-4">¿CONOCES ALGUNA CURIOSIDAD?</h2>
          <p className="font-vt323 text-lg mb-6">¿Tienes algún dato interesante sobre anime retro que quieras compartir? ¡Escríbenos y podría aparecer en nuestra lista!</p>
          <Button 
            className="font-silkscreen bg-blue-500 hover:bg-blue-600"
            onClick={() => setIsShareFormOpen(true)}
          >COMPARTIR DATO</Button>
        </motion.div>
      </div>
      
      <ShareDataForm open={isShareFormOpen} onOpenChange={setIsShareFormOpen} />
      <Footer />
    </div>
  );
};

export default Curiosidades;
