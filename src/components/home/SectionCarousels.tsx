
import { motion } from "framer-motion";
import AnimeCarousel from "@/components/AnimeCarousel";

const SectionCarousels = () => {
  return (
    <>      
      {/* Anime Carousel */}
      <section className="py-12 theme-home">
        <div className="retro-container">
          <AnimeCarousel />
        </div>
      </section>
    </>
  );
};

export default SectionCarousels;
