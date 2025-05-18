
import { motion } from "framer-motion";
import AnimeCarousel from "@/components/AnimeCarousel";

const SectionCarousels = () => {
  return (
    <>      
      {/* Anime Carousel */}
      <section className="py-12 theme-home">
        <div className="retro-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-pixel text-3xl md:text-4xl text-retro-purple mb-4">VIAJA AL PASADO</h2>
            <p className="text-lg max-w-2xl mx-auto font-vt323">Explora nuestra colección de animes retro icónicos que definieron toda una era.</p>
          </motion.div>
          
          <AnimeCarousel />
        </div>
      </section>
    </>
  );
};

export default SectionCarousels;
