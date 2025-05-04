import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Calendar, Clock, Tag, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "¡Anunciado nuevo anime basado en 'Akira' para 2026!",
    excerpt: "El legendario manga de Katsuhiro Otomo recibirá una adaptación completa en forma de serie.",
    content: "Después de décadas de espera, los fans de Akira recibirán finalmente una adaptación completa del manga en forma de serie anime. El proyecto, anunciado oficialmente en el Anime Expo de este año, promete adaptación fiel al material original, abarcando toda la extensa historia que no pudo incluirse en la película de 1988. Katsuhiro Otomo, creador original, estará involucrado como supervisor creativo.\n\nLa serie constará de 24 episodios divididos en dos temporadas y se espera que comience su emisión en 2026, coincidiendo con el 40 aniversario de la publicación del manga. El estudio de animación a cargo será revelado en los próximos meses.",
    date: "12/03/2025",
    readTime: "4 min",
    category: "Anuncios",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Especial retrospectiva: 25 años de 'Cowboy Bebop'",
    excerpt: "La obra maestra de Shinichiro Watanabe celebra su 25 aniversario con eventos globales.",
    content: "Este año marca el 25 aniversario de Cowboy Bebop, la revolucionaria serie de Shinichiro Watanabe que redefinió lo que el anime podía ser para audiencias occidentales. Para celebrar este hito, se han anunciados eventos conmemorativos en todo el mundo, incluyendo proyecciones especiales, conciertos con la música de Yoko Kanno, y una exposición itinerante con arte original.\n\nAdemás, se ha anunciado una edición especial de aniversario en 4K UHD que incluirá material nunca antes visto y entrevistas exclusivas con el equipo creativo. Watanabe ha expresado su gratitud por el continuo apoyo a la serie y ha mencionado que, aunque no hay planes para una secuela, está trabajando en un nuevo proyecto que compartirá el espíritu innovador de Bebop.",
    date: "28/02/2025",
    readTime: "6 min",
    category: "Aniversarios",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "La influencia del anime retro en las series modernas",
    excerpt: "Cómo los clásicos de los 90s y 2000s están moldeando la nueva generación de anime.",
    content: "Un análisis reciente del panorama actual del anime revela una tendencia creciente: la influencia directa de los clásicos de los 90s y 2000s en las producciones contemporáneas. Series como 'Chainsaw Man' y 'Jujutsu Kaisen' muestran claras inspiraciones estéticas de obras como 'Berserk' y 'Yu Yu Hakusho', mientras que 'Cyberpunk: Edgerunners' rinde homenaje visual a 'Akira' y 'Ghost in the Shell'.\n\nEsta influencia no se limita a lo visual. Estructuras narrativas, temas y arquetipos de personajes que fueron revolucionarios en la era dorada del anime están siendo reinterpretados para audiencias modernas. Directores contemporáneos como Atsushi Itagaki y Naoko Yamada han citado abiertamente estas influencias en entrevistas recientes.\n\n'El anime es cíclico,' explica el crítico cultural Takashi Mori. 'Lo que estamos viendo es una generación de creadores que crecieron con estas series retro y ahora están incorporando esas influencias en su trabajo, pero con sensibilidades modernas.'",
    date: "15/02/2025",
    readTime: "8 min",
    category: "Análisis",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 4,
    title: "Descubierto piloto perdido de serie de anime de los 90s",
    excerpt: "Un episodio piloto nunca emitido de 'Neo Tokyo Hunters' ha sido encontrado y restaurado.",
    content: "En un hallazgo que ha emocionado a coleccionistas y historiadores del anime, un episodio piloto nunca antes visto de 'Neo Tokyo Hunters', una serie que nunca llegó a producirse, ha sido descubierto en los archivos de un antiguo estudio de animación en Tokio.\n\nEl piloto, creado en 1994 por el estudio Sunrise, muestra una visión cyberpunk de Tokio en 2050 y presenta personajes y conceptos que posteriormente influirían en otras producciones del estudio. Los 22 minutos de metraje han sido cuidadosamente restaurados y digitalizados.\n\nLa Fundación para la Preservación del Anime ha anunciado que el piloto será mostrado en varios festivales este año antes de ser lanzado online para el público. Críticos que han visto avances lo describen como 'un fascinante vistazo a una joya perdida' que 'claramente influenció obras posteriores como Ghost in the Shell: Stand Alone Complex'.",
    date: "03/01/2025",
    readTime: "5 min",
    category: "Descubrimientos",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const Noticias = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const categories = [...new Set(newsItems.map(item => item.category))];
  
  const filteredNews = newsItems.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? news.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-900/5 to-background text-foreground">
      <Navigation />
      
      <div className="retro-container py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-pixel text-4xl md:text-5xl text-blue-500 mb-4 flex items-center justify-center">
            <Newspaper className="mr-2 h-8 w-8" />
            Noticias y Actualidad
          </h1>
          <p className="text-lg max-w-2xl mx-auto">Las últimas novedades sobre el mundo del anime retro: reediciones, aniversarios, eventos y más.</p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar noticias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button 
              variant={categoryFilter === null ? "default" : "outline"}
              onClick={() => setCategoryFilter(null)}
              className="h-10"
            >
              Todos
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={categoryFilter === category ? "default" : "outline"}
                onClick={() => setCategoryFilter(category)}
                className="h-10"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full border border-blue-500/30 overflow-hidden flex flex-col hover:border-blue-500/60 transition-colors cursor-pointer"
                  onClick={() => setSelectedNews(news)}
                >
                  <div className="h-56 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    <img 
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2">
                      <Badge className="bg-blue-500 hover:bg-blue-600">
                        {news.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold line-clamp-2">{news.title}</CardTitle>
                    <CardDescription className="flex items-center space-x-4 text-xs">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {news.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {news.readTime} lectura
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="line-clamp-3">{news.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" className="w-full">Leer más</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl mb-2">No se encontraron noticias</h3>
            <p className="text-muted-foreground">Intenta con otra búsqueda o elimina los filtros</p>
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card max-w-4xl w-full rounded-lg overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img 
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 z-20 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <Badge className="mb-3 bg-blue-500 hover:bg-blue-600">
                    {selectedNews.category}
                  </Badge>
                  <h2 className="text-white text-2xl md:text-3xl font-bold">{selectedNews.title}</h2>
                  <div className="flex items-center space-x-4 text-xs text-white/80 mt-2">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {selectedNews.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {selectedNews.readTime} lectura
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                {selectedNews.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))}
              </div>
              <div className="p-6 border-t border-border">
                <Button onClick={() => setSelectedNews(null)}>Volver a noticias</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Noticias;
