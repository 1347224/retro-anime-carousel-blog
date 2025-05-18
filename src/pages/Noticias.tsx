
import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";

const Noticias = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const noticias = [
    {
      id: 1,
      title: "Nuevo anime de Evangelion anunciado para 2026",
      image: "https://wallpapercave.com/wp/wp8493329.jpg",
      date: "Mayo 15, 2025",
      excerpt: "Studio Khara ha confirmado una nueva serie centrada en el universo de Evangelion que explorará acontecimientos después de Thrice Upon a Time.",
      category: "Anuncios",
      featured: true
    },
    {
      id: 2,
      title: "Studio Ghibli abrirá museo virtual en metaverso",
      image: "https://wallpapercave.com/wp/wp2055835.jpg",
      date: "Mayo 10, 2025",
      excerpt: "Los fans podrán visitar recreaciones de los mundos de Miyazaki en esta experiencia inmersiva que estará disponible a partir del próximo mes.",
      category: "Tecnología",
      featured: true
    },
    {
      id: 3,
      title: "Se confirma adaptación live-action de Sailor Moon",
      image: "https://wallpapercave.com/wp/wp9697349.jpg",
      date: "Mayo 5, 2025",
      excerpt: "Netflix producirá la primera adaptación occidental de la icónica serie de los 90 con un elenco internacional y efectos especiales de última generación.",
      category: "Adaptaciones",
      featured: false
    },
    {
      id: 4,
      title: "Cowboy Bebop celebrará 30 años con concierto sinfónico mundial",
      image: "https://wallpapercave.com/wp/wp2422869.jpg",
      date: "Abril 28, 2025",
      excerpt: "Yoko Kanno dirigirá una orquesta en vivo que interpretará las piezas icónicas de la serie en un evento que se transmitirá globalmente.",
      category: "Eventos",
      featured: false
    },
    {
      id: 5,
      title: "Ranma 1/2 regresará con una nueva temporada en 2026",
      image: "https://wallpapercave.com/wp/AfXI1CZ.jpg",
      date: "Abril 20, 2025",
      excerpt: "Rumiko Takahashi supervisará la nueva adaptación que continuará las aventuras de Ranma con animación moderna pero respetando el estilo clásico.",
      category: "Anuncios",
      featured: false
    },
    {
      id: 6,
      title: "Descubren storyboards originales perdidos de Akira",
      image: "https://wallpapercave.com/wp/wp4635378.jpg",
      date: "Abril 15, 2025",
      excerpt: "Un coleccionista japonés encontró bocetos originales de Katsuhiro Otomo que revelan escenas eliminadas de la película de culto de 1988.",
      category: "Hallazgos",
      featured: false
    },
    {
      id: 7,
      title: "Ghost in the Shell tendrá una nueva serie antológica",
      image: "https://wallpapercave.com/wp/wp1843939.jpg",
      date: "Abril 8, 2025",
      excerpt: "Production I.G anuncia 'Ghost Stories', una serie de episodios independientes situados en el universo de GITS con diferentes estilos de animación.",
      category: "Anuncios",
      featured: false
    }
  ];

  const filteredNoticias = noticias.filter(noticia => 
    noticia.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    noticia.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    noticia.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const featuredNews = filteredNoticias.filter(noticia => noticia.featured);
  const regularNews = filteredNoticias.filter(noticia => !noticia.featured);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-indigo-900/30 to-background">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-[url('https://wallpapercave.com/wp/wp8493329.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="retro-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-pixel text-4xl md:text-5xl text-retro-purple mb-4">NOTICIAS DEL MUNDO RETRO</h1>
            <p className="text-lg max-w-2xl mx-auto font-vt323">Mantente al día con las últimas novedades, anuncios y eventos relacionados con el anime clásico y las nuevas producciones inspiradas en la época dorada.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar noticias por título, categoría..."
                className="pl-10 font-vt323 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News Section */}
      {featuredNews.length > 0 && (
        <section className="py-12">
          <div className="retro-container">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-pixel text-2xl md:text-3xl text-retro-purple mb-8"
            >
              NOTICIAS DESTACADAS
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((noticia, index) => (
                <motion.div
                  key={noticia.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="col-span-1"
                >
                  <Card className="overflow-hidden border-2 border-retro-purple/30 h-full flex flex-col">
                    <div className="h-64 overflow-hidden relative">
                      <motion.img 
                        src={noticia.image} 
                        alt={noticia.title} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <Badge className="bg-retro-purple hover:bg-retro-purple/80">{noticia.category}</Badge>
                        <Badge variant="outline" className="bg-black/50 backdrop-blur-sm">{noticia.date}</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-silkscreen text-retro-purple text-xl md:text-2xl">{noticia.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="font-vt323 text-lg">{noticia.excerpt}</p>
                    </CardContent>
                    <div className="p-4 pt-0">
                      <Button variant="outline" className="w-full border-retro-purple/30 text-retro-purple hover:bg-retro-purple/10 font-silkscreen">
                        LEER MÁS
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="py-12 bg-gradient-to-r from-indigo-900/10 via-background to-indigo-900/10">
        <div className="retro-container">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-pixel text-2xl md:text-3xl text-foreground mb-8"
          >
            TODAS LAS NOTICIAS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.length > 0 ? (
              regularNews.map((noticia, index) => (
                <motion.div
                  key={noticia.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden border border-border h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <motion.img 
                        src={noticia.image} 
                        alt={noticia.title} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{noticia.category}</Badge>
                        <CardDescription>{noticia.date}</CardDescription>
                      </div>
                      <CardTitle className="font-silkscreen text-lg">{noticia.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="font-vt323">{noticia.excerpt}</p>
                    </CardContent>
                    <div className="p-4 pt-0">
                      <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-foreground font-silkscreen text-sm">
                        LEER ARTÍCULO COMPLETO
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl font-vt323">No se encontraron noticias que coincidan con tu búsqueda.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchTerm("")}
                >
                  Mostrar todas las noticias
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Noticias;
