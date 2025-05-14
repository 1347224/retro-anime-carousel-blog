
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TopList = () => {
  const containerRef = useRef(null);
  
  const topMechaAnimes = [
    {
      rank: 1,
      title: "Neon Genesis Evangelion",
      year: "1995",
      image: "https://wallpapercave.com/wp/wp12710756.jpg",
      description: "Revolucionó el género mecha con su profundidad psicológica y su deconstrucción de los tropos del género. Sus EVAs son algunos de los diseños más icónicos del anime."
    },
    {
      rank: 2,
      title: "Mobile Suit Gundam",
      year: "1979",
      image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GKEH2G9XV-backdrop_wide",
      description: "La serie que estableció el realismo militar en el género mecha y dio inicio a una de las franquicias más extensas del anime."
    },
    {
      rank: 3,
      title: "Tengen Toppa Gurren Lagann",
      year: "2007",
      image: "https://wallpapercave.com/wp/NZjrHMj.jpg",
      description: "Una montaña rusa de acción sobre el top que celebra y lleva al extremo los tropos del género mecha con un estilo visual único."
    },
    {
      rank: 4,
      title: "Code Geass",
      year: "2006",
      image: "https://wallpapercave.com/wp/wp5887498.jpg",
      description: "Combina la política, estrategia y acción mecha en una narrativa compleja con uno de los finales más memorables del anime."
    },
    {
      rank: 5,
      title: "Macross Plus",
      year: "1994",
      image: "https://wallpapercave.com/wp/wp5042391.jpg",
      description: "Una obra maestra visual con increíbles secuencias de vuelo y transformación de mechas, complementada por la música de Yoko Kanno."
    }
  ];

  const topOpenings = [
    {
      rank: 1,
      title: "A Cruel Angel's Thesis",
      anime: "Neon Genesis Evangelion",
      year: "1995",
      description: "Un tema enérgico y pegadizo que contrasta con los temas oscuros de la serie. Se ha convertido en un himno de la cultura otaku."
    },
    {
      rank: 2,
      title: "Tank!",
      anime: "Cowboy Bebop",
      year: "1998",
      description: "Una explosiva introducción de jazz que captura perfectamente la esencia estilizada y cool de la serie."
    },
    {
      rank: 3,
      title: "Sobakasu",
      anime: "Rurouni Kenshin",
      year: "1996",
      description: "Un tema de J-rock enérgico que combina perfectamente con la acción de la serie y se volvió emblemático de la época."
    },
    {
      rank: 4,
      title: "Moonlight Densetsu",
      anime: "Sailor Moon",
      year: "1992",
      description: "Un opening que trasciende generaciones y ha sido versionado múltiples veces, manteniendo su encanto nostálgico."
    },
    {
      rank: 5,
      title: "Cha-La Head-Cha-La",
      anime: "Dragon Ball Z",
      year: "1989",
      description: "Posiblemente uno de los openings más reconocibles globalmente, que continúa siendo cantado por fans en todo el mundo."
    }
  ];

  const animesThatDefinedGeneration = [
    {
      rank: 1,
      title: "Dragon Ball Z",
      year: "1989-1996",
      impact: "Globalizó el anime y se convirtió en un fenómeno cultural mundial. Introdujo a millones de personas al medio.",
      legacy: "Sus personajes, frases y escenas de batalla son referencias culturales inmediatas en todo el mundo."
    },
    {
      rank: 2,
      title: "Sailor Moon",
      year: "1992-1997",
      impact: "Redefinió el género magical girl y presentó heroínas fuertes que resonaron con audiencias de todos los géneros.",
      legacy: "Su estética y temas continúan influyendo en el anime y la cultura pop actual."
    },
    {
      rank: 3,
      title: "Pokemon",
      year: "1997-presente",
      impact: "Trascendió el anime para convertirse en un fenómeno multimedia global que abarca juegos, cartas, juguetes y más.",
      legacy: "La franquicia más rentable de todos los tiempos, que continúa siendo relevante para nuevas generaciones."
    },
    {
      rank: 4,
      title: "Neon Genesis Evangelion",
      year: "1995-1996",
      impact: "Revolucionó la narrativa y estética del anime con su deconstrucción del género mecha y exploración psicológica.",
      legacy: "Sentó las bases para un anime más experimental y psicológicamente complejo."
    },
    {
      rank: 5,
      title: "Ghost in the Shell",
      year: "1995",
      impact: "Exploró temas filosóficos sobre la identidad humana en la era digital que siguen siendo relevantes.",
      legacy: "Su estética y temas influenciaron a toda una generación de creadores, incluyendo a los directores de Matrix."
    }
  ];

  return (
    <div className="min-h-screen theme-toplist text-foreground overflow-hidden">
      <Navigation />
      
      <div className="py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 retro-container"
        >
          <h1 className="font-pixel text-4xl md:text-5xl text-amber-400 mb-4">Top Lists</h1>
          <p className="text-lg max-w-2xl mx-auto font-vt323">Rankings temáticos de lo mejor del anime retro. Descubre joyas nostálgicas y revive clásicos que definieron toda una era dorada de la animación japonesa.</p>
        </motion.div>

        {/* Top Mecha Animes Section */}
        <section className="py-12 bg-gradient-to-r from-amber-900/20 via-background to-amber-900/20">
          <div className="retro-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-8 space-x-4"
            >
              <div className="h-1 flex-grow bg-gradient-to-r from-amber-400/20 to-amber-400"></div>
              <h2 className="font-pixel text-3xl text-amber-400 whitespace-nowrap">
                Top 5 Mecha Animes de los 90s
              </h2>
              <div className="h-1 flex-grow bg-gradient-to-l from-amber-400/20 to-amber-400"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {topMechaAnimes.map((anime, index) => (
                <motion.div
                  key={anime.rank}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="col-span-1"
                >
                  <Card className={`h-full border-2 ${
                    index === 0 
                      ? "border-yellow-400/70 bg-yellow-400/10" 
                      : index === 1 
                        ? "border-gray-400/70 bg-gray-400/10"
                        : index === 2
                          ? "border-amber-700/70 bg-amber-700/10"
                          : "border-indigo-600/30 bg-indigo-600/5"
                  }`}>
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                      <img 
                        src={anime.image} 
                        alt={anime.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <Badge className="font-bold text-lg bg-amber-400 hover:bg-amber-500 text-black">
                          #{anime.rank}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="font-silkscreen text-xl font-bold">
                        {anime.title}
                      </CardTitle>
                      <CardDescription>{anime.year}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-vt323">{anime.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Openings Section */}
        <section className="py-12">
          <div className="retro-container">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-8 space-x-4"
            >
              <div className="h-1 flex-grow bg-gradient-to-r from-red-500 to-red-500/20"></div>
              <h2 className="font-pixel text-3xl text-red-500 whitespace-nowrap">
                Los Openings Más Épicos
              </h2>
              <div className="h-1 flex-grow bg-gradient-to-l from-red-500 to-red-500/20"></div>
            </motion.div>
            
            <div className="space-y-4">
              {topOpenings.map((opening, index) => (
                <motion.div
                  key={opening.rank}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className={`overflow-hidden border-l-4 ${
                    index === 0 
                      ? "border-l-yellow-400" 
                      : index === 1 
                        ? "border-l-gray-400"
                        : index === 2
                          ? "border-l-amber-700"
                          : "border-l-red-500"
                  }`}>
                    <div className="md:flex">
                      <div className="md:w-1/12 bg-gradient-to-r from-red-900/20 to-background flex items-center justify-center py-4">
                        <span className="font-pixel text-4xl text-red-500">#{opening.rank}</span>
                      </div>
                      <div className="md:w-11/12 p-6">
                        <div className="md:flex justify-between items-start">
                          <div>
                            <h3 className="font-silkscreen text-2xl mb-1 font-bold">{opening.title}</h3>
                            <p className="text-muted-foreground font-vt323">
                              <span className="font-semibold">{opening.anime}</span> ({opening.year})
                            </p>
                          </div>
                          <Badge variant="outline" className="mt-2 md:mt-0">
                            Opening Theme
                          </Badge>
                        </div>
                        <p className="mt-4 font-vt323">{opening.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Animes That Defined A Generation */}
        <section className="py-12 bg-gradient-to-r from-purple-900/20 via-background to-purple-900/20">
          <div className="retro-container">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center mb-8 space-x-4"
            >
              <div className="h-1 flex-grow bg-gradient-to-r from-green-500/20 to-green-500"></div>
              <h2 className="font-pixel text-3xl text-green-500 whitespace-nowrap">
                Animes Que Definieron Una Generación
              </h2>
              <div className="h-1 flex-grow bg-gradient-to-l from-green-500/20 to-green-500"></div>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-green-900/20">
                      <th className="p-4 text-left font-pixel">Rank</th>
                      <th className="p-4 text-left font-pixel">Anime</th>
                      <th className="p-4 text-left font-pixel">Año</th>
                      <th className="p-4 text-left font-pixel hidden md:table-cell">Impacto</th>
                      <th className="p-4 text-left font-pixel hidden lg:table-cell">Legado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {animesThatDefinedGeneration.map((anime, index) => (
                      <motion.tr 
                        key={anime.rank}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`border-b border-border ${index % 2 === 0 ? 'bg-green-900/5' : ''}`}
                      >
                        <td className="p-4">
                          <Badge className={`font-bold ${
                            index === 0 
                              ? "bg-yellow-400 hover:bg-yellow-500 text-black" 
                              : index === 1 
                                ? "bg-gray-400 hover:bg-gray-500 text-black"
                                : index === 2
                                  ? "bg-amber-700 hover:bg-amber-800 text-white"
                                  : "bg-green-700 hover:bg-green-800"
                          }`}>
                            #{anime.rank}
                          </Badge>
                        </td>
                        <td className="p-4 font-silkscreen font-bold">{anime.title}</td>
                        <td className="p-4 text-muted-foreground font-vt323">{anime.year}</td>
                        <td className="p-4 hidden md:table-cell font-vt323">{anime.impact}</td>
                        <td className="p-4 hidden lg:table-cell font-vt323">{anime.legacy}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default TopList;
