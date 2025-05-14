
import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Search, Newspaper } from "lucide-react";
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
    image: "https://areajugones.sport.es/wp-content/uploads/2024/04/akira-remake-anime-1.jpg"
  },
  {
    id: 2,
    title: "Especial retrospectiva: 25 años de 'Cowboy Bebop'",
    excerpt: "La obra maestra de Shinichiro Watanabe celebra su 25 aniversario con eventos globales.",
    content: "Este año marca el 25 aniversario de Cowboy Bebop, la revolucionaria serie de Shinichiro Watanabe que redefinió lo que el anime podía ser para audiencias occidentales. Para celebrar este hito, se han anunciados eventos conmemorativos en todo el mundo, incluyendo proyecciones especiales, conciertos con la música de Yoko Kanno, y una exposición itinerante con arte original.\n\nAdemás, se ha anunciado una edición especial de aniversario en 4K UHD que incluirá material nunca antes visto y entrevistas exclusivas con el equipo creativo. Watanabe ha expresado su gratitud por el continuo apoyo a la serie y ha mencionado que, aunque no hay planes para una secuela, está trabajando en un nuevo proyecto que compartirá el espíritu innovador de Bebop.",
    date: "28/02/2025",
    readTime: "6 min",
    category: "Aniversarios",
    image: "https://geekzilla.tech/home/wp-content/uploads/2023/08/Cowboy-bebop-geekzillatech.png"
  },
  {
    id: 3,
    title: "La influencia del anime retro en las series modernas",
    excerpt: "Cómo los clásicos de los 90s y 2000s están moldeando la nueva generación de anime.",
    content: "Un análisis reciente del panorama actual del anime revela una tendencia creciente: la influencia directa de los clásicos de los 90s y 2000s en las producciones contemporáneas. Series como 'Chainsaw Man' y 'Jujutsu Kaisen' muestran claras inspiraciones estéticas de obras como 'Berserk' y 'Yu Yu Hakusho', mientras que 'Cyberpunk: Edgerunners' rinde homenaje visual a 'Akira' y 'Ghost in the Shell'.\n\nEsta influencia no se limita a lo visual. Estructuras narrativas, temas y arquetipos de personajes que fueron revolucionarios en la era dorada del anime están siendo reinterpretados para audiencias modernas. Directores contemporáneos como Atsushi Itagaki y Naoko Yamada han citado abiertamente estas influencias en entrevistas recientes.\n\n'El anime es cíclico,' explica el crítico cultural Takashi Mori. 'Lo que estamos viendo es una generación de creadores que crecieron con estas series retro y ahora están incorporando esas influencias en su trabajo, pero con sensibilidades modernas.'",
    date: "15/02/2025",
    readTime: "8 min",
    category: "Análisis",
    image: "https://preview.redd.it/how-popular-is-retro-anime-today-v0-ob86gt3ivqhe1.jpg?width=1080&crop=smart&auto=webp&s=328cd3d50623f77be3f365bd7731dc954269a47c"
  },
  {
    id: 4,
    title: "Descubierto piloto perdido de serie de anime de los 90s",
    excerpt: "Un episodio piloto nunca emitido de 'Neo Tokyo Hunters' ha sido encontrado y restaurado.",
    content: "En un hallazgo que ha emocionado a coleccionistas e historiadores del anime, un episodio piloto nunca antes visto de 'Neo Tokyo Hunters', una serie que nunca llegó a producirse, ha sido descubierto en los archivos de un antiguo estudio de animación en Tokio.\n\nEl piloto, creado en 1994 por el estudio Sunrise, muestra una visión cyberpunk de Tokio en 2050 y presenta personajes y conceptos que posteriormente influirían en otras producciones del estudio. Los 22 minutos de metraje han sido cuidadosamente restaurados y digitalizados.\n\nLa Fundación para la Preservación del Anime ha anunciado que el piloto será mostrado en varios festivales este año antes de ser lanzado online para el público. Críticos que han visto avances lo describen como 'un fascinante vistazo a una joya perdida' que 'claramente influenció obras posteriores como Ghost in the Shell: Stand Alone Complex'.",
    date: "03/01/2025",
    readTime: "5 min",
    category: "Descubrimientos",
    image: "https://diariodefriki.wordpress.com/wp-content/uploads/2021/07/vlcsnap-2021-07-25-18h37m22s810.png?w=1024"
  },
  {
    id: 5,
    title: "Estudio Ghibli abre exhibición permanente de animación clásica",
    excerpt: "El legendario estudio inaugura una muestra dedicada a técnicas de animación tradicional de los 80s y 90s.",
    content: "El Museo Ghibli en Mitaka, Tokio, ha inaugurado una nueva área permanente dedicada a mostrar y preservar las técnicas de animación tradicional que hicieron famoso al estudio durante las décadas de 1980 y 1990. La exhibición, titulada 'El Arte de la Animación Analógica', permite a los visitantes observar de cerca celdas originales, fondos pintados a mano y equipamiento utilizado para crear clásicos como 'Mi Vecino Totoro' y 'La Princesa Mononoke'.\n\nLa exhibición incluye estaciones interactivas donde los visitantes pueden experimentar con técnicas de animación tradicional bajo la guía de animadores veteranos del estudio. 'En una era dominada por la tecnología digital, es fundamental recordar y honrar las técnicas que dieron vida a tantas obras maestras,' comentó Toshio Suzuki, productor y cofundador del estudio.\n\nHayao Miyazaki, quien recientemente anunció su retiro definitivo de la dirección después de su última película, ha supervisado personalmente el diseño de esta nueva sección del museo para asegurar que refleje fielmente el proceso creativo que caracterizó la edad dorada del estudio.",
    date: "20/12/2024",
    readTime: "7 min",
    category: "Exposiciones",
    image: "https://mascultura.mx/wp-content/uploads/2020/05/Museo-Ghibli.jpg"
  },
  {
    id: 6,
    title: "Restauración masiva de anime de los 80s anunciada por Toei Animation",
    excerpt: "20 series clásicas serán restauradas en 4K utilizando inteligencia artificial y técnicas manuales.",
    content: "Toei Animation ha revelado un ambicioso proyecto de restauración que abarcará 20 series de anime clásicas de la década de 1980, incluyendo títulos emblemáticos como 'Saint Seiya', 'Dragon Ball' y 'Sailor Moon'. El proyecto, denominado 'Renacimiento Retro', utilizará una combinación de restauración manual meticulosa e inteligencia artificial para llevar estas series a la calidad 4K.\n\n'Hemos desarrollado un algoritmo de IA específicamente entrenado para reconocer y preservar el estilo artístico único de cada serie mientras mejora la calidad visual', explicó Katsuhiro Takagi, director del proyecto. 'Cada fotograma es posteriormente revisado por especialistas en restauración para asegurar la fidelidad a la obra original.'\n\nEl proyecto incluirá también la restauración de las bandas sonoras originales a partir de las cintas maestras, así como nuevos doblajes opcionales que respetarán las interpretaciones originales. Las primeras series restauradas estarán disponibles en plataformas digitales y ediciones físicas coleccionables a partir de mediados de 2025.",
    date: "05/11/2024",
    readTime: "6 min",
    category: "Restauraciones",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhH7QT0ucXAOIWu9afbGgmRUY3gPoudE9LZvBj2xQSu1OTUzMyPYy2vboEN18KV-75zoc9gI3pWx5YA3DxovuAD88MVOJv0QXF7L6gqaJHzRfVxFormYZb4JelrxVHthLliY9QqDjo7WzY/s1600/digimon-adventure-2.png"
  },
  {
    id: 7,
    title: "Festival RetroAnime anuncia gira mundial para 2025",
    excerpt: "El evento dedicado al anime clásico visitará 15 ciudades en 4 continentes.",
    content: "RetroAnime Festival, el evento itinerante dedicado exclusivamente a la celebración del anime de las décadas de 1980 a 2000, ha anunciado su primera gira mundial que abarcará 15 ciudades en Asia, Europa, América y Oceanía durante 2025.\n\nEl festival, que hasta ahora solo se había realizado en Japón, incluirá proyecciones de películas y series restauradas, paneles con creadores veteranos de la industria, exposiciones de arte original, conciertos con música icónica de anime y áreas de gaming retro con videojuegos basados en anime clásico.\n\n'El anime retro ha trascendido fronteras y generaciones, convirtiéndose en un fenómeno cultural global,' comentó Haruki Tanaka, director del festival. 'Esta gira es nuestra forma de celebrar este legado con fans de todo el mundo y presentar estas obras maestras a nuevas audiencias.'\n\nEntre las ciudades confirmadas se encuentran Tokio, Seúl, Hong Kong, Sydney, Los Ángeles, Ciudad de México, São Paulo, Londres, París y Barcelona. Las entradas saldrán a la venta a principios de 2025.",
    date: "18/10/2024",
    readTime: "5 min",
    category: "Eventos",
    image: "https://images.unsplash.com/photo-1516280906200-323121b2ca91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 8,
    title: "Documental 'La Revolución Anime' explora el impacto cultural de los 90s",
    excerpt: "Creadores y fans analizan cómo el anime de los 90s transformó la cultura global.",
    content: "El aclamado documentalista Ken Burns ha presentado su nuevo proyecto: 'La Revolución Anime', una serie documental de seis episodios que explora en profundidad cómo las series de anime de los años 90s transformaron no solo la industria de la animación, sino también la cultura popular global.\n\nLa serie cuenta con entrevistas a figuras legendarias como Hideaki Anno (Neon Genesis Evangelion), Shinichiro Watanabe (Cowboy Bebop), y Mamoru Oshii (Ghost in the Shell), así como a académicos, críticos culturales y fans que vivieron esta revolución en primera persona.\n\n'Lo que ocurrió en los 90s fue un fenómeno cultural tan profundo como el rock and roll en los 50s o el cine independiente americano en los 70s,' explica Burns. 'El anime se convirtió en un lenguaje visual y narrativo que cambió para siempre cómo contamos historias en medios visuales.'\n\nEl documental también examina cómo estas series abrieron las puertas a la globalización de la cultura japonesa y sentaron las bases para la aceptación mainstream del anime en Occidente. 'La Revolución Anime' se estrenará en festivales de cine este otoño antes de llegar a plataformas de streaming a principios de 2025.",
    date: "25/09/2024",
    readTime: "9 min",
    category: "Documentales",
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2025/03/untitled-design-2025-03-21t134632-665-2.jpg"
  },
  {
    id: 9,
    title: "Colección completa de 'Serial Experiments Lain' en vinilo anunciada",
    excerpt: "La icónica banda sonora de la serie cyberpunk recibirá una edición especial limitada.",
    content: "Los fans de 'Serial Experiments Lain', la revolucionaria serie anime cyberpunk de 1998, están de enhorabuena con el anuncio de una edición especial de su banda sonora completa en formato vinilo. La colección, titulada 'Lain: Restored Protocol', incluirá cuatro discos con todas las piezas musicales creadas por Reichi Nakaido y el grupo Boa, incluyendo la emblemática opening 'Duvet'.\n\nLa edición, limitada a 3,000 unidades numeradas, vendrá en un estuche de diseño especial que recrea elementos visuales de la serie y contendrá material gráfico inédito, notas del director Ryutaro Nakamura y un código para descargar la versión digital remasterizada.\n\n'Serial Experiments Lain fue una serie que trascendió su medio para convertirse en una profunda reflexión sobre la identidad en la era digital', comenta el productor de la colección. 'Su música, atmosférica y avant-garde, fue parte integral de esa experiencia y merece ser preservada y celebrada en el formato más fiel posible.'\n\nLas pre-órdenes para esta colección comenzarán el próximo mes, con envíos previstos para inicios de 2025.",
    date: "02/09/2024",
    readTime: "4 min",
    category: "Música",
    image: "https://wallpapercave.com/wp/wp14664153.jpg"
  },
  {
    id: 10,
    title: "Exposición 'Mechas: Del Papel a la Pantalla' llega al Museo de Arte Moderno",
    excerpt: "La muestra explora la evolución del diseño mecánico en el anime desde los 70s hasta la actualidad.",
    content: "El Museo de Arte Moderno de Nueva York inaugurará próximamente la exposición 'Mechas: Del Papel a la Pantalla', un recorrido por la evolución del diseño de robots gigantes en el anime desde los pioneros como 'Mazinger Z' hasta las interpretaciones contemporáneas del género.\n\nLa exposición, comisariada por el reconocido crítico de arte Takashi Murakami en colaboración con diseñadores veteranos de la industria del anime, presenta más de 200 piezas originales, incluyendo bocetos conceptuales, storyboards, celdas de animación y modelos tridimensionales utilizados en la producción de series icónicas como 'Mobile Suit Gundam', 'Neon Genesis Evangelion' y 'Code Geass'.\n\n'Los mechas no son simplemente máquinas de ficción; son expresiones artísticas que reflejan preocupaciones culturales, avances tecnológicos y cambios sociales en Japón y el mundo', explica Murakami. 'Esta exposición busca elevar estos diseños al lugar que merecen en la historia del arte contemporáneo.'\n\nLa muestra incluye también instalaciones interactivas que permiten a los visitantes explorar los procesos de diseño y animación, así como una sección que examina la influencia global de estos diseños en ámbitos como el cine occidental, los videojuegos y la robótica real. La exposición permanecerá abierta durante seis meses antes de iniciar una gira internacional.",
    date: "15/08/2024",
    readTime: "7 min",
    category: "Arte",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const Noticias = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const categories = [...new Set(newsItems.map(item => item.category))];
  
  const filteredNews = newsItems.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? news.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    if (filteredNews.length > 0) {
      setActiveIndex(prev => {
        if (prev === null || prev >= filteredNews.length) {
          return 0;
        }
        return prev;
      });
      
      const interval = setInterval(() => {
        setActiveIndex(prev => {
          if (prev === null || prev >= filteredNews.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [filteredNews]);

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden">
      <Navigation />
      
      {/* Hero header */}
      <motion.div 
        ref={headerRef}
        className="relative h-[70vh] overflow-hidden"
        style={{
          opacity: headerOpacity,
          scale: headerScale,
          y: headerY
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10"></div>
        <motion.div 
          className="absolute inset-0 bg-[url('https://giffiles.alphacoders.com/222/222787.gif')] bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-retro-purple/50 mix-blend-multiply"></div>
        </motion.div>
        <div className="retro-container relative z-20 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            className="font-pixel text-5xl md:text-7xl text-white mb-8 drop-shadow-[0_0_10px_rgba(155,135,245,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            NOTI<span className="text-blue-400">ANIME</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl text-white/90 font-vt323"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Mantente al día con las últimas novedades en el mundo del anime retro
          </motion.p>
          
          {/* Featured News Preview */}
          {activeIndex !== null && filteredNews.length > 0 && (
            <motion.div
              className="absolute bottom-8 left-4 right-4 md:left-auto md:right-auto md:w-96"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <AnimatePresence mode="wait">
                {filteredNews[activeIndex] && (
                  <motion.div
                    key={filteredNews[activeIndex].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black/50 backdrop-blur-md p-4 border border-blue-500/50 rounded-lg"
                  >
                    <Badge className="mb-2 bg-blue-500">{filteredNews[activeIndex].category}</Badge>
                    <h3 className="text-white font-bold mb-1 text-lg font-vt323">{filteredNews[activeIndex].title}</h3>
                    <Button
                      variant="link"
                      className="text-blue-400 p-0 h-auto font-silkscreen"
                      onClick={() => setSelectedNews(filteredNews[activeIndex])}
                    >
                      Leer más
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </motion.div>
      
      <div className="bg-gradient-to-br from-background via-blue-900/5 to-background">
        <div className="retro-container py-12">
          {/* Search and filter */}
          <div className="sticky top-16 z-40 py-4 bg-background/80 backdrop-blur-md rounded-lg">
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar noticias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-card/50 border-blue-500/30 focus:border-blue-500 font-vt323"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button 
                  variant={categoryFilter === null ? "default" : "outline"}
                  onClick={() => setCategoryFilter(null)}
                  className="h-10 font-silkscreen"
                >
                  Todos
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={categoryFilter === category ? "default" : "outline"}
                    onClick={() => setCategoryFilter(category)}
                    className="h-10 font-silkscreen"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={index === 0 ? "md:col-span-2" : ""}
                >
                  <Card 
                    className={`h-full border overflow-hidden flex flex-col hover:shadow-[0_0_30px_rgba(155,135,245,0.3)] transition-all duration-300 cursor-pointer ${
                      index === 0 
                        ? "border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-background" 
                        : "border-blue-500/30 bg-card/50"
                    }`}
                    onClick={() => setSelectedNews(news)}
                  >
                    <div className={`${index === 0 ? "h-64" : "h-56"} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                      <img 
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <Badge className="bg-blue-500 hover:bg-blue-600">
                          {news.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                        <Clock className="h-3 w-3 text-blue-300" />
                        <span className="text-xs text-blue-300">{news.readTime}</span>
                      </div>
                    </div>
                    <CardHeader className={`pb-2 ${index === 0 ? "space-y-2" : ""}`}>
                      <CardTitle className={`line-clamp-2 ${index === 0 ? "text-2xl" : "text-xl"} font-bold font-silkscreen`}>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-retro-purple">
                          {news.title}
                        </span>
                      </CardTitle>
                      <CardDescription className="flex items-center text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {news.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className={`${index === 0 ? "line-clamp-4" : "line-clamp-3"} font-vt323 text-lg`}>{news.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 font-silkscreen">
                        Leer artículo completo
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card/30 border border-blue-500/20 rounded-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Newspaper className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-silkscreen mb-2">No se encontraron noticias</h3>
                <p className="text-muted-foreground font-vt323">Intenta con otra búsqueda o elimina los filtros</p>
                <Button 
                  className="mt-6 bg-blue-600 hover:bg-blue-700 font-silkscreen"
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter(null);
                  }}
                >
                  Reiniciar búsqueda
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gradient-to-br from-card to-blue-900/10 max-w-4xl w-full rounded-lg overflow-hidden my-8 border border-blue-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 z-10"></div>
                {selectedNews && (
                  <motion.img 
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  />
                )}
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  {selectedNews && (
                    <Badge className="mb-3 bg-blue-500 hover:bg-blue-600">
                      {selectedNews.category}
                    </Badge>
                  )}
                  <h2 className="text-white text-2xl md:text-4xl font-bold font-pixel mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-retro-purple">
                      {selectedNews?.title}
                    </span>
                  </h2>
                  <div className="flex items-center space-x-4 text-xs text-white/80 mt-2">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {selectedNews?.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {selectedNews?.readTime} lectura
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                {selectedNews && selectedNews.content.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed font-vt323 text-lg">{paragraph}</p>
                ))}
              </div>
              <div className="p-6 border-t border-blue-500/20">
                <Button 
                  onClick={() => setSelectedNews(null)}
                  className="bg-blue-600 hover:bg-blue-700 font-silkscreen"
                >
                  Volver a noticias
                </Button>
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
