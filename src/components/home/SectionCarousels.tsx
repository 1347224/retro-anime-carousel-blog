
import { motion } from "framer-motion";
import AnimeCarousel from "@/components/AnimeCarousel";

const SectionCarousels = () => {
  return (
    <section className="py-12 theme-home">
      <div className="max-w-7xl mx-auto">
        <AnimeCarousel />
      </div>
    </section>
  );
};

export default SectionCarousels;
