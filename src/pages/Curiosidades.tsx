
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, BookOpen, Sparkles } from "lucide-react";

const Curiosidades = () => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-purple-900/10 text-foreground">
      <Navigation />
      
      <div className="retro-container py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-pixel text-4xl md:text-5xl bg-gradient-to-r from-blue-600 via-retro-purple to-pink-500 bg-clip-text text-transparent mb-4">Curiosidades y Datos Ocultos</h1>
          <p className="text-lg max-w-2xl mx-auto">Descubre los secretos mejor guardados detrás de tus animes retro favoritos, referencias culturales y easter eggs que quizás nunca notaste.</p>
        </motion.div>

        <Tabs defaultValue="behind-scenes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="behind-scenes" className="flex items-center gap-2">
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">Behind the Scenes</span>
            </TabsTrigger>
            <TabsTrigger value="comparisons" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Manga vs Anime</span>
            </TabsTrigger>
            <TabsTrigger value="easter-eggs" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Easter Eggs</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Behind the Scenes */}
          <TabsContent value="behind-scenes">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="h-full border-2 border-blue-600/30 overflow-hidden bg-gradient-to-br from-card to-blue-900/10">
                  <CardHeader>
                    <CardTitle className="font-pixel text-blue-500">Dragon Ball Z: Sangre Azul</CardTitle>
                    <CardDescription>Censura Creativa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>¿Sabías que en algunas versiones internacionales de Dragon Ball Z, la sangre fue coloreada de azul o negro para evitar problemas de censura? Esta decisión provocó confusión entre los fans, que bromeaban sobre si los saiyajin tenían sangre de color diferente.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="h-full border-2 border-blue-600/30 overflow-hidden bg-gradient-to-br from-card to-blue-900/10">
                  <CardHeader>
                    <CardTitle className="font-pixel text-blue-500">Evangelion: Depresión Creativa</CardTitle>
                    <CardDescription>El estado mental detrás de una obra maestra</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Hideaki Anno, creador de Neon Genesis Evangelion, creó la serie mientras luchaba contra una severa depresión. Muchos de los temas oscuros y psicológicos de la serie reflejan su propio estado mental, y la producción se volvió más experimental y surrealista a medida que la serie avanzaba.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="h-full border-2 border-blue-600/30 overflow-hidden bg-gradient-to-br from-card to-blue-900/10">
                  <CardHeader>
                    <CardTitle className="font-pixel text-blue-500">Pokémon: Episodio Prohibido</CardTitle>
                    <CardDescription>El incidente de las convulsiones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>El episodio 38 de Pokémon, "Dennō Senshi Porygon", fue prohibido mundialmente después de que más de 600 niños japoneses fueran hospitalizados con síntomas similares a la epilepsia tras ver una secuencia con destellos rojos y azules. Este incidente llevó a revisar los estándares de animación en todo el mundo.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="h-full border-2 border-blue-600/30 overflow-hidden bg-gradient-to-br from-card to-blue-900/10">
                  <CardHeader>
                    <CardTitle className="font-pixel text-blue-500">Cowboy Bebop: Homenajes Cinematográficos</CardTitle>
                    <CardDescription>Un collage de referencias</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>El director Shinichirō Watanabe llenó Cowboy Bebop de referencias a películas clásicas. Cada episodio contiene homenajes a obras de Bruce Lee, Alien, filmes noir, westerns y numerosas películas que Watanabe admiraba, creando un tapiz cultural que contribuyó a su atractivo internacional.</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Manga vs Anime Comparisons */}
          <TabsContent value="comparisons">
            <div className="space-y-8">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="overflow-hidden border-2 border-green-600/30 bg-gradient-to-br from-card to-green-900/10">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-r from-green-900/20 to-card p-8 flex flex-col justify-center">
                      <h3 className="font-pixel text-xl text-green-500 mb-4">Akira: Un Manga Monumental</h3>
                      <p className="text-sm">El manga de Akira comprende más de 2000 páginas y una historia mucho más compleja que lo que se pudo incluir en la película de 1988. Katsuhiro Otomo tuvo que condensar drásticamente su propia obra para la adaptación cinematográfica.</p>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h4 className="font-semibold mb-4 text-lg">Principales diferencias:</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>La película termina aproximadamente a mitad del arco narrativo del manga.</li>
                        <li>Los personajes de Kaori, Chiyoko y el Coronel tienen roles mucho más desarrollados en el manga.</li>
                        <li>El manga explora extensamente las facciones políticas y religiosas que se forman tras el despertar de Akira.</li>
                        <li>La transformación final de Tetsuo es mucho más gradual y aterradora en el manga, extendiéndose a lo largo de varios volúmenes.</li>
                        <li>El manga incluye una parte final post-apocalíptica ambientada en Neo-Tokyo destruida que nunca apareció en la película.</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="overflow-hidden border-2 border-green-600/30 bg-gradient-to-br from-card to-green-900/10">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-r from-green-900/20 to-card p-8 flex flex-col justify-center">
                      <h3 className="font-pixel text-xl text-green-500 mb-4">Sailor Moon: Censura y Adaptación</h3>
                      <p className="text-sm">La versión occidental de Sailor Moon sufrió numerosos cambios respecto al manga y anime original japonés, incluyendo la eliminación de personajes LGBT+ y la suavización de temas considerados adultos.</p>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h4 className="font-semibold mb-4 text-lg">Cambios controversiales:</h4>
                      <ul className="space-y-2 list-disc pl-5">
                        <li>La pareja homosexual formada por Sailor Uranus (Haruka) y Sailor Neptune (Michiru) fue presentada como "primas" en la versión occidental.</li>
                        <li>Zoisite, villano masculino, fue cambiado a mujer en el doblaje para evitar mostrar su relación romántica con Kunzite.</li>
                        <li>Fish Eye, personaje masculino que se vestía como mujer, fue presentado directamente como un personaje femenino.</li>
                        <li>Numerosas escenas de transformación fueron recortadas o censuradas por mostrar siluetas desnudas.</li>
                        <li>El manga original de Naoko Takeuchi contiene temas más oscuros y maduros que fueron suavizados tanto en el anime japonés como, especialmente, en las versiones occidentales.</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          
          {/* Easter Eggs */}
          <TabsContent value="easter-eggs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="h-full border-2 border-pink-600/30 overflow-hidden bg-gradient-to-br from-card to-pink-900/10">
                  <CardHeader>
                    <CardTitle className="font-pixel text-pink-500">Universo Compartido</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>En el universo de Studio Ghibli, aparecen personajes cruzando entre diferentes películas. El más notable es el "Totoro de peluche" que aparece en "El viaje de Chihiro" y otras producciones como un guiño al clásico de Miyazaki.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="h-full border-2 border-pink-600/30 overflow-hidden bg-gradient-to-br from-card to-pink-900/10">
                  <CardHeader>
                    <CardTitle className="font-pixel text-pink-500">Referencia a Star Wars</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>En "Cowboy Bebop", hay una nave llamada "Red Tail" que es una clara referencia al "Halcón Milenario" de Star Wars. Además, en varios episodios aparecen homenajes visuales a la saga de George Lucas.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="h-full border-2 border-pink-600/30 overflow-hidden bg-gradient-to-br from-card to-pink-900/10">
                  <CardHeader>
                    <CardTitle className="font-pixel text-pink-500">Cameo de Nausicaä</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>En "Porco Rosso", hay una escena donde se puede ver un avión con la silueta de Nausicaä volando en su planeador, conectando así dos mundos diferentes de Miyazaki en un sutil homenaje.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="md:col-span-3"
              >
                <Card className="border-2 border-pink-600/30 overflow-hidden bg-gradient-to-br from-card to-pink-900/10">
                  <CardHeader>
                    <CardTitle className="font-pixel text-pink-500">Referencias Culturales en Evangelion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Neon Genesis Evangelion está repleto de simbolismo religioso y referencias culturales que muchos espectadores pueden pasar por alto:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Referencias Religiosas:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Los Ángeles toman nombres de ángeles bíblicos como Sachiel, Ramiel y Arael.</li>
                          <li>La organización SEELE utiliza símbolos derivados de textos judeo-cristianos y cabalísticos.</li>
                          <li>La "Lanza de Longinus" hace referencia a la lanza que hirió a Jesús durante la crucifixión.</li>
                          <li>El "Mar de LCL" y el "Huevo de Lilith" tienen conexiones con el mito de la creación en varias tradiciones.</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Referencias Literarias y Filosóficas:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>El título del episodio "The Hedgehog's Dilemma" se refiere a un concepto de Schopenhauer sobre las relaciones humanas.</li>
                          <li>Los "Manuscritos del Mar Muerto" en la serie son una referencia a textos históricos reales.</li>
                          <li>El "Proyecto de Complementación Humana" tiene vínculos con las ideas de Nietzsche sobre la evolución humana.</li>
                          <li>Las escenas del tren con Shinji y Gendo recuerdan a aspectos del existencialismo de Sartre.</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Curiosidades;
